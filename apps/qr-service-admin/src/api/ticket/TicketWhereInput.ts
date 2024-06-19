import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QrCodeListRelationFilter } from "../qrCode/QrCodeListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TicketWhereInput = {
  date?: DateTimeNullableFilter;
  event?: StringNullableFilter;
  id?: StringFilter;
  qrCodes?: QrCodeListRelationFilter;
  user?: UserWhereUniqueInput;
};
