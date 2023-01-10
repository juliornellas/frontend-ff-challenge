export default {
  setAccountsName({ commit }, payload) {
    console.log("ACTIONS: STORE ACCOUNTS", payload);
    commit("STORE_ACCOUNTS_NAME", payload);
  },
  setBanks({ commit }, payload) {
    console.log("ACTIONS: STORE BANKS", payload);
    commit("STORE_BANKS", payload);
  },
};
