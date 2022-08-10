<template>
  <section class="rounded-tl-2xl bg-[#f7f7fd] w-[82%] mt-5 sm:mt-0 sm:w-[100%]">
    <navbar-tab :title="title" />
    <section class="w-[90%] mx-auto mt-5 mb-10 flex justify-between">
      <h2 class="text-2xl text-[#4f4f4f] font-semibold">Investments</h2>
      <section class="flex w-[50%] ml-auto justify-between">
        <div class="w-[60%] sm:w-[100%]">
          <input
            class="border-0 rounded-md h-[46px]  "
            type="text"
            placeholder="Search..."
          />
        </div>
        <div class="w-[30%] sm:hidden">

          <select
            class="border-0 font-semibold text-[#333] w-[100%] text-sm rounded-md h-[46px]  "
            name="filter"
            id="filter"
          >
            <option value="Filter By">Filter By</option>
          </select>
        </div>
      </section>
    </section>
    <section class="w-[90%] mx-auto sm:overflow-x-auto">
      <table class="table-auto w-[100%] mb-20 md:w-[200%] md:overflow-x-auto">
        <thead class="bg-[#F1F3FE] h-[70px] text-base font-medium">
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Total Amount</th>
            <th>Paid</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="text-sm h-[70px] bg-white border-b-2 font-normal text-[#333333]"
            v-for="investment in investments"
            :key="investment.id"
          >
            <td class="text-center">
              <router-link
                :to="{
                  name: 'InvestmentDetails',
                  params: { id: investment.id },
                }"
              >
                {{ investment.title }}
              </router-link>
            </td>
            <td class="text-center">
              <router-link
                :to="{
                  name: 'InvestmentDetails',
                  params: { id: investment.id },
                }"
              >
                {{ investment.company }}
              </router-link>
            </td>
            <td class="text-center">
              <router-link
                :to="{
                  name: 'InvestmentDetails',
                  params: { id: investment.id },
                }"
              >
                {{ investment.totalAmount }}
              </router-link>
            </td>
            <td class="text-center">
              <router-link
                :to="{
                  name: 'InvestmentDetails',
                  params: { id: investment.id },
                }"
              >
                {{ investment.paid }}</router-link
              >
            </td>
            <td class="text-center text-[#D61112]">
              <router-link
                :to="{
                  name: 'InvestmentDetails',
                  params: { id: investment.id },
                }"
              >
                {{ investment.balance }}</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import NavbarTab from "../../Card/Navbar/Navbar.vue";
import img from "../../assets/Vector.png";

export default {
  components: {
    NavbarTab,
  },
  data() {
    return {
      img,
      title: "Investments",
    };
  },
  computed: {
    ...mapGetters(["investments"]),
  },
  methods: {
    navigateToSingleInvestment() {},
  },
};
</script>
