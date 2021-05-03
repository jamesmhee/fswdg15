import { CheckoutTC } from "../../models";


export const checkout = CheckoutTC.getResolver('findOne')
export const checkouts = CheckoutTC.getResolver("findMany");
export const checkoutById = CheckoutTC.getResolver("findById");
