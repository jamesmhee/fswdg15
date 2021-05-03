import { gql } from "@apollo/client";

export const PROMOTIONS_QUERY = gql`
    query {
        promotions {
            _id
        }
    }
`