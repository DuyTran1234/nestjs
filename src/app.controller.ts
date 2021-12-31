import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { LocalAuthGuard } from "./auth/local-auth.guard";

@Controller()
export class AppController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Req() req) {
        console.log(req?.user);
        return this.authService.login(req?.user);
    }

    // @UseGuards(JwtAuthGuard)
    // @Get('profile')
    // async getProfile(@Req() req) {
    //     console.log(req?.user);
    //     return req?.user;
    // }
}