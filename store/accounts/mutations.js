export default {
  STORE_ACCOUNTS_NAME(state, payload) {
    console.log("MUTATION: STORE ACCOUNTS", payload);
    // sessionStorage.setItem("accounts", payload);
    state.accounts = payload;
    // if (process.client) {
    //   console.log("MUTATION - PROCESS: STORE ACCOUNTS");
    //   sessionStorage.setItem("accounts", payload.accounts);
    //   state.accounts = payload.accounts;
    // }
  },
  STORE_BANKS(state, payload) {
    // console.log("MUTATION: STORE BANKS", payload);
    // sessionStorage.setItem("banks", payload);
    // state.banks = payload.banks;
    // if (process.client) {
    //   console.log("MUTATION PROCESS: STORE BANKS");
    //     localStorage.setItem("banks", payload.banks);
    //   state.banks = payload.banks;
    // }
  },
};
