import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TicketTitle } from "../ticket/TicketTitle";

export const QrCodeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="hash" source="hash" />
        <BooleanInput label="isValid" source="isValid" />
        <ReferenceInput source="ticket.id" reference="Ticket" label="Ticket">
          <SelectInput optionText={TicketTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
