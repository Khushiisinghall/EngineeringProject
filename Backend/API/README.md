# Overview
This repository contains code for a backend API that sends commands to hardware and receives real-time data. The API is built using FastAPI, a Python web framework.

## Requirements
To run the backend API, you need to have the following software installed on your machine:
- Python 3.10 or higher
- Pip package manager
## Installation
- Clone this repository to your local machine
- Navigate to the `backend` folder: `cd backend`
- Create a Python virtual environment for the project:`python -m venv env`
- Activate the virtual environment:
-- Windows:`venv\\Scripts\activate`   
-- Linux:`source env/bin/activate`
- Install the required packages:`pip install -r requirements.txt`
- Start the API server by running the api.py script:`uvicorn api:app --reload`
The API will start running on url=http://localhost:8000/. You can now send requests to the API to control the hardware and receive real-time data.(url/start/userid,url/stop/userid,url/stream/userid,)
