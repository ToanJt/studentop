<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({ student: Object })
const router = useRouter();

const toStudentlist = () => {
    window.scrollTo(top);
    router.push('/student-list');
}

</script>
<template>
    <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div
            class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src="/src/assets/images/student.jpg" alt="card-image" />
        </div>
        <div class="p-6">
            <h5
                class="block mb-0 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-primary">
                {{ props.student.name }}
            </h5>
            <h5
                class="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-primary">
                {{ props.student.class }}
            </h5>
            <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {{ props.student.quote }}
            </p>
        </div>
        <div class="p-6 pt-0">
            <button @click="toStudentlist()"
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-primary text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button">
                Xem thêm
            </button>
        </div>
    </div>
</template>