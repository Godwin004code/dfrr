<template>
    <section class="rounded-tl-2xl bg-[#f7f7fd] w-[82%] zio mt-5 sm:mt-0 sm:w-[100%]">
      <Navbar :title="title" />
      <section class="bg-[white] rounded-[6px] w-[90%] px-5 py-7 mx-auto">
        <section class="w-[100%] mx-auto my-4 flex sm:flex-col">
          <div>
            <img
              class="h-[400px] w-[500px] rounded-sm"
              ref="bigImage"
              :src="listing.img"
              :alt="listing.title"
            />
          </div>
          <div class="ml-10 sm:ml-0 sm:mt-5">
            <h2 class="text-[#B247BE] font-bold">{{ listing.title }}</h2>
            <p class="text-[#9295A6] font-normal mb-3">
              <i class="fas fa-location"></i>{{ listing.location }}
            </p>
            <h2 class="text-[#6F6F6F] font-normal text-base">Company:</h2>
            <h2 class="text-[#360A3B] font-[500] text-xl mb-3">
              {{ listing.company }}
            </h2>
            <h2 class="text-[#6F6F6F] font-normal text-base">Amount:</h2>
            <h2 class="text-[#360A3B] font-bold text-2xl mb-3">
              &#8358; {{ listing.amount }}
            </h2>
            <h2 class="text-[#6F6F6F] font-normal text-base">Down Payment:</h2>
            <h2 class="text-[#333333] font-medium text-xl mb-3">
              &#8358; {{ listing.downPayment }}
            </h2>
            <h2 class="text-[#6F6F6F] font-normal text-base">Installment:</h2>
            <h2 class="text-[#333333] font-medium text-xl mb-3">
              &#8358; {{ listing.installment }}
            </h2>
            <h2 class="text-[#6F6F6F] font-normal text-base">
              Completion Date:
            </h2>
            <h2 class="text-[#333333] font-medium text-xl mb-2">
              &#8358; {{ listing.date }}
            </h2>
          </div>
        </section>
      </section>
      <section class="w-[90%] mx-auto my-4">
        <h2 class="text-[#6F6F6F] font-normal text-base">More Images</h2>
        <div class="inline-block" v-for="img in  listing.moreImages" :key="img.id">
            <div class='w-[80px] h-[80px] mr-4 mt-5'>
          <img class='w-[100%] h-[100%] rounded-[6px]' @click="carousel(img.img)" :src='img.img' :alt='img.id' />
          </div>
        </div>
      </section>
      <section class="w-[90%] mx-auto my-4">
        <h2 class="text-[#6F6F6F] font-normal text-base">Terms:</h2>
        <div class="text-[14px] font-[400] text-[#808494]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          repellendus numquam aperiam nulla dolores vel praesentium voluptatem
          delectus, corporis odit cupiditate consectetur, hic distinctio rerum
          voluptates inventore libero sit accusantium sint aliquam! Ex ab dolore
          harum aliquid repellat odit debitis perspiciatis mollitia, vero
          maiores exercitationem laborum temporibus reprehenderit voluptatibus?
          Nobis voluptatem nisi numquam eligendi voluptatum, eveniet
          necessitatibus autem est mollitia fuga, repudiandae aperiam officia
          quod unde magnam fugit id non dicta veniam saepe voluptatibus quidem.
          Officia suscipit similique corrupti veritatis atque rem eos dolores ut
          ad natus expedita, aspernatur, quis culpa voluptas nam. Itaque
          adipisci omnis, molestias dolor consequatur ipsam.
        </div>
      </section>
      <section class="w-[90%] mx-auto my-4 sm:mb-10">
        <button
          class="w-[220px] h-[49px] bg-[#360A3B] rounded-[6px] text-white"
          @click="showPaymentModal"
        >
          Purchase
        </button>
      </section>
      <section class="receipt-container" v-if="purchaseModal === true">
      <section
        class="w-[400px] sm:w-[90%] sm:mx-auto absolute border left-[35%] sm:left-5 sm:right-5  top-[45%] rounded-[6px] bg-white py-7"
        
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
              >&#8358; {{ listing.amount }}</span
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

body.remove-scrollbar {
  overflow-y: hidden;
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
      purchaseModal: false,
      NavbarVue,
      title: "Listing > Listing Details",
    };
  },
  computed: {
    listing() {
      return store.state.data.find((item) => item.id === this.id);
    },
  },
  components: { Sidebar, Navbar },
  methods: {
    showPaymentModal() {
      this.purchaseModal = true;
      document.querySelector("#app").classList.add("payment-modal");
      document.querySelector(".zio").classList.add("payment-modal");
      document.documentElement.scrollTop = 0;
      document.body.classList.add("remove-scrollbar");
    },
    hidePaymentModal() {
      this.purchaseModal = false;
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
