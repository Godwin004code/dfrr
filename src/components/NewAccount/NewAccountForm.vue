<template>
  <div class="w-[45%] md:w-[90%] md:mx-auto mt-20">
    <form class="md:w-[90%] md:mx-auto" @submit="Register">
      <div class="mb-6">
        <h2 class="text-3xl font-semibold text-[#360A3B] leading-5 mb-2.5">
          Create New Account
        </h2>
        <h3 class="text-xl font-normal text-[#808494] leading-9">
          Already Have an Account? <span class="text-purple-900">
            <router-link to="/login">Log In</router-link>
          </span>
        </h3>
      </div>
      <div class="mb-2 w-[100%] md:mx-auto md:mr-0">
        <label class="text-sm font-medium text-[#000929]" for="full-name"
          >Full Name</label
        >
        <input
          class="block bg-[#F7F7FD] focus:outline-none border-0 rounded h-[48px]"
          type="text"
          placeholder="Enter full name..."
          id="full-name"
        />
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
        <label class="text-sm font-medium text-[#000929]" for="phone"
          >Phone Number</label
        >
        <input
          class="block bg-[#F7F7FD] border-0 rounded h-[48px] pl-5"
          type="number"
          placeholder="Enter phone number..."
          id="phone"
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
        />
      </div>
      <div class="mb-2">
        <label class="text-sm font-medium text-[#000929]" for="cpwd"
          >Confirm Password</label
        >
        <input
          class="block bg-[#F7F7FD] border-0 rounded h-[50px] pl-5"
          type="password"
          placeholder="Re-type password..."
          id="cpwd"
        />
      </div>
      <button
        class="w-[90%] md:w-[100%] h-[49px] bg-[#360A3B] text-white rounded mt-10 sm:mb-10"
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
    Register(e) {
      e.preventDefault()
    }
  }
}
</script>