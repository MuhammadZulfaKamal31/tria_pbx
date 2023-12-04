<template>
    <nav class="flex flex-row justify-between items-center text-black m-6">
        <img src="@/assets/img/pwb1.png" alt="" />
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
                <nuxt-link to="#daftar"
                    class="rounded-full flex justify-center items-center text-center w-48 h-16 bg-btn font-semibold text-base text-white">Daftar
                    Murid Baru</nuxt-link>
            </div>
    </div>
    <div class="desktop:hidden mobile:flex">
        <button x-on:click="dropdown = !dropdown" class="tablet:hidden"><svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
    </div>
</nav></template>