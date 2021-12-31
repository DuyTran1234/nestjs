import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Req, Request, UseGuards, UsePipes } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Action } from "src/authorization/action.enum";
import { CaslAbilityFactory } from "src/authorization/casl/casl-ability.factory";
import { UserValidationPipe } from "src/validation/user.validation.pipe";
import { CreateUserDto } from "../dto/createUserDto";
import { User } from "../schemas/user.schema";
import { UsersService } from "../services/users.service";


@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
        private caslAbilityFactory: CaslAbilityFactory,
    ) { }
    @Post('create-user-for-admin')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new UserValidationPipe())
    async createUserForAdminController(
        @Req() req,
        @Body() createUserDto: CreateUserDto
    ): Promise<String> {
        try {
            const user = req?.user;
            const ability = this.caslAbilityFactory.createAuthorizeForUser(user);
            if (ability.can(Action.Create, User)) {
                return this.usersService.createUser(createUserDto);
            }
            else {
                throw new HttpException('Create User Failed (restrecting access)', HttpStatus.BAD_REQUEST);
            }
        } catch (error) {
            throw new HttpException('Create User Failed controller', HttpStatus.BAD_REQUEST);
        }
    }

    @Post('create-user-standard')
    @UsePipes(new UserValidationPipe())
    async createUserStandard(
        @Body() createUserDto: CreateUserDto,
    ): Promise<String> {
        try {
            const hashPassword = await this.usersService.getHashPassword(createUserDto.password);
            createUserDto.password = hashPassword;
            const rs = await this.usersService.createUser(createUserDto);
            return rs;
        } catch (error) {
            throw new HttpException('Create User standard Failed controller', HttpStatus.BAD_REQUEST);
        }
    }

    @Get('get-user-by-id/:stringId')
    @UseGuards(JwtAuthGuard)
    async getUserById(
        @Req() req,
        @Param('stringId') stringId: string
    ): Promise<User> {
        try {
            const user = req?.user;
            const ability = this.caslAbilityFactory.createAuthorizeForUser(user);
            if(ability.can(Action.Read, User)) {
                return this.usersService.findOneById(stringId);
            }
        } catch (error) {
            
        }
    }
}