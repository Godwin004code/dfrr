<template>
  <div class="w-[45%] md:w-[90%] md:mx-auto mt-20">
    <form class="md:w-[90%] md:mx-auto" @submit="forgotPasswordPress">
      <div class="mb-6">
        <h2 class="text-3xl font-semibold text-[#360A3B] leading-5 mb-2.5">
          Forgot Password?
        </h2>
        <h3 class="text-xl font-normal text-[#808494] leading-9">
          Please enter your registered email address
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
     
      <button
        class="w-[90%] md:w-[100%] h-[49px] bg-[#360A3B] text-white rounded mt-10"
        type="submit"
      >
        Register
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
    forgotPasswordPress(e) {
      e.preventDefault()
    }
  }
}
</script>