import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// make request to openai api
export default async function Generate(req, res) {
  const completion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: req.body.prompt,
    max_tokens: 150,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}
