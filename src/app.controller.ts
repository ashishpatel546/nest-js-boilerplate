import { Controller, Get, Redirect, UseGuards, Version, VERSION_NEUTRAL, VersioningType } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import { User } from './custom-decorator/user-decorator';
import { AuthGaurd } from './gaurds/auth-gaurd';

@ApiTags('Health Check')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('/')
  @Version(VERSION_NEUTRAL)
  @ApiExcludeEndpoint()
  @Redirect('/v1/health-check', 302)
  redirectToHealth() {
    return;
  }

  @UseGuards(AuthGaurd)
  @Get('/health-check')
  @Version(VERSION_NEUTRAL)
  healthCheck() {
    return this.appService.healthCheck();
  }
}
