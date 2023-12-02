<template>
  <div class="font-inter">
    <Navbar />
    <!-- color -->
    <div class="bg-background mt-0">
      <!-- section 1 -->
      <div class="w-full h-auto">
        <div class="flex flex-row desktop:mx-16 mx-8 pt-5 gap-x-28">
          <!-- 1 -->
          <div class="w-full">
            <div class="bg-white shadow-lg rounded-lg p-7 w-auto h-fit">
              <!-- menu -->
              <div class="">
                <div class="flex flex-row pt-2 gap-x-3 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
                  </svg>
                  <a href="#">
                    <h1 class="font-semibold text-lg">Dokumen Panduan</h1>
                  </a>
                </div>
                <hr class="w-full h-0.5 rounded-full mt-2 bg-gray-300" />
                <div class="flex flex-row pt-2 gap-x-3 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                  </svg>
                  <a href="#">
                    <h1 class="font-semibold text-lg">
                      Identitas Orang Tua
                    </h1>
                  </a>
                </div>
                <hr class="w-full h-0.5 rounded-full mt-2 bg-gray-300" />
                <div @click="toggleDropdown" class="pt-2">
                  <div class="flex flex-row items-center gap-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                      <path
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                    <button class="flex justify-between w-full font-semibold text-lg">
                      Identitas Anak
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                          d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                      </svg>
                    </button>
                  </div>
                  <div v-if="isOpen" class="w-full flex flex-col gap-y-3">
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
              <div class="w-full h-fit bg-white shadow-2xl mt-0 rounded-lg pt-5 pb-5 px-6">
                <div>
                  <h1 class="text-black font-semibold text-xl">
                    Identitas Anak
                  </h1>
                  <h1 class="text-black font-medium text-lg">Jhon Skuy</h1>
                </div>
              </div>
              <!-- Data Identitas -->
              <div class="w-full h-fit bg-white shadow-2xl mt-10 rounded-lg pt-5 pb-5 px-6">
                <div>
                  <div class="flex justify-between">
                    <h1 class="text-black font-semibold text-xl">
                      Data Identitas
                    </h1>
                    <h1 class="text-btn font-semibold text-base flex flex-row items-center gap-x-2">
                      <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                          <path
                            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                        </svg></span>Ubah
                    </h1>
                  </div>
                  <hr class="w-full h-0.5 rounded-full mt-2 bg-gray-300" />
                  <div class="flex flex-col pt-5 gap-y-2">
                    <!-- Username -->
                    <div class="flex flex-row gap-x-4 items-center font-medium">
                      <h1 class="text-lg">Username :</h1>
                      <h1 class="flex flex-row gap-x-1">-</h1>
                    </div>
                    <!-- Tempat Lahir -->
                    <div class="flex flex-row gap-x-4 items-center font-medium">
                      <h1 class="text-lg">Tempat Lahir :</h1>
                      <h1 class="flex flex-row gap-x-1">-</h1>
                    </div>
                    <!-- Tanggal Lahir -->
                    <div class="flex flex-row gap-x-4 items-center font-medium">
                      <h1 class="text-lg">Tanggal Lahir :</h1>
                      <h1 class="flex flex-row gap-x-1">-</h1>
                    </div>
                    <!-- Agama -->
                    <div class="flex flex-row gap-x-4 items-center font-medium">
                      <h1 class="text-lg">Agama :</h1>
                      <h1 class="flex flex-row gap-x-1">-</h1>
                    </div>
                    <!-- Status dalam keluarga -->
                    <div class="flex flex-row gap-x-4 items-center font-medium">
                      <h1 class="text-lg">Status dalam Keluarga :</h1>
                      <h1 class="flex flex-row gap-x-1">-</h1>
                    </div>
                    <!-- Anak ke berapa -->
                    <div class="flex flex-row gap-x-4 items-center font-medium">
                      <h1 class="text-lg">Anak ke Berapa :</h1>
                      <h1 class="flex flex-row gap-x-1">-</h1>
                    </div>
                    <!-- Alamat rumah -->
                    <div class="flex flex-row gap-x-4 items-center font-medium">
                      <h1 class="text-lg">Alamat Rumah :</h1>
                      <h1 class="flex flex-row gap-x-1">-</h1>
                    </div>
                  </div>
                </div>
              </div>
              <!-- informasi -->
              <div
                class="w-full h-fit bg-white shadow-lg mt-5 pt-3 pb-3 px-6 flex items-center text-center gap-x-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
                <h1>
                  Data identitas dan riwayat sekolah perlu diisi untuk data
                  rapor peserta didik
                </h1>
              </div>
              <!-- Daftar Riwayat Sekolah -->
              <div class="w-full h-fit bg-white shadow-2xl mt-10 rounded-lg pt-5 pb-5 px-6">
                <div>
                  <h1 class="text-black font-semibold text-xl">
                    Daftar Riwayat Sekolah
                  </h1>
                  <hr class="w-full h-0.5 rounded-full mt-2 bg-gray-300" />
                  <div class="flex flex-col pt-5 gap-y-2">
                    <!-- No Induk -->
                    <div class="flex flex-row gap-x-4 items-center font-medium">
                      <h1 class="text-lg">No Induk :</h1>
                      <h1 class="flex flex-row gap-x-1">-</h1>
                    </div>
                    <!-- NASN -->
                    <div class="flex flex-row gap-x-4 items-center font-medium">
                      <h1 class="text-lg">NASN :</h1>
                      <h1 class="flex flex-row gap-x-1">-</h1>
                    </div>
                    <h1 class="font-semibold text-lg">
                      Diterima di Sekolah ini
                    </h1>
                    <!-- Di Kelas -->
                    <div class="flex flex-row gap-x-4 items-center font-medium">
                      <h1 class="text-lg">Di Kelas :</h1>
                      <h1 class="flex flex-row gap-x-1">-</h1>
                    </div>
                    <!-- Pada Tanggal -->
                    <div class="flex flex-row gap-x-4 items-center font-medium">
                      <h1 class="text-lg">Pada Tanggal :</h1>
                      <h1 class="flex flex-row gap-x-1">-</h1>
                    </div>
                  </div>
                </div>
              </div>
              <!-- informasi -->
              <div
                class="w-full h-fit bg-white shadow-lg mt-5 pt-3 pb-3 px-6 flex items-center text-center gap-x-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
                <h1>
                  Data riwayat sekolah hanya dapat diubah dengan menghubungi CS
                  Piwulang Becik
                </h1>
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
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
svg {
  fill: #f4a52f;
}
</style>