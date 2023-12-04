import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsInt,
  Min,
  IsIn,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  readonly name: string;

  @Field()
  @IsEmail()
  readonly email: string;

  @Field()
  @IsString()
  @MaxLength(40)
  readonly username: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(60)
  password: string;

  @Field()
  @IsInt()
  @Min(0)
  readonly age: number;

  @Field()
  @IsInt()
  @Min(0)
  readonly weight: number;

  @Field()
  @IsString()
  @IsIn(['male', 'female'])
  readonly gender: string;
}
