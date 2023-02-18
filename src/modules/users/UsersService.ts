import { UsersDatabase } from "../../database/InMemoryDatabase"
import { UserExistsError } from "./errors/UserExistsError"
import { UserNotExistsError } from "./errors/UserNotExistsError"

class UsersService {
  private usersRepository: UsersDatabase
  
  constructor () {
    this.usersRepository = UsersDatabase.getInstance()
  }
  async create(name: string, age: number) {
    const userAlreadyExists = await this.usersRepository.findByName(name)
    if(userAlreadyExists) {
      throw new UserExistsError()
    }

    const user = await this.usersRepository.create({name, age})
    return user
  }

  async getUsers () {
    return this.usersRepository.getAll()
  }

  async getUserById (id: string) {
    const user = await this.usersRepository.findOne(id)
    if(!user) {
      throw new UserNotExistsError()
    }

    return user
  }
}

export { UsersService }
