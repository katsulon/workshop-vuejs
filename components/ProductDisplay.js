app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `
    <img height="200" :class="[stock == 0? 'imageOpacity' : '']" v-bind:src="image" />

    <p v-if="stock > 10">Disponible</p>
    <p v-else-if="stock <= 10 && stock > 0">Peu de stock</p>
    <p v-else>Plus de stock</p>

    <product-details :details="details"></product-details>

    <p>Shipping: {{ shipping }}</p>

    <div v-for="carouselImage in carouselImages" :key="carouselImage.id">
      {{ carouselImage.text }}
    </div>
    <div>
      <span
        v-for="(carouselImage, index) in carouselImages" 
        :key="carouselImage.id"
        @mouseover="updateSelectedImage(index)"
      >
        <img height="50" alt="carouselImage.text" :src="carouselImage.image" />
      </span>
    </div>
    `,
    data() {
      return {
        premium: true,
        selectedImage: 0,
        stock: 11,
        details: [
            {
              id: 1,
              text: 'Doux',
              color: '#6C99C6'
            },
            {
              id: 2,
              text: 'Harmonieux',
              color: '#BF9E74'
            }
          ],
        carouselImages: [
            {
              id: 1,
              text: 'Capsule 1',
              image: './assets/images/colombia.png',
            },
            {
              id:  2,
              text: 'Capsule 2',
              image: './assets/images/colombia_de_cote.png',
            },
            {
              id: 3,
              text: 'Tasse',
              image: './assets/images/colombia_tasse.png',
            },
            {
              id: 4,
              text: 'Paquet',
              image: './assets/images/colombia_paquet.png',
            }
          ],
      }
    },
    methods: {
        updateImage: function (image) {
            this.image = image;
        },
        updateSelectedImage: function (index) {
            this.selectedImage = index;
        },
    },
    computed: {
        image() {
            return this.carouselImages[this.selectedImage].image;
        },
        shipping() {
            if (this.premium) {
                return 'Free';
            }

            return 2.99;
        },
    }
});