const { ActivityType } = require('discord.js');
const config = require('../config/config');
const logger = require('../utils/logger');

module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    // Log that the bot is online
    logger.info(`Ready! Logged in as ${client.user.tag}`);
    logger.info('ModMail bot created by Izzy | Coders Planet');

    // Set bot presence
    client.user.setPresence({
      activities: [
        {
          name: 'Having a snow fight with Teucer',
          type: ActivityType.Playing
        }
      ],
      status: 'online'
    });

    // Debug presence every 15 seconds
    setInterval(() => {
      logger.info(
        `Presence: ${client.user?.presence?.status} | Ready: ${client.isReady()}`
      );
    }, 15000);

    // Check required environment variables
    const requiredEnvVars = [
      'TOKEN',
      'MONGODB_URI',
      'CLIENT_ID'
    ];

    const missingEnvVars = requiredEnvVars.filter(
      varName => !process.env[varName]
    );

    if (missingEnvVars.length > 0) {
      logger.warn(
        `Missing required environment variables: ${missingEnvVars.join(', ')}`
      );
    }

    // Display banner
    console.log(`
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   ModMail Bot is now online!                                  ║
║                                                               ║
║   Created by: Izzy | Coders Planet                            ║
║   Discord: https://discord.gg/codersplanet                    ║
║                                                               ║
║   Serving ${client.guilds.cache.size} servers and ${client.users.cache.size} users                      ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
    `);
  }
};
