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
<html>
    <head>
        ${helmet.meta.toString()}
        ${helmet.title.toString()}
        ${styles}
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
    </head>
    <body>
        <div id="root">${content}</div>
        <script src="client_bundle.js"></script>
    </body>
</html>
    `;
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});
