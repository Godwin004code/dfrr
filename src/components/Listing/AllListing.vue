<template>
        <section class="bg-[#f7f7fd] w-[82%] mt-5 sm:mt-0 sm:w-[100%]">
            <navbar-tab :title="title" />
            <section class="w-[90%] mx-auto mt-5 mb-10 flex justify-between">
            <h2 class="text-2xl text-[#4f4f4f] font-semibold ">Find Listings</h2>
            <section class='flex w-[40%] justify-between'>
                <div class="w-[50%] sm:w-[100%]">
                    <input class="border-0 rounded-md h-[46px]" 
                    type="text" placeholder="Search..." />
                </div>
                <div class="w-[50%] sm:w-[100%] sm:hidden">
                    <select class="border-0 font-semibold text-[#333] text-sm rounded-md h-[46px]" name="filter" id="filter">
                        <option value="Filter By"> Filter By</option>
                    </select>
                </div>
            </section>
        </section>
             <section class="w-[90%] mx-auto sm:overflow-x-auto">
            <table class="table-auto w-[100%] mb-20 mt-20 sm:w-[200%] sm:overflow-x-auto">
               <thead class="bg-[#F1F3FE] h-[70px] text-base font-medium">
                 <tr>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Amount</th>
                    <th>Down Payment</th>
                    <th>Installment</th>
                </tr>
               </thead>
               <tbody>
                <tr  class="text-sm h-[70px] bg-white border-b-2 font-normal text-[#333333]" v-for="listing in data" :key="listing.id">
                    <td class="text-center cursor-pointer">
                        <router-link :to="{name: 'ListingDetails', params: {id: listing.id}}">{{listing.title}}</router-link>
                    </td>
                    <td class="text-center cursor-pointer">
                        <router-link :to="{name: 'ListingDetails', params: {id: listing.id}}">{{listing.company}}</router-link>
                    </td>
                    <td class="text-center cursor-pointer">
                        <router-link :to="{name: 'ListingDetails', params: {id: listing.id}}">{{listing.amount}}</router-link>
                    </td>
                    <td class="text-center cursor-pointer">
                        <router-link :to="{name: 'ListingDetails', params: {id: listing.id}}">{{listing.downPayment}}</router-link>
                    </td>
                    <td class="text-center cursor-pointer">
                        <router-link :to="{name: 'ListingDetails', params: {id: listing.id}}">{{listing.installment}}</router-link>
                    </td>
                </tr>
               </tbody>
            </table>
        </section>
        </section>
   
</template>

<script>
import SideBar from "../../Card/Sidebar/Sidebar.vue"
import NavbarTab from "../../Card/Navbar/Navbar.vue"
import img from "../../assets/Frame 6642.png"
import { mapGetters } from 'vuex'

export default {
    components: {
        SideBar,
        NavbarTab
    },
    data() {
        return {
            title: 'Listings',
            img,
           
        }
    },
    computed: {
        ...mapGetters(['data'])
    }
}
</script>