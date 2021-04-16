import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, ReadUserDto } from './dtos';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

    async create(user: CreateUserDto) : Promise<CreateUserDto>{
        return await this.usersRepository.save(user);
    }
  
    async findById(id: Number): Promise<ReadUserDto> {
        return await this.usersRepository.findOne(id.toString());
    }

    async findAll(): Promise<ReadUserDto[]> {
        return await this.usersRepository.find();
    }

}
