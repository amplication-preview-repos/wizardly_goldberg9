import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type QrCodeWhereInput = {
  hash?: StringNullableFilter;
  id?: StringFilter;
  isValid?: BooleanNullableFilter;
  ticket?: TicketWhereUniqueInput;
};
