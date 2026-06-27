const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config');

const responses = [
    "Yes.",
    "No.",
    "Maybe.",
    "I'm not sure.",
    "Without a doubt.",
    "Absolutely.",
    "Definitely.",
    "Teucer says yes.",
    "Anthon says yes.",
    "Ask again later.",
    "Better not tell you now.",
    "Probably.",
    "Probably not.",
    "I wouldn't count on it.",
    "Very doubtful.",
    "Flip a coin.",
    "Roll a dice instead.",
    "You already know the answer.",
    "Tonia says yes.",
    "Sandrone disagrees.",
    "Even Dottore is confused.",
    "The Tsaritsa approves.",
    "That sounds like a terrible idea.",
    "Go for it.",
    "Please don't.",
    "I wouldn't if I were you.",
    "Do it. I dare you.",
    "Only if you're brave.",
    "As you wish.",
    "It's a 50/50.",
    "Maybe... if you're lucky.",
    "How about a fight?",
    "Run.",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Ask the Magic 8-Ball a question.')
        .addStringOption(option =>
            option
                .setName('question')
                .setDescription('What would you like to ask?')
                .setRequired(true)
        ),

    async execute(interaction) {
        const question = interaction.options.getString('question');
        const answer = responses[Math.floor(Math.random() * responses.length)];

        const embed = new EmbedBuilder()
            .setColor(config.embedColor)
            .setTitle('🎱 The Magic 8-Ball Speaks')
            .addFields(
                {
                    name: '❓ Question',
                    value: question
                },
                {
                    name: '🎱 Answer',
                    value: answer
                }
            )
            .setFooter({ text: config.footer })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    }
};
