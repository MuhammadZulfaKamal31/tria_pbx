<template>
  <div>

    <!-- section 1 -->

    <!-- mobile -->
    <div class="desktop:hidden flex flex-col justify-center items-center text-center px-8">
      <h1 class="font-bold text-2xl">
        Mendidik Manusia Kompeten dan Berintegritas
      </h1>

      <div class="flex flex-row gap-x-3 mt-2">
        <button class="w-20 h-10 bg-btn1 rounded-lg font-medium text-lg text-black">
          Masuk
        </button>
        <button class="w-20 h-10 bg-btn2 rounded-lg font-medium text-lg text-black">
          Daftar
        </button>
      </div>
    </div>

    <div class="desktop:flex flex-row items-center relative hidden">
      <img src="@/assets/img/Group307.png" alt="" />
      <div class="absolute desktop:bottom-0 desktop:right-0">
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-col gap-y-2 desktop:px-44 px-0">
            <h1 class="font-black desktop:text-3xl text-lg text-white relative z-10">
              PKBM PIWULANG BECIK
            </h1>
            <h1 class="font-medium text-base text-white relative z-10">
              Mendidik Manusia Kompeten dan Berintegritas
            </h1>
            <div class="flex flex-row gap-x-6">
              <button class="w-20 h-10 bg-btn1 rounded-lg font-medium text-lg text-white relative z-10">
                Masuk
              </button>
              <button class="w-20 h-10 bg-btn2 rounded-lg font-medium text-lg text-white relative z-10">
                Daftar
              </button>
            </div>
          </div>
          <img src="@/assets/img/3pbx.png" class="desktop:flex hidden relative z-0" alt="" />
        </div>
      </div>
    </div>

    <!-- end section -->

    <!-- section 2 -->
    <div class="desktop:mt-20 mt-10 bg-background">
      <h1 class="flex justify-center text-center font-semibold desktop:text-3xl text-2xl">
        Tantangan Dunia Pendidikan
      </h1>
      <div class="grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-6 desktop:pt-16 pt-10 desktop:mx-20 mx-8">
        <!-- 1 -->
        <div class="flex flex-col justify-center text-center items-center">
          <img src="@/assets/img/spek.png" alt="" />
          <h1 class="font-semibold text-xl">Program Kesetaraan</h1>
          <p class="font-medium">
            Masyarakat yang tidak menempuh jalur Pendidikan formal kebingungan
            mengakses Lembaga Pendidikan yang menyediakan program kesetaraan
          </p>
        </div>
        <!-- 2 -->
        <div class="flex flex-col justify-center text-center items-center">
          <img src="@/assets/img/wallet-dynamic-color.png" alt="" />
          <h1 class="font-semibold text-xl">Dunia Karir</h1>
          <p class="font-medium">
            Lulusan jalur Pendidikan formal yang tidak siap dengan tantangan
            kehidupan sehari-hari, dunia kerja (karir), dan dunia kewirausahaan
            karena tidak kompeten
          </p>
        </div>
        <!-- 3 -->
        <div class="flex flex-col justify-center text-center items-center">
          <img src="@/assets/img/chat-bubble-dynamic-color.png" alt="" />
          <h1 class="font-semibold text-xl">Sosialisasi</h1>
          <p class="font-medium">
            Masyarakat yang menempuh jalur Pendidikan non-formal tidak memiliki
            kesempatan bersosialisasi dengan sebaya secara luring
          </p>
        </div>
        <!-- 4 -->
        <div class="flex flex-col justify-center text-center items-center">
          <img src="@/assets/img/sheild-dynamic-color.png" alt="" />
          <h1 class="font-semibold text-xl">Pandemi Covid-19</h1>
          <p class="font-medium">
            Covid-19 membatasi akses belajar langsung secara luring sehingga
            dibutuhkan media belajar secara daring
          </p>
        </div>
        <!-- 5 -->
        <div class="flex flex-col justify-center text-center items-center">
          <img src="@/assets/img/notebook-dynamic-color.png" alt="" />
          <h1 class="font-semibold text-xl">Metode Pembelajaran</h1>
          <p class="font-medium">
            Pembelajaran yang tidak seimbang. Pada satu sisi terlalu berfokus
            kepada anak saja. Pada sisi lain, hanya mengikuti kehendak orang tua
            saja.
          </p>
        </div>
      </div>
    </div>
    <!-- end section 2 -->

    <!-- section 3 -->
    <div class="desktop:mt-20 mt-10 bg-background h-full">
      <div class="desktop:pt-10 desktop:pb-10 pt-5 pb-5 desktop:px-20 px-8">
        <h1 class="flex justify-center text-center font-semibold desktop:text-3xl text-2xl">
          Solusi
        </h1>
        <div class="grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-6 desktop:pt-16 pt-10 desktop:mx-20 mx-8">
          <!-- 1 -->
          <div class="flex flex-col justify-center text-center items-center">
            <img src="@/assets/img/notebook-dynamic-color.png" alt="" />
            <h1 class="font-semibold text-xl">Pendidikan Non Formal</h1>
            <p class="font-medium">
              Jalur Pendidikan Non-Formal merupakan solusi bagi anak dan orang
              tua baik yang tidak berkesempatan bersekolah formal maupun yang
              dengan sadar tidak memilih jalur pendidikan formal
            </p>
          </div>
          <!-- 2 -->
          <div class="flex flex-col justify-center text-center items-center">
            <img src="@/assets/img/medal-dynamic-color.png" alt="" />
            <h1 class="font-semibold text-xl">Pendalaman Kompetensi</h1>
            <p class="font-medium">
              Penguasaan kompetensi merupakan satu proses penting agar anak
              tidak hanya mengerti konsep dan teori saja, tetapi juga bagaimana
              mengeksekusi dan mempraktekannya secara detil dan mendalam.
            </p>
          </div>
          <!-- 3 -->
          <div class="flex flex-col justify-center text-center items-center">
            <img src="@/assets/img/star-dynamic-color.png" alt="" />
            <div class="w-full">
              <h1 class="font-semibold text-xl">
                Pembelajaran Berpusat Pada Interaksi Anak Dengan Pembimbing
              </h1>
              <p class="font-medium">
                Di era Society 5.0, dimana manusia dan masyarakatnya adalah tema
                utama dari perkembangan zaman ini, interaksi menjadi hal yang
                terpenting dalam proses pembelajaran. Anak bertumbuh dengan
                baik, berawal dari interaksi yang sehat dengan pembimbingnya.
              </p>
            </div>
          </div>
          <!-- 4 -->
          <div class="flex flex-col justify-center text-center items-center">
            <img src="@/assets/img/sheild-dynamic-color.png" alt="" />
            <h1 class="font-semibold text-xl">Pandemi Covid-19</h1>
            <p class="font-medium">
              Covid-19 membatasi akses belajar langsung secara luring sehingga
              dibutuhkan media belajar secara daring
            </p>
          </div>
          <!-- 5 -->
          <div class="flex flex-col justify-center text-center items-center">
            <img src="@/assets/img/notebook-dynamic-color.png" alt="" />
            <h1 class="font-semibold text-xl">Metode Pembelajaran</h1>
            <p class="font-medium">
              Pembelajaran yang tidak seimbang. Pada satu sisi terlalu berfokus
              kepada anak saja. Pada sisi lain, hanya mengikuti kehendak orang
              tua saja.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- end section -->

    <!-- section 4 -->
    <div class="mt-10 desktop:mt-20 px-8 desktop:px-20">
      <h1 class="flex justify-center text-center font-semibold desktop:text-3xl text-2xl">
        Pilihan Jenjang
      </h1>
      <div class="flex justify-center items-center">
        <div class="grid grid-cols-1 gap-y-6 desktop:gap-x-20 desktop:grid-cols-4 desktop:mt-8 mt-4">
          <!-- 1 -->
          <div class="flex flex-col justify-center text-center items-center h-full w-52 rounded-lg bg-background2">
            <div class="p-4">
              <img src="@/assets/img/Group34.png" alt="" />
              <div class="flex justify-center">
                <h1 class="flex justify-center items-center h-8 w-16 rounded-lg bg-slate-50 mt-2 font-semibold">
                  PAUD
                </h1>
              </div>
              <h1 class="font-semibold text-xl pt-2">Usia 3-4 Tahun</h1>
            </div>
          </div>
          <!-- 2 -->
          <div class="flex flex-col justify-center text-center items-center h-full w-52 rounded-lg bg-background2">
            <div class="p-4">
              <img src="@/assets/img/Group305.png" alt="" />
              <div class="flex justify-center">
                <h1 class="flex justify-center items-center h-8 w-16 rounded-lg bg-slate-50 mt-2 font-semibold">
                  SD
                </h1>
              </div>
              <h1 class="font-semibold text-xl pt-2">Kelas 1-6</h1>
            </div>
          </div>
          <!-- 3 -->
          <div class="flex flex-col justify-center text-center items-center h-full w-52 rounded-lg bg-background2">
            <div class="p-4">
              <img src="@/assets/img/306.png" alt="" />
              <div class="flex justify-center">
                <h1 class="flex justify-center items-center h-8 w-16 rounded-lg bg-slate-50 mt-2 font-semibold">
                  SMP
                </h1>
              </div>
              <h1 class="font-semibold text-xl pt-2">Kelas 7-9</h1>
            </div>
          </div>
          <!-- 4 -->
          <div class="flex flex-col justify-center text-center items-center h-full w-52 rounded-lg bg-background2">
            <div class="p-4">
              <img src="@/assets/img/307.png" alt="" />
              <div class="flex justify-center">
                <h1 class="flex justify-center items-center h-8 w-16 rounded-lg bg-slate-50 mt-2 font-semibold">
                  SMK
                </h1>
              </div>
              <h1 class="font-semibold text-xl pt-2">Kelas 10-12</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 4 -->

    <!-- section 5 -->
    <div class="mt-10 desktop:mt-16 px-8 desktop:px-20">
      <div class="flex justify-center">
        <h1 class="text-center font-semibold desktop:text-3xl text-2xl max-w-2xl">
          Daftar Sekarang dan Nikmati Pengalaman Belajar yang Menyenangkan
        </h1>
      </div>
      <div class="desktop:relative flex">
        <div class="desktop:absolute flex">
          <div
            class="flex flex-col desktop:mx-96 desktop:mt-16 justify-center items-center desktop:min-w-max w-full rounded-lg bg-background3 shadow-xl p-6 mt-6">
            <div>
              <div class="flex flex-col gap-y-2">
                <!-- 1 -->
                <div class="desktop:w-96 w-full">
                  <label for="nama ortu" class="text-sm font-semibold text-gray-900">Nama Orang Tua</label>
                  <input type="text" placeholder="Masukan nama orang tua *"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none" />
                </div>
                <!-- 2 -->
                <div class="desktop:w-96 w-full">
                  <label for="phone" class="text-sm font-semibold text-gray-900">Nomor Telepon</label>
                  <input type="tel" id="phone" name="phone" placeholder="Masukkan nomor telepon"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none" />
                </div>
                <!-- 3 -->
                <div class="desktop:w-96 w-full">
                  <label for="email" class="text-sm font-semibold text-gray-900">Email Orang Tua</label>
                  <input type="email" id="email" name="email" placeholder="Masukkan email orang tua *"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none" />
                </div>
                <!-- 4 -->
                <div class="desktop:w-96 w-full">
                  <label for="nama" class="text-sm font-semibold text-gray-900">Nama Anak</label>
                  <input type="text" id="nama" name="nama" placeholder="Masukkan nama anak *"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none" />
                </div>
                <!-- 5 -->
                <div class="desktop:w-96 w-full relative">
                  <label for="phone" class="text-sm font-semibold text-gray-900">Pilih Jenjang</label>
                  <div class="mt-1 relative flex items-center">
                    <span class="absolute inset-y-0 right-2 pl-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd"
                          d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    <input type="text" id="jenjang" name="jenjang" placeholder="-- Pilih Jenjang --"
                      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none" />
                  </div>
                </div>
                <!-- 6 -->
                <div class="desktop:w-96 w-full relative">
                  <label for="phone" class="text-sm font-semibold text-gray-900">Pilih Tahun Ajaran</label>
                  <div class="mt-1 relative flex items-center">
                    <span class="absolute inset-y-0 right-2 pl-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd"
                          d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    <input type="text" id="jenjang" name="jenjang" placeholder="-- Pilih Tahun Ajaran --"
                      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none" />
                  </div>
                </div>
                <!-- 7 -->
                <div class="desktop:w-96 w-full relative">
                  <label for="phone" class="text-sm font-semibold text-gray-900">Pilih Tipe Program</label>
                  <div class="mt-1 relative flex items-center">
                    <span class="absolute inset-y-0 right-2 pl-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd"
                          d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    <input type="text" id="jenjang" name="jenjang" placeholder="-- Pilih Tipe Program --"
                      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none" />
                  </div>
                </div>
                <!-- 8 -->
                <div class="desktop:w-96 w-full relative">
                  <label for="phone" class="text-sm font-semibold text-gray-900">Pilih Kelas Trial</label>
                  <div class="mt-1 relative flex items-center">
                    <span class="absolute inset-y-0 right-2 pl-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd"
                          d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    <input type="text" id="jenjang" name="jenjang" placeholder="-- Pilih Kelas Trial --"
                      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none" />
                  </div>
                </div>
                <!-- 9 -->
                <div class="flex items-center">
                  <input type="checkbox" id="checkbox" name="checkbox" class="form-checkbox h-5 w-5 text-indigo-600" />
                  <label for="checkbox" class="ml-2 text-black font-medium max-w-xs text-sm">Saya bersedia dikirimkan
                    informasi promosi melalui Email
                    dan Push Notification.</label>
                </div>
                <!-- button -->
                <div class="flex justify-center items-center">
                  <button class="rounded-lg w-44 h-14 font-semibold text-base bg-btn2 text-white px-2">
                    Lanjut Pendaftaraan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="@/assets/img/image8.png" class="w-full desktop:block hidden" alt="" />
      </div>
    </div>
    <!-- end section 5 -->
  </div>
</template>

<script setup></script>
