export {};

declare global {
  namespace express {
    interface Request {
      user?: any;
    }
  }
}
