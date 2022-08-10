<template>
    <section class="rounded-t-2xl bg-[#f7f7fd] w-[82%] mt-5 sm:mt-0 sm:w-[100%]">
      <Navbar :title="title" />
      <section class="w-[90%] mx-auto my-4">

        <section class="bg-[white] rounded-[6px] w-[100%] px-5 py-7 mx-auto sm:mb-10">
        <h2 class="text-[#360A3B] font-[600] text-[20px] mb-2">Order Status</h2>
        <section class="flex sm:flex-col">
        <div class="w-[500px] sm:w-[100%]">
          <img
            class="h-[400px] w-[100%] rounded-sm"
            :src="order.img"
            :alt="order.title"
          />
        </div>
        <section class="ml-10 sm:ml-0 sm:mt-5">
            <div>
                <h2 class="text-sm font-normal text-[#000929] mb-2">Payment made</h2>
                <h3 class="text-[#9295A6] mb-5">12-05-2022, 12:30 pm</h3>
                <h2 class="text-sm font-normal text-[#000929] mb-2">Payment confirmed</h2>
                <h3 class="text-[#9295A6] mb-5">12-05-2022, 12:30 pm</h3>
                <h2 class="text-sm font-normal text-[#000929] mb-2">Awaiting order confirmation</h2>
                <h3 class="text-[#9295A6] mb-5">12-05-2022, 12:30 pm</h3>
                <h2 class="text-sm font-normal text-[#000929] mb-2">Order confirmed</h2>
                <h3 class="text-[#9295A6] mb-5">12-05-2022, 12:30 pm</h3>
                <h2 class="text-sm font-normal text-[#000929] mb-2">Plot assigned</h2>
                <h3 class="text-[#9295A6] mb-5 font-[300]">12-05-2022, 12:30 pm</h3>
            </div>
        </section>
        </section>
        </section>
      </section>
    </section>

</template>
<style>

</style>
<script>
import store from "@/store";
import Sidebar from "../../Card/Sidebar/Sidebar.vue";
import NavbarVue from "@/Card/Navbar/Navbar.vue";
import Navbar from "@/Card/Navbar/Navbar.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      paymentModal: false,
      NavbarVue,
      title: "Order > Order Status",
    };
  },
  computed: {
    order() {
      return store.state.data.find((item) => item.id === this.id);
    },
  },
  components: { Sidebar, Navbar },
};
</script>
