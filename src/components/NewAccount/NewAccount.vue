<template>
  <div class="w-[100%] flex justify-between">
    <hero-view />
    <new-account-form />
  </div>

</template>

<script>
import NewAccountForm from "./NewAccountForm.vue"
import HeroView from "../../Card/Hero/Hero.vue"

export default {
  components: {
    NewAccountForm,
    HeroView
  },
  
}
</script>