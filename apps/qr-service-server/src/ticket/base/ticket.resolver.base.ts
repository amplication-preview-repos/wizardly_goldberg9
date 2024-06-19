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
import { Ticket } from "./Ticket";
import { TicketCountArgs } from "./TicketCountArgs";
import { TicketFindManyArgs } from "./TicketFindManyArgs";
import { TicketFindUniqueArgs } from "./TicketFindUniqueArgs";
import { CreateTicketArgs } from "./CreateTicketArgs";
import { UpdateTicketArgs } from "./UpdateTicketArgs";
import { DeleteTicketArgs } from "./DeleteTicketArgs";
import { QrCodeFindManyArgs } from "../../qrCode/base/QrCodeFindManyArgs";
import { QrCode } from "../../qrCode/base/QrCode";
import { User } from "../../user/base/User";
import { TicketService } from "../ticket.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Ticket)
export class TicketResolverBase {
  constructor(
    protected readonly service: TicketService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Ticket",
    action: "read",
    possession: "any",
  })
  async _ticketsMeta(
    @graphql.Args() args: TicketCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Ticket])
  @nestAccessControl.UseRoles({
    resource: "Ticket",
    action: "read",
    possession: "any",
  })
  async tickets(@graphql.Args() args: TicketFindManyArgs): Promise<Ticket[]> {
    return this.service.tickets(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Ticket, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Ticket",
    action: "read",
    possession: "own",
  })
  async ticket(
    @graphql.Args() args: TicketFindUniqueArgs
  ): Promise<Ticket | null> {
    const result = await this.service.ticket(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Ticket)
  @nestAccessControl.UseRoles({
    resource: "Ticket",
    action: "create",
    possession: "any",
  })
  async createTicket(@graphql.Args() args: CreateTicketArgs): Promise<Ticket> {
    return await this.service.createTicket({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Ticket)
  @nestAccessControl.UseRoles({
    resource: "Ticket",
    action: "update",
    possession: "any",
  })
  async updateTicket(
    @graphql.Args() args: UpdateTicketArgs
  ): Promise<Ticket | null> {
    try {
      return await this.service.updateTicket({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
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

  @graphql.Mutation(() => Ticket)
  @nestAccessControl.UseRoles({
    resource: "Ticket",
    action: "delete",
    possession: "any",
  })
  async deleteTicket(
    @graphql.Args() args: DeleteTicketArgs
  ): Promise<Ticket | null> {
    try {
      return await this.service.deleteTicket(args);
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
  @graphql.ResolveField(() => [QrCode], { name: "qrCodes" })
  @nestAccessControl.UseRoles({
    resource: "QrCode",
    action: "read",
    possession: "any",
  })
  async findQrCodes(
    @graphql.Parent() parent: Ticket,
    @graphql.Args() args: QrCodeFindManyArgs
  ): Promise<QrCode[]> {
    const results = await this.service.findQrCodes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Ticket): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
