import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  event?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
