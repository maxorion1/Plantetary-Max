export class FrontierLane {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  info() {
    return {
      lane: this.name,
      apps: 8,
      status: "active"
    };
  }
}
