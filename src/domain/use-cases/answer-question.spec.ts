import { describe, expect, it } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository'

describe('UseCases: AnswerQuestionUseCase', () => {
  const fakeAnswersRepository: AnswersRepository = {
    create: async () => {},
  }

  it('should create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

    const answer = await answerQuestion.execute({
      instructionId: '1',
      questionId: '1',
      content: 'New answer',
    })

    expect(answer.content).toBe('New answer')
  })
})
