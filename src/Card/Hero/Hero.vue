<template>
    <div class="md:hidden w-[50%]" >
        <div class="min-h-full bg-[#f7f7fd]">
            <img class='min-h-screen w-[100%] h-[100vh] ' :class="height"  :src='img' alt="img" />
        </div>
    </div>
</template>

<style scoped>
.hero {
    background-color: red;
    min-height: 100%;
}
</style>

<script>
import img from "../../assets/Frame.png"
export default {
    data() {
        return {
            img,
        }
    }
}
</script>