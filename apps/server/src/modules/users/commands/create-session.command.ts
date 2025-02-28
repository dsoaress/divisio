import { type Command, IdValueObject } from 'shared'
import type { SessionsRepository } from '../repositories/sessions.repository'

export class CreateSessionCommand implements Command<string, Promise<{ id: string }>> {
  constructor(private readonly sessionsRepository: SessionsRepository) {}

  async execute(userId: string): Promise<{ id: string }> {
    return this.sessionsRepository.create({
      id: IdValueObject.create(),
      userId: IdValueObject.create(userId),
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 15) // 15 days
    })
  }
}
