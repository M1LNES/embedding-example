---
title: Project Initialization
sidebar_position: 3
slug: /begin/initialization
hide_title: true
---

## Create Project / edit existing one

Create new project build by `webpack` or edit the existing one. Make sure that you can build and execute the client and server side.

## Add .env variables

To be able to fetch data from APIs, you need to add into .env file (or enviroment varaibles furing deploy) two tokens - `ACCESS_TOKEN` for Emplifi Public API and `OMNI_API_TOKEN` for Omni Studio API. Both of these tokens needs to be valid. You also need to specify `PACKAGE_URL` which is endpoint for downloading minimalized versions of libraries.

```env title=".env"
ACCESS_TOKEN=4eYo9qFmZw2oRXtZnIyOHhUy3TlPLp2JbrsA1MRc7Fx
OMNI_API_TOKEN=ZnU7lNwYd1nCgVJFyO1qYdKJw9IaZVq5EUxYedRp93O
PACKAGE_URL=https://3348d0628f75ab43fe445e17eb650c1b.sbksapps.com/3/packages/analytics/bundle.js
```

These tokens can be generated e.g. via `playground`.

## Download the external libraries

### Postinstall script

Firstly, you need to specify the postinstall script that will be executed after installing dependencies. In `package.json`, simply add to `"scripts"`

```json title="package.json"
"postinstall": "./scripts/postinstall.sh",
```

Now create in the root of the project folder `scripts` and create file `postinstall.sh`

```bash title="postinstall.sh"
#!/bin/bash
set -o errexit
set -o pipefail

mkdir -p assets

# For DEV execution - parses env variables from .env file.

# ACCESS_TOKEN=$(cat .env | grep ACCESS_TOKEN | cut -d '=' -f2-)
# PACKAGE_URL=$(cat .env | grep PACKAGE_URL | cut -d '=' -f2- | sed 's/\"//g')

# For deployment - takes env variables from global variables.
ACCESS_TOKEN=$ACCESS_TOKEN
PACKAGE_URL=$PACKAGE_URL
curl -H "Authorization: Bearer ${ACCESS_TOKEN}" -o ./assets/embedding.js ${PACKAGE_URL}
```

Sometimes (happened on Mac) these script could not be executed due to permissions. If you are facing this problem, just use `chmod 777 ./scripts/postinstall` command to set execution permission.

### Run install script

After creating post install script, execute installation of dependencies once again.

```cmd
npm i
```

Now, it should execute the post install script and from Emplifi Public API download PreJSON, PreJSONTime and Vision libraries.

### Check if folder `assets` was created

If folder `assets` with file `embedding.js` was created, the installation was successful.

## Ready to use

If everything was successful, the library is now ready to be used.
