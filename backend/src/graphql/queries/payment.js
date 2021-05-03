import { PaymentTC } from "../../models";

export const payments = PaymentTC.getResolver("findMany");
export const paymentById = PaymentTC.getResolver("findById");
