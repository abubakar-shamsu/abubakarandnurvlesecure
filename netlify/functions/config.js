
export async function handler() {
 return {
  statusCode: 200,
  body: JSON.stringify({
   API_KEY: process.env.API_KEY,
   currentModel: process.env.currentModel
  })
 };
}
