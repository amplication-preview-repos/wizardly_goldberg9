import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TicketTitle } from "../ticket/TicketTitle";

export const QrCodeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="hash" source="hash" />
        <BooleanInput label="isValid" source="isValid" />
        <ReferenceInput source="ticket.id" reference="Ticket" label="Ticket">
          <SelectInput optionText={TicketTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
