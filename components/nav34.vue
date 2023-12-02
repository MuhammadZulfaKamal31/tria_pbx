<template>
    <div class="font-inter">
        <div class="px-3 flex justify-between flex-wrap text-left tablet:cursor-pointer group">
            <h1 @click="toggleHeading()" class="px-7 flex justify-between items-center tablet:pr-2 pr-2 group">
                kokok
                <span class="text-xl tablet:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 transform transition-transform duration-200 ease-in-out" :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                </span>
            </h1>

            <div class="absolute top-20 hidden group-hover:tablet:block hover:tablet:block">
                <div class="py-3">
                    <div class="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                </div>
                <div class="bg-white p-2 w-52 grid grid-cols-5 gap-10 rounded-lg">
                    <div class="w-full">
                        <h1 class="text-lg font-semibold">JJJJ</h1>
                        <li class="text-sm text-gray-600 my-2.5 w-full grid grid-cols-1">
                            <nuxt-link to="#" class="w-full">ssjsjssjd</nuxt-link>
                            <nuxt-link to="#" class="w-full">ssjsjssjd</nuxt-link>
                            <nuxt-link to="#" class="w-full">ssjsjssjd</nuxt-link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
        <!-- 2 -->
        <div class="px-3 flex justify-between flex-wrap text-left tablet:cursor-pointer group">
                <div @click="toggleHeading()" class="flex flex-col justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#f4a52f}</style><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
                <h1 class="font-medium text-base">Notification</h1>                  
            </div>

            <div class="absolute top-20 hidden group-hover:tablet:block hover:tablet:block">
                <div class="bg-white p-2 w-72 grid grid-cols-5 gap-10 rounded-lg">
                    <div class="w-full">
                        <div class="flex flex-row gap-x-20">
                          <h1 class="text-lg font-semibold">Kelas</h1>  
                          <h1 class="text-lg font-semibold">Notification</h1>  
                        </div>
                        <li class="text-sm text-gray-600 my-2.5 w-full grid grid-cols-1">
                            <nuxt-link to="#" class="w-full">ssjsjssjd</nuxt-link>
                            <nuxt-link to="#" class="w-full">ssjsjssjd</nuxt-link>
                            <nuxt-link to="#" class="w-full">ssjsjssjd</nuxt-link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    methods:{
        toggleHeading(name) {
        if (this.heading !== name) {
          this.heading = name;
        } else {
          this.heading = "";
        }
        this.subHeading = "";
      },
    },
    }
</script>