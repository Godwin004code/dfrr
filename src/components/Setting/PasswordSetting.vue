<template>
  <section class="bg-white rounded-[6px] w-[100%] py-7 px-6 mb-8">
<h2 class="text-center text-black font-medium text-base mb-7">Change Password</h2>
<form>
    <div>
        <label for="old-pwd" class="block text-[#000929] text-sm font-medium mb-1">Enter Old Password</label>
        <input type="password" placeholder="*****" class="border-0 bg-[#f7f7fd] rounded-[6px] h-[50px] mb-4 w-[100%]" />
    </div>
    <div>
        <label for="new-pwd" class="block text-[#000929] text-sm font-medium mb-1">Enter New Password</label>
        <input type="password" placeholder="*****" class="border-0 bg-[#f7f7fd] rounded-[6px] h-[50px] mb-4 w-[100%]" />
    </div>
    <div>
        <label for="confirm-pwd" class="block text-[#000929] text-sm font-medium mb-1">Confirm Old Password</label>
        <input type="password" placeholder="*****" class="border-0 bg-[#f7f7fd] rounded-[6px] h-[50px] mb-4 w-[100%]" />
    </div>
    <button class="text-white rounded-[6px] h-[50px] w-[100%] mt-4  bg-[#360a3b] mx-auto">Register</button>
</form>
  </section>
</template>