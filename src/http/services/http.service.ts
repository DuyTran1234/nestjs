import { Inject, Injectable, Optional } from "@nestjs/common";
import { Http } from "../interfaces/http.interface";

// PROVIDER OPTIONAL

@Injectable()
export class HttpService {
    getTestHttp(): string{
        return "This action get test text";
    }

    createHttp(http: Http): string {
        console.log(http);
        return "A HTTP protocol created";
    }
}