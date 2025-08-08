export default async function handler(req, res) {
  // 🔐 Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "https://revved.digital");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ⚠️ Handle preflight request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // ✅ Your actual POST logic
  if (req.method === "POST") {
    const { prompt } = req.body;

    // Your OpenAI API call or whatever logic here
    const result = { message: `You said: ${prompt}` };
    res.status(200).json(result);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
