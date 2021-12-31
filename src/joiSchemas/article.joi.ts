import { articleRegex } from "src/articles/regex/article.regex";

const Joi = require('joi');

const articleJoiSchema = Joi.object({
    authorId: Joi.string(),
    scopeArticle: Joi.string().pattern(articleRegex.scopeArticleRegex).required(),
    content: Joi.string().required(),

});

export {articleJoiSchema}