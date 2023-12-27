<template>
    <nav
        class="flex flex-row justify-between items-center text-black md:m-6 fixed md:static z-30 w-full px-6  md:w-[92%] md:pl-4 bg-white">
        <img src="@/assets/img/pwb1.png" class=" w-12 h-12 tablet:h-20 tablet:w-20 my-2" alt="" />
        <div class="flex items-center gap-x-4 font-bold text-base tablet:flex mobile:hidden">
            <!-- 1 -->
            <a href="#home" class="flex flex-row items-center">
                Tentang
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </a>
            <!-- 2 -->
            <a href="#home" class="flex flex-row items-center">
                Kelas
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </a>
            <!-- 3 -->
            <a href="#home" class="flex flex-row items-center">
                Kelas Tambahan
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </a>
            <!-- 4 -->
            <a href="#home" class="items-center">
                Lokasi Belajar
            </a>
            <!-- 5 -->
            <a href="#home" class="flex flex-row items-center">
                Promo
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </a>
            <a href="#home" class="items-center">
                Bantuan
            </a>
            <!-- btn -->
            <div class="desktop:flex mobile:hidden desktop:justify-end">
                <nuxt-link to="#" @click="scroll"
                    class="rounded-full flex justify-center items-center text-center w-48 h-16 bg-btn font-semibold text-base text-white">Daftar
                    Murid Baru</nuxt-link>
            </div>
        </div>
        <!-- <div class="desktop:hidden mobile:flex">
            <button x-on:click="dropdown = !dropdown" class="tablet:hidden"><svg xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div> -->

        <!-- accordion -->
        <div class="sm:hidden mobile:flex">
            <div @click="toggle" class="tham tham-e-squeeze tham-w-6" :class="active ? 'tham-active' : ''">
                <div class="tham-box">
                    <div class="tham-inner" />
                </div>
            </div>
        </div>
    </nav>
    <div class=" md:hidden h-full w-full bg-white fixed z-20 flex flex-col items-start text-start pt-20"
        :class="active ? 'duration-300' : 'ml-[1000px] duration-300'">
        <!-- 1 -->
        <div id="accordion-open" data-accordion="open">
            <h2 id="accordion-open-heading-1">
                <button type="button"
                    class="flex items-center justify-between w-screen p-5 font-medium rtl:text-right border-b-0 rounded-t-xl focus:ring-1 focus:ring-gray-50 gap-3"
                    data-accordion-target="#accordion-open-body-1" aria-expanded="false"
                    aria-controls="accordion-open-body-1">
                    <span class="flex items-center">
                        Tentang
                    </span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-open-body-1" class="hidden" aria-labelledby="accordion-open-heading-1">
                <div
                    class="px-10 flex flex-col  gap-y-3  border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <a href="#" class=" py-2"> Profile Sekolah</a>
                    <a href="#" class=" py-1"> Kurikulum </a>
                    <a href="#" class=" py-2"> Learning Corner</a>
                </div>
            </div>
            <!-- 2 -->
            <h2 id="accordion-open-heading-2">
                <button type="button"
                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border-b-0 rounded-t-xl focus:ring-1 focus:ring-gray-50 gap-3"
                    data-accordion-target="#accordion-open-body-2" aria-expanded="false"
                    aria-controls="accordion-open-body-2">
                    <span class="flex items-center">
                        Kelas
                    </span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-open-body-2" class="hidden" aria-labelledby="accordion-open-heading-2">
                <div
                    class="px-10 flex flex-col  gap-y-3  border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <a href="#" class=" py-2"> Profile Sekolah</a>
                    <a href="#" class=" py-1"> Profile Sekolah</a>
                    <a href="#" class=" py-2"> Profile Sekolah</a>
                </div>
            </div>
            <!-- 3 -->
            <div>
                <h2 id="accordion-open-heading-3">
                    <button type="button"
                        class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border-b-0 rounded-t-xl focus:ring-1 focus:ring-gray-50 gap-3"
                        data-accordion-target="#accordion-open-body-3" aria-expanded="false"
                        aria-controls="accordion-open-body-3">
                        <span class="flex items-center">
                            Kelas Tambahan
                        </span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-open-body-3" class="hidden" aria-labelledby="accordion-open-heading-3">
                    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components
                            from
                            Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another
                            difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI
                            offers
                            sections of pages.</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite,
                            Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the
                            best
                            of two worlds.</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                        <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                            <li><a href="https://flowbite.com/pro/"
                                    class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                            <li><a href="https://tailwindui.com/" rel="nofollow"
                                    class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 4 -->
            <div>
                <h2 id="accordion-open-heading-4">
                    <button type="button"
                        class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border-b-0 rounded-t-xl focus:ring-1 focus:ring-gray-50 gap-3"
                        data-accordion-target="#accordion-open-body-4" aria-expanded="false"
                        aria-controls="accordion-open-body-4">
                        <span class="flex items-center">
                            Lokasi Belajar
                        </span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-open-body-4" class="hidden" aria-labelledby="accordion-open-heading-4">
                    <div
                        class="px-10 flex flex-col  gap-y-3  border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <a href="#" class=" py-2"> Profile Sekolah</a>
                        <a href="#" class=" py-1"> Profile Sekolah</a>
                        <a href="#" class=" py-2"> Profile Sekolah</a>
                    </div>
                </div>
            </div>
            <!-- 5 -->
            <div>
                <h2 id="accordion-open-heading-5">
                    <button type="button"
                        class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border-b-0 rounded-t-xl focus:ring-1 focus:ring-gray-50 gap-3"
                        data-accordion-target="#accordion-open-body-5" aria-expanded="false"
                        aria-controls="accordion-open-body-5">
                        <span class="flex items-center">
                            Promo
                        </span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>

                <div id="accordion-open-body-5" class="hidden" aria-labelledby="accordion-open-heading-5">
                    <div
                        class="px-10 flex flex-col  gap-y-3  border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <a href="#" class=" py-2"> Profile Sekolah</a>
                        <a href="#" class=" py-1"> Profile Sekolah</a>
                        <a href="#" class=" py-2"> Profile Sekolah</a>
                    </div>
                </div>
            </div>
            <!-- 6 -->
            <div>
                <h2 id="accordion-open-heading-6">
                    <button type="button"
                        class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border-b-0 rounded-t-xl focus:ring-1 focus:ring-gray-50 gap-3"
                        data-accordion-target="#accordion-open-body-6" aria-expanded="false"
                        aria-controls="accordion-open-body-6">
                        <span class="flex items-center">
                            Bantuan
                        </span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-open-body-6" class="hidden" aria-labelledby="accordion-open-heading-6">
                    <div
                        class="px-10 flex flex-col  gap-y-3  border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <a href="#" class=" py-2"> Profile Sekolah</a>
                        <a href="#" class=" py-1"> Profile Sekolah</a>
                        <a href="#" class=" py-2"> Profile Sekolah</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    scroll: Function
})


const active = ref(false);
const toggle = () => {
    active.value = !active.value
}

</script>