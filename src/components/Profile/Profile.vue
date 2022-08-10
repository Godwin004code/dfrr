<template>
    <div class="flex justify-between sm:flex-col">
        <side-bar />
        <mobile-nav />
        <profile-tab />
    </div>
</template>

<script>
import SideBar from "../../Card/Sidebar/Sidebar.vue"
import ProfileTab from "./ProfileTab.vue"
import MobileNav from '../../Card/Navbar/MobileNav.vue';

export default {
    components: {
        SideBar,
        ProfileTab,
        MobileNav
    },
        
}
</script>