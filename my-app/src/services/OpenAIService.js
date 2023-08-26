import axios from "axios";

export default {
generateQuiz(content) {
    const apiKey = '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'; // Use VUE_APP_ prefix for Vue environment variables

   return axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo", 
          messages: [{ role: "user", content: content}],
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