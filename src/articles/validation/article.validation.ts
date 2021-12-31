import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import { articleJoiSchema } from "src/joiSchemas/article.joi";

@Injectable()
export class ArticleValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        const schema = articleJoiSchema;
        try {
            const result = await schema.validateAsync(value);
            return value;
        } catch (error) {
            throw new HttpException(
                "validate articleDto fail from pipe", 
                HttpStatus.BAD_REQUEST);
        }
    }
}