<template>
    <div class="flex justify-between sm:flex-col">
        <side-bar />
        <mobile-nav />
        <setting-tab />
    </div>
</template>

<script>
import SideBar from "../../Card/Sidebar/Sidebar.vue"
import SettingTab from "./SettingTab.vue"
import MobileNav from "@/Card/Navbar/MobileNav.vue"

export default {
    components: {
        SideBar,
        SettingTab,
        MobileNav
    }    
}
</script>