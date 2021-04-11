# Global ARGs, must be defined before the first stage !
ARG APPLICATION_NAME="typeScript Home Automation"
ARG LOG_FILE_PREFIX="tsHA"
ARG BITBUCKET_COMMIT
ARG BITBUCKET_TAG

ARG AP=/usr/src/app
ARG BUILD_DIR=dist

FROM node:15.6 as base
FROM base AS builder

#ARG APPLICATION_NAME
#ARG BITBUCKET_TAG
#ARG BITBUCKET_COMMIT

#RUN echo APPLICATION_NAME `${APPLICATION_NAME}`
#RUN echo BITBUCKET_COMMIT ${BITBUCKET_COMMIT}
#RUN echo BITBUCKET_TAG ${BITBUCKET_TAG}

ARG AP
ARG BUILD_DIR
# Set the working directory
WORKDIR ${AP}
COPY ./*.json ./
COPY ./src/ ./src/

# ---- Dependencies ----
# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install
RUN npm run build

FROM base as release
# copying the arguments into the current container
ARG AP
ARG BUILD_DIR
ARG APPLICATION_NAME
ARG BITBUCKET_COMMIT
ARG BITBUCKET_TAG
ARG PORT
ARG NODE_ENV

# Set the working directory
WORKDIR ${AP}

# Install npm dependencies
#COPY --from=builder package*.json ./
COPY --from=builder ${AP}/package.json ${AP}/
COPY --from=builder ${AP}/package-lock.json ${AP}/

RUN npm install --only=production --no-optional

# Copy applicaiton files and run build
COPY --from=builder ${AP}/${BUILD_DIR}/ ${AP}/${BUILD_DIR}/

# Deault environment variables
ENV PORT=$PORT
ENV NODE_ENV=$NODE_ENV
ENV GIT_COMMIT=$BITBUCKET_COMMIT
ENV GIT_TAG=$BITBUCKET_TAG
ENV APPLICATION_NAME='${APPLICATION_NAME}'

# Expose port
EXPOSE ${PORT}

# Volumes
RUN mkdir -p logs && chown 1000 logs && chgrp 1000 logs && chmod -R o+w logs
VOLUME ["${AP}/logs", "${AP}/dist/config"]

# Change user
USER node

# Run the container under "node" user by default
CMD [ "node", "dist/main" ]

RUN echo APPLICATION_NAME=`${APPLICATION_NAME}`
RUN echo BITBUCKET_COMMIT=${BITBUCKET_COMMIT}
RUN echo BITBUCKET_TAG=${BITBUCKET_TAG}

