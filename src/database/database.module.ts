import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalConfigService } from 'src/shared/global-confing.service';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [GlobalConfigService],
      useFactory:(config: GlobalConfigService)=>{
        return{
          type: 'mysql',
          host: config.env.DB_HOST,
          port: config.env.DB_PORT,
          username: config.env.DB_USER,
          password: config.env.DB_PASSWORD,
          database: config.env.DB_NAME,
          autoLoadEntities: true,
          synchronize: config.env.NODE_ENV === 'development' ? true : false,
          logging: true,
        }
      }
    })
  ]
})
export class DatabaseModule {}
