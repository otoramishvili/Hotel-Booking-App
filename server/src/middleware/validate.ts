import { type Request, type Response, type NextFunction } from 'express';
import { type Schema } from 'joi';

export const validateRequest = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
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