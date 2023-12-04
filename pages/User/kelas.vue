<template>
  <div class="font-inter">
    <Navbar />
    <!-- section 1 -->
    <div class="desktop:flex flex-row items-center relative hidden">
      <img src="@/assets/img/Group308.png" alt="" />
      <div class="absolute">
        <div class="flex flex-col desktop:mx-16 desktop:mt-5">
          <h1 class="font-semibold desktop:text-2xl text-lg text-white">
            Kelasku
          </h1>
          <div class="flex flex-row gap-x-4">
            <!-- 1 -->
            <h1 class="font-medium desktop:text-base text-normal text-white">
              Kelas
              <div class="w-12 flex justify-center items-center h-2 bg-border rounded-full"></div>
            </h1>
            <!-- 2 -->
            <h1 class="font-medium desktop:text-base text-normal text-white">
              Jadwal
            </h1>
            <!-- 3 -->
            <h1 class="font-medium desktop:text-base text-normal text-white">
              Aktivitas Tambahan
            </h1>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 1 -->

    <!-- section kosong -->
    <div class="h-96 desktop:mx-16 pt-28 md:pt-8 px-5 md:px-0">
      <h1 class="font-bold text-3xl">Semua Kelas</h1>
    </div>
  </div>
  <Footer />
</template>

<script setup></script>
