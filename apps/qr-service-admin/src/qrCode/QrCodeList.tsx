import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { TICKET_TITLE_FIELD } from "../ticket/TicketTitle";

export const QrCodeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QRCodes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="hash" source="hash" />
        <TextField label="ID" source="id" />
        <BooleanField label="isValid" source="isValid" />
        <ReferenceField label="Ticket" source="ticket.id" reference="Ticket">
          <TextField source={TICKET_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
