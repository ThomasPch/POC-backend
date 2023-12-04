import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { Users } from './entities/users.entity';
import { HashingService } from './../shared/hashing/hashing.service';
import { BcryptService } from './../shared/hashing/bcrypt.service';
@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [
    {
      provide: HashingService,
      useClass: BcryptService,
    },
    UsersService,
    UsersResolver,
  ],
  exports: [UsersService],
})
export class UsersModule {}
