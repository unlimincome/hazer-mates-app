declare module 'express' {
  export interface Request {
    body?: any;
    params?: any;
  }
  export interface Response {
    status?: any;
    json?: any;
    send?: any;
  }
  export interface NextFunction {
    (...args: any[]): void;
  }
  export function Router(): any;
  const _default: any;
  export default _default;
}
declare module 'cors';
declare module 'dotenv';
declare module '@prisma/client';
declare module 'axios';
declare var process: any;
declare var console: any;
