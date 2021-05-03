import { ProductTC } from "../../models";
import moment from "moment";
ProductTC.addFields({
  timestamp: {
    type: "String",
    resolve: (source) => moment(source.timestamp).fromNow(),
    projection: { timestamp: 1 },
  },
});
