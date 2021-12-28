import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ValidationCat implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        return value;
    }
}