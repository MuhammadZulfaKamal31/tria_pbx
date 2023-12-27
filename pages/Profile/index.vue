<template>
  <div class="font-inter">
    <Navbar />
    <div class="bg-background">
      <!-- section 1 -->
      <div class="w-full h-auto">
        <div class="flex flex-col md:flex-row desktop:mx-16 mx-8 pt-24 md:pt-8 gap-x-28 gap-5 ">
          <!-- 1 -->
          <div class="w-full">
            <div class="bg-white rounded-lg p-7 w-auto h-fit">
              <!-- foto profile -->
              <div class="flex flex-row gap-x-3">
                <div class="flex items-center">
                  <div class="w-14 h-14 rounded-full">
                    <img src="@/assets/img/306.png" class="bg-cover rounded-full" alt="" />
                  </div>
                </div>
                <div class="flex flex-col">
                  <h1 class="font-semibold text-xl">Jhon Skuy</h1>
                  <div class="flex justify-center items-center text-center w-full p-3 rounded-full bg-background2 h-5">
                    <h1 class="font-medium text-xs">Dewasa & Orang Tua</h1>
                  </div>
                </div>
              </div>
              <!-- menu -->
              <div class="pt-6">
                <Accordion>
                  <template #item>
                    <brifcase /> <span class="pl-3 text-black">Kategori</span>
                  </template>
                  <template #panel>
                    <item :class="isRouteActive('/haha')" title="Daftar Kategori" to="/categories" />
                    <item :class="isRouteActive('/huhu')" title="Tambah Kategori" to="/categories/add" />
                  </template>
                </Accordion>
                <div x-data="{ open: false }">
                  <div class="flex flex-row items-center gap-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                      <path
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                    <button @click="open = !open" class="flex justify-between w-full font-semibold text-lg">
                      Profile
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->

                        <path
                          d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                      </svg>
                    </button>
                  </div>
                  <div x-show="open" class="w-full flex flex-col gap-y-3">
                    <div class="flex flex-row gap-x-2 items-center">
                      <div class="bg-btn w-2 h-8 rounded-full"></div>
                      <h1 class="font-medium text-base">Data Diri</h1>
                    </div>
                    <div class="flex flex-row gap-x-2 items-center">
                      <div class="bg-slate-400 w-2 h-8 rounded-full"></div>
                      <h1 class="font-medium text-base">Data Tempat Kerja</h1>
                    </div>
                  </div>
                </div>
                <hr class="w-full h-0.5 rounded-full mt-2 bg-gray-300" />
                <div class="flex flex-row pt-2 gap-x-3 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                  </svg>
                  <a href="#">
                    <h1 class="font-semibold text-lg">Akun & Relasi</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- 2 -->
          <div class="w-full">
            <div class="flex flex-col">
              <div class="flex flex-row gap-x-4">
                <div class="w-96"></div>
                <div class="w-96"></div>
              </div>
              <!-- Data Utama -->
              <div class="w-full h-fit bg-white mt-0 rounded-lg pt-5 pb-5 px-6">
                <form class="w-full max-w-3xl">
                  <!-- foto profile -->
                  <div class="flex justify-center items-center">
                    <a href="#">
                      <div class="w-32 h-32 rounded-full">
                        <img src="@/assets/img/306.png" class="bg-cover rounded-full" alt="">
                      </div>
                    </a>
                  </div>
                  <!-- 1 -->
                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-screen px-3">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Full Name
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password" type="text" placeholder="Full Name">
                    </div>
                  </div>
                  <!-- 2 -->
                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-screen px-3">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Username
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password" type="text" placeholder="Username">
                    </div>
                  </div>
                  <!-- 3 -->
                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-screen px-3">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Email
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password" type="email" placeholder="Email">
                    </div>
                  </div>
                  <!-- 4 -->
                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-screen px-3">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        No.Telpeone
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password" type="email" placeholder="No.Telephone">
                    </div>
                  </div>
                  <!-- 5 -->
                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-screen px-3">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Password
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password" type="password" placeholder="******************">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end section 1  -->
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const isRouteActive = (route) => {
  const currentRoute = useRoute();
  if (route === currentRoute.path) {
    return 'text-white font-semibold';
  }
}
</script>
