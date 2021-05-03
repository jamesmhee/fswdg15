import moment from "moment";
import { PromotionTC } from "../../models";
PromotionTC.addFields({
  timestamp: {
    type: "String",
    resolve: (source) => moment(source.timestamp).fromNow(),
    projection: { timestamp: 1 },
  },
});
