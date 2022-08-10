<template>
  <div class="w-[45%] md:w-[90%] md:mx-auto mt-20">
    <form class="md:w-[90%] md:mx-auto" @submit="loginButtonPress">
      <div class="mb-6">
        <h2 class="text-3xl font-semibold text-[#360A3B] leading-5 mb-2.5">
          Welcome Back
        </h2>
        <h3 class="text-xl font-normal text-[#808494] leading-9">
          Don't Have an Account? <span class="text-purple-900">
            <router-link to="/">Register</router-link>
          </span>
        </h3>
      </div>
      <div class="mb-2">
        <label class="text-sm font-medium text-[#000929]" for="email"
          >Email</label
        >
        <input
          class="block bg-[#F7F7FD] border-0 rounded h-[48px] pl-5"
          type="email"
          placeholder="Enter email..."
          id="email"
        />
      </div>
     
      <div class="mb-2">
        <label class="text-sm font-medium text-[#000929]" for="pwd"
          >Password</label
        >
        <input
          class="block bg-[#F7F7FD] border-0 rounded h-[48px] pl-5"
          type="password"
          placeholder="Enter password..."
          id="pwd"
          autocomplete="new-password"
        />
      </div>
     <div class='text-purple-900 flex justify-end w-[90%]'>
        <router-link to="/forgot-password">Forgot Password?</router-link>
     </div>
      <button
        class="w-[90%] md:w-[100%] h-[49px] bg-[#360A3B] text-white rounded mt-10"
        type="submit"
      >
        Login
      </button>
    </form>
  </div>
</template>
<style>
input::placeholder {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #9295a6;
}
input:focus {
  outline: none;
  border: 0;
}
input {
  width: 90%;
}
@media only screen and (max-width: 767px) {
  input {
    width: 100%;
  }
}
</style>

<script>
  export default {
    methods: {
      loginButtonPress(e) {
        e.preventDefault()
        this.$router.push('/user/dashboard')
      }
    }
  }
</script>