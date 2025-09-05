import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UserSignUpDto } from './dto/user-sign-up.dto';

@Injectable()
export class UserService {
    private readonly logger = new Logger(UserService.name);
    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>
    ){}

    signUp(userData: UserSignUpDto){
        this.userRepo.create(userData);
        this.logger.log('User signed up successfully');
        const user = this.userRepo.save(userData);
        return {message: 'User signed up successfully', user};
    }
}
