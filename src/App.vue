<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const router = useRouter();

const searchValue = ref('');
const toSearch = function () {
  router.push('/student-list');
  localStorage.setItem('searchValue', searchValue.value);
}

</script>

<template>
  <header class="bg-[#f7f8fa] px-16 py-8 border-b-2 border-line border-solid mb-12 fixed left-0 right-0 top-0 z-50">

    <div class="wrapper text-base">
      <nav class="flex items-center justify-between">
        <div class="flex items-center gap-24">
          <div class="flex items-center gap-8">
            <Icon icon="fe:bar" width="2.2em" height="2.2em" style="color: #6B7A99" />
            <RouterLink class="text-primary text-2xl font-black" to="/">Studentop</RouterLink>
          </div>
          <div class="flex items-center gap-16">
            <RouterLink class=" font-semibold" to="/">Trang chủ</RouterLink>
            <RouterLink class=" font-semibold" to="/student-list">Danh sách sinh viên</RouterLink>

          </div>
        </div>
        <div class="flex items-center">
          <form @submit.prevent="toSearch" action="/student-list" class="mr-16 flex items-center">
            <label for="search">
              <Icon class="" icon="fluent:search-16-filled" width="1.4em" height="1.4em" style="color: #6B7A99" />
            </label>
            <input v-model="searchValue" class="outline-none bg-transparent text-secondary text-sm px-2 py-2"
              placeholder="Tìm kiếm sinh viên..." id="search" type="text">
            <button type="submit" class="bg-primary py-1 px-2 rounded text-white ">Tìm kiếm</button>
          </form>
          <RouterLink class=" font-semibold" to="/login">Đăng nhập</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView class="mx-16 pb-36" />

  <footer class="w-full px-16 py-8 bg-[#f7f8fa] border-t-2 border-line border-solid">
    <div
      class="flex flex-row flex-wrap items-center justify-center text-center bg-[#f7f8fa] gap-y-6 gap-x-12 md:justify-between">
      <div class="flex items-center">
        <img src="/src/assets//images/logo.png" alt="logo-ct" class="w-20 rounded-xl" />
        <div class="text-primary text-left ml-4">
          <h3 class="text-xl font-semibold">Khoa Công nghệ thông tin</h3>
          <h1 class="text-xl font-semibold">Đại học Khoa học Huế</h1>
        </div>
      </div>
      <ul class="flex flex-wrap items-center gap-y-2 gap-x-8 text-primary">
        <li class="flex items-center">
          <Icon icon="mingcute:location-line" width="2em" height="2em" style="color: #4D5E80" />
          <p class="ml-2">77 Nguyễn Huệ, Thành Phố Huế</p>
        </li>
        <li class="flex items-center">
          <Icon icon="ic:twotone-call" width="2em" height="2em" style="color: #4D5E80" />
          <p class="ml-2">(84) (234) 3826767</p>
        </li>
      </ul>
    </div>
    <span class="block my-8 border-t border-blue-gray-50" />
    <p class="block font-sans text-base antialiased font-normal leading-relaxed text-center text-primary">
      Copyright © 2024. Khoa Công nghệ Thông tin - Trường Đại học Khoa học, Đại học Huế.
    </p>
  </footer>
</template>

<style scoped></style>
