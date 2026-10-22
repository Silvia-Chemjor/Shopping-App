<script setup>
import {ref, computed} from 'vue'
import { useProductsStore } from '../stores/products'
import { useRouter } from "vue-router";
import { useCartStore } from '../stores/cart';
import { useOrdersStore } from '@/stores/orders';

const router = useRouter();
const productsStore = useProductsStore()
const products = productsStore.products

const isAdmin = localStorage.getItem('isAdmin')
const isAuthenticated = localStorage.getItem('isAuthenticated')


const viewProduct = (productId) => {
  productsStore.selectProduct(productId)
  
  router.push({ name: 'ViewProduct', params: { id: productId } })
}

const showAddDialog = ref(false)

//process image
const selectedFile = ref(null);
const previewUrl = ref(null);

// Capture selected file and create local preview
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  selectedFile.value = file;
  
  previewUrl.value = URL.createObjectURL(file);
};

//models
const name = ref(null)
const image = ref(null)
const price = ref(null)
const category = ref(null)
const description = ref(null)
const longDescription = ref(null)

function handleAddProduct(){
    const data = {
        name: name.value,
        image: image.value,
        price: price.value,
        category: category.value,
        description: description.value,
        longDescription: longDescription.value,
    }
        productsStore.addProduct(data)
        showAddDialog.value = false
}
//cart
const cartStore = useCartStore()
const ordersStore = useOrdersStore()
const cart = cartStore.cart
const cartDialog = ref(false)
const quantity = ref(1)

function addToCart(product){
    if (isAuthenticated) {
        product.quantity = quantity.value
        cartStore.updateCart(product)
    }
    else{
        router.push('/login')
    }
}

const cartTotal = computed(() => {
  return cart.reduce((sum, item) => {
    const qty = Number(item.quantity || 0)
    const price = Number(item.price || 0)
    return sum + (price * qty)
  }, 0)
})
const handleRemove = (productId) => {
  cartStore.removeCart(productId)
}

function checkout(){
    if(isAuthenticated){
        cart.total = cartTotal
        ordersStore.makeOrder(cart)
        cartDialog.value = false
    }
    else{
        router.push('/login')
    }
}

</script>

