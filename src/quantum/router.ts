export class QuantumRouter {
  constructor() {}

  collapse(path: string) {
    return {
      original: path,
      collapsed: `/q/${path}`,
      time: Date.now()
    };
  }
}
