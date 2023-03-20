export interface BodyRequest<T> extends Express.Request {
  body: T;
}
