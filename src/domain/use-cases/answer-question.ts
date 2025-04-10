import { Answer } from '../entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'
import { UniqueEntityID } from '../../core/entities/unique-entity-id'

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
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(instructionId),
      questionId: new UniqueEntityID(questionId),
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
