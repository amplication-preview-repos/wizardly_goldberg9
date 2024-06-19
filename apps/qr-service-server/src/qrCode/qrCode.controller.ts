import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QrCodeService } from "./qrCode.service";
import { QrCodeControllerBase } from "./base/qrCode.controller.base";

@swagger.ApiTags("qrCodes")
@common.Controller("qrCodes")
export class QrCodeController extends QrCodeControllerBase {
  constructor(
    protected readonly service: QrCodeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
