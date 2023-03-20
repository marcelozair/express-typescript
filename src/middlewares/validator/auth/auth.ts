import Ajv, { JSONSchemaType } from 'ajv';
import { NewUser } from 'src/types/user';
import { AuthForgotPassowrd, AuthSignIn } from 'src/types/auth';

const ajv = new Ajv();

const schemaSignin: JSONSchemaType<AuthSignIn> = {
  type: 'object',
  properties: {
    email: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['email', 'password'],
  additionalProperties: false,
};

const schemaSignup: JSONSchemaType<NewUser> = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['name', 'email', 'password'],
  additionalProperties: false,
};

const schemaForgotPassword: JSONSchemaType<AuthForgotPassowrd> = {
  type: 'object',
  properties: {
    email: { type: 'string' },
  },
  required: ['email'],
  additionalProperties: false,
};

export const validateSignin = ajv.compile(schemaSignin);
export const validateSignup = ajv.compile(schemaSignup);
export const validateForgotPassword = ajv.compile(schemaForgotPassword);