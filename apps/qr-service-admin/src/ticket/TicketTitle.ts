import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "event";

export const TicketTitle = (record: TTicket): string => {
  return record.event?.toString() || String(record.id);
};
