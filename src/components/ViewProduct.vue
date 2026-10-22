<script setup>
import {ref} from 'vue'
import { useProductsStore } from '../stores/products'

const productsStore = useProductsStore()


</script>

<template>
    <v-container>
        <v-row>
            <v-col md="2">
                <v-btn icon="mdi-arrow-left" color="primary" to="/products" class="ma-12"></v-btn>
            </v-col>
            <v-spacer/>
        </v-row>
        <v-row>
            <v-col md="6">
            <v-card>
                <v-img class="align-end text-white" height="620" :src="productsStore.selectedProduct.image" cover ></v-img>
            </v-card>
            </v-col>
            <v-col md="6">
                <v-card height="620" color="primary">
                    <v-card-item>
                        <v-card-title class="mb-4">{{ productsStore.selectedProduct.name }}</v-card-title>
                        <v-chip class="mb-4"> {{ productsStore.selectedProduct.category }} </v-chip>
                            <v-row>
                                <v-col md="4">
                                    <v-rating :model-value="4" :size="24" readonly ></v-rating>
                                </v-col>
                                <v-col md="6">
                                    <v-btn color="lime-lighten-2" variant="outlined" density="compact" readonly > In Stock</v-btn>
                                </v-col>
                            </v-row>
                        <v-card-text style="height: 300px; overflow-y: auto;"> {{ productsStore.selectedProduct.longDescription }}</v-card-text>
                        <v-card-subtitle>Ksh {{ productsStore.selectedProduct.price }}</v-card-subtitle>
                    </v-card-item>
                    <v-card-actions>
                        <v-card-text>Total: 0</v-card-text>
                        <v-spacer></v-spacer> 
                        <v-btn elevation="4" variant="elevated" @click="buy(productsStore.selectedProduct)"> Add to Cart </v-btn>
                    </v-card-actions>
                </v-card>
            <!-- <v-snackbar v-model="snackbar" :timeout="3000" color="warning">{{ message }}</v-snackbar> -->
            </v-col>
        </v-row>
    </v-container>
</template>