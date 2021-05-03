import { CheckoutTC } from "../../models";

export const createCheckout = CheckoutTC.getResolver("createOne");
export const updateCheckoutById = CheckoutTC.getResolver("updateById");
export const removeCheckoutById = CheckoutTC.getResolver("removeById");
