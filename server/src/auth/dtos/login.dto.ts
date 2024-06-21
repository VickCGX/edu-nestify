import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'
import { IsValidPassword } from 'src/shared'

export class LoginDto {
  @ApiProperty({ example: 'john_doe' })
  @IsString()
  @IsNotEmpty()
  username: string

  @ApiProperty({ example: 'Password123!' })
  @IsValidPassword()
  password: string
}
