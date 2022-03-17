let app = new Vue({
  el: "#app",
  data: {
    name: "Easy Learning",
    address: "https://www.google.com",
    classes: ["one", "two"],
    Name: false,
    money: 100,
    log: {
      x: 0,
      y: 0,
    },
    keydata: "Keydata",
    age: true,
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
    objectDetails(e) {
      console.log(e);
    },
    over(e) {
      // alert("done");
      // console.log(e);
      this.log.x = e.offsetX;
      this.log.y = e.offsetY;
    },
    keymethod(e) {
      // console.log(e.target.value);
      this.keydata = e.target.value;
    },
    vueModifiers() {
      console.log(this.name);
    },
    showage() {
      this.Name = !this.Name;
    },
  },
});
