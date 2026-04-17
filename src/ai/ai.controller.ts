import { Controller, Post, Body, Get } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private aiService: AiService) {}

  // 🟢 Check models
  @Get('models')
  async getModels() {
    const result = await this.aiService.listModels();

    return {
      success: true,
      data: result,
    };
  }

  // 🟢 Generate text
  @Post('generate')
  async generate(@Body('prompt') prompt: string) {
    if (!prompt) {
      return {
        success: false,
        message: 'Prompt is required',
      };
    }

    const result = await this.aiService.generateText(prompt);

    return {
      success: true,
      data: result,
    };
  }
}
