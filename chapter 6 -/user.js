const fs = require('fs');

const userRequestHandler = (req, res) => {
    if (req.url === '/', req.method === "GET") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>home </title></head>');
        res.write('<body><h1> Enter Your Details </h1>');
        res.write('<form action="/submit-details" method="post">');
        res.write('<input type="text" name="username" placeholder="Enter Username"/> <br>');
        res.write('<label for="male">male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male" />');
        res.write('<label for="female">female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female" /><br>');
        res.write('<button type="submit"> Submit </button>');
        res.write("</form>");

        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if (req.url.toLowerCase() === '/submit-details' && req.method === "POST") {

        const body = [];

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push((chunk));
        });


        req.on('end', () => {
            const result = Buffer.concat(body).toString();
            console.log(result);

            const params = new URLSearchParams(result);
            // const bodyObject = {};
            // for (const [key, value] of params.entries()) {
            //     bodyObject[key] = value;
            // }

            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
            fs.writeFileSync('user.txt', JSON.stringify(bodyObject));


            console.log(bodyObject);
        })

        fs.writeFileSync('user.txt', "User Details Submitted");
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();


    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>opoos sorry you are on wrong page</h1></body>');
    res.write('</html>');
};

module.exports = userRequestHandler;