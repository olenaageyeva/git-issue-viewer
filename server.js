require('dotenv').config();
const express = require('express');
axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/express_backend', async (req, res) => {
    const { user = "", repo = "", open = "open", per_page = 30, page = 1 } = req.query
    const baseUrl = "https://api.github.com/search/issues";
    const  q= `repo:${user}/${repo}+type:issue+state:${open}`;

    const fullUrl = `${baseUrl}?q=${q}&per_page=${per_page}&page=${page}`;
    const headers = {
        Authorization: process.env.GIT_TOKEN,
        Accept: "application/json",
    };


    if (!user || !repo) {
        res.send({});
        return;
    };

    try {
        const response = await axios.get(fullUrl, { headers })
        res.send(response.data);
    } catch (err) {
        console.log("Error", err.response.status)       
        res.status(err.response.status).send(err.message);
    }
}); 