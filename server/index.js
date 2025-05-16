const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAIApi(new Configuration({ apiKey: "YOUR_OPENAI_API_KEY" }));

app.post("/api/suggest", async (req, res) => {
  const { answers } = req.body;

  const prompt = `
You are a career counselor AI for school students. Based on the answers below, suggest the most suitable career path and explain why in 2-3 sentences.

Answers:
${JSON.stringify(answers)}

Respond in this format:
{
  "title": "Career Title",
  "description": "Why it's suitable.",
  "slug": "career-title"
}
`;

  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  const text = response.data.choices[0].message.content;
  res.send(JSON.parse(text));
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));