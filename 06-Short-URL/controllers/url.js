const URL = require("../models/url");
const shortid = require('shortid');

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" }); // Corrected req.url to body.url
  const shortID = shortid(8);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

module.exports = { handleGenerateNewShortURL };
