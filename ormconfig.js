const env = process.env.ENVIRONMENT;
module.exports = require(`./config/ormconfig.${env}`);
