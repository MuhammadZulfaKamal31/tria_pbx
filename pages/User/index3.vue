<template>
  <div class="font-inter">
    <Navbar />

    <!-- section 1 -->
    <!-- mobile -->
    <div class="desktop:hidden flex flex-col justify-center items-center text-center px-8 pt-24 md:pt-0">
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
      <img src="@/assets/img/Group310.png" alt="" />
      <div class="absolute inset-0 flex items-center justify-center">
        <img src="@/assets/img/Group309.png" alt="" />
      </div>
    </div>

    <!-- end section -->

    <!-- section 2 -->
    <div class="flex flex-col desktop:pt-8 pt-4 desktop:mx-16 mx-8">
      <h1 class="font-bold text-2xl">Daftar Anak</h1>
      <div class="flex desktop:flex-row flex-col gap-y-3 desktop:gap-x-6 pt-2">
        <!-- 1 -->
        <div class="w-52 p-2 rounded-lg bg-btn4 flex flex-row justify-center items-center gap-x-2">
          <div class="flex items-start">
            <div class="w-14 h-14 rounded-full">
              <img src="@/assets/img/306.png" class="bg-cover rounded-full" alt="" />
            </div>
          </div>
          <div class="flex flex-col">
            <h1 class="font-semibold text-lg text-white">Jhon Skuy</h1>
            <h1 class="font-medium text-base text-white">SD (Kelas 1)</h1>
          </div>
        </div>
        <!-- 2 -->
        <nuxt-link to="/Login/login_anak">
          <div class="w-52 p-2 rounded-lg bg-btn4 flex flex-row justify-center items-center gap-x-2">
            <div class="flex items-center">
              <div class="w-14 h-14 rounded-full">
                <img src="@/assets/img/Group311.png" class="bg-cover rounded-full" alt="" />
              </div>
            </div>
            <h1 class="font-semibold text-lg text-white">Tambah Anak</h1>
          </div>
        </nuxt-link>
      </div>
    </div>
    <!-- end section 2 -->

    <!-- section 3 -->
    <div class="flex flex-col desktop:mx-16 mx-8 desktop:pt-8 pt-4">
      <div class="flex flex-row items-center gap-x-2">
        <img src="@/assets/img/pwb1.png" alt="" />
        <h1 class="text-xl font-semibold">Piwulang Becik</h1>
      </div>
      <p class="pt-2 w-full text-lg">
        Piwulang Becik merupakan Pusat Kegiatan Belajar Masyarakat (PKBM) yang
        sangat memperhatikan interaksi anak dengan pembimbingnya, dalam proses
        kegiatan belajar mengajar secara beradab dan bermartabat.
      </p>
      <p class="pt-2 w-full text-lg">
        Piwulang Becik berharap menjadi salah satu wadah bagi berkembangnya
        manusia Indonesia yang memiliki kedalaman kompetensi, kecakapan hidup
        dan berintegritas.
      </p>
    </div>
    <!-- end section 3 -->

    <!-- section 4 -->
    <div class="flex flex-col justify-center items-center desktop:pt-8 pt-4">
      <h1 class="font-bold text-2xl text-center">Program Piwulang Becik</h1>
      <div class="grid desktop:grid-cols-3 grid-cols-1 desktop:gap-x-32 pt-4">
        <!-- 1 -->
        <div class="border bg-background4 w-80 rounded-lg flex flex-col">
          <img class="rounded-lg" src="@/assets/img/Rectangle99.png" alt="" />
          <div class="pt-1 px-2 pb-2">
            <h1 class="font-semibold text-lg">Kelompok Bermain</h1>
            <p>
              Merupakan program Pendidikan yang ditujukan bagi anak usia dini
              dan Taman Kanak-kanak dengan kegiatan belajar yang disesuaikan
              dengan kebutuhan anak-anak
            </p>
          </div>
        </div>
        <!-- 2 -->
        <div class="border bg-background4 w-80 rounded-lg flex flex-col">
          <img class="rounded-lg" src="@/assets/img/Rectangle91.png" alt="" />
          <div class="pt-1 px-2 pb-2">
            <h1 class="font-semibold text-lg">Kelompok Bermain</h1>
            <p>
              Merupakan program Pendidikan yang ditujukan bagi anak usia dini
              dan Taman Kanak-kanak dengan kegiatan belajar yang disesuaikan
              dengan kebutuhan anak-anak
            </p>
          </div>
        </div>
        <!-- 3 -->
        <div class="border bg-background4 w-80 rounded-lg flex flex-col">
          <img class="rounded-lg" src="@/assets/img/Rectangle100.png" alt="" />
          <div class="pt-1 px-2 pb-2">
            <h1 class="font-semibold text-lg">Kelompok Bermain</h1>
            <p>
              Merupakan program Pendidikan yang ditujukan bagi anak usia dini
              dan Taman Kanak-kanak dengan kegiatan belajar yang disesuaikan
              dengan kebutuhan anak-anak
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 4 -->

    <!-- section 5 -->
    <div class="">
      <h1 class="font-bold text-2 desktop:pt-8 pt-4 text-2xl text-center">
        Belajar Di Piwulang Becik
      </h1>
      <ul class="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
        data-te-stepper-init data-te-stepper-type="vertical">
        <!-- Langkah 1 -->
        <li data-te-stepper-step-ref
          class="relative after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
          <div data-te-stepper-head-ref class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline">
            <span data-te-stepper-head-icon-ref
              class="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-300 text-sm font-medium text-[#40464f]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path
                  d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path
                  d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
            </span>
            <span class="text-black font-semibold">Step 1</span>
          </div>
          <div data-te-stepper-content-ref class="overflow-hidden pl-[3.75rem] pr-6">
            <p class="text-black font-semibold">Kontrak Belajar</p>
            <p>
              Anak, dengan pendampingan orang tua, menentukan kurikulum dan
              metode pembelajarannya, kemudian menuangkan kesepakatan tersebut
              ke dalam Kontrak Belajar (KB) yang ditandatangani oleh orang tua
              dan pihak Piwulang Becik. Tagihan pembelajaran diberikan di akhir
              semester dan tahun ajaran. Dengan KB dan tagihannya ini, anak
              belajar bertanggung jawab terhadap pilihannya. Inti Kontrak
              Belajar adalah: Minat utama yang akan dikembangkan (anak sebagai
              pelaku utama) Modul pelajaran wajib (anak mengikuti aturan negara)
              Pelajaran spiritual (anak dan orang tua dalam mengembangkan
              karakter)
            </p>
          </div>
        </li>

        <!-- Langkah 2 -->
        <li data-te-stepper-step-ref
          class="relative after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
          <div data-te-stepper-head-ref class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline">
            <span data-te-stepper-head-icon-ref
              class="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-300 text-sm font-medium text-[#40464f]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path
                  d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path
                  d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
            </span>
            <span class="text-black font-semibold">Step 2</span>
          </div>
          <div data-te-stepper-content-ref class="overflow-hidden pl-[3.75rem] pr-6">
            <p class="text-black font-semibold">Modul Setara Daring</p>
            <p>
              Piwulang Becik memanfaatkan layanan dari Kemdikbud dalam
              mengerjakan modul pelajaran. Modul pelajaran wajib adalah: PPKN,
              IPS (atau Sejarah), Bahasa Indonesia, Matematika, IPA (atau Ilmu
              Sains / Ilmu Sosial / Ilmu Bahasa). yang dibagi dalam 2 Semester:
              Semester I: modul 1, modul 2, modul 3 Semester II: modul 4, modul
              5
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!-- end section 5 -->

    <!-- section 6 -->
    <div class="desktop:mt-20 mt-10 bg-background h-full">
      <div class="desktop:pt-10 desktop:pb-10 pt-5 pb-5 flex flex-col justify-center items-center">
        <h1 class="flex justify-center text-center font-semibold desktop:text-3xl text-2xl">
          Mengapa Piwulang Becik
        </h1>
        <div
          class="grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-6 desktop:pt-16 pt-10 desktop:mx-16 mx-8 items-center">
          <!-- 1 -->
          <div class="flex flex-col justify-center text-center items-center">
            <img src="@/assets/img/notebook-dynamic-color.png" alt="" />
            <h1 class="font-semibold text-xl">
              Didukung Komunitas Profesional
            </h1>
            <p class="font-medium">
              Piwulang Becik didukung dan difasilitasi oleh Jaringan Rumah Usaha
              yang berisi profesional di bidang bisnis kreatif, baik bisnis
              offline maupun online yang berkomitmen. Beragam keahlian dan
              pengalaman bisnis nyata siap memperkaya proses belajar anak.
            </p>
          </div>
          <!-- 2 -->
          <div class="flex flex-col justify-center text-center items-center">
            <img src="@/assets/img/medal-dynamic-color.png" alt="" />
            <h1 class="font-semibold text-xl">Kompetensi & Life Skill</h1>
            <p class="font-medium">
              Proses belajar di Piwulang Becik memberikan kesempatan pada setiap
              siswa untuk mengembangkan potensi yang relevan dengan dunia yang
              berubah secara global dan cepat. Proses pengembangan kompetensi
              tak hanya menyangkut kapasitas teknis, tetapi juga sikap
              profesional dan kemandirian.
            </p>
          </div>
          <!-- 3 -->
          <div class="flex flex-col justify-center text-center items-center">
            <img src="@/assets/img/star-dynamic-color.png" alt="" />
            <div class="w-full">
              <h1 class="font-semibold text-xl">Praktisi Sebagai Mentor</h1>
              <p class="font-medium">
                Kegiatan belajar anak dalam program Piwulang Becik dibimbing
                oleh para profesional dan praktisi serta dilakukan secara
                sukarela. Para mentor program Student Club berdedikasi dan
                berpengalaman.
              </p>
            </div>
          </div>
          <!-- 4 -->
          <div class="flex flex-col justify-center text-center items-center">
            <img src="@/assets/img/sheild-dynamic-color.png" alt="" />
            <h1 class="font-semibold text-xl">Penjurusan Sesuai Minat</h1>
            <p class="font-medium">
              Piwulang Becik membuka jalur peminatan berupa Matematika & Ilmu
              Alam (MIA) yang meliputi Matematika, Biologi, Fisika, dan Kimia.
              Ilmu-Ilmu Sosial (IIS) yang meliputi Sejarah, Ekonomi, Sosiologi,
              dan Geografi. Ilmu Bahasa & Budaya (IBB) yang meliputi Sastra
              Indonesia, Sastra Inggris, Bahasa Asing Lain, Antropologi.
            </p>
          </div>
          <!-- 5 -->
          <div class="flex flex-col justify-center text-center items-center">
            <img src="@/assets/img/notebook-dynamic-color.png" alt="" />
            <h1 class="font-semibold text-xl">Komunitas & Jejaring</h1>
            <p class="font-medium">
              Di Piwulang Becik, kami berjejaring dan berkomunitas baik siswa
              maupun orang tuanya. Sehingga masing-masing entitas dapat saling
              berguru.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
</script>
