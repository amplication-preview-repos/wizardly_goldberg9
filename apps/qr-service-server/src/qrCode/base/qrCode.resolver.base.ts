/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { QrCode } from "./QrCode";
import { QrCodeCountArgs } from "./QrCodeCountArgs";
import { QrCodeFindManyArgs } from "./QrCodeFindManyArgs";
import { QrCodeFindUniqueArgs } from "./QrCodeFindUniqueArgs";
import { CreateQrCodeArgs } from "./CreateQrCodeArgs";
import { UpdateQrCodeArgs } from "./UpdateQrCodeArgs";
import { DeleteQrCodeArgs } from "./DeleteQrCodeArgs";
import { Ticket } from "../../ticket/base/Ticket";
import { QrCodeService } from "../qrCode.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QrCode)
export class QrCodeResolverBase {
  constructor(
    protected readonly service: QrCodeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QrCode",
    action: "read",
    possession: "any",
  })
  async _qrCodesMeta(
    @graphql.Args() args: QrCodeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [QrCode])
  @nestAccessControl.UseRoles({
    resource: "QrCode",
    action: "read",
    possession: "any",
  })
  async qrCodes(@graphql.Args() args: QrCodeFindManyArgs): Promise<QrCode[]> {
    return this.service.qrCodes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => QrCode, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QrCode",
    action: "read",
    possession: "own",
  })
  async qrCode(
    @graphql.Args() args: QrCodeFindUniqueArgs
  ): Promise<QrCode | null> {
    const result = await this.service.qrCode(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QrCode)
  @nestAccessControl.UseRoles({
    resource: "QrCode",
    action: "create",
    possession: "any",
  })
  async createQrCode(@graphql.Args() args: CreateQrCodeArgs): Promise<QrCode> {
    return await this.service.createQrCode({
      ...args,
      data: {
        ...args.data,

        ticket: args.data.ticket
          ? {
              connect: args.data.ticket,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QrCode)
  @nestAccessControl.UseRoles({
    resource: "QrCode",
    action: "update",
    possession: "any",
  })
  async updateQrCode(
    @graphql.Args() args: UpdateQrCodeArgs
  ): Promise<QrCode | null> {
    try {
      return await this.service.updateQrCode({
        ...args,
        data: {
          ...args.data,

          ticket: args.data.ticket
            ? {
                connect: args.data.ticket,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => QrCode)
  @nestAccessControl.UseRoles({
    resource: "QrCode",
    action: "delete",
    possession: "any",
  })
  async deleteQrCode(
    @graphql.Args() args: DeleteQrCodeArgs
  ): Promise<QrCode | null> {
    try {
      return await this.service.deleteQrCode(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Ticket, {
    nullable: true,
    name: "ticket",
  })
  @nestAccessControl.UseRoles({
    resource: "Ticket",
    action: "read",
    possession: "any",
  })
  async getTicket(@graphql.Parent() parent: QrCode): Promise<Ticket | null> {
    const result = await this.service.getTicket(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
