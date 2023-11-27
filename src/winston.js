import winston from "winston";
import config from "./config.js";

 const customLevels = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http: 4,
        debug: 5,
    },

    colors: {
        fatal: 'red',
        error: 'yellow',
        warning: 'green',
        info: 'blue',
        http: 'magenta',
        debug: 'gray',
    }
 }

 export let logger;

 if(config.environmet === 'development') {
    logger = winston.createLogger({
        levels: customLevels.levels,
        transports: [
            new winston.transports.Console({
                level: 'debug',
                format: winston.format.combine(
                    winston.format.colorize({colors: customLevels.colors}),
                    winston.format.timestamp(),
                    winston.format.simple(),
                )
            }),
            new winston.transports.File({
                filename: "./errors.log",
                level: 'debug',
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.prettyPrint(),
                )
            })
        ]
     })
 } else {
    logger = winston.createLogger({
        levels: customLevels.levels,
        transports: [
            new winston.transports.Console({
                level: 'info',
                format: winston.format.combine(
                    winston.format.colorize({colors: customLevels.colors}),
                    winston.format.timestamp(),
                    winston.format.simple(),
                )
            }),
            new winston.transports.File({
                filename: "./errors.log",
                level: 'info',
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.prettyPrint(),
                )
            }),
        ]
     });
 }





 
 