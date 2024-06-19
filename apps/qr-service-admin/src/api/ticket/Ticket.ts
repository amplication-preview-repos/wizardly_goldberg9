import { QrCode } from "../qrCode/QrCode";
import { User } from "../user/User";

export type Ticket = {
  createdAt: Date;
  date: Date | null;
  event: string | null;
  id: string;
  qrCodes?: Array<QrCode>;
  updatedAt: Date;
  user?: User | null;
};
