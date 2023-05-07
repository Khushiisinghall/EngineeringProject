# Overview
This repository contains code for a backend API that sends commands to hardware and receives real-time data. The API is built using FastAPI, a Python web framework.

## Requirements
To run the backend API, you need to have the following software installed on your machine:
- Python 3.10 or higher
- Pip package manager
## Installation and Run 
- Clone this repository to your local machine
- Navigate to the `backend` folder: `cd backend`
- Create a Python virtual environment for the project:`python -m venv env`
- Activate the virtual environment:
-- Windows:`venv\\Scripts\activate`   
-- Linux:`source env/bin/activate`
- Install the required packages:`pip install -r requirements.txt`
- Start the API server by running the api.py script:`uvicorn api:app --reload`
The API will start running on url=http://localhost:8000/. You can now send requests to the API to control the hardware and receive real-time data.(url/start/userid,url/stop/userid,url/stream/userid,)
## Configure
To configure the hardware, you need to update the constants defined in the constants.py file located in the `backend/api/utilities` directory.
Specifically, you can change the following constants to match your hardware configuration:

- SERIAL_PORT: The serial port used to communicate with the hardware. You can set this to the appropriate port name for your device (e.g. "/dev/ttyUSB0" on Linux or "COM3" on Windows).
- BAUD_RATE: The baud rate used for serial communication. This should match the baud rate configured on your hardware.
- START_COMMAND: The command to send to the hardware to start data acquisition. This should be a string that the hardware can recognize as a start command.
- STOP_COMMAND: The command to send to the hardware to stop data acquisition. This should be a string that the hardware can recognize as a stop command.
