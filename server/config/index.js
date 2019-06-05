module.exports = {
    port: process.env.PORT || 9000,
    isDevEnvironment: process.env.NODE_ENV === "development",
    sender: process.env.SENDER_EMAIL
};