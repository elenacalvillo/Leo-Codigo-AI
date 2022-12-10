const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async (req, res) => {
  let prompt = `Explícame este código: ${req.body.code}`;
  const gptResponse = await openai.complete({
	engine: 'text-davinci-003',
	prompt: prompt,
	temperature: 0.5,
	max_tokens: 256,
	top_p: 1,
	frequency_penalty: 0,
	presence_penalty: 0,
	stop: ["\"\"\""],
});
  
  res.status(200).json({text: `${gptResponse.data.choices[0].text}`})
}