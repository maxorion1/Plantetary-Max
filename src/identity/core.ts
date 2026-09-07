export class IdentityCore {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  profile() {
    return {
      id: this.id,
      type: "Portal‑Identity",
      active: true
    };
  }
}
