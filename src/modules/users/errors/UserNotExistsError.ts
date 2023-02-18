class UserNotExistsError {
  public readonly statusCode: number;
  public readonly message: string;

  constructor(message = "User not found", statusCode = 404) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

export { UserNotExistsError };
