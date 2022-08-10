<template>
    <div class="rounded-tl-2xl bg-[#f7f7fd] w-[82%] mt-5 sm:w-[100%]">
        <navbar-tab :title="title" />
        
        <section class="w-[90%] mx-auto mt-8 mb-7">
            <h2 class="text-3xl font-normal text-[#9295A6]">
                Welcome <span class="text-[#360a3b] font-semibold">Teejay</span>
            </h2>
        </section>
        <section class="flex justify-between w-[90%] mx-auto sm:flex-col">
            <div class="p-3 bg-white w-[30%] sm:w-[100%] flex sm:mb-4">
                <div>
                    <img :src="img1" alt="" />
                </div>
                <div class="pl-6">
                    <h2 class="text-lg font-normal text-[#666666]">Investments</h2>
                    <h2 class="text-3xl font-semibold">10</h2>
                </div>
            </div>
            <div class="p-3 bg-white w-[30%] sm:w-[100%] flex sm:mb-4">
                <div>
                    <img :src="img2" alt="" />
                </div>
                <div class="pl-6">
                    <h2 class="text-lg font-normal text-[#666666]">Companies</h2>
                    <h2 class="text-3xl font-semibold">10</h2>
                </div>
            </div>
            <div class="p-3 bg-white w-[30%] flex sm:w-[100%]">
                <div>
                    <img :src="img3" alt="" />
                </div>
                <div class="pl-6">
                    <h2 class="text-lg font-normal text-[#666666]">Total Amount</h2>
                    <h2 class="text-3xl font-semibold">10</h2>
                </div>
            </div>
        </section>
        <section class="w-[60%] mx-auto my-10 h-[60px] text-center py-4 bg-white sm:w-[90%]">
            <h2 class="text-sm font-normal">Please update your KYC verification</h2>
        </section>
        <section class="w-[90%] mx-auto flex mb-20 justify-between sm:flex-col">
            <div class="w-[53%] sm:w-[100%]">
                <h2 class="text-[#360A3B] mb-4 text-lg font-semibold">Payments</h2>
                <div class="w-[100%] text-lg text-[#9295A6] text-center bg-white py-2">
                    No recent transaction
                </div>
            </div>
            <div class="w-[45%] sm:w-[100%]">
                <h2 class="text-[#360A3B] mb-4 text-lg font-semibold">Outstanding</h2>
                <div class="w-[100%] text-lg text-center text-[#9295A6] bg-white py-2">
                    No recent transaction
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import NavbarTab from "../../Card/Navbar/Navbar.vue";
import img1 from "../../assets/Frame 36642.png";
import img2 from "../../assets/Frame 36642 (1).png";
import img3 from "../../assets/Frame 36642 (2).png";
export default {
    components: {
        NavbarTab,
      
    },
    data() {
        return {
            title: "Dashboard",
            img1,
            img2,
            img3,
        };
    },
};
</script>
