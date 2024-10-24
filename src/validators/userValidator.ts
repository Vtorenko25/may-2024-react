import Joi from "joi";

export const userValidator = Joi.object({
    username: Joi.string().pattern(/w{4,}/).required().messages({
        'string.pattern.base':'name must have at leasat for char & this must be at least 4 characters',
    }),

    password: Joi.string().min(3).max(6).required().messages({
        'string.min':'passwort can be at least 3 chars',
        'string.max':'passwort cannot be gt 6 chars'
    }),

    age: Joi.number().min(1).max(117).required().messages({
        'number.min':'min age is 1',
        'number.max':'max age is 117'
    }),
});
