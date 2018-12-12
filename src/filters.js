import Vue from "vue";
import moment from "moment";

Vue.filter("nl2br", function(value) {
  if (!value) return "";
  // value = value.toString()
  return (value + "").replace(
    /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
    "$1" + "<br>" + "$2"
  );
});

Vue.filter("toString", function(value) {
  if (!value) return "";
  return value.toString();
});

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("MMMM Do, YYYY");
  }
});
