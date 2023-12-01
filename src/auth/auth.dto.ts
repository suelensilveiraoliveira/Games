/* eslint-disable prettier/prettier */

import { IsStrongPassword } from "class-validator";

// auth.dto.ts
export class LoginDto {
  readonly username: string;

  @IsStrongPassword({
    minLength: 4,
    minNumbers: 0,
    minSymbols: 0,
    minUppercase: 0,
    minLowercase: 0
  })
  password: string;

}


