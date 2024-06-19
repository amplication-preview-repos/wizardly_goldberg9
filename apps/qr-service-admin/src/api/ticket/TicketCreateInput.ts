import { QrCodeCreateNestedManyWithoutTicketsInput } from "./QrCodeCreateNestedManyWithoutTicketsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TicketCreateInput = {
  date?: Date | null;
  event?: string | null;
  qrCodes?: QrCodeCreateNestedManyWithoutTicketsInput;
  user?: UserWhereUniqueInput | null;
};
