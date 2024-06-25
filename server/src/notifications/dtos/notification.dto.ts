import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString, IsDate } from 'class-validator'
import { UserDto } from '../../users/dtos/user.dto'

export class NotificationDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'You have a new assignment' })
  @IsString()
  content: string

  @ApiProperty({ example: 1 })
  @IsInt()
  recipientId: number

  @ApiProperty({ example: 'unread' })
  @IsString()
  status: string

  @ApiProperty({ type: () => UserDto })
  recipient: UserDto

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  createdAt: Date

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  updatedAt: Date

  constructor(partial: Partial<NotificationDto>) {
    Object.assign(this, partial)
  }
}
