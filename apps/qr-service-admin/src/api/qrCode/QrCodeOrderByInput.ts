import { SortOrder } from "../../util/SortOrder";

export type QrCodeOrderByInput = {
  createdAt?: SortOrder;
  hash?: SortOrder;
  id?: SortOrder;
  isValid?: SortOrder;
  ticketId?: SortOrder;
  updatedAt?: SortOrder;
};
