Rocket.Chat BOT , up and running in 30 seconds
==============================================

1. Click **Remix your own** , top right.

2. edit `.env` file with your own server information:

```
Environment Config

# the URL of your Rocket.Chat server
URL=my.server.com

# the bot's user and password - make sure user 
# has 'bot' role on the server, ask your 
# administrator if necessary
USER=foxbot
PASS=mypassword

# name that the bot should respond to
BOT=foxbot

# set to true if the server requires SSL  (https://)
SSL=true

# the room(s) in which the bot should operate
ROOMS=general

# note: .env is a shell file so there can't be spaces around =
```

3. Logon to your Rocket.Chat server and start talking to the BOT!

![Conversion with the sample BOT in a Rocket.Chat session](https://cdn.glitch.com/57e18e26-9ce7-4609-9d3b-a7c4c3f500a7%2FScreen%20Shot%202018-04-12%20at%201.24.18%20AM.png?1523550567405)

Other suggestions
=================

a. Edit `reply.js` with your own chatbot conversation.

b. Study the code to see how it works.

c. Get more information on advanced bot building at the [Rocket.Chat Nodejs SDK](https://github.com/RocketChat/Rocket.Chat.js.SDK).

Find out more [about Glitch](https://glitch.com/about).
