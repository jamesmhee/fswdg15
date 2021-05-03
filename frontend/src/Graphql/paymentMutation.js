import { gql } from "@apollo/client";
export const CREATE_PAYMENT_MUTATION = gql`
  mutation($record: CreateOnePaymentInput!) {
    createPayment(record: $record) {
      recordId
      record {
        nameoncard
        cardnumber
        expdate
        cvcode
        owner {
          role
        }
        ownerName
      }
    }
  }
`;
