import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class AiService {
  private API_KEY = process.env.GEORQ_API_KEY;

  async generateMCQ(board: string, cls: string, subject: string) {
    const prompt = `
Generate 20 MCQ questions.

Board: ${board}
Class: ${cls}
Subject: ${subject}

Return ONLY JSON:
[
  {
    "question": "...",
    "options": ["A","B","C","D"],
    "correctAnswer": "A",
    "explanation": "..."
  }
]
`;

    try {
      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${this.API_KEY}`,
            "Content-Type": "application/json",
          },
        },
      );

      let text = response.data.choices[0].message.content;

      text = text.replace(/```json|```/g, "");

      return JSON.parse(text);
    } catch (error: any) {
      console.error(error?.response?.data || error);
      throw error;
    }
  }
}
