#!/bin/sh
## Start script for the PWA Lando service.

# Start both servers in the background.
yarn start 2>&1| tee log/pwa.log &
yarn api 2>&1| tee log/api.log &

# Stop this script from terminating, or Lando will shut down the container.
tail -f /dev/null