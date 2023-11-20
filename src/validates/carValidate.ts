import Joi from "joi";

const carValidate = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        "string.pattern.base" : "only letters. min1 max20 chapters"
    }),
    price: Joi.number().min(0).max(1_000_000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
});

export {carValidate}