import Vue from "vue";

const dateFilter = (value) => {
  return formatDate(value);
};
function formatDate(value) {
  console.log("FORMAT DATE");
  let date = split(value, " ");
  return date[0];
}

Vue.filter("date", dateFilter);
