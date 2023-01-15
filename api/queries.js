import gql from "graphql-tag";

export const ALL_ACCOUNTS = gql`
  query getAccounts {
    accounts {
      id
      name
      bank
    }
  }
`;

export const TRANSACTIONS = gql`
  query getTransactions {
    transactions {
      id
      accountId
      categoryId
      reference
      amount
      currency
      date
    }
  }
`;

export const ALL_CATEGORIES = gql`
  query getCategories {
    categories {
      id
      name
      color
    }
  }
`;

export const FILTERED_TRANSACTIONS = gql`
  query FilteredTransactions(
    $filter: String
    $skip: Int
    $take: Int
    $orderBy: TransactionsOrderByInput
  ) {
    filteredTransactions(
      filter: $filter
      skip: $skip
      take: $take
      orderBy: $orderBy
    ) {
      id
      accountId
      categoryId
      reference
      amount
      currency
      date
      updatedAt
    }
  }
`;
