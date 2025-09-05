import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserSignUpDto } from './dto/user-sign-up.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}


    @Post('/signup')
    signUp(@Body() userData: UserSignUpDto){
        return this.userService.signUp(userData);
    }
}
