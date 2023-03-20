export class CustomError {
  message: string;
  status: number;
  name: string;

  constructor(message: string) {
    this.message = message;
    this.status = 4000;
    this.name = 'Error';
  }
}

export class UnauthorizedError extends CustomError {
  constructor(message: string) {
    super(message);
    this.status = 401;
    this.name = 'Unauthorized';
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string) {
    super(message);
    this.status = 404;
    this.name = 'Not Found';
  }
}