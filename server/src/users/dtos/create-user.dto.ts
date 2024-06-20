import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ example: 'johndoe', description: 'The username of the user' })
  username: string

  @ApiProperty({ example: 'password123', description: 'The password of the user' })
  password: string

  @ApiPropertyOptional({ example: 'John Doe', description: 'The name of the user' })
  name?: string
}
