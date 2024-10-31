const app = Vue.createApp({
    data: function () {
      return {
        action: 'Achat de café',
        brand: 'Nespresso',
        description: 'Commandez vos capsules de café en ligne',
        link: 'https://www.nespresso.com/fr/fr/',
        cart: [],
      };
    },
    methods: {
        addToCart(id) {
            this.cart.push(id);
        },
        removeFromCart() {
            if (this.cart.length > 0) {
                this.cart.pop();
            }
        }
    },
    computed: {
        title() {
            return this.action + ' ' + this.brand;
        },
    }
  });