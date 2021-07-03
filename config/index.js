const dotenv = require("dotenv");

const envFound = dotenv.config();
if (!envFound) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  /**
   * Your favorite port
   */
  port: process.env.PORT || 8000,

  /**
   * That long string from mlab
   */
  databaseURL: process.env.MONGODB_URI,

  /**
   * Your secret sauce
   */
  jwtSecret: process.env.JWT_SECRET,

  /**
   * XP increase percentage rate
   */
  perc_rate: 0.8,

  /**
   * User inital XP
   */
  initial_xp: 100,

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || "silly",
    myCustomLevel: {
      levels: {
        trace: 0,
        input: 1,
        verbose: 2,
        prompt: 3,
        debug: 4,
        info: 5,
        data: 6,
        help: 7,
        warn: 8,
        error: 9,
      },
      colors: {
        trace: "magenta",
        input: "grey",
        verbose: "cyan",
        prompt: "grey",
        debug: "blue",
        info: "green",
        data: "grey",
        help: "cyan",
        warn: "yellow",
        error: "red",
      },
    },
  },
  /**
   * API configs
   */
  api: {
    prefix: "/api/v1",
  },
  emailContent: {
    WELCOME: {
      subject: `Success!`,
      text: `Welcome to the jaanMumbai family`,
    },
  },
  inAppContent: {
    WELCOME: `Hi {{USER_NAME}}, you have successfully registered on jaanMumbai. `,
  },
};
