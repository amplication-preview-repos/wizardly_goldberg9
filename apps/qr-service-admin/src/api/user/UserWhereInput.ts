import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  tickets?: TicketListRelationFilter;
  username?: StringFilter;
};
