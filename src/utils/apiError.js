// export class ApiError extends Error {
//   constructor(statusCode, message) {
//     super(message);
//     this.statusCode = statusCode;
//   }
// }

export class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;

    // Capture the stack trace
    Error.captureStackTrace(this, this.constructor);

    // Extract file and line number from the stack trace
    const stackLines = this.stack.split("\n");
    if (stackLines.length >= 2) {
      this.location = stackLines[1].trim(); // Get the 2nd line of the stack trace
    } else {
      this.location = "Location not available";
    }
  }
}
