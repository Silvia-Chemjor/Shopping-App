<script setup>

</script>

<template>
    <v-container fluid class="pa-0">

        <!-- Hero carousel with overlay text -->
        <v-container max-width="100%">
            <v-row>
                <v-col>
                    <v-carousel cycle hide-delimiters show-arrows="hover" height="520" class="rounded-xl elevation-10">
                        <v-carousel-item src="/Images/carousel1.jpg" cover gradient="to right, rgba(0,0,0,.75), rgba(0,0,0,.1)">
                            <div class="d-flex flex-column justify-center fill-height px-8 px-md-16">
                                <v-chip color="primary" variant="flat" prepend-icon="mdi-music" class="mb-4 align-self-start">Slani Shop</v-chip>
                                <h1 class="text-h2 text-white font-weight-bold">Where Music Meets Style</h1>
                                <p class="text-h6 text-white mt-3 mb-6">Albums, vinyl, headphones and artist merch, all in one place.</p>
                                <div>
                                    <v-btn color="primary" size="x-large" rounded="pill" elevation="8" append-icon="mdi-arrow-right" class="mr-3">Shop Now</v-btn>
                                    <v-btn color="white" variant="outlined" size="x-large" rounded="pill">Browse Albums</v-btn>
                                </div>
                            </div>
                        </v-carousel-item>
                        <v-carousel-item src="/Images/carousel2.jpg" cover gradient="to right, rgba(0,0,0,.75), rgba(0,0,0,.1)">
                            <div class="d-flex flex-column justify-center fill-height px-8 px-md-16">
                                <h2 class="text-h3 text-white font-weight-bold">Vinyl Worth Spinning</h2>
                                <p class="text-h6 text-white mt-3">Discover records from the artists you love.</p>
                            </div>
                        </v-carousel-item>
                        <v-carousel-item src="/Images/carousel3.jpg" cover gradient="to right, rgba(0,0,0,.75), rgba(0,0,0,.1)">
                            <div class="d-flex flex-column justify-center fill-height px-8 px-md-16">
                                <h2 class="text-h3 text-white font-weight-bold">Wear Your Favourite Artist</h2>
                                <p class="text-h6 text-white mt-3">Official-style merchandise for every fan.</p>
                            </div>
                        </v-carousel-item>
                        <v-carousel-item src="/Images/carousel4.jpg" cover gradient="to right, rgba(0,0,0,.75), rgba(0,0,0,.1)">
                            <div class="d-flex flex-column justify-center fill-height px-8 px-md-16">
                                <h2 class="text-h3 text-white font-weight-bold">Hear Every Detail</h2>
                                <p class="text-h6 text-white mt-3">Quality headphones and audio gear for real listening.</p>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
        </v-container>

        <!-- Perks strip -->
        <v-container max-width="100%">
            <v-row>
                <v-col cols="6" md="3" class="text-center">
                    <v-avatar color="primary" variant="tonal" size="64"><v-icon size="32">mdi-truck-delivery-outline</v-icon></v-avatar>
                    <h3 class="text-subtitle-1 font-weight-bold mt-2">Fast Delivery</h3>
                    <p class="text-caption text-medium-emphasis">Straight to your door</p>
                </v-col>
                <v-col cols="6" md="3" class="text-center">
                    <v-avatar color="primary" variant="tonal" size="64"><v-icon size="32">mdi-check-decagram-outline</v-icon></v-avatar>
                    <h3 class="text-subtitle-1 font-weight-bold mt-2">Quality Products</h3>
                    <p class="text-caption text-medium-emphasis">Carefully picked for fans</p>
                </v-col>
                <v-col cols="6" md="3" class="text-center">
                    <v-avatar color="primary" variant="tonal" size="64"><v-icon size="32">mdi-shield-lock-outline</v-icon></v-avatar>
                    <h3 class="text-subtitle-1 font-weight-bold mt-2">Secure Shopping</h3>
                    <p class="text-caption text-medium-emphasis">Easy and safe checkout</p>
                </v-col>
                <v-col cols="6" md="3" class="text-center">
                    <v-avatar color="primary" variant="tonal" size="64"><v-icon size="32">mdi-headset</v-icon></v-avatar>
                    <h3 class="text-subtitle-1 font-weight-bold mt-2">Friendly Support</h3>
                    <p class="text-caption text-medium-emphasis">Here when you need us</p>
                </v-col>
            </v-row>
        </v-container>

        <!-- About us -->
        <v-container max-width="100%">
            <v-row>
                <v-col>
                    <v-card align="center" rounded="xl" elevation="6" border class="pa-6">
                        <v-icon color="primary" size="48">mdi-music-circle-outline</v-icon>
                        <v-card-title class="text-h4 font-weight-bold text-wrap">Welcome to Slani Shop</v-card-title>
                        <v-divider color="primary" thickness="4" length="70" class="mx-auto my-3 opacity-100" />
                        <v-card-text class="text-body-large mx-auto">Welcome to a place where music meets style. Our website brings together everything a music lover could want—from albums and vinyl records to exclusive artist merchandise. Whether you're discovering a new sound or looking for something to show off your favorite artist, we've got something for every kind of music fan.</v-card-text>
                        <v-card-text class="text-body-large mx-auto">Explore our collection, find your next favorite album or grab merchandise that lets your music speak for you. With an easy and enjoyable shopping experience, we're here to make finding the music and products you love simple, exciting, and worth coming back for.</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <!-- Categories -->
        <v-container max-width="100%">
            <div class="text-center mb-6">
                <h2 class="text-h4 font-weight-bold">Shop by Category</h2>
                <p class="text-medium-emphasis mt-2">Find something for every kind of music fan.</p>
            </div>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-card hover color="primary" rounded="xl" elevation="6" class="h-100 d-flex flex-column">
                        <v-img src="/Images/plushies.jpg" cover height="200"></v-img>
                        <v-card-title class="font-weight-bold"><v-icon class="mr-2">mdi-tshirt-crew-outline</v-icon>Artist Merchandise</v-card-title>
                        <v-card-text>Show your love for your favorite artists with our merchandise.</v-card-text>
                        <v-spacer></v-spacer>
                        <v-btn class="ma-4" variant="flat" rounded="pill" append-icon="mdi-arrow-right">Learn More</v-btn>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                    <v-card hover color="primary" rounded="xl" elevation="6" class="h-100 d-flex flex-column">
                        <v-img src="/Images/album.jpg" cover height="200"></v-img>
                        <v-card-title class="font-weight-bold"><v-icon class="mr-2">mdi-album</v-icon>Albums</v-card-title>
                        <v-card-text>Discover albums and vinyl records from your favorite artists.</v-card-text>
                        <v-spacer></v-spacer>
                        <v-btn class="ma-4" variant="flat" rounded="pill" append-icon="mdi-arrow-right">Learn More</v-btn>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                    <v-card hover color="primary" rounded="xl" elevation="6" class="h-100 d-flex flex-column">
                        <v-img src="/Images/headphones.jpg" cover height="200"></v-img>
                        <v-card-title class="font-weight-bold"><v-icon class="mr-2">mdi-headphones</v-icon>Headphones.</v-card-title>
                        <v-card-text>Enjoy your music with quality headphones and audio equipment.</v-card-text>
                        <v-spacer></v-spacer>
                        <v-btn class="ma-4" variant="flat" rounded="pill" append-icon="mdi-arrow-right">Learn More</v-btn>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                    <v-card hover color="primary" rounded="xl" elevation="6" class="h-100 d-flex flex-column">
                        <v-img src="/Images/photocards.jpg" cover height="200"></v-img>
                        <v-card-title class="font-weight-bold"><v-icon class="mr-2">mdi-image-multiple-outline</v-icon>Photos</v-card-title>
                        <v-card-text>Find all kind of photos and polaroids from your favourite artist</v-card-text>
                        <v-spacer></v-spacer>
                        <v-btn class="ma-4" variant="flat" rounded="pill" append-icon="mdi-arrow-right">Learn More</v-btn>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <!-- Footer -->
        <v-container max-width="100%" class="mt-6 bg-secondary">
            <v-row>
                <v-col md="4">
                    <v-card height="300px" color="secondary" flat>
                        <v-card-title class="font-weight-bold">Subscribe to our mailing list</v-card-title>
                        <v-card-text>Get the latest news, products to be delivered to your inbox.</v-card-text>
                        <v-text-field v-model="inputValue" label="Email Address" variant="outlined" rounded="pill" prepend-inner-icon="mdi-email-outline" class="ma-4">
                            <template v-slot:append-inner>
                                <v-btn color="primary" rounded="pill">Subscribe</v-btn>
                            </template>
                        </v-text-field>
                        <div class="text-center mb-4">
                            <p>Follow us on:</p>
                            <v-icon icon="mdi-instagram" size="28" class="mx-2"></v-icon>
                            <v-icon icon="mdi-twitter" size="28" class="mx-2"></v-icon>
                            <v-icon icon="mdi-facebook" size="28" class="mx-2"></v-icon>
                        </div>
                    </v-card>
                </v-col>
                <v-col md="4">
                    <v-card height="300px" color="secondary" flat>
                        <v-card-title class="font-weight-bold">Contact Information</v-card-title>
                        <v-card-text>
                            <p class="mb-2">
                                <v-icon icon="mdi-map-marker-radius-outline" color="primary"></v-icon>
                                Slani Shop
                            </p>
                            <p class="mb-2"> 123, Main Street Union, Nairobi</p>
                            <p class="mb-2">
                                <v-icon icon="mdi-phone-outline" color="primary"></v-icon>
                                +254789479745
                            </p>
                            <p>
                                <v-icon icon="mdi-email-outline" color="primary"></v-icon>
                                info@slanishop.com
                            </p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card height="300px" color="secondary" flat>
                        <v-card-title class="font-weight-bold">Quick Links</v-card-title>
                        <v-card-title><v-icon icon="mdi-chevron-right" color="primary"></v-icon>About us</v-card-title>
                        <!-- <v-card-title>Clinics</v-card-title>
                        <v-card-title>Find a Doctor</v-card-title> -->
                        <v-card-title><v-icon icon="mdi-chevron-right" color="primary"></v-icon>News and Events</v-card-title>
                    </v-card>
                </v-col>
            </v-row>
            <v-divider class="mb-4" />
            <p class="text-center pb-4 mb-0">©Slani Shop. All rights reserved.</p>
        </v-container>
    </v-container>
</template>