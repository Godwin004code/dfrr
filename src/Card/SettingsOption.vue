<template>
    <div class="sm:mb-5">
        <router-link  to="/settings/profile" :class="route === '/settings/profile' ? 'active-setting' : '' ">
            <div class="bg-white h-[40px] rounded-[6px] w-[100%] flex items-center pl-5 font-medium text-base ">
               <i class="fas fa-user"></i><span class="pl-3">Edit Profile</span> </div>
        </router-link>
        <router-link active-class="active-setting"  to="/settings/password">
            <div class="bg-white h-[40px] rounded-[6px] my-5 w-[100%] flex items-center pl-5 font-medium text-base ">
               <i class="fas fa-key"></i> <span class="pl-3">Password</span></div>
        </router-link>
        <router-link active-class="active-setting" to="/settings/kyc">
            <div class="bg-white h-[40px] rounded-[6px] w-[100%] flex items-center pl-5 font-medium text-base ">
                <i class="fas fa-lock"></i> <span class="pl-3">KYC</span></div>
        </router-link>
    </div>
</template>

<style>
.active-setting {
    color: purple;
}
</style>

<script>
export default {
    data() {
        return {
            route: this.$route.path
        }
    }
}
</script>