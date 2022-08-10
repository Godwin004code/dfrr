<template>
    <div class="w-[100%] flex justify-between">
        <hero-view :class="height" />
        <login-form />
    </div>
</template>
<script>
import HeroView from "../../Card/Hero/Hero.vue"
import LoginForm from "./LoginForm.vue"
export default {
    components: {
        HeroView,
        LoginForm
    },
    data() {
        return {
            height: 'h-[100%]'
        }
    }
}
</script>