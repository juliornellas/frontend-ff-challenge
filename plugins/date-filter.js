import Vue from "vue";

const dateFilter = (value) => {
  return formatDate(value);
};
function formatDate(value) {
  console.log("FORMAT DATE");
  const date = value.split(" ");
  return date[0].split("-").reverse().join("/");
}

Vue.filter("date", dateFilter);
