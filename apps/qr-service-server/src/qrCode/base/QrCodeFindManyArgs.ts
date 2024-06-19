/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QrCodeWhereInput } from "./QrCodeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { QrCodeOrderByInput } from "./QrCodeOrderByInput";

@ArgsType()
class QrCodeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QrCodeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => QrCodeWhereInput, { nullable: true })
  @Type(() => QrCodeWhereInput)
  where?: QrCodeWhereInput;

  @ApiProperty({
    required: false,
    type: [QrCodeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [QrCodeOrderByInput], { nullable: true })
  @Type(() => QrCodeOrderByInput)
  orderBy?: Array<QrCodeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { QrCodeFindManyArgs as QrCodeFindManyArgs };