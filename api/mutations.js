import gql from "graphql-tag";

export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory(
    $updateCategoryId: ID!
    $name: String!
    $color: String
  ) {
    updateCategory(id: $updateCategoryId, name: $name, color: $color) {
      id
      name
      color
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation CreateCategory($name: String, $color: String) {
    createCategory(name: $name, color: $color) {
      id
      name
      color
    }
  }
`;
