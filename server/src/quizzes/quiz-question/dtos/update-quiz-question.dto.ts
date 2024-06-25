import { PartialType } from '@nestjs/swagger'
import { CreateQuizQuestionDto } from './create-quiz-question.dto'

export class UpdateQuizQuestionDto extends PartialType(CreateQuizQuestionDto) {}
