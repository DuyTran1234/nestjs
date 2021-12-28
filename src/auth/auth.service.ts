import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/services/users.service";

@Injectable()

export class AuthService {
    constructor(private usersService: UsersService) {}
    async validateUser(username: string, password: string): Promise<any> {
        try {
            const user = await this.usersService.findOneByUsername(username);
            if(user !== null && user.password === password) {
                const {password, ...result} = user;
                return result;
            }
            return null;
        }
        catch(error) {
            throw new HttpException('validate user failed', HttpStatus.BAD_REQUEST);
        }
    }
}