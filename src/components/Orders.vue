<script setup>
import { useOrdersStore } from '../stores/orders'
const ordersStore = useOrdersStore()
const isAdmin = localStorage.getItem('isAdmin')
const user = JSON.parse(localStorage.getItem('user'))

</script>

<template>
    <v-container>
        <div v-if="ordersStore.orders.length == 0" class="mt-12">
            <v-card>
                <v-row class="mb-12 mt-12">
                    <v-col cols="12" md="8" sm="12" align="center">
                        <div class="text-display-small"> No Orders! </div>
                    </v-col>
                    <v-col cols="12" md="4" sm="12">
                        <v-btn class="ma-2" color="primary" to="/products">Browse Products</v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </div>
        <div v-else>
       <v-row class='ma-4'>
            <v-col md='10'>
                <div class="text-display-small text-center "> My Orders </div>
            </v-col>
            <v-col md="2">
                <v-btn class=""color="error" @click="ordersStore.resetOrders" v-if="isAdmin"> Reset Test Data </v-btn>
            </v-col>
            
        </v-row>
        <v-row>
            <v-col>
                <v-card color="secondary">
                    <v-row v-for="item in ordersStore.orders">
                        <v-col>
                            <v-row v-for="i in item">
                            <v-col md="4" align="right">
                                <v-img :src="i.image" height="100px" width="100px" cover class="mt-6"></v-img>
                            </v-col>
                            <v-col md="6">
                                <v-row>
                                    <v-col></v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-card-text class="overflow-y-auto">{{ i.name }}</v-card-text>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-card-subtitle> Price: {{ i.price }}</v-card-subtitle>
                                    </v-col>
                                    <v-col>
                                        <v-card-subtitle> Quantity: {{ i.quantity }}</v-card-subtitle>
                                    </v-col>
                                    <v-col>
                                        <v-card-subtitle>Sub Total: {{ i.price * i.quantity }}</v-card-subtitle>
                                        
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col md="2">
                                <v-btn icon="mdi-pencil" size="x-small" color="secondary" variant="flat" class="ma-4" />
                                <v-btn  icon="mdi-delete" size="x-small" color="secondary" variant="flat" class="ma-4" />
                            </v-col>
                                    <v-divider/>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-card-title class="overflow-y-auto text-right"> Total{{ item.total }}</v-card-title>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card border class="mt-6" color="secondary">
                    <v-row>
                        <v-col md="10">
                            <v-card-title class="text-center ma-4">Payment Details</v-card-title>
                            <v-col md="2">
                                <v-btn icon="mdi-pencil" size="x-small" color="secondary" variant="flat" class="ma-4"></v-btn>
                            </v-col>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-card-text> Name: {{ user.firstname + " "+ user.lastname}} </v-card-text>
                        </v-col>
                        <v-col>
                            <v-card-text> Email: {{ user.email }}</v-card-text>
                        </v-col>
                        <v-col>
                            <v-card-text> Phone: {{ user.phone }}</v-card-text>
                        </v-col>
                        <v-col>
                            <v-card-text>Delivery Address:123,Main Street, Nasra </v-card-text>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col align="center">
                            <v-btn class="ma-4">Pay via M-pesa</v-btn>
                        </v-col>
                    </v-row>

                </v-card>
               
            </v-col>
        </v-row>
        </div>
    </v-container>

</template>