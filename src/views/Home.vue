<script setup>
import { Icon } from '@iconify/vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import HomeStudentCard from "./../components/HomeStudentCard.vue"
import { ref } from 'vue';

const swiperInstance = ref();

const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
}
const modules = [Navigation, Pagination]

const students = [
    {
        name: "Nguyễn Minh An",
        quote: "Đam mê là chìa khóa mở ra cánh cửa của sự thành công.",
        class: "K45C"
    },
    {
        name: "Trần Thị Bảo Ngọc",
        quote: "Không có thử thách nào quá lớn khi chúng ta kiên trì và không ngừng nỗ lực."
        , class: "K44A"
    },
    {
        name: "Lê Văn Khánh",
        quote: "Học hỏi là hành trình không bao giờ kết thúc, và mỗi bước đi là một cơ hội để phát triển."
        , class: "K45D"
    },
    {
        name: "Phạm Hoàng Anh",
        quote: "Công nghệ không chỉ là công cụ, mà là con đường giúp chúng ta thay đổi thế giới."
        , class: "K47H"
    },
    {
        name: "Đỗ Thu Hương",
        quote: "Khi chúng ta tin vào khả năng của mình, không gì là không thể."
        , class: "K44C"
    },
    {
        name: "Vũ Hữu Phát",
        quote: "Thành công không đến từ may mắn, mà là kết quả của sự chăm chỉ và đam mê."
        , class: "K45A"
    },
    {
        name: "Ngô Thị Minh Thư",
        quote: "Dám mơ ước và dám hành động, chúng ta sẽ đạt được những điều phi thường."
        , class: "K46A"
    },
    {
        name: "Trần Quốc Bảo",
        quote: "Khó khăn là cơ hội để chúng ta chứng tỏ bản thân và phát triển kỹ năng mới."
        , class: "K47T"
    }
];


