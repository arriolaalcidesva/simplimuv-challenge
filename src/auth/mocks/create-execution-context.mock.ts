import { ExecutionContext } from '@nestjs/common';

export const createExecutionContextMock = (
  headers: Record<string, string> = {},
): ExecutionContext => {
  return {
    switchToHttp: () => ({
      getRequest: () => ({
        headers,
        body: {},
      }),
    }),
    getHandler: () => {},
    getClass: () => {},
  } as unknown as ExecutionContext;
};
