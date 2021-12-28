import { Body, Controller, HttpException, HttpStatus, Post, UsePipes } from "@nestjs/common";
import { UserValidationPipe } from "src/validation/user.validation";
import { CreateUserDto } from "../dto/createUserDto";
import { UsersService } from "../services/users.service";


@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService, 
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
}