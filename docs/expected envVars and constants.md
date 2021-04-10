# Expected Environment Variables

| key              | desciption                                                         | example            | should be defined in |
|------------------|--------------------------------------------------------------------|--------------------|----------------------|
| NODE_ENV         | development, staging or production                                 | development        | docker compose file  |
| APPLICATION_NAME | a common name for the application                                  | `Home Automation`  | docker file          |
| LOG_FILE_PREFIX  | filename prefix for used for log files - refer to application name | `tsHomeAutomation` | docker file          |
| CONFIG_FOLDER    | path to config folder from application root folder                 | `./config`         | docker compose file  |
| MAIN_CONFIG_FILE | main config filename                                               | `config.js`        | docker compose file  |
| LOG_FOLDER       | log file target folder                                             | `./logs`           | docker compose file  |
| BITBUCKET_COMMIT | git commit hash (turns into GIT_COMMIT)                            | `1.0.1`            | repository variable  |
| BITBUCKET_TAG    | git tag         (turns into GIT_TAG)                               | `a4a93a8`          | repository variable  |
| PORT             | network port                                                       | `3000 `            | docker compose file  |
