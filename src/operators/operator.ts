export class Operator {
  constructor() {}

  route(input: string) {
    return {
      input,
      routed: true,
      timestamp: Date.now()
    };
  }
}
