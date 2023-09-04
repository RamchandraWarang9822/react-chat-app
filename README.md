
# React-chat-app

This project is a real-time chat application built with React on the client side and Node.js on the server side. It uses Socket.IO for real-time communication between the client and server.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your local machine. This project was built using Node.js version 14.15.1 and npm version 6.14.8. To install Node.js and npm, you can download it from [here](https://nodejs.org/en/download/).

### Installing

1. Clone the repository
```bash
git clone https://github.com/RamchandraWarang9822/react-chat-app.git
```

2. Navigate into the cloned repository
```bash
cd project
```

3. Install the dependencies for the server
```bash
cd server
npm install
```

4. Install the dependencies for the client
```bash
cd ../client
npm install
```

**Running the application**

1. Start the server
```bash
cd server
npm start
```

2. In a new terminal window, start the client
```bash
cd client
npm run dev
```
Dependencies

The server side of the project uses the following dependencies:
- cors: ^2.8.5
- express: ^4.18.2
- socket.io: ^4.6.1

The client side of the project uses the following dependencies:
- react: ^18.2.0
- react-dom: ^18.2.0
- react-scroll-to-bottom: ^4.2.0
- socket.io-client: ^4.6.1
Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.
Authors

- Ramchandra Warang 

See also the list of contributors who participated in this project.
License