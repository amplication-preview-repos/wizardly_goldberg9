import { InputJsonValue } from "../../types";
import { TicketUpdateManyWithoutUsersInput } from "./TicketUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  roles?: InputJsonValue;
  tickets?: TicketUpdateManyWithoutUsersInput;
  username?: string;
};
