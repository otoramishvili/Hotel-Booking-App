import Joi from "joi";

export const signupSchema = Joi.object({
    email: Joi.string().trim().required(),
    password: Joi.string().min(8).max(20).required(),
    fullName: Joi.string().min(3).max(30).required(),
});

export const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
})