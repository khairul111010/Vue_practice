let app = new Vue({
  el: "#app",
  data: {
    name: "Easy Learning",
    address: "https://www.google.com",
    classes: ["one", "two"],
  },
  methods: {
    myname() {
      return "Eassssy learning method";
    },
    mydata(val) {
      return `${this.name} this is a value ${val}`;
    },
  },
});
