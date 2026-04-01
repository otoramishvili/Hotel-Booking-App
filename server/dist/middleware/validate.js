import {} from 'express';
import {} from 'joi';
export const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, {
            abortEarly: false, // Include all errors
            stripUnknown: true, // Remove fields not defined in the schema
        });
        if (error) {
            const errorMessage = error.details.map((details) => details.message).join(', ');
            return res.status(400).json({ error: errorMessage });
        }
        req.body = value;
        next();
    };
};
//# sourceMappingURL=validate.js.map