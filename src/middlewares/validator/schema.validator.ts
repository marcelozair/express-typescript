import { ErrorObject, ValidateFunction } from 'ajv';
import { Request, Response, NextFunction } from 'express';

type typeInterface = 'body' | 'params' | 'query'; 

const schemaErrors = (errors: ErrorObject[]) => {
  if (errors.length) return errors[0].message;
};

const schemaValidation = (validate: ValidateFunction, type : typeInterface = 'body' ) => (
  (req: Request, res: Response, next: NextFunction) => {
    const isCheck = validate(req[type]);
    if (!isCheck && validate.errors) {
      const message = schemaErrors(validate.errors);
      return res.status(400).json({ message });
    }
    return next();
  }
);

export default schemaValidation;