import { User } from "./Entities/User";

class UsersDatabase {
  private static INSTANCE: UsersDatabase

	public static getInstance(): UsersDatabase { 
    if (!UsersDatabase.INSTANCE) { 
      UsersDatabase.INSTANCE = new UsersDatabase();
    } 
    return UsersDatabase.INSTANCE;
  }	

  private users: User[] = []

  async create({ name, age }: User): Promise<User> {
    const user = new User()

    Object.assign(user, { name, age })
    this.users.push(user)

    return user
  }

  async findOne(id: string): Promise<User> {
    return this.users.find(user => user.id === id)
  }

  async getAll(): Promise<User[]> {
    return this.users
  }

  async findByName(name: string): Promise<User> {
    return this.users.find(user => user.name === name)
  }
}

export { UsersDatabase };
