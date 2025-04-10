import { Answer } from '../entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'

type AnswerQuestionUseCaseRequest = {
  instructionId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    instructionId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content,
      authorId: instructionId,
      questionId,
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
