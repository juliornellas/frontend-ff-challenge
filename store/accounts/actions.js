export default {
  setAccountsName({ commit }, payload) {
    commit("STORE_ACCOUNTS_NAME", payload);
  },
  setBanks({ commit }, payload) {
    commit("STORE_BANKS", payload);
  },
};
