function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}
let resule = add(10, 20);

// NEVER
function fail(msg: string): never {
  throw new Error(msg);
}
