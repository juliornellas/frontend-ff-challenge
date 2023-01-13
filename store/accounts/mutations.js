export default {
  STORE_ACCOUNTS_NAME(state, payload) {
    state.accounts = payload;
  },
  STORE_BANKS(state, payload) {
    state.banks = payload;
  },
};
