import { JsonValue } from "type-fest";
import { Ticket } from "../ticket/Ticket";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  roles: JsonValue;
  tickets?: Array<Ticket>;
  updatedAt: Date;
  username: string;
};
