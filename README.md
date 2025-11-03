node js learing from prashant sir its 24 h course .

🧠 What Is Node.js?
Node.js is a JavaScript runtime environment that lets you run JavaScript code outside the browser, typically on servers. It’s built on Chrome’s V8 engine, which makes it fast and efficient.
🔧 Why Use Node.js?
- You can build server-side applications using JavaScript.
- It’s great for real-time apps like chat, notifications, and APIs.
- It uses non-blocking I/O and event-driven architecture, making it ideal for scalable apps.

🛠️ Key Features
- Single Language Stack: Use JavaScript for both frontend and backend.
- NPM (Node Package Manager): Access thousands of libraries and tools.
- Modules: Organize your code into reusable pieces.
- REPL: Interactive shell for testing JavaScript quickly.

🧪 Example: Simple Node.js Server
```
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```


This creates a basic web server that responds with a message.
