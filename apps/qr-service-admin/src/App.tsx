import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TicketList } from "./ticket/TicketList";
import { TicketCreate } from "./ticket/TicketCreate";
import { TicketEdit } from "./ticket/TicketEdit";
import { TicketShow } from "./ticket/TicketShow";
import { QrCodeList } from "./qrCode/QrCodeList";
import { QrCodeCreate } from "./qrCode/QrCodeCreate";
import { QrCodeEdit } from "./qrCode/QrCodeEdit";
import { QrCodeShow } from "./qrCode/QrCodeShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"QRService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Ticket"
          list={TicketList}
          edit={TicketEdit}
          create={TicketCreate}
          show={TicketShow}
        />
        <Resource
          name="QrCode"
          list={QrCodeList}
          edit={QrCodeEdit}
          create={QrCodeCreate}
          show={QrCodeShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
