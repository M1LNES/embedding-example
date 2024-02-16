
#!/bin/bash
set -o errexit
set -o pipefail

mkdir -p assets # ensure the assets directory exists
ACCESS_TOKEN=$(cat .env | grep ACCESS_TOKEN | cut -d '=' -f2-)
PACKAGE_URL=$(cat .env | grep PACKAGE_URL | cut -d '=' -f2- | sed 's/\"//g')
curl -H "Authorization: Bearer ${ACCESS_TOKEN}" -o ./assets/embedding.js ${PACKAGE_URL}