class UserExistsError {
  public readonly statusCode: number;
  public readonly message: string;

  constructor(message = "User Already Exists", statusCode = 400) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

export { UserExistsError };
