import { Ticket } from "../ticket/Ticket";

export type QrCode = {
  createdAt: Date;
  hash: string | null;
  id: string;
  isValid: boolean | null;
  ticket?: Ticket | null;
  updatedAt: Date;
};
