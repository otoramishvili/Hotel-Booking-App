import { type Request, type Response, type NextFunction } from 'express';
import { type Schema } from 'joi';
export declare const validateRequest: (schema: Schema) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validate.d.ts.map