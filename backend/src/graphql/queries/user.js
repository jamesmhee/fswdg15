import { UserTC, CustomerTC, AdminTC, UserModel} from "../../models";
import { requiredAuth } from "../middlewares";
import { schemaComposer } from "graphql-compose";

export const userById = UserTC.getResolver("findById");
export const customers = CustomerTC.getResolver("findMany");
export const admins = AdminTC.getResolver("findMany");

export const me = schemaComposer
  .createResolver({
    name: "me",
    type: UserTC.getDInterface().getType(),
    resolve: async ({ context }) => {
      const { _id } = context.user;
      const user = await UserModel.findById(_id);
      return user;
    },
  })
  .wrapResolve(requiredAuth);
