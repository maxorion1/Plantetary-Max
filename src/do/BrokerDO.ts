export class BrokerDO {
  state: DurableObjectState;

  constructor(state: DurableObjectState) {
    this.state = state;
  }

  async fetch(request: Request): Promise<Response> {
    const data = await this.state.storage.get("broker");
    return new Response(JSON.stringify({ broker: data || "empty" }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
