export class SubstrateDO {
  state: DurableObjectState;

  constructor(state: DurableObjectState) {
    this.state = state;
  }

  async fetch(request: Request): Promise<Response> {
    const data = await this.state.storage.get("value");
    return new Response(JSON.stringify({ substrate: data || "empty" }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
