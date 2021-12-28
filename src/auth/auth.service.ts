import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/services/users.service";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}
    async validateUser(username: string, password: string): Promise<any> {
        try {
            const user = await this.usersService.findOneByUsername(username) as any;
            const newUser = user.toObject();
            if(newUser?.password === password) {
               const {password, ...rest} = newUser;
               return rest;
            }
            return null;
        }
        catch(error) {
            throw new HttpException('validate user failed', HttpStatus.BAD_REQUEST);
        }
    }
    async login(user: any) {
        
    }
}