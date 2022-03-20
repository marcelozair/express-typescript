import Ajv, { JSONSchemaType } from 'ajv';
import { tForgotPassword, tSiginCredentials, tSigupCredentials } from '../../../models/user/user.types';

const ajv = new Ajv();

const schemaSignin: JSONSchemaType<tSiginCredentials> = {
  type: 'object',
  properties: {
    email: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['email', 'password'],
  additionalProperties: false,
};

const schemaSignup: JSONSchemaType<tSigupCredentials> = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['name', 'email', 'password'],
  additionalProperties: false,
};

const schemaForgotPassword: JSONSchemaType<tForgotPassword> = {
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