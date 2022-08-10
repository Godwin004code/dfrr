<template>
    <div class="flex justify-between sm:flex-col">
        <side-bar />
         <mobile-nav />
        <nested-route />
    </div>
</template>

<script>
import SideBar from "../../Card/Sidebar/Sidebar.vue"
import MobileNav from "@/Card/Navbar/MobileNav.vue";
import NestedRoute from "@/Card/NestedRoute.vue";


export default {
    components: {
        SideBar,
        MobileNav,
        NestedRoute
    }    
}
</script>