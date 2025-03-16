import { type Command, IdValueObject } from 'shared'
import type { SessionsRepository } from '../repositories/sessions.repository'

type Input = {
  userId: string
  maxAge: number
}

export class CreateSessionCommand implements Command<Input, Promise<{ id: string }>> {
  constructor(private readonly sessionsRepository: SessionsRepository) {}

  async execute({ maxAge, userId }: Input): Promise<{ id: string }> {
    return this.sessionsRepository.create({
      id: IdValueObject.create(),
      userId: IdValueObject.create(userId),
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 1000 * maxAge)
    })
  }
}
