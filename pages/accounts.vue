<template>
  <div>
    <div>Accounts</div>
    <hr />
    <ul>
      <li v-for="account in accounts" :key="account.id">
        Name: {{ account.name }} - Bank: {{ account.bank }}
      </li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    accounts: gql`
      query getAccounts {
        accounts {
          id
          name
          bank
        }
      }
    `,
  },
};
</script>
