import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from '../common/enums/role.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.findByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const user = this.usersRepository.create({
      ...createUserDto,
      role: Role.VISITOR,
    });
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);
    return this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await this.usersRepository.remove(user);
  }

  async markEmailAsVerified(id: string): Promise<User> {
    const user = await this.findOne(id);
    user.isEmailVerified = true;
    return this.usersRepository.save(user);
  }

  async approveUser(id: string, approverId: string): Promise<User> {
    const user = await this.findOne(id);
    user.isApproved = true;
    user.approvedBy = approverId;
    user.role = Role.MEMBER;
    return this.usersRepository.save(user);
  }

  async promoteToLeader(id: string): Promise<User> {
    const user = await this.findOne(id);
    user.role = Role.LEADER;
    return this.usersRepository.save(user);
  }

  async getPendingApprovals(): Promise<User[]> {
    return this.usersRepository.find({
      where: {
        isEmailVerified: true,
        isApproved: false,
      },
    });
  }
}