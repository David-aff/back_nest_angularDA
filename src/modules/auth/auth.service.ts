
import { Injectable, HttpException } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService,
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async funRegister(objUser: RegisterAuthDto) {
        const plainToHash = await hash(objUser.password!, 12);

        const newUser = this.userRepository.create({
            name: objUser.name,
            email: objUser.email,
            password: plainToHash
        });

        return await this.userRepository.save(newUser);
    }

    async login(credenciales: LoginAuthDto) {
        const { email, password } = credenciales;

        const user = await this.userRepository.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            throw new HttpException('Usuario no encontrado', 404);
        }

        const verificarPass = await compare(password, user.password);

        if (!verificarPass) {
            throw new HttpException('Password inválido', 401);
        }

        const payload = {
            email: user.email,
            id: user.id
        };

        const token = this.jwtService.sign(payload);

        return {
            user: user,
            token: token
        };
    }
}
