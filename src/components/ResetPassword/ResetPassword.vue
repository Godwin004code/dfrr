<template>
    <div class="w-[100%] flex justify-between">
        <hero-view />
        <reset-password-form />
    </div>
</template>
<script>
import HeroView from "../../Card/Hero/Hero.vue"
import ResetPasswordForm from "./ResetPasswordForm.vue"
export default {
    components: {
        HeroView,
        ResetPasswordForm
    }
}
</script>