</script>
<template>
    <div class="mt-40">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-20 text-primary mb-80">
            <div class=" col-span-1">
                <h3 class="text-base font-semibold mb-4 sm:text-2xl">Khoa Công nghệ thông tin</h3>
                <h1 class="text-2xl font-semibold mb-6 sm:text-5xl">Đại học Khoa học Huế</h1>
                <p class="text-base text-secondary mb-2">

                    Là một trong những khoa đào tạo Công nghệ thông tin hàng đầu cả nước
                    về quy mô đào tạo và nghiên cứu khoa học, với đội ngũ giảng viên uy tín
                    gồm 5 phó giáo sư, 9 tiến sĩ, 9 thạc sĩ và 2 trợ giảng.

                </p>
                <p class="text-base text-secondary mb-8">

                    Khoa hiện nay có 02 ngành đào tạo đại học,
                    02 ngành đào tạo cao học và 01 ngành đào tạo tiến sĩ, hướng tới đào tạo học viên,
                    sinh viên 1 toàn diện, đóng góp tích cực cho sự phát triển của đất nước và hội nhập quốc tế.

                </p>
                <ul class="content__list text-secondary">
                    <li class="flex items-center gap-3 mb-4">
                        <Icon icon="charm:circle-tick" width="3em" height="3em" style="color: #4D5E80" />
                        <span class="content__list-i sm:text-xl text-base font-medium">
                            Đào tạo cử nhân Công nghệ thông tin
                        </span>
                    </li>
                    <li class="flex items-center gap-3 mb-4">
                        <Icon icon="charm:circle-tick" width="3em" height="3em" style="color: #4D5E80" />

                        <p class="content__list-i  sm:text-xl text-base font-medium">
                            Đào tạo cử nhân Kỹ thuật phần mềm (cơ chế đặc thù)
                        </p>
                    </li>
                    <li class="flex items-center gap-3 mb-4">
                        <Icon icon="charm:circle-tick" width="3em" height="3em" style="color: #4D5E80" />

                        <p class="content__list-i  sm:text-xl text-base font-medium">
                            Đào tạo thạc sĩ Khoa học máy tính
                        </p>
                    </li>
                    <li class="flex items-center gap-3 mb-4">
                        <Icon icon="charm:circle-tick" width="3em" height="3em" style="color: #4D5E80" />

                        <p class="content__list-i  sm:text-xl text-base font-medium">
                            Đào tạo thạc sĩ Quản lý công nghệ thông tin
                        </p>
                    </li>
                    <li class="flex items-center gap-3 mb-4">
                        <Icon icon="charm:circle-tick" width="3em" height="3em" style="color: #4D5E80" />

                        <p class="content__list-i  sm:text-xl text-base font-medium">
                            Đào tạo tiến sĩ Khoa học máy tính
                        </p>
                    </li>
                </ul>
            </div>
            <div class="relative">
                <img class=" lg:mb-0 mb-48" src="/src/assets/images/img3.jpg" alt="">
                <img class="h-80 absolute right-0 top-3/4" src="/src/assets/images/img1.jpg" alt="">
            </div>
        </div>
        <div class=" text-primary mb-16 flex flex-col items-center">
            <div class="flex items-center justify-center w-3/4 mb-4">
                <div class=" md:block hidden bg-primary col-span-2 w-full h-[1px]"></div>
                <div class=" w-[1500px] flex items-center justify-center">
                    <h1 class="xl:text-3xl lg:text-2xl text-xl font-semibold px-1 text-center">Sinh viên tiêu biểu khoa
                        CNTT</h1>
                </div>
                <div class=" md:block hidden col-span-2 bg-primary w-full h-[1px]"></div>
            </div>
            <p class="max-w-7xl text-center lg:text-xl md:text-lg text-base">
                Khoa Công nghệ Thông tin tự hào giới thiệu những sinh viên tiêu biểu, những ngôi sao sáng giá trong lĩnh
                vực
                học thuật và nghiên cứu. Các sinh viên này không chỉ xuất sắc trong học tập với điểm số vượt trội, mà
                còn
                nổi bật với những dự án sáng tạo và đột phá. Họ đã tham gia và đạt nhiều giải thưởng cao quý trong các
                cuộc
                thi quốc gia và quốc tế, thể hiện tinh thần học hỏi và khát khao khám phá không ngừng. Những thành tựu
                của
                họ không chỉ là niềm tự hào của riêng họ mà còn là minh chứng cho chất lượng đào tạo và sự hỗ trợ tận
                tình
                từ đội ngũ giảng viên của khoa. Chúng tôi tin rằng, với đam mê và năng lực, các sinh viên này sẽ tiếp
                tục
                gặt hái nhiều thành công hơn nữa trong tương lai, đóng góp tích cực cho sự phát triển của ngành công
                nghệ
                thông tin.
            </p>

        </div>
        <div class=" xl:flex hidden justify-center">
            <div class="w-full">
                <Swiper :modules="modules" @swiper="onSwiper()" :space-between="80" navigation :slides-per-view="4">
                    <SwiperSlide v-for="(student, index) in students" :key="index">
                        <HomeStudentCard :student="student"></HomeStudentCard>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div class="xl:hidden block">
            <div class="lg:flex hidden justify-center">
                <div class="w-full">
                    <Swiper :modules="modules" @swiper="onSwiper()" :space-between="120" navigation
                        :slides-per-view="3">
                        <SwiperSlide v-for="(student, index) in students" :key="index">
                            <HomeStudentCard :student="student"></HomeStudentCard>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>


            <div class="lg:hidden block">
                <div class="md:flex hidden">
                    <div class="w-full">
                        <Swiper :modules="modules" @swiper="onSwiper()" :space-between="120" navigation
                            :slides-per-view="2">
                            <SwiperSlide v-for="(student, index) in students" :key="index">
                                <HomeStudentCard :student="student"></HomeStudentCard>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div class="md:hidden flex">
                    <div class="w-full">
                        <Swiper :modules="modules" @swiper="onSwiper()" :space-between="120" navigation
                            :slides-per-view="1">
                            <SwiperSlide v-for="(student, index) in students" :key="index">
                                <HomeStudentCard :student="student"></HomeStudentCard>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>