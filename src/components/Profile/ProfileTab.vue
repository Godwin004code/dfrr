<template>

    <section class="rounded-tl-2xl bg-[#f7f7fd] w-[82%] mt-5 sm:w-[100%]">
        <navbar-tab :title="title" />
        <section class="w-[90%] mx-auto my-5 flex justify-between sm:flex-col">
            <div class="bg-white w-[30%] py-5 px-4 flex flex-col justify-center items-center sm:w-[100%]">
                <div class="flex">
                    <img :src="img" class="w-[139px] h-[139px] rounded-[50%]" alt="profile avatar" />
                    <h3 class="bg-purple-900 w-[40px] h-[40px] flex rounded-[50%] justify-center items-center cursor-pointer ml-[-32px] mt-[70px]">
                        <div class="fas fa-pencil text-[white]"></div>
                    </h3>
                </div>
                 
                <h2 class="text-[#000000] font-medium text-lg">Teejay Shako</h2>
                <h3 class="text-[#999999] font-light text-sm">User</h3>
            </div>
            <div class="bg-white w-[60%] py-5 px-6 sm:w-[100%] sm:mt-4">
                <div class="flex justify-between w-[100%] mb-6">
                    <h2 class="text-[#360A3B] text-xl font-medium">Personal Information</h2>
                    <h3>
                        <i class="fas fa-pencil text-[#9295A6] cursor-pointer"></i>
                    </h3>
                </div>
                <div>
                    <h3 class="text-[#9295A6] text-base font-normal">Name:</h3>
                    <h2 class="text-[#333333] font-medium text-xl mb-3">Teejay Shako</h2>
                    <h3 class="text-[#9295A6] text-base font-normal">Email:</h3>
                    <h2 class="text-[#333333] font-medium text-xl mb-3">example@gmail.com</h2>
                    <h3 class="text-[#9295A6] text-base font-normal">Phone Number:</h3>
                    <h2 class="text-[#333333] font-medium text-xl mb-3">+23480123456</h2>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
import { mapGetters } from "vuex"
import NavbarTab from "../../Card/Navbar/Navbar.vue"
import img from '../../assets/Ellipse 26@2x.png'

export default {
    data() {
        return {
            title: 'Profile',
            img
        }
    },
    components: {
        NavbarTab
    },
}
</script>