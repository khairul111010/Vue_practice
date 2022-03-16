let app = new Vue({
  el: "#app",
  data: {
    name: "Easy Learning",
  },
  methods: {
    myname() {
      return "Eassssy learning method";
    },
    mydata() {
      return `${this.name}`;
    },
  },
});
