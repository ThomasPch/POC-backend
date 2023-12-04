import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class SignInDto {
  @Field()
  @IsString()
  @MaxLength(40)
  readonly username: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(60)
  password: string;
}
