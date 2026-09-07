import { SubstrateDO } from "./do/SubstrateDO";
import { BrokerDO } from "./do/BrokerDO";

export default {
  async fetch(request: Request, env: any) {
    const url = new URL(request.url);

    if (url.pathname === "/substrate") {
      const id = env.SubstrateDO.idFromName("root");
      const obj = env.SubstrateDO.get(id);
      return obj.fetch(request);
    }

    if (url.pathname === "/broker") {
      const id = env.BrokerDO.idFromName("root");
      const obj = env.BrokerDO.get(id);
      return obj.fetch(request);
    }

    return new Response("Portal‑OS Worker Runtime Online");
  }
};

export { SubstrateDO, BrokerDO };
