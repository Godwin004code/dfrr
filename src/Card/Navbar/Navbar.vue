<template>
    <div class="flex justify-between w-[90%] mx-auto mb-10 mt-5">
        <section class="font-normal text-sm text-[#6f6f6f] mt-2">{{title}}</section>
        <section class="flex justify-between w-[50%]">
            <div class="w-[30%] sm:hidden">
                <select class="form-select w-[200px] h-[38px] border-0 text-sm text-[#9295A6] font-semibold" name="company" id="company">
                    <option value="select company">Select Company</option>
                    <option value="Tulip">Tulip</option>
                    <option value="Tola Bread">Tola Bread</option>
                </select>
            </div>
            <div class="flex w-[50%] sm:hidden">
                <div class="mr-3 mt-1">
                    <i class="fas fa-bell text-[#979797]"></i>
                </div>
                <div @click="navigateToProfile" class="cursor-pointer mt-1">
                    <h2 class="text-[#4F4F4F] font-normal text-base">Teejay Shako</h2>
                    
                </div>
                <div class="ml-2 cursor-pointer" @click="navigateToProfile">
                        <img :src="img" class="w-[32px] h-[32px] rounded-[50%]" alt="Profile avatar" />
                    </div>
            </div>
        </section>
    </div>
</template>

<script>
import img from '../../assets/Ellipse 26@2x.png'
export default {
   props: ['title'],
   methods: {
    navigateToProfile() {
        this.$router.push('/user/profile')
    }
   },
   data() {
    return {
        img
    }
   }
}
</script>