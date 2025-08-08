export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Handle POST
  if (req.method === "POST") {
    try {
      const { prompt } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: "Missing prompt" });
      }

      // Simulated response
      const result = { response: `You said: ${prompt}` };
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: "Server error" });
    }
  }

  // Fallback for other methods
  return res.status(405).json({ error: "Method Not Allowed" });
}
