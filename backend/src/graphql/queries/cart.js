import { CartTC } from "../../models/cart";

export const cart = CartTC.getResolver('findOne')
export const carts = CartTC.getResolver('findMany')