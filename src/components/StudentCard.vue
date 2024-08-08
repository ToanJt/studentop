<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    student: Object,
})

function getImageUrl(name) {
    return new URL(`${name}`, import.meta.url).href;
}

</script>

<template>
    <div class=" bg-line rounded-md text-secondary flex flex-col p-4">
        <div class="h-60 w-60">
            <img class=" rounded-md h-full w-full" :src="getImageUrl(props.student.avt)" alt="">
        </div>
        <div class="text-base mt-2">
            <p class="font-semibold">{{ props.student.name }}</p>
            <p>{{ props.student.studentId }}</p>
            <p>{{ props.student.major }}</p>
            <p>{{ props.student.class }}</p>
        </div>
    </div>
</template>