let app = new Vue({
  el: "#app",
  data: {
    name: "Easy Learning",
    address: "https://www.google.com",
    classes: ["one", "two"],
    name: "KHD",
    money: 100,
  },
  methods: {
    myname() {
      return "Eassssy learning method";
    },
    mydata(val) {
      return `${this.name} this is a value ${val}`;
    },
    amount(val) {
      return (this.money += val);
    },
  },
});
