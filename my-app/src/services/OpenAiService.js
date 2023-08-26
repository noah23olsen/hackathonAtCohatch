import axios from "axios";

export default {
generateChat() {
    const apiKey = process.env.VUE_APP_OPENAI_API_KEY; // Use VUE_APP_ prefix for Vue environment variables

   return axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo", 
          messages: [{ role: "user", content: "please interpret this code for me, limit the response to 1000 characters"}],
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
    }
}