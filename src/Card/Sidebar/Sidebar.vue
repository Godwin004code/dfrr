<template>
    <div class="sidebar w-[18%] sm:absolute sm:left-0 sm:bg-[#360a3b] sm:h-[100vh]" :class="openNav === true ? 'open-nav' : 'hide-nav'">
        <div class="w-[110px] mb-10 mt-5 mx-auto sm:hidden">
            <img class="w-[100%]" :src="img" alt="Logo" />
        </div>

        <ul class="mx-auto">
            <li class="text-[#9295a6] font-semibold text-lg  sm:mt-10" :class="route === '/user/dashboard'? 'active' : '' " @click="closeSideBar">
                <router-link class="py-2" to="/user/dashboard">
              <i class="fas fa-dashboard"></i>   Dashboard</router-link>
            </li>
             <li class="text-[#9295a6] font-semibold text-lg " :class="route === '/investment/index'? 'active' : '' " @click="closeSideBar">
                <router-link to="/investments">
           <i class="fas fa-database"></i>     Investments</router-link>
            </li>
             <li class="text-[#9295a6] font-semibold text-lg " :class="route === '/listing/index' ? 'active' : '' " @click="closeSideBar">
                <router-link class="py-1" to="/listing">
                 <i class="fas fa-list"></i>   Listing</router-link>
            </li>
             <li class="text-[#9295a6] font-semibold text-lg " :class="route === '/orders/index'? 'active' : '' " @click="closeSideBar">
                <router-link to="/orders/index">
                   <i class="fas fa-cart-arrow-down"></i> Orders</router-link>
            </li>
             <li class="text-[#9295a6] font-semibold text-lg " :class="route === '/settings/profile' ? 'active' : '' " @click="closeSideBar">
                <router-link to="/settings">
             <i class="fas fa-gear"></i>  Settings</router-link>
            </li>
             <div class="main">
                <li class="text-[#9295a6] font-semibold text-lg" :class="route === '/logout'? 'active' : '' " @click="closeSideBar">
              <router-link class="name" to="/login">
               <i class="fas fa-right-from-bracket"></i> Logout</router-link>
            </li>
            </div>
            <li class="hidden sm:block">
                <i class="fas fa-remove text-white text-3xl absolute right-[4%] top-[4%]" @click="closeSideBar"></i>
            </li>
        </ul>
    </div>
</template>
<style>


li {
    margin-top: 2rem;
    width: 80%;
    height: 50px;
    padding-left: 30px;
}
i {
    padding-right: 10px;
}
.active {
    background-color: #360a3b;
    height: 45px;
    width: 80%;
    display: flex;
    align-items: center;
    border-radius: 0px 6px 6px 0px;
}
.active a {
    color: white;
}

@media only screen and (max-width: 640px) {
    .active {
        height: initial;
    }
    .open-nav {
    transform: translateX(0%);
    width: 100%;
    transition: transform .5s;
}
.hide-nav {
    transform: translateX(-500%);
    transition: transform .5s;
}

}
</style>
<script>
import img from "../../assets/WhatsApp_Image_2022-05-02_at_5.15 3.png";
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            img,
            route: this.$route.path
        }
    },
    computed: {
        ...mapGetters(['openNav']),

    },
    methods: {
        closeSideBar() {
            this.$store.commit('setCloseNav')
        }
    }
}
</script>