import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';
import {Helmet} from "react-helmet";
import { ServerStyleSheet } from 'styled-components';
import App from './src/app';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('build/public'));

app.get('*', (req, res) => {
    const context = {};
    const sheet = new ServerStyleSheet();
    const styles = sheet.getStyleTags();

    const content = ReactDOMServer.renderToString(
        sheet.collectStyles(
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        )
    );

    const helmet = Helmet.renderStatic();

    const html = `
<!DOCTYPE html>
<html>
    <head>
        <base href="/" />
        ${helmet.meta.toString()}
        ${helmet.title.toString()}
        ${styles}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body style="margin: 0;">
        <div id="root" style="width: 100%; height: 100%;">${content}</div>
        <script src="client_bundle.js"></script>
    </body>
</html>
    `;
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});
