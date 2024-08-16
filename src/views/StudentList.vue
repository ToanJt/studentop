<script setup>
import { ref, computed, onMounted, watch, watchEffect, reactive, onBeforeMount } from "vue"
import KhongDau from "khong-dau";
import StudentCard from "../components/StudentCard.vue"
import { getData } from '../server/api'
import { Icon } from "@iconify/vue"
const students = reactive([]);



// const saveSearchValue = ref(localStorage.getItem('searchValue'));

onMounted(async () => {
    // if (saveSearchValue.value !== null) {
    //     searchByName.value = saveSearchValue.value;
    // }
    try {
        const res = await getData();
        students.splice(0, students.length, ...res.data);
    } catch (error) {
        console.error("Failed to fetch data:", error)
    }
})


const searchByName = ref('');
const searchByStudentId = ref('');
const searchByMajor = ref('');
const filterByCourse = ref('');
const filterByClass = ref('');
const filterByGender = ref('');

const studentsFilter = computed(() => {
    if (searchByName.value !== ''
        || searchByStudentId.value !== ''
        || searchByMajor.value !== ''
        || filterByCourse.value !== ''
        || filterByClass.value !== ''
        || filterByGender.value !== '') {
        return students.filter(student => {
            return (KhongDau(student.name).toLowerCase().includes(KhongDau(searchByName.value).toLowerCase()))
                && student.studentId.toLowerCase().includes(searchByStudentId.value.toLowerCase())
                && (KhongDau(student.major).toLowerCase().includes(KhongDau(searchByMajor.value).toLowerCase())
                    || student.major.toLowerCase().includes(searchByMajor.value.toLowerCase()))
                && student.course.includes(filterByCourse.value)
                && student.class.includes(filterByClass.value)
                && student.gender.includes(filterByGender.value)
        })
    }
    return students;
})

//Show filter 
const isFilter = ref(false);

function showFilterForm() {
    isFilter.value = !isFilter.value;
}

function closeFilterForm() {
    isFilter.value = false;
}



</script>

<template>

    <div class=" grid lg:grid-cols-7 grid-cols-1 gap-20 mt-40">
        <div @click="showFilterForm()" class=" w-14 h-14 flex justify-center items-center rounded-full bg-primary">
            <Icon icon="mynaui:filter" width="2em" height="2em" style="color: white" />
        </div>
        <div v-if="isFilter"
            class="filter-box 2xl:h-[540px] lg:h-[680px] h-[520px] fixed top-40 bg-white text-primary py-4 px-6 2xl:col-span-2 col-span-3 rounded">
            <div class="">
                <div class="flex justify-between">
                    <h3 class="mb-8 text-xl font-semibold">Lọc sinh viên {{ filterByCourse }} </h3>
                    <div @click="closeFilterForm()">
                        <Icon icon="ic:outline-close" width="2em" height="2em" style="color: red" />
                    </div>
                </div>
                <div class="">
                    <div class="flex flex-col mb-6">
                        <label class="font-medium" for="by-name">Tìm kiếm theo <span class="text-blue-400">Họ
                                tên</span></label>
                        <input v-model="searchByName" id="by-name"
                            class="bg-[#f5f5f5] mt-1 rounded p-3 text-sm outline-none "
                            placeholder="Nhập tên sinh viên..." type="text">
                    </div>
                    <div class="flex flex-col mb-6">
                        <label class="font-medium" for="by-name">Tìm kiếm theo <span class="text-blue-400">Mã sinh
                                viên</span></label>
                        <input v-model="searchByStudentId" id="by-name"
                            class="bg-[#f5f5f5] mt-1 rounded p-3 text-sm outline-none "
                            placeholder="Nhập mã sinh viên..." type="text">
                    </div>
                    <div class="flex flex-col mb-6">
                        <label class="font-medium" for="by-specialized">Tìm kiếm theo <span class="text-blue-400">Chuyên
                                ngành</span></label>
                        <input v-model="searchByMajor" id="by-specialized"
                            class="bg-[#f5f5f5] mt-1 rounded p-3 text-sm outline-none "
                            placeholder="Nhập tên chuyên ngành..." type="text">
                    </div>
                    <div class="flex 2xl:flex-row lg:flex-col flex-row 2xl:gap-16 gap-10 mb-8">
                        <div class="flex items-center">
                            <label class="font-medium" for="by-cohort"><span
                                    class="text-blue-400 mr-4">Khóa</span></label>
                            <select v-model="filterByCourse" class="p-3 bg-[#f5f5f5]" name="" id="by-cohort">
                                <option value="">Chọn</option>
                                <option value="K44">K44</option>
                                <option value="K45">K45</option>
                                <option value="K46">K46</option>
                                <option value="K47">K47</option>
                            </select>

                        </div>
                        <div class="flex items-center">
                            <label class="font-medium" for="by-name"><span class="text-blue-400 mr-4">Lớp</span></label>
                            <select v-model="filterByClass" class="p-3 bg-[#f5f5f5]" name="" id="">
                                <option value="">Chọn</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                                <option value="H">H</option>
                            </select>
                        </div>

                    </div>
                    <div class="flex items-center">
                        <label class="font-medium" for="by-sex"><span class="text-blue-400 mr-4">Giới
                                tính</span></label>
                        <select v-model="filterByGender" class="p-3 bg-[#f5f5f5]" name="" id="">
                            <option value="">Chọn</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
        <div class=" w-full 2xl:col-span-5 col-span-4 ">
            <h3 class="text-2xl text-primary font-bold mb-4">Danh sách sinh viên</h3>
            <div class="flex gap-8 flex-wrap ">
                <div class="w-[272px] h-[376px]" v-for="(student, index) in studentsFilter" :key="index">
                    <router-link :to="'/student/' + student.id">
                        <StudentCard :student="student">
                        </StudentCard>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.filter-box {
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}
</style>