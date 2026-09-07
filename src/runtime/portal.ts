export class PortalRuntime {
  constructor() {}

  status() {
    return {
      name: "Portal‑OS",
      version: "4.4.0",
      runtime: "Worker‑only",
      durableObjects: ["SubstrateDO", "BrokerDO"]
    };
  }
}
