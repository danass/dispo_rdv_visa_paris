## Fonction 

Ce script Node.js vérifie toutes les 35 secondes si un nouveau rendez-vous pour votre retrait de visa est disponible. Si un rendez-vous est disponible, vous recevrez une notification sur Telegram sur votre téléphone et le script s'arrêtera. Il vous appartiendra ensuite de vous connecter pour prendre et choisir le rendez-vous.

## Prérequis

1. Installer Node.js et puppetteer

`npm install puppeteer`

2. Créer un bot Telegram : [https://t.me/botfather](https://t.me/botfather) et obtenir le jeton du bot (bot_token).
4. Envoyer un premier message depuis Telegram au bot afin d'autoriser la communication entre le bot et vous.
5. Obtenir votre identifiant Telegram (telegram_id du destinataire)  (10 chiffres).
6. Dans le code `rdv.js`, remplacer l'identifiant du destinataire et le jeton du bot.
7. Exécuter le script.

## Utilisation

`node rdv.js`


