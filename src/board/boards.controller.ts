import { Body, Controller, Get, Post } from "@nestjs/common";
import { BoardsService } from "./boards.service";

@Controller("boards")
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post("add-board")
  addBoard(@Body() body: any) {
    return this.boardsService.addBoard(body.name, body.description);
  }

  @Get("get-board")
  getBoards() {
    return this.boardsService.getBoards();
  }
}
