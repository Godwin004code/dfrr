<template>
    <div class="w-[100%] flex justify-between">
        <hero-view  />
        <forgot-password-form />
    </div>
</template>
<script>
import HeroView from "../../Card/Hero/Hero.vue"
import ForgotPasswordForm from "./ForgotPasswordForm.vue"
export default {
    components: {
        HeroView,
        ForgotPasswordForm
    },
    data() {
        return {
            height: 'h-[100vh]'
        }
    }
    
}
</script>