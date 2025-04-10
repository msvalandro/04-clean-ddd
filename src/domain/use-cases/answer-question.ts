import { Answer } from '../entities/answer'

type AnswerQuestionUseCaseRequest = {
  instructionId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  execute({
    instructionId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({ content, authorId: instructionId, questionId })

    return answer
  }
}
