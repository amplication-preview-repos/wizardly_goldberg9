import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { TICKET_TITLE_FIELD } from "./TicketTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TicketShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="event" source="event" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="QrCode"
          target="ticketId"
          label="QRCodes"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="hash" source="hash" />
            <TextField label="ID" source="id" />
            <BooleanField label="isValid" source="isValid" />
            <ReferenceField
              label="Ticket"
              source="ticket.id"
              reference="Ticket"
            >
              <TextField source={TICKET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
