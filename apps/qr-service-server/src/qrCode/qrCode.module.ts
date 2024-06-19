import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QrCodeModuleBase } from "./base/qrCode.module.base";
import { QrCodeService } from "./qrCode.service";
import { QrCodeController } from "./qrCode.controller";
import { QrCodeResolver } from "./qrCode.resolver";

@Module({
  imports: [QrCodeModuleBase, forwardRef(() => AuthModule)],
  controllers: [QrCodeController],
  providers: [QrCodeService, QrCodeResolver],
  exports: [QrCodeService],
})
export class QrCodeModule {}
