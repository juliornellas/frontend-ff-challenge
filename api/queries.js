import gql from "graphql-tag";

/**
 * To: transactions/index.vue
 */
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
    $accountId: String
    $skip: Int
    $take: Int
    $currency: String
    $orderBy: TransactionsOrderByInput
    $startingDate: String
    $endingDate: String
  ) {
    filteredTransactions(
      filter: $filter
      accountId: $accountId
      skip: $skip
      take: $take
      currency: $currency
      orderBy: $orderBy
      startingDate: $startingDate
      endingDate: $endingDate
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

/**
 * To: transactions/details/index.vue
 */
export const TRANSACTION = gql`
  query getTransaction($id: ID!) {
    transaction(id: $id) {
      id
      reference
      amount
      currency
      date
      accountId
      updatedAt
      categoryId
    }
  }
`;

export const CATEGORY = gql`
  query getCategory($id: ID!) {
    category(id: $id) {
      name
      color
    }
  }
`;

export const ACCOUNT = gql`
  query getAccount($id: ID!) {
    account(id: $id) {
      name
      bank
    }
  }
`;
