# WebRTC-Wheelie

Welcome to the WebRTC-Wheelie repository! This project is an exciting blend of hardware and software that brings together a Raspberry Pi, video streaming, WebRTC, AWS Kinesis Video Streams, and IoT to create a remote-controlled car with a live camera feed. It's perfect for hobbyists, educators, and anyone interested in the intersection of robotics and streaming technology.

## Project Description

WebRTC-Wheelie is a cutting-edge remote-controlled car that leverages the power of a Raspberry Pi for its brain. It's equipped with a camera to stream live video, providing a first-person view to the user. The car is controlled remotely through a web interface, thanks to WebRTC for real-time communication and AWS Kinesis Video Streams for secure and scalable video transmission. IoT technology ties all these components together, allowing the car to be controlled from anywhere with an internet connection.

## Getting Started

To get started with the WebRTC-Wheelie project, follow these steps:

1. **Deploy Cloud formation template**: Follow the installation section

2. **Set up your Raspberry Pi**: Follow the instructions to set up your Raspberry Pi with the necessary software and connect it to the internet.

2. **Assemble the RC car**: Attach the Raspberry Pi and camera to your RC car and ensure it's powered correctly.

3. **Install the software**: Clone this repository and install the required software on your Raspberry Pi.

4. **Configure AWS Kinesis Video Streams**: Set up your AWS account and configure Kinesis Video Streams to receive and manage the video feed.

5. **Connect the IoT devices**: Ensure all IoT components are correctly connected and communicating with each other.

6. **Start the server**: Run the server software on your Raspberry Pi to start handling the video streaming and car controls.

7. **Control your car**: Open the web interface on your device, connect to your car, and enjoy driving it around with live video feedback!

## Prerequisites

Before you begin, make sure you have the following:

- A Raspberry Pi (with camera module connected)
- An RC car that can be controlled via GPIO pins or another interface
- An AWS account for Kinesis Video Streams
- Basic knowledge of electronics and programming

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/WebRTC-Wheelie.git

# Navigate to the repository directory
cd WebRTC-Wheelie/aws

# Install dependencies
npm install

# Synthesize & Deploy Cloud formation template
cdk synth
cdk deploy
```

## Raspberry PI Installation
You will need a freshly installed RaspberryPI (Instruction available on [www.raspberrypi.com](https://www.raspberrypi.com/documentation/computers/getting-started.html#install-an-operating-system)).

You can use the Raspberry Pi in headless mode, that is, without an attached keyboard, monitor, or network cable:
1. On your computer, create a file named `wpa_supplicant.conf`.
2. Copy the following text and paste it into the `wpa_supplicant.conf` file:

```
country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
    ssid="Your Wi-Fi SSID"
    scan_ssid=1
    key_mgmt=WPA-PSK
    psk="Your Wi-Fi Password"
}
```
3. Replace the **ssid** and **psk** values with the information for your Wi-Fi network.
4. Copy the `wpa_supplicant.conf` file to the SD card. It must be copied to the root of the `boot` volume.
5. Insert the SD card into the Raspberry Pi, and power the device. It joins your Wi-Fi network, and SSH is enabled.


## Contributing

Contributions to the WebRTC-Wheelie project are welcome! Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

## Acknowledgments

- Thanks to the Raspberry Pi Foundation for their excellent documentation and community support.
- Kudos to AWS for their robust Kinesis Video Streams service.
- Appreciation for the open-source community for the various tools and libraries used in this project.

## Contact

For any queries or technical support, please open an issue on this repository.

Happy building and racing with your WebRTC-Wheelie!
