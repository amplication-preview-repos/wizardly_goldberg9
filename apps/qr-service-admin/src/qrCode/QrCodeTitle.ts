import { QrCode as TQrCode } from "../api/qrCode/QrCode";

export const QRCODE_TITLE_FIELD = "hash";

export const QrCodeTitle = (record: TQrCode): string => {
  return record.hash?.toString() || String(record.id);
};
