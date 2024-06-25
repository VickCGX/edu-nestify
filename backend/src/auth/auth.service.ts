import { Injectable, Inject, forwardRef, BadRequestException, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../users/user.service'
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from '../users/dtos/create-user.dto'
import { UserDto } from '../users/dtos/user.dto'
import { PrismaService } from '../../prisma/prisma.service'
import { TokensDto } from './dtos/token.dto'
import { LoginDto } from './dtos/login.dto'
import { JWT_ACCESS_TOPKEN_EXPIRATION, JWT_REFRESH_TOKEN_EXPIRATION } from 'src/shared'

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService
  ) {}

  async validateUser(username: string, pass: string): Promise<UserDto | null> {
    const user = await this.userService.findOne(username)
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(loginDto: LoginDto): Promise<TokensDto> {
    const user = await this.userService.findOne(loginDto.username)
    if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const payload = { username: user.username, sub: user.id }
    const accessToken = this.jwtService.sign(payload, { expiresIn: JWT_ACCESS_TOPKEN_EXPIRATION })
    const refreshToken = this.jwtService.sign(payload, { expiresIn: JWT_REFRESH_TOKEN_EXPIRATION })

    await this.prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id
      }
    })

    return {
      accessToken,
      refreshToken
    }
  }

  async register(createUserDto: CreateUserDto): Promise<UserDto> {
    const existingUser = await this.userService.findOne(createUserDto.username)
    if (existingUser) {
      throw new BadRequestException('Username already exists')
    }
    return this.userService.create(createUserDto)
  }

  async refresh(refreshToken: string): Promise<TokensDto> {
    try {
      const decoded = this.jwtService.verify(refreshToken)
      const tokenRecord = await this.prisma.refreshToken.findUnique({
        where: { token: refreshToken }
      })

      if (!tokenRecord) {
        throw new UnauthorizedException('Invalid refresh token')
      }

      const user = await this.userService.findOneById(decoded.sub)

      if (!user) {
        throw new UnauthorizedException('User not found')
      }

      const payload = { username: user.username, sub: user.id }
      const accessToken = this.jwtService.sign(payload, { expiresIn: JWT_ACCESS_TOPKEN_EXPIRATION })
      const newRefreshToken = this.jwtService.sign(payload, { expiresIn: JWT_REFRESH_TOKEN_EXPIRATION })

      await this.prisma.refreshToken.delete({
        where: { token: refreshToken }
      })

      await this.prisma.refreshToken.create({
        data: {
          token: newRefreshToken,
          userId: user.id
        }
      })

      return {
        accessToken,
        refreshToken: newRefreshToken
      }
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token')
    }
  }

  async revokeRefreshToken(refreshToken: string): Promise<void> {
    await this.prisma.refreshToken.delete({
      where: { token: refreshToken }
    })
  }
}
