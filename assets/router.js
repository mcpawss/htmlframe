import fetch from 'node-fetch';

const getDailyImage = async () => {
  const date = new Date();
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
  const response = await fetch(`https://source.unsplash.com/collection/your_collection_id/${dayOfYear}/1600x900`);
  return response.url;
}

export default async function createRouter(target1, target2) {
  const randomImage = await getDailyImage();
  const html = target1.replace("placeholder_image_url", randomImage);
  return function (req, res) {
    if (req.method === "POST") {
      const data = req.body.untrustedData
      if (!data) {
        res.statusCode = 400
        return res.send("Invalid request")
      }
      res.statusCode = 200
      res.setHeader("Content-Type", "text/html")
      if (data.buttonIndex === 1) {
        return res.send(html)
      }
      if (data.buttonIndex === 2) {
        return res.send(target2)
      }
    }
    return res.status(400).end()
  }
}
