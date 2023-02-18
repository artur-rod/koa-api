import { randomUUID } from "crypto";

class User {
  constructor() {
    if (!this.id) {
      this.id = randomUUID()
      this.created_at = new Date()
    }
  }

  id?: string;
  name: string;
  age: Number;
  created_at?: Date;
}

export { User };
