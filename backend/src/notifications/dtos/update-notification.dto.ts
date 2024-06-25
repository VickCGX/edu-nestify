import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsOptional, IsInt } from 'class-validator'

export class UpdateNotificationDto {
  @ApiPropertyOptional({ example: 'You have a new assignment' })
  @IsString()
  @IsOptional()
  content?: string

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  recipientId?: number

  @ApiPropertyOptional({ example: 'unread' })
  @IsString()
  @IsOptional()
  status?: string
}
