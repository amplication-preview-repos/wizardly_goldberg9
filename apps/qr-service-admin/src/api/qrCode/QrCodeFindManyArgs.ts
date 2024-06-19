import { QrCodeWhereInput } from "./QrCodeWhereInput";
import { QrCodeOrderByInput } from "./QrCodeOrderByInput";

export type QrCodeFindManyArgs = {
  where?: QrCodeWhereInput;
  orderBy?: Array<QrCodeOrderByInput>;
  skip?: number;
  take?: number;
};
