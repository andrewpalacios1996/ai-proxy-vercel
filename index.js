export default async function handler(req, res) {
  // Set CORS headers to allow your frontend
  res.setHeader("Access-Control-Allow-Origin", "https://revved.digital");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Handle POST requests
  if (req.method === "POST") {
    try {
      const { prompt } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: "Missing prompt" });
      }

      // Replace this with actual API logic (e.g. calling OpenAI)
      const fakeResponse = {
        response: `You said: ${prompt}`
      };

      return res.status(200).json(fakeResponse);
    } catch (error) {
      console.error("Error handling request:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // All other methods not allowed
  res.status(405).json({ error: "Method Not Allowed" });
}
