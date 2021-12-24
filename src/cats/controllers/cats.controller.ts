import { Body, Controller, Header, HttpCode, HttpStatus, Param, Post, Redirect, Req, Res } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { Request } from "express";
import { CreateCatDto } from "../dto/create-cat.dto";
import { Response } from "express";
import { Cat } from "src/cats/interfaces/cat.interface";
import { CatsService } from "../services/cats.service";
import { HttpService } from "src/http/services/http.service";
import { CreateHttpDto } from "src/http/dto/createHttpDto";

@Controller('cats')
export class CatsController {
    constructor(
        private catsService: CatsService,
        private httpSerivce: HttpService
        ) {}

    @Get("getAllCats")
    async findAll(@Req() request: Request): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Post("createCat")
    @HttpCode(201)
    @Header("X-Powered-By", "none")
    @Header("test", "none")
    createCat(@Body() createCatDto: CreateCatDto): string {
        this.catsService.create(createCatDto);
        return "create a new Cat successfully!";
    }

    @Get("cat/:id")
    findOne(@Param('id') idCat: string): string {
        console.log(idCat);
        return `Cat id: ${idCat}`;
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
    async createHttpController(@Body() createHttpDto: CreateHttpDto) : Promise<string> {
        return this.httpSerivce.createHttp(createHttpDto);
    }
}



