import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtContants } from "./constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'myJwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
            ignoreExpiration: false,
            secretOrKey: jwtContants.secret,
        });
    }
    async validate(payload: any) {
        return payload;
    }
}