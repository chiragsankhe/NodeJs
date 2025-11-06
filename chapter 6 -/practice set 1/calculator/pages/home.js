const home = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
      <head>
        <title>Calculator</title>
      </head>
      <body>
        <h1>Welcome to Home Page</h1>
        <a href="/calculator">Go to Calculator</a>
      </body>
    </html>
  `);
    return res.end();
};

module.exports = home;