
#!/bin/bash
set -o errexit
set -o pipefail

mkdir -p assets # ensure the assets directory exists
ACCESS_TOKEN=$ACCESS_TOKEN
PACKAGE_URL=$PACKAGE_URL
curl -H "Authorization: Bearer ${ACCESS_TOKEN}" -o ./assets/embedding.js ${PACKAGE_URL}
