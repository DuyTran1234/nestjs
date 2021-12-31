import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/services/users.service";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }
    async validateUser(username: string, password: string): Promise<any> {
        console.log("go to auth service....");
        try {
            const user = await this.usersService.findOneByUsername(username) as any;
            const newUser = user.toObject();
            if (newUser?.password === password) {
                const { password, ...rest } = newUser;
                return rest;
            }
            return null;
        }
        catch (error) {
            throw new HttpException('validate user failed', HttpStatus.BAD_REQUEST);
        }
    }
    async login(user: any) {
        // console.log(user);
        // const userId = user?._id.toString();
        // const payload = { username: user?.username, id: userId};
        
        // console.log(payload.username + " AND " + payload.id + " Typeof: " + typeof payload.id);
        return {
            access_token: this.jwtService.sign(user),
        }
    }
}