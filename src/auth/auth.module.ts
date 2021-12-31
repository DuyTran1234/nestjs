import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsersService } from "src/users/services/users.service";
import { UsersModule } from "src/users/users.module";
import { AuthService } from "./auth.service";
import { jwtContants } from "./constants";
import { JwtStrategy } from "./jwt.strategy";
import { LocalAuthGuard } from "./local-auth.guard";
import { LocalStrategy } from "./local.strategy";
@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: jwtContants.secret,
            signOptions: {expiresIn: '120s'},
        }),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
    ],
    exports: [
        AuthService,
    ],
})
export class AuthModule { }