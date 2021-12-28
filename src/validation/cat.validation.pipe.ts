import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

/* Use Joi for validation class */
@Injectable()

export class CatValidationPipe implements PipeTransform {
    // constructor() {
    // }
    transform(value: any, metadata: ArgumentMetadata) {
        return value;
    }
}