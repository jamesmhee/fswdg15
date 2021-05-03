import { PromotionTC } from "../../models";
export const createPromotion = PromotionTC.getResolver("createOne");
export const updatePromotionById = PromotionTC.getResolver("updateById");
export const removePromotionById = PromotionTC.getResolver("removeById");
