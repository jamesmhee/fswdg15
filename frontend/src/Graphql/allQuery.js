import { gql } from '@apollo/client'


export const ALL_QUERY = gql`

query {
    customers {
        _id
    }
    products {
        _id
    }
    promotions {
        _id
    }
    orders {
        _id
    }
}
`