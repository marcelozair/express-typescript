import Ajv, { JSONSchemaType } from 'ajv';
import { tSiginCredentials } from '../../../models/user/user.types';

const ajv = new Ajv();

const schema: JSONSchemaType<tSiginCredentials> = {
  type: 'object',
  properties: {
    email: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['email', 'password'],
  additionalProperties: false,
};


export const validateSignin = ajv.compile(schema);