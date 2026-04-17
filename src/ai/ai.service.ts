import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AiService {
  private API_KEY = 'AIzaSyB-NVPYaOsz4icw7e-TdwFR_mCaZkFPUts'; // ⚠️ replace

  async listModels() {
    try {
      const response = await axios.get(
        `https://generativelanguage.googleapis.com/v1beta/models?key=${this.API_KEY}`,
      );

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  async generateText(prompt: string) {
    const models = [
      //   'gemini-2.5-flash',
      //   'gemini-2.5-pro',
      'gemini-3-flash-preview',
      //   'gemini-3.1-flash-lite-preview',
      //   'ano-banana-pro-preview',
      // 'gemini-robotics-er-1.5-preview',
    ];

    for (const model of models) {
      try {
        const response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.API_KEY}`,
          {
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
          },
        );

        const text = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

        return text || 'No response';
      } catch (error: any) {
        const status = error?.response?.status;
        if (status !== 503) {
          throw error;
        }
      }
    }

    throw new Error('All models are busy. Try again later.');
  }
}
