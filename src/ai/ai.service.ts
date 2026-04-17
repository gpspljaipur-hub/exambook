// import { Injectable } from "@nestjs/common";
// import OpenAI from "openai";

// @Injectable()
// export class AiService {
//   private openai = new OpenAI({
//     apiKey:
//       // process.env.OPENAI_API_KEY ||
//       "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",
//   });

//   async generateMCQ(board: string, cls: string, subject: string) {
//     const prompt = `
// Generate 20 MCQ questions.

// Board: ${board}
// Class: ${cls}
// Subject: ${subject}

// Return ONLY JSON:
// [
//   {
//     "question": "....",
//     "options": ["A", "B", "C", "D"],
//     "correctAnswer": "A",
//     "explanation": "...."
//   }
// ]
// `;

//     try {
//       const response = await this.openai.chat.completions.create({
//         model: "gpt-4o-mini", // ✅ fast + cheaper
//         messages: [
//           {
//             role: "user",
//             content: prompt,
//           },
//         ],
//       });

//       let text = response.choices[0].message.content || "";

//       console.log("👉 RAW AI:", text);

//       // 🔥 clean JSON
//       text = text.replace(/```json|```/g, "");

//       return JSON.parse(text);
//     } catch (error: any) {
//       console.error("🔥 OPENAI ERROR:", error);
//       throw error;
//     }
//   }
// }

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
