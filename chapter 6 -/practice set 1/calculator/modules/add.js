const add = (req, res) => {
    const body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', () => {
        const params = Buffer.concat(body).toString();
        const queryParam = new URLSearchParams(params);

        const num1 = parseFloat(queryParam.get('num1'));
        const num2 = parseFloat(queryParam.get('num2'));

        const result = num1 + num2;

        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html lang="en">
            <head>
                <title>Addition Result</title>
            </head>
            <body>
                <div>
                    <h1>Result: ${num1} + ${num2} = ${result}</h1>
                    <a href="/calculator">Perform another calculation</a>
                    <br/><br/>
                    <a href="/">Go to Home</a>
                </div>
            </body>
        </html>
        `);
        res.end();
    });
};

module.exports = add;