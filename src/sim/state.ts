export class SIMState {
  state: Record<string, any>;

  constructor() {
    this.state = {};
  }

  get(key: string) {
    return this.state[key];
  }

  set(key: string, value: any) {
    this.state[key] = value;
  }

  snapshot() {
    return JSON.stringify(this.state);
  }
}
