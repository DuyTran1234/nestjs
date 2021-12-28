import { usersRegex } from "src/regex/users.regex";

const Joi = require('joi');

const userJoiSchema = Joi.object({
    username: Joi.string().pattern(usersRegex.usernameRegex),
    password: Joi.string().pattern(usersRegex.passwordRegex),
    name: Joi.string().pattern(usersRegex.nameRegex),
    avatar: Joi.string(),
    email: Joi.string().pattern(usersRegex.emailRegex),
});

export {userJoiSchema}