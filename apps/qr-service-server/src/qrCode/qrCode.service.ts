import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QrCodeServiceBase } from "./base/qrCode.service.base";

@Injectable()
export class QrCodeService extends QrCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
