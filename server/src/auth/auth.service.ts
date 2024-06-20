import { Injectable, Inject, forwardRef } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../users/user.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username)
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }

  async register(user: any) {
    const newUser = await this.userService.create(user)
    return newUser
  }
}
