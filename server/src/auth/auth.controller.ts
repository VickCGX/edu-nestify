import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards, Request } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { UserDto } from 'src/users/dtos/user.dto'
import { CreateUserDto } from 'src/users/dtos/create-user.dto'
import { LoginDto } from './dtos/login.dto'
import { TokensDto } from './dtos/token.dto'


@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: HttpStatus.OK, description: 'User logged in successfully', type: TokensDto })
  async login(@Body() loginDto: LoginDto): Promise<TokensDto> {
    return this.authService.login(loginDto)
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'User registration' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'User registered successfully', type: UserDto })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Invalid input' })
  async register(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return this.authService.register(createUserDto)
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Refresh access token' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Access token refreshed successfully', type: TokensDto })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Invalid refresh token' })
  async refresh(@Body('refreshToken') refreshToken: string): Promise<TokensDto> {
    return this.authService.refresh(refreshToken)
  }

  @Post('revoke')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Revoke refresh token' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Refresh token revoked successfully' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Invalid refresh token' })
  async revoke(@Body('refreshToken') refreshToken: string): Promise<void> {
    return this.authService.revokeRefreshToken(refreshToken)
  }
}
