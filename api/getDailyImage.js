import fetch from 'node-fetch';

const handler = async (req, res) => {
  const date = new Date();
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
  const response = await fetch(`https://picsum.photos/seed/${dayOfYear}/1600/900`);
  const imageUrl = response.url;
  res.status(200).json({ imageUrl });
}

export default handler;
