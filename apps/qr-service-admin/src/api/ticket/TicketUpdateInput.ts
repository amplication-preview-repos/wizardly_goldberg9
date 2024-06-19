import { QrCodeUpdateManyWithoutTicketsInput } from "./QrCodeUpdateManyWithoutTicketsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TicketUpdateInput = {
  date?: Date | null;
  event?: string | null;
  qrCodes?: QrCodeUpdateManyWithoutTicketsInput;
  user?: UserWhereUniqueInput | null;
};
