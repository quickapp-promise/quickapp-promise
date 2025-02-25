export type GetOptions<T> = T extends (...args: infer P) => void
? P[0] extends { [key: string]: any }
? Omit<P[0], 'success' | 'fail' | 'cancel' | 'callback' | 'complete'>
: void
: void;

export type GetCallbackOptions<T, K extends string> = T extends (...args: infer P) => void 
? (P[0] & {}) extends { [key in K]?: (...args: infer PP) => void }
? PP[0] extends undefined
? void
: PP[0]
: void
: void;

export function quickPromiseFunctor<T extends (...args: any) => void>(fn: T, resolveKey: 'success', ctx?: any): (options: GetOptions<T>) => Promise<GetCallbackOptions<T, 'success'>>;
export function quickPromiseFunctor<T extends (...args: any) => void>(fn: T, resolveKey: 'callback', ctx?: any): (options: GetOptions<T>) => Promise<GetCallbackOptions<T, 'callback'>>;
export function quickPromiseFunctor<T extends (...args: any) => void>(fn: T, resolveKey: any, ctx?: any) {
  if (ctx) fn = fn.bind(ctx) as T;

  return function(options: GetOptions<T>): Promise<any> {
    return new Promise((resolve, reject) => {
      fn({
        ...options,
        [resolveKey]: resolve,
        fail: (data: any, code: any) => {
          reject({ data, code });
        },
        cancel: () => {
          reject({ data: 'user cancel', code: -1 });
        },
      });
    });
  };
}
