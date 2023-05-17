#!/bin/bash
# Define the virtual environment directory
#!/bin/bash
CURRENT_DIR="$PWD"
# Define the command to run in each terminal
COMMAND1="sudo mongod --dbpath /data/rs1 --replSet rs0 --port 27018"
COMMAND2="sudo mongod --dbpath /data/rs2 --replSet rs0 --port 27019"
COMMAND3="sudo mongod --dbpath /data/rs3 --replSet rs0 --port 27020"
COMMAND4="node  ${CURRENT_DIR}/Backend/REST_API/server.js"
COMMAND5="source ${CURRENT_DIR}/Backend/venv/bin/activate && python ${CURRENT_DIR}/Backend/Backend_QUI/muse_connector.py"
COMMAND6="source ${CURRENT_DIR}/Backend/venv/bin/activate && sleep 5 && python3 ${CURRENT_DIR}/Backend/Backend_QUI/main.py"
# COMMAND7="json-server --watch ${CURRENT_DIR}/Frontend/db.json"
# Define the number of terminals to open
NUM_TERMINALS=7

# Loop through and open each terminal
for i in $(seq 1 $NUM_TERMINALS); do
  eval "COMMAND=\$COMMAND$i"
  gnome-terminal --title="Terminal $i" --disable-factory -- bash  -c  "sleep 1; $COMMAND; exec bash" &
  done

# Keep all terminal windows open after executing the command
read -p "Press Enter to close all windows."
