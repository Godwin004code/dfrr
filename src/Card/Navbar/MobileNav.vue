<template>
    <section class="hidden sm:flex justify-between w-[90%] mx-auto my-5">
        <div class="flex">
            <div class="fas fa-bars text-2xl" @click="openSidebar"></div>
            <div class="ml-6">
                <img class="w-[80px]" :src="img" alt="Logo">
            </div>
        </div>
        <div class="flex ">
            <div class="mr-3 mt-1">
                    <i class="fas fa-bell text-[#979797] text-xl"></i>
                </div>
                
                <div class="ml-2 cursor-pointer" @click="navigateToProfile">
                        <img :src="avatar" class="w-[30px] h-[32px] rounded-[50%]" alt="Profile avatar" />
                    </div>
                    
        </div>
    </section>
</template>
<script>
import img from "../../assets/WhatsApp_Image_2022-05-02_at_5.15 3.png";
import avatar from '../../assets/Ellipse 26@2x.png';
import { mapGetters} from "vuex";

export default {
    data() {
        return {
            img,
            avatar
        }
    },
    computed: {
        ...mapGetters(['openNav']),
    },
    methods: {
        navigateToProfile() {
        this.$router.push('/user/profile')
    },
    openSidebar() {
        this.$store.commit('setOpenNav')
    }
    }
}
</script>