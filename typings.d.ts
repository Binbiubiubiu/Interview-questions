interface Function {
  myApply(ctx: Function, ...args: any[]): any;
  myCall(ctx: Function, ...args: any[]): any;
  myBind(ctx: Function, ...args: any[]): (...fnArgs: any[]) => any;
}
