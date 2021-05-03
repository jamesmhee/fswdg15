import { gql } from "@apollo/client";

export const CREATE_CHECKOUT_MUTATION = gql`
  mutation($record: CreateOneCheckoutInput!) {
    createCheckout(record: $record) {
      record {
        _id
        firstname
        lastname
        email
        tel
        county
        city
        state
        address
        zip
        ownerName
      }
    }
  }
`
