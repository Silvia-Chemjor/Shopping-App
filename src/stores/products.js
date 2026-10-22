import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {

    const createProductsList = () =>[
        {
            id: 1,
            name: 'Premium Wireless Headphones',
            image: 'Images/Products/Headphones.jpg',
            price: 2500,
            category: 'Audio Interface',
            description: 'Enjoy clear, immersive sound with comfortable wireless headphones designed for music, entertainment, and everyday listening.',
            longDescription: 'Experience your favorite music with clear, balanced sound and deep, enjoyable bass. These wireless headphones are designed to provide a comfortable listening experience whether you are relaxing at home, travelling, studying, or enjoying your favorite songs on the go.The headphones feature a comfortable over-ear design, wireless connectivity, easy-to-use controls, and a rechargeable battery for convenient everyday use. Their stylish and modern design makes them suitable for both casual listening and entertainment.'
        },
        {
            id: 2,
            name: 'Music Albums',
            image: 'Images/Products/Albums.jpg',
            price: 5000,
            category: 'Merchandise',
            description: 'Discover and enjoy your favorite albums, featuring memorable songs and sounds from artists you love.',
            longDescription: 'Explore a collection of music albums from different artists and genres. Whether you are looking for a new release, a classic favorite, or an album to add to your collection, Slani Shop makes it easy to discover music you love.Each album brings together a collection of songs that lets you enjoy an artist`s sound and creativity in one place. Browse our selection and find albums that match your taste, whether you enjoy pop, hip-hop, R&B, rock, K-pop, or other genres.'
        },
        {
            id: 3,
            name: 'Portable Bluetooth Speakers',
            image: 'Images/Products/Speakers.jpg',
            price: 3000,
            category: 'Audio Interface',
            description: 'Enjoy powerful, clear sound wherever you go with stylish and convenient wireless speakers designed for everyday entertainment.',
            longDescription: 'Bring your music to life with high-quality speakers designed to deliver clear sound and enjoyable bass. Whether you`re listening to music at home, relaxing with friends, watching movies, or enjoying a small outdoor gathering, these speakers provide a convenient way to enjoy your favorite sounds.With wireless Bluetooth connectivity and a portable design, you can easily connect your device and take your music wherever you go. The simple controls make it easy to manage your listening experience, while the modern design fits naturally into any space.'
        },
        {
            id: 4,
            name: 'Concert Light Stick',
            image: 'Images/Products/Lightstick.jpg',
            price: 4500,
            category: 'Audio Interface',
            description: 'Show your support for your favorite artist with a stylish light stick, perfect for concerts, fan events, and music celebrations.',
            longDescription: 'Make every music event more exciting with a stylish concert light stick designed for fans who want to show their love and support. Its bright LED light creates a fun atmosphere at concerts, fan events, and celebrations.The lightweight and easy-to-hold design makes it comfortable to carry while enjoying your favorite performances. Whether you`re attending a concert or adding it to your music collection, this light stick is a great accessory for any music fan.'
        },
        {
            id: 5,
            name: 'Photos',
            image: 'Images/Products/Photos.jpg',
            price: 100,
            category: 'Pictorials',
            description: 'High-quality music photos featuring artists, performances, and memorable music moments.',
            longDescription: 'Add your favorite music moments to your personal collection with high-quality printed photos. Choose from a variety of music-inspired images featuring artists, performances, and memorable moments.Perfect for decorating your room, creating a personal collection, or giving to another music fan as a gift.'
        },
        {
            id: 6,
            name: 'Posters',
            image: 'Images/Products/Posters.jpg',
            price: 500,
            category: 'Pictorials',
            description: 'Stylish music posters designed to bring your favorite artists, albums, and music themes to your walls.',
            longDescription: 'Give your space a music-inspired look with stylish posters featuring artists, albums, and creative music designs. They are perfect for bedrooms, study spaces, entertainment areas, or anywhere you want to showcase your love for music.Choose from different designs and create a space that reflects your favorite sounds and artists.'
        },
        {
            id: 7,
            name: 'Stickers',
            image: 'Images/Products/Stickers.jpg',
            price: 40,
            category: 'Pictorials',
            description: 'Fun and stylish music stickers that let you show your love for music wherever you go.',
            longDescription: 'Add a little music to your everyday items with fun and creative stickers. Use them to decorate your laptop, phone case, notebooks, water bottles, or other personal belongings.With a variety of music-inspired designs to choose from, these stickers are an easy way to express your personality and love for music.'
        },
        {
            id: 8,
            name: 'Ornaments',
            image: 'Images/Products/Ornaments.jpg',
            price: 400,
            category: 'Jewelry',
            description: 'Music-themed ornaments designed to add a fun and personal touch to your room or collection',
            longDescription: 'Add a musical touch to your space with decorative ornaments inspired by your love for music. These pieces are great for shelves, desks, bedrooms, or as part of a personal music collection.Whether you`re decorating your own space or looking for a small gift for a music fan, these ornaments make a simple and memorable addition to any collection.'
        },
        {
            id: 9,
            name: 'Keychain',
            image: 'Images/Products/Keychains.jpg',
            price: 750,
            category: 'Jewelry',
            description: 'Stylish music-themed keychains that let you carry your love for music wherever you go.',
            longDescription: 'Keep your favorite music close wherever you go with a fun and stylish music-themed keychain. Attach it to your keys, backpack, handbag, or pencil case for a simple way to personalize your everyday items.With different designs to choose from, these keychains are also a great small gift for friends, fellow fans, and music lovers.'
        },
        {
            id: 10,
            name: 'Custom Hoodies',
            image: 'Images/Products/Hoodies.jpg',
            price: 2000,
            category: 'Merchandise',
            description: 'Comfortable and stylish music-themed hoodies made for fans who want to wear their love for music.',
            longDescription: 'Stay comfortable while showing off your love for music with our collection of stylish music-themed hoodies. Designed for casual everyday wear, they are perfect for relaxing at home, going out with friends, attending concerts, or simply adding a music-inspired look to your outfit.Choose from different designs inspired by artists, albums, and music culture and find a hoodie that matches your personal style.'
        }   
    ]

    const products = ref(createProductsList())

    const selectedProductId = ref(null)
    const selectedProduct = computed(() => {
        return products.value.find(product => product.id === selectedProductId.value)
    })

    function selectProduct(id) {
        selectedProductId.value = id
    }

    const resetProducts = () => {
        products.value = createProductsList()
    }

    function addProduct(data){
        const lastId = products.value.length > 0 ?
            products.value[products.value.length - 1].id : 0
        data.id = lastId + 1
        products.value.push(data)
    }

    return{ products, selectedProductId, selectedProduct, selectProduct, resetProducts, addProduct}

},
{
    persist: true,
}
)