<template>
  <div class="font-inter">
    <Navbar />
    <!-- section 1 -->
    <div class="desktop:flex flex-row items-center relative hidden">
      <img src="@/assets/img/Group308.png" alt="" />
      <div class="absolute">
        <div class="flex flex-col desktop:mx-16 desktop:mt-5">
          <h1 class="font-semibold desktop:text-2xl text-lg text-white">
            Daftar Transaksi
          </h1>
          <!-- 1 -->
          <h1 class="font-medium desktop:text-base text-normal text-white">
            Semua transaksi seperti Kelas, Pembayaran Pendidikan akan
            ditampilkan di sini.
          </h1>
        </div>
      </div>
    </div>
    <!-- end section 1 -->

    <!-- color -->
    <div class="bg-background">
      <!-- section 2 -->
      <div class="w-full h-auto">
        <div class="flex flex-row desktop:mx-16 mx-8 pt-8 gap-x-10">
          <!-- 1 -->
          <div class="w-full">
            <div class="bg-white rounded-lg p-7 w-auto h-fit">
              <h1 class="font-semibold text-xl mb-2">Status Pembayaran</h1>
              <div class="pt-2 flex flex-col gap-y-2">
                <!-- 1 -->
                <div class="flex flex-row items-center gap-x-2">
                  <input type="radio" class="w-4 h-4" />
                  <h1 class="font-normal text-gray-600 text-base">Semua (0)</h1>
                </div>
                <!-- 2 -->
                <div class="flex flex-row items-center gap-x-2">
                  <input type="radio" class="w-4 h-4" />
                  <h1 class="font-normal text-gray-600 text-base">Menunggu Pembayaran (0)</h1>
                </div>
                <!-- 3 -->
                <div class="flex flex-row items-center gap-x-2">
                  <input type="radio" class="w-4 h-4" />
                  <h1 class="font-normal text-gray-600 text-base">Berhasil (0)</h1>
                </div>
                <!-- 4 -->
                <div class="flex flex-row items-center gap-x-2">
                  <input type="radio" class="w-4 h-4" />
                  <h1 class="font-normal text-gray-600 text-base">Tidak Berhasil (0)</h1>
                </div>

                <hr class="w-full h-0.5 rounded-full mt-2 bg-gray-300" />
                <h1 class="font-semibold text-xl mb-2">Tipe Produk</h1>
                <!-- 1 -->
                <div class="flex flex-row items-center gap-x-2">
                  <input type="checkbox" class="w-4 h-4" />
                  <h1 class="font-normal text-gray-600 text-base">Kelas</h1>
                </div>
                <!-- 2 -->
                <div class="flex flex-row items-center gap-x-2">
                  <input type="checkbox" class="w-4 h-4" />
                  <h1 class="font-normal text-gray-600 text-base">Pembayaran Pendidikan</h1>
                </div>
              </div>
            </div>
          </div>

          <!-- 2 -->
          <div class="w-full">
            <div class="flex flex-col">
              <div class="flex flex-row gap-x-4">
                <!-- search -->
                <div class="relative text-black items-center">
                  <input type="search"
                    class="w-96 h-12 px-2 bg-white text-black focus:outline-none rounded-md border-none pr-8"
                    placeholder="Cari transaksimu di sini" />
                  <button type="submit" class="absolute right-0 top-0 mt-4 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                      <style>
                        svg{
                          fill: #000000;
                        }
                      </style>
                      <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                  </button>
                </div>
                <!-- Calender -->
                <div class="relative text-black items-center">
                  <input type="date"
                    class="w-96 h-12 px-2 bg-white text-black focus:outline-none rounded-md border-none"
                    placeholder="Tanggal Transaksi" />
                </div>
              </div>
              <!-- daftar -->
              <div
                class="w-full h-96 bg-white mt-5 rounded-lg pt-5 flex justify-center items-center text-center">
                <div>
                  <h1 class="text-black font-semibold text-lg">
                    Belum Ada Transaksi
                  </h1>
                  <p class="text-black text-base max-w-xl">
                    Setiap transaksimu akan tersimpan di sini. Yuk, mulai ikuti
                    kelas di Sekolah.mu dan nikmati kemudahannya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>

</script>

<style>
svg {
  fill: #000000;
}
</style>