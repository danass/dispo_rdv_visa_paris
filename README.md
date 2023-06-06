## Fonction 

Ce script Node.js vérifie toutes les 35 secondes si un nouveau rendez-vous pour votre retrait de visa est disponible. Si un rendez-vous est disponible, vous recevrez une notification sur Telegram sur votre téléphone et le script s'arrêtera. Il vous appartiendra ensuite de vous connecter pour prendre et choisir le rendez-vous.

## Utilisation

`node rdv.js`

## Prérequis

1. Installer Node.js.
2. Créer un bot Telegram : [https://t.me/botfather](https://t.me/botfather) et obtenir le jeton du bot (bot_token).
3. Envoyer un premier message du bot à votre destinataire (vous même par exemple) depuis Telegram.
4. Obtenir l'identifiant Telegram (telegram_id) du destinataire (10 chiffres).
5. Dans le code `rdv.js`, remplacer l'identifiant du destinataire et le jeton du bot.
6. Exécuter le script.
