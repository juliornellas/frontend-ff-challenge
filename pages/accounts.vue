<template>
  <div>
    <div>Accounts</div>
    <hr />
    <ul>
      <!-- <li v-for="account in accounts" :key="account.id">
        Name: {{ account.name }} - Bank: {{ account.bank }}
      </li> -->
    </ul>
    <p>Category: {{ category }}</p>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    // accounts: gql`
    //   query getAccounts {
    //     accounts {
    //       id
    //       name
    //       bank
    //     }
    //   }
    // `,

    category: {
      query: gql`
        query getCategory($categoryId: ID!) {
          category(id: $categoryId) {
            id
            name
            color
          }
        }
      `,
      variables() {
        return {
          categoryId: this.categoryId,
        };
      },
    },
  },

  data() {
    return {
      categoryId: "6ad0e563-7f94-417d-8370-7eca2e52b2cc",
    };
  },
};
</script>
