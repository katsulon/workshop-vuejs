const app = Vue.createApp({
    data: function () {
      return {
        action: 'Achat de café',
        brand: 'Nespresso',
        description: 'Commandez vos capsules de café en ligne',
        link: 'https://www.nespresso.com/fr/fr/',
        cart: 0,
        styles: {
            roundButton: {
              borderRadius: '20px',
              padding: '10px',
              backgroundColor: 'rgb(0, 114, 180)',
              color: 'white',
              cursor: 'pointer'
            }
        },
      };
    },
    methods: {
        addToCart: function () {
          this.cart += 1;
        },
        removeFromCart: function () {
          if (this.cart > 0) {
            this.cart -= 1;
          }
        },
    },
    computed: {
        title() {
            return this.action + ' ' + this.brand;
        },
    }
  });