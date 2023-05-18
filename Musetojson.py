import json
from datetime import datetime
from muselsl import stream
import time

# Define the address of the Muse device
muse_address = '00:55:DA:B5:DF:DC'

# Connect to the Muse device
stream_data = stream(muse_address)

# Create a dictionary to hold the data
data = {
    'timestamps': [],
    'eeg': []
}

# Define the file path where the JSON file will be stored
filepath = r'C:\Users\deepa\OneDrive\Desktop\Muse\jdata.json'

# Define a function to write the data to a JSON file
def write_to_file():
    filename = f'muse_data_{datetime.now().strftime("%Y-%m-%d_%H-%M-%S")}.json'
    with open(filepath + '\\' + filename, 'w') as f:
        json.dump(data, f)

# Set the start time
start_time = time.time()

# Collect the data and write to file every 10 seconds
while True:
    sample, timestamp = stream_data.get_sample()
    if sample:
        # Add the data to the dictionary
        data['timestamps'].append(timestamp)
        data['eeg'].append(sample)
        
        # Check if 10 seconds have passed since the last write
        if time.time() - start_time >= 10:
            # Write the data to file
            write_to_file()
            # Reset the start time
            start_time = time.time()

