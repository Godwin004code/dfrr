<template>
     <section class="rounded-tl-2xl bg-[#f7f7fd] w-[82%] mt-5 sm:mt-0 sm:w-[100%]">
        <navbar-tab :title="title" />
        <section class="w-[90%] mx-auto mt-5 mb-10 flex justify-between">
            <h2 class="text-2xl text-[#4f4f4f] font-semibold ">My Listings</h2>
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
        <section class="flex w-[90%] mx-auto sm:flex-col">
            <div class="bg-white w-[30%] h-[140px] flex justify-center items-center sm:w-[100%]">
                <div>
                    <img :src="img" alt="Properties" />
                </div>
                <div class="ml-4">
                    <h2 class="font-normal text-lg text-[#666666]">Properties</h2>
                    <h2 class="font-semibold text-3xl">10</h2>
                </div>
            </div>
            <div  @click="navigateToFindListing" class="cursor-pointer listing bg-white w-[30%] ml-5 h-[140px] flex justify-center items-center sm:w-[100%] sm:ml-0 sm:mt-4">
                <div>
                    <i class="fas fa-plus"></i> <span class="text-lg text-[#000929]">
                        <router-link to="/listing/find-listing">
                            Find Listing
                        </router-link>
                    </span>
                </div>
            </div>
        </section>
        <section class="w-[90%] mx-auto sm:overflow-x-auto">
            <table class="table-auto w-[100%] mb-20 mt-10 sm:w-[200%] sm:overflow-x-auto">
               <thead class="bg-[#F1F3FE] h-[70px] text-base font-medium">
                 <tr>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Amount</th>
                    <th>Down Payment</th>
                    <th>Installment</th>
                    <th>Action</th>
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
                    
                    <td class="text-center cursor-pointer">
                    <div>
                        <action-vue />
                    </div>
                    
                    </td>
                </tr>
               </tbody>
            </table>
        </section>
        <receipt-action-vue  />
    </section>
</template>
<style>
.listing {
    border: 1px solid #B247BE;
border-radius: 6px;
}
</style>
<script>
import NavbarTab from "../../Card/Navbar/Navbar.vue"
import img from "../../assets/Frame 6642.png"
import  {mapGetters} from 'vuex'
import ActionVue from '../../Card/Action.vue'
import ReceiptActionVue from "@/Card/ReceiptAction.vue"
export default {
    components: {
        NavbarTab,
        ActionVue,
        ReceiptActionVue
    },
    data() {
        return {
            title: 'Listings',
            img,
            
        }
    },
    methods: {
        navigateToFindListing() {
            this.$router.push('/listing/find-listing')
        },
       
    },
    computed: {
        ...mapGetters(['data'])
    }
}
</script>