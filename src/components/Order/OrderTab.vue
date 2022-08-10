<template>
      <section class="rounded-tl-2xl bg-[#f7f7fd] w-[82%] mt-5 sm:mt-0 sm:w-[100%]">
        <navbar-tab :title="title" />
        <section class="w-[90%] mx-auto mt-5 mb-10 flex justify-between">
            <h2 class="text-2xl text-[#4f4f4f] font-semibold ">Orders</h2>
            <section class='flex w-[50%] justify-between'>
                <div class="w-[60%] sm:w-[100%]">
                    <input class="border-0 rounded-md h-[46px] w-[100%] sm:w-[100%]" type="text" placeholder="Search..." />
                </div>
                <div class="w-[30%] sm:w-[100%] sm:hidden">
                    <select class="border-0 font-semibold w-[100%] text-[#333] text-sm rounded-md h-[46px] sm:hidden" name="filter" id="filter">
                        <option value="Filter By"> Filter By</option>
                    </select>
                </div>
            </section>
        </section>
        <section class="w-[90%] mx-auto sm:overflow-x-auto">
            <table class="table-auto w-[100%] mb-20 sm:w-[200%] sm:overflow-x-auto">
               <thead class="bg-[#F1F3FE] h-[70px] text-base font-medium">
                 <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Paid</th>
                    <th>Reference</th>
                    <th>Installment</th>
                    <th>Status</th>
                </tr>
               </thead>
               <tbody>
                <tr  class="text-sm h-[70px] bg-white border-b-2 font-normal text-[#333333]" v-for="order in data" :key="order.id">
                    <td class="text-center cursor-pointer">
                        <router-link :to="{name: 'OrderDetails', params: {id: order.id}}">{{order.date}}</router-link>
                    </td>
                    <td class="text-center cursor-pointer">
                        <router-link :to="{name: 'OrderDetails', params: {id: order.id}}">{{order.title}}</router-link>
                    </td>
                    <td class="text-center cursor-pointer">
                        <router-link :to="{name: 'OrderDetails', params: {id: order.id}}">{{order.amount}}</router-link>
                    </td>
                    <td class="text-center cursor-pointer">
                        <router-link :to="{name: 'OrderDetails', params: {id: order.id}}">{{order.paid}}</router-link>
                    </td>
                    <td class="text-center cursor-pointer">
                        <router-link :to="{name: 'OrderDetails', params: {id: order.id}}">{{order.reference}}</router-link>
                    </td>
                    <td class="text-center cursor-pointer">
                        <router-link :to="{name: 'OrderDetails', params: {id: order.id}}">{{order.installment}}</router-link>
                    </td>
                    
                    <td class="text-center cursor-pointer" @click="handleShowAction">
                    Pending
                    </td>
                </tr>
               </tbody>
            </table>
        </section>
    </section>
</template>
<script>
import { mapGetters } from "vuex"
import NavbarTab from "../../Card/Navbar/Navbar.vue"

export default {
    components: {
        NavbarTab
    },
    data() {
        return {
            title: 'Orders'
        }
    },
    computed: {
        ...mapGetters(['data'])
    }
}
</script>