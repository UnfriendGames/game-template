#!/bin/bash

cd ./back
npm start &

cd ../front
npm start &

echo "Apps started"

# Wait for any process to exit
wait -n
echo "Apps stopped"
  
# Exit with status of process that exited first
exit $?
