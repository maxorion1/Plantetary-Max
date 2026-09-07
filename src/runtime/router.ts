export class Router {
  routes: Map<string, Function>;

  constructor() {
    this.routes = new Map();
  }

  register(path: string, handler: Function) {
    this.routes.set(path, handler);
  }

  async handle(request: Request, env: any): Promise<Response> {
    const url = new URL(request.url);
    const handler = this.routes.get(url.pathname);

    if (!handler) {
      return new Response("Not Found", { status: 404 });
    }

    return handler(request, env);
  }
} 
