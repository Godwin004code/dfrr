<template>
    <div class="rounded-tl-2xl bg-[#f7f7fd] w-[82%] mt-5 sm:mt-0 sm:w-[100%]">
        <navbar-tab :title="title" />
        <div class="flex mx-auto my-0 w-[90%] justify-between sm:flex-col" >
        
        <div class="w-[30%] sm:w-[100%]">
        <settings-option-vue />
        </div>
            <div class="w-[60%] sm:w-[100%]">
            <router-view />
            </div>
        </div>
    </div>
</template>
<script>
import NavbarTab from "../../Card/Navbar/Navbar.vue"
import SettingsOptionVue from "@/Card/SettingsOption.vue"

export default {
    components: {
        NavbarTab,
        SettingsOptionVue,
        
    },
    data() {
        return {
            title: 'Settings'
        }
    }
}
</script>