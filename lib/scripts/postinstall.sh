
#!/bin/bash
set -o errexit
set -o pipefail

mkdir -p ./lib/assets # ensure the assets directory exists

# For DEV execution - parses env variables from .env file.

# ACCESS_TOKEN=$(cat .env | grep ACCESS_TOKEN | cut -d '=' -f2-)
# PACKAGE_URL=$(cat .env | grep PACKAGE_URL | cut -d '=' -f2- | sed 's/\"//g')

# For deployment - takes env variables from global variables.
ACCESS_TOKEN=$ACCESS_TOKEN
PACKAGE_URL=$PACKAGE_URL
curl -H "Authorization: Bearer ${ACCESS_TOKEN}" -o ./lib/assets/embedding.js ${PACKAGE_URL}