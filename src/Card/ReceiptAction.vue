<template>
    <section :class="openRec === false ? 'hidden' : 'block'">
        <div class="receipt-container">
            <div class="bg-white w-[30%] sm:w-[90%] ml-auto pt-7 pb-20 pl-10">
                <h2 class="text-[#360A3B] font-bold text-2xl mb-3">Payment Status</h2>
                <h2 class="text-[#6F6F6F] font-normal text-base">Name:</h2>
                <h2 class="text-[#360A3B] font-bold text-2xl mb-3">Teejay Teko</h2>
                <h2 class="text-[#6F6F6F] font-normal text-base">Amount</h2>
                <h2 class="text-[#360A3B] font-bold text-2xl mb-3">838838383</h2>
                <h2 class="text-[#6F6F6F] font-normal text-base">Reference</h2>
                <h2 class="text-[#360A3B] font-bold text-2xl mb-3">jjdjdjd</h2>
                <button class="w-[220px] h-[49px] bg-[#360A3B] rounded-[6px] text-white">Download Receipt</button>
            </div>
            <div class="fas fa-remove absolute right-[4%] top-[4%] text-3xl" @click="closeReceiptContainer"></div>
        </div>
    </section>
</template>

<style>
    .receipt-container {
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.25);
        position: absolute;
        top: 0%;
        left: 0;
    }
    
</style>
<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['openRec'])
    },
    methods: {
        closeReceiptContainer() {
            this.$store.commit('setHideReceipt')
            document.body.classList.remove("remove-scrollbar");
        }
    }
}
</script>