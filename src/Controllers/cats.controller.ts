import { Body, Controller, Header, HttpCode, HttpStatus, Param, Post, Redirect, Req, Res } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { Request } from "express";
import { CreateCatDto } from "../DTO/create-cat.dto";
import { Response } from "express";
import { Cat } from "src/interfaces/cat.interface";
import { CatsService } from "src/Services/cats.service";

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

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

}



