import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsInt } from 'class-validator'

export class CreateNotificationDto {
  @ApiProperty({ example: 'You have a new assignment' })
  @IsString()
  @IsNotEmpty()
  content: string

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  recipientId: number

  @ApiProperty({ example: 'unread' })
  @IsString()
  @IsNotEmpty()
  status: string
}
