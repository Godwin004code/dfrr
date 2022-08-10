<template>
    <section class="bg-white rounded-[6px] w-[100%] mb-8 py-7 px-6 ">
        <h2 class="text-center text-black font-medium text-base mb-7">KYC</h2>
        <div class="kyc-border">
            <div class="flex justify-center">
<img :src="img"  alt="upload kyc">
 <!-- <div class="bg-[#B247BE] h-[38px] w-[43px] rounded-[50%] text-white flex justify-center items-center">
    <div class="fas fa-arrow-up"></div>
</div> -->
            </div>
           <p class="text-sm font-small w-[60%] mx-auto text-[#999999] text-center">
             Please upload a copy of your vaild identification
(NIN, Drivers licences or Voters card) in PNG, 
JPEG, or PDF format not larger than 3mb in size.
           </p>
        </div>
        <div class="mt-2 cursor-pointer">
            <input type="checkbox" id="agree" />
            <label for="agree" class="text-[#666] font-normal text-[10px] pl-3">I confirm ID is vaild until the expiry date and is in color</label>
        </div>
        <button class="text-white rounded-[6px] h-[50px] w-[100%] mt-10  bg-[#360a3b] mx-auto">Upload</button>
    </section>
</template>

<style>
.kyc-border {
    border: 1px dashed #333333;
    width: 100%;
    padding: 20px 0;
}

</style>

<script>
import img from '../../assets/Vector (2).png'
export default {
    data() {
        return {
            img
        }
    },
}
</script>