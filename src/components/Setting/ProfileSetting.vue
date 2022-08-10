<template>
  <section>
    <section class="bg-white rounded-[6px] flex justify-center flex-col text-center py-7">
      
        <div class="w-[170px] h-[170px] mx-auto">
            <img :src="img" class="rounded-[50%] w-[100%] h-[100%]" alt="Profile picture">
        </div>
        <p class="text-base text-[#f00] font-normal">
          * Supported files: jpeg, jpg. Image will be resized into 400x400px
        </p>
        <button class="text-white rounded-[6px] h-[40px] w-[180px] mt-4  bg-[#360a3b] mx-auto"><i class="fas fa-upload"></i> Upload</button>
     
    </section>
    <section class="bg-white rounded-[6px] mt-6 py-7 px-6 mb-8">
      <h2 class="text-center text-black font-medium text-base mb-7">Personal Information</h2>
      <form>
        <div>
          <label for="name" class="block text-[#000929] text-sm font-medium mb-1">Full Name</label>
          <input type="text" placeholder="Teejay Shako" class="border-0 bg-[#f7f7fd] rounded-[6px] h-[50px] mb-4 w-[100%]" />
        </div>
        <div>
          <label for="email" class="block text-[#000929] text-sm font-medium mb-1">Email</label>
          <input type="email" placeholder="exampl@example.com" class="border-0 bg-[#f7f7fd] rounded-[6px] h-[50px] mb-4 w-[100%]" />
        </div>
        <div>
          <label for="num" class="block text-[#000929] text-sm font-medium mb-1">Phone Number</label>
          <input type="number" placeholder="+2348012345678" class="border-0 bg-[#f7f7fd] rounded-[6px] h-[50px] mb-4 w-[100%]" />
        </div>
      </form>
    </section>
  </section>
</template>

<script>
import img from "../../assets/Ellipse 26@2x.png";

export default {
  data() {
    return {
      img,
    };
  },
};
</script>
