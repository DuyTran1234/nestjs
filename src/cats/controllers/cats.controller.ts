import { Body, Controller, Header, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Redirect, Req, Res, UsePipes } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { Request } from "express";
import { CreateCatDto } from "../dto/create-cat.dto";
import { Response } from "express";
import { Cat } from "src/cats/interfaces/cat.interface";
import { CatsService } from "../services/cats.service";
import { HttpService } from "src/http/services/http.service";
import { CreateHttpDto } from "src/http/dto/createHttpDto";
import { CatValidationPipe } from "src/validation/cat.validation.pipe";

@Controller('cats')
export class CatsController {
    constructor(
        private catsService: CatsService,
        private httpSerivce: HttpService
    ) { }

    @Get("getAllCats")
    async findAll(@Req() request: Request): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Post("createCat")
    async createCat(@Body() createCatDto: CreateCatDto): Promise<string> {
        try {
            this.catsService.create(createCatDto);
            return "create a new Cat successfully!";
        } catch (error) {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }

    // use param in route
    @Get("cat/:id")
    findOne(@Param("id", new ParseIntPipe()) id: number): string {
        console.log(id);
        return `Cat id: ${id}`;
    }

    // use lib-specific approach (recommend)
    @Get()
    findAllThrough(@Res({ passthrough: true }) res: Response) {
        res.status(HttpStatus.OK);
        return [];
    }

    // use HttpService
    @Get('getTestHttp')
    async testHttp(): Promise<string> {
        return this.httpSerivce.getTestHttp();
    }

    @Post('createHttp')
    async createHttpController(@Body() createHttpDto: CreateHttpDto): Promise<string> {
        return this.httpSerivce.createHttp(createHttpDto);
    }
}



