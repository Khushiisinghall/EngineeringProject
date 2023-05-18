from muselsl  import stream
import muselsl
import json
from datetime import datetime
from muselsl import stream

def main():
    pass# Define the address of the Muse device
    muse_address = '00:55:DA:B5:DF:DC'

    # Connect to the Muse device
    stream_data = stream(muse_address)

    # Print the data as it arrives
    muselsl.view()
   



if __name__=="__main__":
    main()