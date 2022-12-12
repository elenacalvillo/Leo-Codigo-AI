const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async (req, res) => {
  let prompt = `Explica el código: ${req.body.code}\n\"\"\"\nEsto es lo que el código de arriba está haciendo:\n`;
  const gptResponse = await openai.complete({
	engine: 'code-davinci-002',
	prompt: prompt,
	temperature: 0,
	max_tokens: 256,
	top_p: 1,
	frequency_penalty: 0,
	presence_penalty: 0,
	stop: ["\"\"\""],
});
  
  res.status(200).json({text: `${gptResponse.data.choices[0].text}`})
}