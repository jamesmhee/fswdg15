import { OrderTC } from "../../models";

export const order = OrderTC.getResolver("findOne");
export const orders = OrderTC.getResolver("findMany");
