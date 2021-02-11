# ------------------------------------------
# Base Node Image
# ------------------------------------------
FROM node:14-alpine AS node-base

RUN \
  # Install dependencies
  apk add --update --no-cache --virtual .build-deps \
  # Build
  git \
  python \
  make \
  g++ \
  # libudev-dev \
  libusb \
  linux-headers

WORKDIR /home/node/app

# ------------------------------------------
# Application Skeleton
# 
#  Contains project directories and their package dependencies
#   ├── contracts
#   │   ├── belt
#   │   │   └── package.json
#   │   │   ...
#   │   └── integration-scripts
#   │       └── package.json
#   └── packages
#   ├── ci-ts
#   │   └── package.json
#   ├── core
#   ├── cypress-job-server
#   │   └── package.json
#   ├── ...
#   └── package.json
# ------------------------------------------
FROM node-base AS skeleton

COPY packages packages
COPY contracts contracts
RUN find . ! -name "package.json" -mindepth 3 -exec rm -rf {} +

# ------------------------------------------
# Builder Image
# ------------------------------------------
FROM skeleton AS builder

WORKDIR /home/node
COPY --from=skeleton --chown=node:node /home/node .
WORKDIR /home/node/app
USER node

# Install dependencies .yarnrc yarn.lock .yarn/
COPY --chown=node:node .yarn/ ./.yarn
COPY --chown=node:node .yarnrc babel.config.js ./
COPY --chown=node:node yarn.lock package.json lerna.json  ./
RUN yarn

# COPY patches patches
# COPY solc_bin solc_bin
# COPY .yarn .yarn
# COPY operator_ui/package.json ./operator_ui/
# COPY styleguide/package.json ./styleguide/
# COPY tools/json-api-client/package.json ./tools/json-api-client/
# COPY tools/local-storage/package.json ./tools/local-storage/
# COPY tools/redux/package.json ./tools/redux/
# COPY tools/ts-helpers/package.json ./tools/ts-helpers/
# COPY belt/package.json ./belt/
# COPY belt/bin ./belt/bin
# COPY evm-test-helpers/package.json ./evm-test-helpers/
# COPY evm-contracts/package.json ./evm-contracts/
# RUN make yarndep


# COPY tsconfig.cjs.json tsconfig.es6.json ./
# TODO move operator ui and other pieces to applications directory
# COPY operator_ui ./operator_ui
# COPY styleguide ./styleguide
# COPY tools/json-api-client ./tools/json-api-client
# COPY tools/local-storage ./tools/local-storage
# COPY tools/redux ./tools/redux
# COPY tools/ts-helpers ./tools/ts-helpers
# COPY belt ./belt
# COPY belt/bin ./belt/bin
# COPY evm-test-helpers ./evm-test-helpers
# COPY evm-contracts ./evm-contracts

# TODO separate
# Build operator-ui and the smart contracts
# RUN make contracts-operator-ui-build

# TODO how is this normally handled?
# Build the golang binary
# COPY tools/bin/ldflags ./tools/bin/


# Env vars needed for chainlink build
# ARG COMMIT_SHA
# ARG ENVIRONMENT
# TODO [refactor] validate pulling from other images
# COPY --from=chainlink/contracts /abi ./evm-contracts/abi
# COPY --from=chainlink/operator-ui /dist ./operator_ui/dist
# COPY core core
# COPY packr packr