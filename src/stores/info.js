import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state() {
    return {
      counter: 0,
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      cardnum: "",
      month: "",
      year: "",
      cvv: "",
      cardImage: "/pay_imgs/credit-card-solid-24.png",
      cardType: "",
      openNav: false,
      openSearch: false,
    };
  },

  getters: {
    getInfo(state) {
      return {
        email: state.email,
        password: state.password,
        firstname: state.firstname,
        lastname: state.lastname,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        phone: state.phone,
        cardnum: state.cardnum,
        month: state.month,
        year: state.year,
        cvv: state.cvv,
      };
    },
    actions: {
      increment() {
        this.counter++;
      },
    },
    getCardType(state) {
      switch (state.cardImage) {
        case "/pay_imgs/credit-card-solid-24.png":
          return "unknown";
        case "/pay_imgs/mc.png":
          return "masterCard";
        case "/pay_imgs/visa.png":
          return "visa";
        case "/pay_imgs/Amex.png":
          return "amex";
        case "pay_imgs/discover.png":
          return "discover";
        default:
          return "unknown";
      }
    },
  },
});
