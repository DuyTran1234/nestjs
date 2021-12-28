import { Body, Controller, HttpException, HttpStatus, Post, Request, UseGuards, UsePipes } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "src/auth/auth.service";
import { UserValidationPipe } from "src/validation/user.validation.pipe";
import { CreateUserDto } from "../dto/createUserDto";
import { UsersService } from "../services/users.service";


@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService, 
        private authService: AuthService,
    ) {}
    @Post('create-user')
    @UsePipes(new UserValidationPipe())
    async createUserController(@Body() createUserDto: CreateUserDto): Promise<String> {
        try {
            return this.usersService.createUser(createUserDto);
        } catch (error) {
            throw new HttpException('Create User Failed', HttpStatus.BAD_REQUEST);
        }
    }

    @Post("auth/login")
    async login(@Body() {username, password}) {
        const rs = this.authService.validateUser(username, password);
        return rs;
    }
}