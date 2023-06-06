const puppeteer = require('puppeteer');

const botToken = 'telegrambot:token'; // telegram_token du bot 
const chatId = '0000111122'; // telegram_id de la personne à qui le bot envoie un message
const url_prefecture = "https://pprdv.interieur.gouv.fr/booking/create/989/1"

async function telegram(message) {
  const telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
  await fetch(telegramURL);
}


async function checkAppointments() {
  const browser = await puppeteer.launch({headless: "new"});
  const page = await browser.newPage();
  
  // Disable CORS restrictions
  //  await page.setBypassCSP(true);
  
  // Navigate to the webpage
  await page.goto(url_prefecture);
  
  // Fill in form and submit
  const optionElements = await page.$$('input[type="radio"]');
  const randomOption = optionElements[Math.floor(Math.random() * optionElements.length)];
  await randomOption.click();
  await Promise.all([
    page.waitForNavigation(),
    page.click('input[name="nextButton"]')
  ]);
  
  // Check result message
  const resultMessageElement = await page.$('form[name="create"]');
  const resultMessage = await page.evaluate(element => element.textContent.trim(), resultMessageElement);
  
  if (resultMessage.includes("Il n'existe plus de plage horaire libre")) {
    // No appointment available, retry after delay
    let message = 'Pas de RDV, je rééssaye';
    console.log(message);
    //    telegram(message);
   
    await page.waitForTimeout(35000 + Math.floor(Math.random() * 5000));
    await checkAppointments();
  } else {
    // Appointment available, send Telegram message
    console.log('Rdv dispo!');
    message = 'RDV DISPO! Vite se connecter!!';
    telegram(message);
    // Send Telegram message here
  }
  
  await browser.close();
}

checkAppointments();
