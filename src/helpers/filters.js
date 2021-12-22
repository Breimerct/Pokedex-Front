import Vue from "vue";

Vue.filter("capitalize", function (value) {
  if (!value) return "";
  value = value
    .toString()
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, (l) => l.toUpperCase());
  return value;
});

Vue.filter("lowercase", function (value) {
  if (!value) return "";
  value = value.toString();
  return value.toLowerCase();
});

Vue.filter("uppercase", function (value) {
  if (!value) return "";
  value = value.toString();
  return value.toUpperCase();
});

Vue.filter("capitalizeFirstWord", function (value) {
  value = value.toString().toLowerCase();
  return value[0].toString().toUpperCase() + value.toString().slice(1);
});

Vue.filter("nameStats", function (value) {
  switch (value.toString().toLowerCase()) {
    case "special-attack": {
      return "spc. Attack";
    }
    case "special-defense": {
      return "spc. Defence";
    }
    default: {
      return value;
    }
  }
});
