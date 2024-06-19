import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type QrCodeCreateInput = {
  hash?: string | null;
  isValid?: boolean | null;
  ticket?: TicketWhereUniqueInput | null;
};
