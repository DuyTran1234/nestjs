import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class LocalAuthGuard extends AuthGuard('loginLocal') {
    constructor() {
        console.log("LocalAuthGuard created");
        super();
    }
}