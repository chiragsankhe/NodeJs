const cal = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html lang="en">
      <head>
        <title>Addition</title>
      </head>
      <body>
        <div>
          <h1>Simple Addition Form</h1>
          <form action="/add" method="post">
            <input type="text" name="num1" placeholder="Enter first number" required />
            <br><br>
            <input type="text" name="num2" placeholder="Enter second number" required />
            <br><br>
            <button type="submit">Sum</button>
          </form>
          <br>
          <a href="/">Back to Home</a>
        </div>
      </body>
    </html>
  `);
    return res.end();
};

module.exports = cal;