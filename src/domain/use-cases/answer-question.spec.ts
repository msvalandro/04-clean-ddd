import { describe, it, expect } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

describe('UseCases: AnswerQuestionUseCase', () => {
  it('should create an answer', () => {
    const answerQuestion = new AnswerQuestionUseCase()

    const answer = answerQuestion.execute({
      instructionId: '1',
      questionId: '1',
      content: 'New answer',
    })

    expect(answer.content).toBe('New answer')
  })
})
