import { usersRegex } from "src/users/regex/users.regex";

const Joi = require('joi');

const userJoiSchema = Joi.object({
    username: Joi.string().pattern(usersRegex.usernameRegex).required(),
    password: Joi.string().pattern(usersRegex.passwordRegex).required(),
    name: Joi.string().pattern(usersRegex.nameRegex).required(),
    avatar: Joi.string().required(),
    email: Joi.string().pattern(usersRegex.emailRegex).required(),
    role: Joi.string().pattern(usersRegex.rolesRegex),

});

export {userJoiSchema}