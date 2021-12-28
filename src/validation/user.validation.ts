import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import { userJoiSchema } from "src/joiSchemas/user.joi";


@Injectable()

export class UserValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        const schema = userJoiSchema;
        try {
            const result = await schema.validateAsync(value);
            return value;
        } catch (error) {
            throw new HttpException('schema object validate error', HttpStatus.BAD_REQUEST);
        }
    }
}