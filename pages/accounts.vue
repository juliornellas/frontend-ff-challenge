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
    <button
      @click="createCategory"
      class="my-4 p-4 border rounded hover:bg-gray-300"
    >
      Update category
    </button>
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
      // name: "Advertising Updated",
      // color: "7048a3",
      name: "New category",
      color: "ccc",
    };
  },

  methods: {
    createCategory() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation CreateCategory($name: String, $color: String) {
              createCategory(name: $name, color: $color) {
                id
                name
                color
              }
            }
          `,
          variables: {
            name: this.name,
            color: this.color,
          },
        })
        .then((data) => {
          console.log("CREATED!");
          console.log(data);
        })
        .catch((error) => console.log("Error to create", error));
    },
  },
};
</script>
