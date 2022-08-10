<template>
    <div class="flex justify-between sm:flex-col">
        <side-bar  />
        <MobileNav />
        <dashboard-details />
    </div>
</template>

<script>
// <mobile-nav-vue class="hidden sm:block" />
import SideBar from "../../Card/Sidebar/Sidebar.vue"
import DashboardDetails from "./DashboardDetails.vue"
import MobileNav from "@/Card/Navbar/MobileNav.vue"

export default {
    components: {
    SideBar,
    DashboardDetails,
    MobileNav
}    
}
</script>