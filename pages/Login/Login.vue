<template>
  <div class="font-inter">
    <div class="desktop:mx-16 mx-8 pt-5">
      <img src="@/assets/img/pwb1.png" alt="" />
    </div>
    <div class="relative">
      <div
        class="absolute flex flex-col justify-end items-center desktop:flex-row desktop:justify-between desktop:px-16 px-8 desktop:gap-x-28"
      >
        <img src="@/assets/img/Login.png" class="h-1/2 w-1/2" alt="" />
        <div
          class="desktop:min-w-max w-96 bg-white border-2 border-gray-300 rounded-lg shadow-xl p-6 mt-0"
        >
          <div class="text-center mb-4">
            <h1 class="text-2xl font-bold text-gray-900">Pendaftaran Akun</h1>
          </div>
          <form class="flex flex-col gap-y-2">
            <!-- 1 -->
            <div class="desktop:w-96 w-full">
              <label for="nama ortu" class="text-sm font-semibold text-gray-900"
                >Nama Lengkap Orang Tua</label
              >
              <input
                type="text"
                class="mt-1 block w-full px-3 py-2 border-2 bg-transparent border-gray-700 rounded-lg shadow-sm outline-none"
              />
              <p class="font-normal text-sm">
                Nama akan di cantumkan di sertificat Program.
              </p>
            </div>
            <!-- 2 -->
            <div class="desktop:w-96 w-full">
              <label for="nama ortu" class="text-sm font-semibold text-gray-900"
                >Alamat Email</label
              >
              <input
                type="email"
                class="mt-1 block w-full px-3 py-2 border-2 bg-transparent border-gray-700 rounded-lg shadow-sm outline-none"
              />
              <p class="font-normal text-sm">
                E-mail akan digunakan untuk verifikasi akun.
              </p>
            </div>
            <!-- 3 -->
            <div class="desktop:w-96 w-full">
              <label for="nama ortu" class="text-sm font-semibold text-gray-900"
                >No.Telephone</label
              >
              <input
                type="number"
                class="mt-1 block w-full px-3 py-2 border-2 bg-transparent border-gray-700 rounded-lg shadow-sm outline-none"
              />
            </div>
            <!-- 4 -->
            <div class="desktop:w-96 w-full">
              <label for="phone" class="text-sm font-semibold text-gray-900"
                >Kata Sandi</label
              >
              <div class="mt-1 relative flex items-center">
                <span class="absolute inset-y-0 right-2 pl-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z"
                    />
                    <path
                      d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z"
                    />
                    <path
                      d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z"
                    />
                  </svg>
                </span>
                <input
                  type="password"
                  id="jenjang"
                  name="jenjang"
                  class="mt-1 block w-full px-3 py-2 border-2 border-gray-700 bg-transparent rounded-lg shadow-sm outline-none"
                />
              </div>
              <p class="font-normal text-sm">
                Minimal 8 karakter kombinasi huruf besar,huruf kecil,dan angka
              </p>
            </div>
            <div class="flex justify-center text-center max-w-sm">
              <h1 class="font-medium text-sm">
                Dengan mendaftar di Sekolah, saya menyetujui Syarat & Ketentuan
                serta Kebijakan Privasi yang berlaku
              </h1>
            </div>
            <!-- button -->
            <div class="flex flex-row gap-x-5 mt-2 justify-center items-center">
              <button
                class="rounded-full w-36 h-10 font-semibold text-base bg-btn2 text-white px-2"
              >
                Daftar Akun
              </button>
              <h1>Atau</h1>
              <button
                class="rounded-full w-36 h-10 text-base border-2 border-btn2 text-black px-2"
              >
                <div
                  class="flex flex-row items-center justify-center"
                >
                  <img src="@/assets/img/Google2.png" class="w-5 h-5" alt="" />
                  <p class="font-semibold text-base">Akun Google</p>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      <img
        src="@/assets/img/Rectangle96.png"
        alt=""
        class="w-full h-full desktop:pt-52"
      />
    </div>
  </div>
</template>
