// import { Injectable } from "@nestjs/common";
// import axios from "axios";

// @Injectable()
// export class AiService {
//   // private API_KEY = process.env.GEORQ_API_KEY;
//   private API_KEY =
//     process.env.GEORQ_API_KEY ||
//     "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";

//   async generateMCQ(
//     board: string,
//     cls: string,
//     subject: string,
//     chapter: string,
//     language: string,
//   ) {
//     //     const prompt = `
//     // Generate 20 MCQ questions.

//     // Board: ${board}
//     // Class: ${cls}
//     // Subject: ${subject}

//     // Return ONLY JSON:
//     // [
//     //   {
//     //     "question": "...",
//     //     "options": ["A","B","C","D"],
//     //     "correctAnswer": "A",
//     //     "explanation": "..."
//     //   }
//     // ]
//     // `;

//     const language = subject.toLowerCase().includes("sanskrit")
//       ? "Sanskrit or Hindi"
//       : subject.toLowerCase().includes("hindi")
//         ? "Hindi"
//         : "English";

//     const prompt = `
// Generate 20 MCQ questions.

// Board: ${board}
// Class: ${cls}
// Subject: ${subject}
// Chapter: ${chapter}

// IMPORTANT:
// - Use language: ${language}
// - Questions, options, and explanation must be in ${language}

// Return ONLY JSON:

// [
//   {
//     "question": "...",
//     "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
//     "correctAnswer": "A",
//     "explanation": "..."
//   }
// ]
// `;

//     try {
//       const response = await axios.post(
//         "https://api.groq.com/openai/v1/chat/completions",
//         {
//           model: "llama-3.3-70b-versatile",
//           messages: [
//             {
//               role: "user",
//               content: prompt,
//             },
//           ],
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${this.API_KEY}`,
//             "Content-Type": "application/json",
//           },
//         },
//       );

//       let text = response.data.choices[0].message.content;

//       text = text.replace(/```json|```/g, "");

//       return JSON.parse(text);
//     } catch (error: any) {
//       console.error(error?.response?.data || error);
//       throw error;
//     }
//   }
// }

import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class AiService {
  private API_KEY =
    process.env.GROQ_API_KEY! ||
    "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";

  //   async generateMCQ(
  //     board: string,
  //     cls: string,
  //     subject: string,
  //     chapter: string,
  //     language: string,
  //   ) {
  //     let finalLanguage = language;

  //     if (subject.toLowerCase().includes("sanskrit")) {
  //       finalLanguage = "Sanskrit";
  //     } else if (subject.toLowerCase().includes("hindi")) {
  //       finalLanguage = "Hindi";
  //     } else {
  //       finalLanguage = "Punjabi";
  //     }

  //     const prompt = `
  // Generate 10 MCQ questions.

  // Board: ${board}
  // Class: ${cls}
  // Subject: ${subject}
  // Chapter: ${chapter}

  // Language: ${finalLanguage}

  // STRICT RULES:
  // - Questions MUST be in ${finalLanguage}
  // - Options MUST be in ${finalLanguage}
  // - Explanation MUST be in ${finalLanguage}
  // - DO NOT mix languages
  // - If language is Hindi or Sanskrit → DO NOT use English words
  // - correctAnswer must be one of: A, B, C, or D
  // - DO NOT return array in correctAnswer

  // Return ONLY JSON:

  // [
  //   {
  //     "question": "...",
  //     "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
  //     "correctAnswer": "A",
  //     "explanation": "..."
  //   }
  // ]
  // `;

  //     try {
  //       const response = await axios.post(
  //         "https://api.groq.com/openai/v1/chat/completions",
  //         {
  //           model: "llama-3.3-70b-versatile",
  //           messages: [
  //             {
  //               role: "user",
  //               content: prompt,
  //             },
  //           ],
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${this.API_KEY}`,
  //             "Content-Type": "application/json",
  //           },
  //         },
  //       );

  //       let text = response.data.choices[0].message.content;

  //       console.log("👉 RAW AI:", text);
  //       text = text.replace(/```json|```/g, "");
  //       try {
  //         return JSON.parse(text);
  //       } catch {
  //         console.log("⚠️ Invalid JSON from AI:", text);
  //         throw new Error("Invalid JSON format from AI");
  //       }
  //     } catch (error: any) {
  //       console.error("GROQ ERROR:", error?.response?.data || error);
  //       throw error;
  //     }
  //   }

  async generateMCQ(
    board: string,
    cls: string,
    subject: string,
    chapter: string,
    language: string,
  ) {
    // ✅ STEP 1: HARD LANGUAGE CONTROL
    let finalLanguage = "English";

    if (language) {
      const lang = language.toLowerCase();

      if (lang === "hindi") finalLanguage = "Hindi";
      else if (lang === "punjabi") finalLanguage = "Punjabi";
      else finalLanguage = "English";
    }

    // ✅ ONLY Sanskrit override (not Hindi/Punjabi auto)
    if (subject.toLowerCase().includes("sanskrit")) {
      finalLanguage = "Sanskrit";
    }

    console.log("👉 FINAL LANGUAGE:", finalLanguage);

    // ✅ STEP 2: SUPER STRICT PROMPT
    const prompt = `
Generate 10 MCQ questions.

Board: ${board}
Class: ${cls}
Subject: ${subject}
Chapter: ${chapter}

Language: ${finalLanguage}

STRICT RULES:
- Use ONLY ${finalLanguage}
- Do NOT use any other language
- Do NOT use Punjabi unless language is Punjabi
- Do NOT mix languages
- If not in ${finalLanguage}, regenerate internally
- Use simple ${finalLanguage} words only
- correctAnswer must be A, B, C, or D

Return ONLY JSON:

[
  {
    "question": "...",
    "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
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
          temperature: 0.2, // ✅ less randomness
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

      console.log("👉 RAW AI:", text);

      text = text.replace(/```json|```/g, "").trim();

      const parsed = JSON.parse(text);

      // ✅ STEP 3: FINAL SAFETY CHECK (LANGUAGE FILTER)
      if (finalLanguage === "English") {
        const hasPunjabi = /[ਅ-੿]/.test(text);
        if (hasPunjabi) {
          console.log("⚠️ Punjabi detected → retrying...");
          return this.retry(prompt);
        }
      }

      return parsed;
    } catch (error: any) {
      console.log("⚠️ FIRST TRY FAILED → RETRY");

      return this.retry(prompt);
    }
  }

  // 🔁 RETRY FUNCTION
  async retry(prompt: string) {
    const retryPrompt = `
Previous response was invalid or wrong language.

${prompt}

IMPORTANT:
- STRICTLY follow language rules
- Return ONLY valid JSON
`;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        temperature: 0.1,
        messages: [{ role: "user", content: retryPrompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${this.API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    let text = response.data.choices[0].message.content;
    text = text.replace(/```json|```/g, "").trim();

    return JSON.parse(text);
  }
}
