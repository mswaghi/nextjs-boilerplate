// pages/api/add-link/index.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Handle POST request
      const data = req.body;
      // Process data...
      res.status(200).json({ message: 'Link added successfully' });
    } else {
      // Handle any non-POST requests
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  