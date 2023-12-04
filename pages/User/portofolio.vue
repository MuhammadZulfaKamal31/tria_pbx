<template>
  <div class="font-inter">
    <Navbar />
    <!-- section 1 -->
    <div class="desktop:flex flex-row justify-center items-center relative hidden">
      <img src="@/assets/img/Group308.png" alt="" />
      <div class="absolute">
        <div class="desktop:mt-28">
          <div class="w-24 h-24 rounded-full bg-black border-white border-2"></div>
        </div>
      </div>
    </div>
    <!-- end section 1 -->

    <!-- section 2 -->
    <div class=" py-14 md:hidden"></div>
    <div class="flex flex-col justify-center md:mt-12">
      <h1 class="font-semibold text-xl items-center flex flex-row justify-center">
        Jhon Dhowe
      </h1>
      <h1 class="font-medium text-lg items-center flex justify-center">
        Orang Tua
      </h1>
      <div class="flex justify-center items-center">
        <div class="rounded-lg shadow-xl w-96 h-14 flex flex-row justify-between px-6 items-center">
          <h1
            class="font-medium text-border desktop:text-base flex flex-col justify-center text-center items-center text-normal">
            Hasil Karya
            <div class="w-full flex justify-center items-center h-1 bg-border rounded-full"></div>
          </h1>
          <h1 class="font-medium desktop:text-base flex flex-col justify-center text-center items-center text-normal">
            Portrofolio
          </h1>
          <h1 class="font-medium desktop:text-base flex flex-col justify-center text-center items-center text-normal">
            Profil
          </h1>
        </div>
      </div>
    </div>

    <!-- section kosong -->
    <div class="h-72"></div>

    <Footer />
  </div>
</template>
