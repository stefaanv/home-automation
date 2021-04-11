# Expected Environment Variables

| key                     | desciption                                                         | example or (D)efault  | should be defined in |
|-------------------------|--------------------------------------------------------------------|-----------------------|----------------------|
| NODE_ENV                | development, staging or production                                 | `development`         | docker compose file  |
| APPLICATION_NAME        | a common name for the application                                  | `Home Automation`     | docker file          |
| LOG_FILE_PREFIX         | filename prefix for used for log files - refer to application name | (D) `log`             | docker file          |
| CONFIG_FOLDER           | path to config folder from application root folder                 | `./config`            | docker compose file  |
| MAIN_CONFIG_FILE        | main config filename                                               | `config.js`           | docker compose file  |
| LOG_FOLDER              | log file target folder                                             | `./logs`              | docker compose file  |
| BITBUCKET_COMMIT        | git commit hash (turns into GIT_COMMIT)                            | `1.0.1`               | repository variable  |
| BITBUCKET_TAG           | git tag         (turns into GIT_TAG)                               | `a4a93a8`             | repository variable  |
| PORT                    | network port                                                       | `3000 `               | docker compose file  |
| LOG_DATEPATTERN         | Date pattern used in logging daily file rotate                     | (D) `YYYY-MM-DD`      | docker compose file  |
| LOG_FREQUENCY           | Rotate freqiency of log files                                      | (D) `24h`             | docker compose file  |
| LOG_FILE_MAX_SIZE       | Maximum size of log files                                          | (D) `50m`             | docker compose file  |
| LOG_FILE_MAX_FILES      | Maximum log files to keep                                          | (D) `30`              | docker compose file  |
| LOG_TIMEZONE            | Timezone for logging to file AND console                           | (D) `Europe/Brussels` | docker compose file  |
| FILE_LOG_LEVEL          | Min log level output to the console                                | (D) `info`            | docker compose file  |
| FILE_LOG_FORMAT_JSON    | Format of file logger (true = json, otherwise simple)              | (D) `true`            | docker compose file  |
| FILE_LOG_TIME_FORMAT    | Format of file logger (true = json, otherwise simple)              | (D) `true`            | docker compose file  |
| CONSOLE_LOG_LEVEL       | Min log level output to the console                                | (D) `info`            | docker compose file  |
| CONSOLE_LOG_TIME_FORMAT | Format for loggin to the console                                   | (D) `HH:mm:ss:sss`    | docker compose file  |
|                         |                                                                    |                       |                      |
