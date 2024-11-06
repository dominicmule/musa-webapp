import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@ApiTags('users')
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(Role.ADMIN)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Roles(Role.ADMIN, Role.LEADER)
  findAll() {
    return this.usersService.findAll();
  }

  @Get('pending-approvals')
  @Roles(Role.LEADER, Role.ADMIN)
  getPendingApprovals() {
    return this.usersService.getPendingApprovals();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.LEADER)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Post(':id/approve')
  @Roles(Role.LEADER, Role.ADMIN)
  approveUser(@Param('id') id: string, @Body('approverId') approverId: string) {
    return this.usersService.approveUser(id, approverId);
  }

  @Post(':id/promote-to-leader')
  @Roles(Role.ADMIN)
  promoteToLeader(@Param('id') id: string) {
    return this.usersService.promoteToLeader(id);
  }
}