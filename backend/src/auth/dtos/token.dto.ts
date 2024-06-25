import { ApiProperty } from '@nestjs/swagger'

export class TokensDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  accessToken: string

  @ApiProperty({ example: 'dGhpc2lzYXJlZnJlc2h0b2tlbg==' })
  refreshToken: string
}
