const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h1>Welcome to Myntra Home Page</h1></body>');
        res.write('</html>');
        return res.end();
    } else if (req.url === '/men') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Men</title></head>');
        res.write('<body><h1>Check out the Men’s section</h1></body>');
        res.write('</html>');
        return res.end();
    } else if (req.url === '/women') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Women</title></head>');
        res.write('<body><h1>Check out the Women’s section</h1></body>');
        res.write('</html>');
        return res.end();
    } else if (req.url === '/kids') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Kids</title></head>');
        res.write('<body><h1>Check out the Kids section</h1></body>');
        res.write('</html>');
        return res.end();
    } else if (req.url === '/cart') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Cart</title></head>');
        res.write('<body><h1>Welcome to your Cart</h1></body>');
        res.write('</html>');
        return res.end();
    }

    // ✅ Default route — shows navbar first
    res.setHeader('Content-Type', 'text/html');
    res.write(`
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra Navigation</title>
  </head>
  <body>
    <h1>Welcome to Myntra Clone</h1>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  </body>
</html>
`);
    res.end();
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});