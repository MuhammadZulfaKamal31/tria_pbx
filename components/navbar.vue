<template>
  <nav
    class="flex flex-col md:flex-row justify-between px-10 pt-3 pb-3 w-full bg-white items-center fixed z-10 md:relative shadow-md md:shadow-none">
    <!-- burger -->
    <div class=" flex justify-between w-full">
      <nuxt-link to="/User/index3"><img src="@/assets/img/pwb1.png" class=" w-12 tablet:w-20" alt=""></nuxt-link>
      <div class=" md:hidden block py-4">
        <div @click="toggle" class="tham tham-e-squeeze tham-w-6" :class="!active ? 'tham-active' : ''" ref="tham">
          <div class="tham-box">
            <div class="tham-inner" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col-reverse w-full tablet:flex-row items-start md:items-center gap-6 "
      :class="active ? ' hidden md:flex' : ' block'">

      <div class="relative text-black items-center hidden tablet:block">
        <input type="search"
          class="tablet:w-96 h-12 border-2 border-gray-300 px-2 bg-white text-black focus:outline-none rounded-md pr-8"
          placeholder="Cari transaksimu di sini">
        <button type="submit" class="absolute right-0 top-0 mt-4 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <!-- <style>
              svg {
                fill: #000000
              }
            </style> -->
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </div>
      <!-- 1 -->
      <nuxt-link to="/User/kelas">
        <div class="flex md:flex-col gap-1 justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="1.5em"
            viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <!-- <style>
              svg {
                fill: #f4a52f
              }
            </style> -->
            <path
              d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
          </svg>
          <h1 class="font-medium text-base">Kelasku</h1>
        </div>
      </nuxt-link>
      <!-- 2 -->
      <div class="flex md:flex-col gap-1 justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em"
          viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <!-- <style>
            svg {
              fill: #f4a52f
            }
          </style> -->
          <path
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
        </svg>
        <h1 class="font-medium text-base">Tanyamu</h1>
      </div>
      <!-- 3 -->
      <div class="md:px-3 flex justify-between text-left tablet:cursor-pointer group ">

        <div @click="toggleHeading()" class="flex md:flex-col gap-1 justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="1.5em"
            viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <!-- <style>
              svg {
                fill: #f4a52f
              }
            </style> -->
            <path
              d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
          </svg>
          <h1 class="font-medium text-base">Notification</h1>
        </div>
        <div class="absolute top-28 z-50 hidden group-hover:tablet:block hover:tablet:block">
          <div class="bg-white shadow-xl p-2 w-72 grid grid-cols-5 gap-10 rounded-lg">
            <div class="w-full">
              <h1 class="text-lg font-semibold">Notification</h1>
              <div class="text-sm text-gray-600 my-2 w-ful grid grid-cols-5">
                <h1 class="max-w-xl">Belum Ada Notification</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 4 -->
      <div class="flex md:flex-col gap-1 justify-center items-center-5">
        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em"
          viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <!-- <style>
            svg {
              fill: #f4a52f
            }
          </style> -->
          <path
            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>
        <span class="font-medium text-base ">DaftarPilihan</span>
      </div>
      <!-- 4 -->
      <!-- <div class="flex items-center">
                <div class="">
                  <div class="dropdown inline-block relative">
                    <button>
                      <div class="w-14 h-14 rounded-full">
                          <img src="@/assets/img/306.png" class="bg-cover rounded-full" alt="">
                      </div> 
                    </button>
                  </div>
                </div>
            </div>                -->
      <div class="flex items-center pt-5">
        <div class="w-12 h-12 md:w-14 md:h-14 rounded-full">
          <img src="@/assets/img/306.png" class="bg-cover rounded-full" alt="">
        </div>
      </div>

    </div>
  </nav>
</template>

<script setup>

const active = ref(true)
const toggle = () => {
  active.value = !active.value
}



</script>
<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>