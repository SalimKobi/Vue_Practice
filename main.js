var app = new Vue ({
    el: "#app",
    data: {
        product:"Socks",
        image: 'assets/vmSocks-green-onWhite.jpeg',
        link: 'https://kippa.africa/',
        inventory: 8,
        details: ["80% cotton", "20% polyster","Gender Neutral" ],
        variants:[{variantId: 2234,
        variantColor: "green"},{variantId: 2235,
        variantColor: "blue"},],
        cart: 0,
        methods: {
            addToCart: function () {
                this.cart += 1
            }
        }
    }
});