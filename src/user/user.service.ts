import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  
  constructor(@InjectRepository(User) private userRepository: Repository<User>){}

  async createUser(userDetails: CreateUserDto ){

    try{
      //hashPassword
      const salt = 10;
      const hashedPassword = await bcrypt.hash(userDetails.password,salt)//hashing
      console.log(hashedPassword)

      const newUser = await this.userRepository.create({
        firstName:userDetails.firstName,
        lastName:userDetails.lastName,
        email:userDetails.email,
        // phoneNumber:userDetails.phoneNumber,
        hashedPassword:hashedPassword
      })

      const result = await this.userRepository.save(newUser);
      return true;

    }catch(err){
      throw new BadRequestException(err.message)
    }
  }
}
