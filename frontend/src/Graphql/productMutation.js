import { gql } from "@apollo/client";

export const CREATE_PRODUCT_MUTATION = gql`
  mutation($record: CreateOneProductInput!) {
    createProduct(record: $record) {
      record {
        name
        detail {
          monitor
          storage
          cpu
          gpu
          ram
          os
          brand
        }
        price
        url
      }
    }
  }
`;
export const UPDATE_PRODUCT_MUTATION = gql`
  mutation($id: MongoID!, $record: UpdateByIdProductInput!) {
    updateProductById(_id: $id, record: $record) {
      recordId
      record {
        name
        detail {
          monitor
          cpu
          gpu
          storage
          ram
          os
          brand
        }
        price
        url
        isRecommended
        appearInCart {
          cartOwner
          quantity
        }
        _id
      }
      error {
        message
      }
    }
  }
`;
