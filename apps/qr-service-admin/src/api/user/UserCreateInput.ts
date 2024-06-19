import { InputJsonValue } from "../../types";
import { TicketCreateNestedManyWithoutUsersInput } from "./TicketCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password: string;
  roles: InputJsonValue;
  tickets?: TicketCreateNestedManyWithoutUsersInput;
  username: string;
};
