<template>
  <section class="rounded-tl-2xl bg-[#f7f7fd] w-[82%] zio mt-5 sm:w-[100%]">
    <Navbar :title="title" />
    <section class="w-[90%] mx-auto my-4 flex sm:flex-col">
      <div>
        <img
          class="h-[400px] sm:h-[350px] w-[500px] sm:w-[100%] rounded-sm"
          ref="bigImage"
          :src="invest.img"
          :alt="invest.title"
        />
      </div>
      <div class="ml-10 sm:ml-0 sm:mt-5">
        <h2 class="text-[#B247BE] font-bold">{{ invest.title }}</h2>
        <p class="text-[#9295A6] font-normal mb-3">
          <i class="fas fa-location"></i>{{ invest.location }}
        </p>
        <h2 class="text-[#6F6F6F] font-normal text-base">Amount:</h2>
        <h2 class="text-[#360A3B] font-bold text-2xl mb-3">
          &#8358; {{ invest.totalAmount }}
        </h2>
        <h2 class="text-[#6F6F6F] font-normal text-base">Paid:</h2>
        <h2 class="text-[#27ae60] font-medium text-xl mb-3">
          &#8358; {{ invest.paid }}
        </h2>
        <h2 class="text-[#6F6F6F] font-normal text-base">Balance:</h2>
        <h2 class="text-[#eb5757] font-medium text-xl mb-8">
          &#8358; {{ invest.balance }}
        </h2>
        <div>
          <h2 class="text-[#6F6F6F] font-normal text-base">More Images</h2>
          
          <div class="inline-block" v-for="img in  invest.moreImages" :key="img.id">
          <div class='w-[80px] h-[80px] mr-4 mt-5'>
          <img class='w-[100%] h-[100%] rounded-[6px]' @click="carousel(img.img)" :src='img.img' :alt='img.id' />
          </div>
          </div>
        </div>
      </div>
    </section>
    <h2 class="text-[#360A3B] w-[90%] mx-auto mt-10 mb-4 text-lg font-semibold">
      Payments
    </h2>
    <section class="w-[90%] mx-auto flex mb-20 justify-between sm:flex-col">
      <div class="w-[53%] sm:w-[100%]">
        <table class="w-[100%] text-center bg-white">
          <thead
            class="bg-[#F1F3FE] h-[70px] text-base font-medium text-[#360A3B]"
          >
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Reference</th>
            </tr>
          </thead>
          <tbody class="h-[70px] text-[#333333] bg-white">
            <tr>
              <td>27/03/2022</td>
              <td>{{ invest.totalAmount }}</td>
              <td>ghbcz2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-[45%] rounded-[6px] bg-white py-4 pl-6 sm:w-[100%] sm:mt-5">
        <div class="w-[100%]">
          <h2 class="text-[#360A3B] font-semibold mb-2">Next Payment</h2>
          <h2 class="text-[#6f6f6f] font-normal text-sm">Date:</h2>
          <h2 class="text-[#360A3B] mb-3 text-sm">27/03/2022</h2>
          <h2 class="text-[#6f6f6f] font-normal">Amount:</h2>
          <h2 class="text-[#360A3B] text-sm mb-7 font-semibold text-xl">
            &#8358; {{ invest.paid }}
          </h2>
        </div>
        <button
          class="w-[220px] h-[49px] bg-[#360A3B] rounded-[6px] text-white"
          @click="showPaymentModal"
        >
          Make Payment
        </button>
      </div>
    </section>
 <section class="receipt-container" v-if="paymentModal === true">
    <section
      class="w-[400px] sm:w-[90%] sm:mx-auto absolute border left-[35%] sm:left-5 sm:right-5 top-[40%] rounded-[6px] bg-white py-7"
      
    >
      <i
        class="fas fa-remove absolute right-[5%] top-[10%] cursor-pointer"
        @click="hidePaymentModal"
      ></i>
      <div class="w-[90%] mx-auto">
        <h2 class="font-bold text-xl text-[#360A3B]">Payment</h2>
        <h2 class="text-base font-medium text-[#6f6f6f] text-center my-6">
          Total:
          <span class="text-[#360A3B] font-bold"
            >&#8358; {{ invest.totalAmount }}</span
          >
        </h2>
        <div class="flex justify-between">
          <button
            class="bg-white h-[40px] rounded-[6px] border text-base font-medium text-[#360A3B] w-[45%]"
          >
            Bank Transfer
          </button>
          <button
            class="bg-[#360A3B] h-[40px] rounded-[6px] w-[45%] font-medium text-base text-white"
          >
            Master Card
          </button>
        </div>
      </div>
    </section>
    </section>
  </section>

  
</template>
<style>

#app.payment-modal {
  width: 100%;
  height: 100%;
}

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
      title: "Investment > Property Details",
    };
  },
  computed: {
    invest() {
      return store.state.investments.find((invest) => invest.id === this.id);
    },
  },
  components: { Sidebar, Navbar },
  methods: {
    showPaymentModal() {
      this.paymentModal = true;
      document.querySelector("#app").classList.add("payment-modal");
      document.querySelector(".zio").classList.add("payment-modal");
      document.documentElement.scrollTop = 0;
      document.body.classList.add("remove-scrollbar");
    },
    hidePaymentModal() {
      this.paymentModal = false;
      document.querySelector("#app").classList.remove("payment-modal");
      document.body.classList.remove("remove-scrollbar");
    },
    carousel(item) {
      this.$refs.bigImage.src = window.location.origin + item
      console.log(item);
    }
  },
};
</script>
