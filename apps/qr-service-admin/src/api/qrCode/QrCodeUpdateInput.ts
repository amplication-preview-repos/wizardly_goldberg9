import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type QrCodeUpdateInput = {
  hash?: string | null;
  isValid?: boolean | null;
  ticket?: TicketWhereUniqueInput | null;
};