<template>
    <v-container max-width="100%">
        <v-row class="ma-4">
            <v-col align="right">
                <v-fab-transition>
                    <v-btn color="primary" position="fixed" style="z-index:9999; top:100px; left: 50px;" @click="cartDialog = true">View Cart</v-btn>
                </v-fab-transition>
            </v-col>
            <v-col md='6'>
                <div class="text-display-small text-center">
                    Browse Products
                </div>
            </v-col>
            <v-col md="2">
                <v-btn class="ma-2" color="primary" icon="mdi-plus" @click="showAddDialog = true" v-if="isAdmin"></v-btn>
            </v-col>
            <v-col md="2">
                <v-btn class="ma-2"color="error" @click="productsStore.resetProducts" v-if="isAdmin"> Reset Test Data </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="item in products">
                <v-card class="h-100 d-flex flex-column" width="250">
                    <v-img :src="item.image" height="200px" cover></v-img>
                    <v-card-title class="overflow-y-auto">{{ item.name }}</v-card-title>
                    <v-card-subtitle>{{ item.price }}</v-card-subtitle>
                    <v-card-text>{{ item.description }}</v-card-text>
                    <v-card-text>{{ item.category }}</v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" variant="elevated" @click="addToCart(item)">Add to Cart</v-btn>
                        <v-btn color="primary" variant="elevated" @click="viewProduct(item.id)">View</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

     <!-- Add Product -->
    <v-dialog v-model="showAddDialog" max-width="50%" >
        <v-form>
            <v-card class="pa-4">
                <v-row>
                    <v-card-title>Add Product</v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn class="ma-2" color="secondary" icon="mdi-close" @click="showAddDialog = false"></v-btn>
                </v-row>
                <v-divider class="mb-4" color="primary" opacity=".7" thickness="3" gradient></v-divider>
                <v-row>
                    <v-col md="12">
                        <v-card v-if="previewUrl" class="mt-4 mx-auto" max-width="400">
                            <v-img :src="previewUrl" height="250" cover ></v-img>
                            <v-card-subtitle class="text-center py-2"> Image Preview </v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="First Name" v-model="name" variant="outlined" prepend-icon=""></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Price" v-model="price" variant="outlined" prepend-icon="" ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-select :items="['Merchandise', 'Pictorials', 'Audio Interface', 'Jewelry']" v-model ="category"/>
                    </v-col>
                    <v-col md="6">
                            <v-file-input label="Select Image" accept="image/*" prepend-icon="mdi-camera" variant="outlined" v-model="image" @change="handleFileChange"></v-file-input>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea label="Short Description" variant="outlined" prepend-icon="" v-model="description"></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea label="Long Description" variant="outlined" prepend-icon="" v-model="longDescription"></v-textarea>
                    </v-col>
                </v-row>
                <v-divider class="mb-4" color="primary" opacity=".7" thickness="3" gradient></v-divider>
                <v-row>
                    <v-col>
                        <v-card-actions>
                            <v-btn color="primary" variant="outlined" @click="showAddDialog = false"> 
                                <v-icon icon="mdi-close" ></v-icon> 
                                Close </v-btn> 
                            <v-spacer/>
                            <v-btn color="primary" variant="outlined" @click="handleAddProduct"> 
                                <v-icon icon="mdi-content-save-outline" ></v-icon> 
                                Save </v-btn> 
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
    </v-dialog>

     <!-- Cart -->
     <v-dialog v-model="cartDialog" max-width="600">
        <div v-if="cart.length == 0" class="mt-12">
            <v-card>
                <v-row class="mb-12 mt-12">
                    <v-col cols="12" md="10" sm="12" align="center">
                        <div class="text-title-large">
                            Your cart is empty!
                        </div>
                    </v-col>
                    <v-col cols="12" md="2" sm="12" align="right">
                        <v-btn class="ma-2" color="primary" icon="mdi-close" @click="cartDialog = false"></v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </div>
        <div v-else>
        <v-row>
            <v-col md="12">
                <v-card>
                    <v-row class="ma-4">
                        <v-col cols="12" md="10" sm="12">
                            <v-card-title>Cart</v-card-title>
                        </v-col>
                        <v-col cols="12" md="2" sm="12" align="right">
                            <v-btn color="primary" icon="mdi-close" @click="cartDialog = false"></v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-divider/>
                        <v-expansion-panels :rounded="[20, 8]" gap="8" variant="accordion" class="ma-4" >
                            <v-expansion-panel v-for="(item, index) in cart" :key="item.id" color="secondary">
                                <v-expansion-panel-title expand-icon="mdi-menu-down">{{ item.name }}</v-expansion-panel-title>
                                <v-expansion-panel-text> Price: {{item.price}} </v-expansion-panel-text>
                                <v-expansion-panel-text>
                                    <v-row>
                                    <v-col md="3">
                                        <v-select v-model="cart[index].quantity" :items="[1,2,3,4,5]" label="Qty" density="compact" variant="outlined" hide-details ></v-select>
                                    </v-col>
                                    <v-col>
                                        Subtotal: {{ (item.price * (item.quantity || 0)).toFixed(2)}}
                                    </v-col>
                                     <v-col cols="2" class="text-center">
                                        <v-btn icon="mdi-trash-can-outline" variant="text" color="error" density="comfortable" @click="handleRemove(item.id)" ></v-btn>
                                    </v-col>
                                    </v-row>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>
                    <v-card-actions>
                        <div>
                            <span class="mr-2">Total Amount:</span>
                            <span class="text-h5 font-weight-bold text-primary">Ksh {{ cartTotal.toFixed(2) }}</span>
                        </div>
                        <v-spacer/>
                        <v-btn variant="elevated" @click="checkout">Checkout</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        </div>
    </v-dialog>
</template>