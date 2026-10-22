import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders', () => {
    const orders = ref([])
    
    const resetOrders = () => {
        orders.value = []
    }

    function makeOrder(data){
        const lastId = orders.value.length > 0 ? orders.value[orders.value.length - 1].id : 0
        data.id = lastId + 1
        orders.value.push(data)
    }

    return {orders, resetOrders, makeOrder}
},
{
    persist: true
})