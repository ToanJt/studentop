<script setup>
import { useRoute } from 'vue-router';
import { computed, onMounted, reactive, ref } from 'vue';
import { getData } from '../server/api'

const students = ref([]);
const router = useRoute();
const currentId = router.params.id - 1;
const student = reactive({
    id: Number,
    name: String,
    gender: String,
    studentId: String,
    major: String,
    course: String,
    class: String,
    avt: String,
    quote: String,
    dateOfBirth: String,
    hometown: String,
    hobbies: Array,
    email: String,
    phone: String,
});

function onTop() {
    window.scrollTo(top);
}

student.value = students.value[currentId];

onMounted(async () => {
    try {
        let res = await getData();
        students.value = res.data;

        student.name = students.value[currentId].name;
        student.id = students.value[currentId].id;
        student.gender = students.value[currentId].gender;
        student.studentId = students.value[currentId].studentId;
        student.major = students.value[currentId].major;
        student.course = students.value[currentId].course;
        student.class = students.value[currentId].class;
        student.avt = students.value[currentId].avt;
        student.quote = students.value[currentId].quote;
        student.dateOfBirth = students.value[currentId].dateOfBirth;
        student.hometown = students.value[currentId].hometown;
        student.hobbies = students.value[currentId].hobbies;
        student.email = students.value[currentId].email;
        student.phone = students.value[currentId].phone;

        onTop();
    } catch (error) {
        console.error("Failed to fetch data:", error)
    }
})
</script>

<template>
    <div class="mt-40 text-black grid grid-cols-5 gap-20">
        <div class=" col-span-3 text-base">
            <h3 class="text-2xl text-primary font-bold mb-4">Thông tin sinh viên</h3>
            <div>
                <h3 class="font-semibold">Thông tin cơ bản:</h3>
                <p class="my-2">Sinh viên: <span class="text-xl font-semibold"> {{ student.name }}</span></p>
                <p class="">Mã sinh viên: <span class="text-xl font-semibold">{{ student.studentId }}</span></p>
                <p class="my-2">Ngành: <span class="text-xl font-semibold">{{ student.major }}</span></p>
                <p class="my-2">Khóa: <span class="text-xl font-semibold">{{ student.course }}</span></p>
                <p class="my-2">Thành phố: <span class="text-xl font-semibold">{{ student.hometown }}</span></p>
            </div>
            <div>
                <h3 class="font-semibold mt-8 mb-2">Thông tin khác:</h3>
                <p class="mb-2">Lớp: {{ student.class }}</p>
                <p>Sinh nhật: {{ student.dateOfBirth }}</p>
            </div>
            <div class="mt-8 mb-8">
                <h3 class="font-semibold mb-2">Địa chỉ liên hệ:</h3>
                <p class="mb-2">Email: {{ student.email }}</p>
                <p>Số điện thoại: {{ student.phone }}</p>
            </div>
            <h1 class="text-xl font-semibold mb-4">Slogan: "{{ student.quote }}"</h1>
            <div>
                <h3 class="font-semibold mt-8 mb-2">Sở thích: </h3>
                <div class="flex gap-4">
                    <div class="py-2 px-4 text-white bg-primary rounded-full" v-for="(hobbie, index) in student.hobbies"
                        :key="index">
                        <p class="">{{ hobbie }}</p>
                    </div>
                </div>
            </div>
            <div class="w-4/5">
                <h3 class="font-semibold mt-8 mb-2">Lời nhắn gửi: </h3>
                <p>Tôi là {{ student.name }}, một sinh viên năm nhất tại khoa {{ student.major }} của trường Đại học
                    Khoa học Huế. Sự ra
                    đời của tôi là kết
                    quả của sự kết hợp giữa sự say mê khám phá và đam mê học hỏi về {{ student.major }}. Từ khi còn nhỏ,
                    tôi đã có một
                    niềm đam mê mãnh liệt đối với {{ student.major }} và mong muốn có thể {{ student.major }} để phát
                    triển.

                    Sự lựa chọn của tôi khi vào học tại Đại học Khoa học Huế là một quyết định chín chắn và cân nhắc kỹ
                    lưỡng. Tôi đã nghe nhiều về sự phát triển vượt bậc và uy tín của trường, đặc biệt là trong lĩnh vực
                    {{ student.major }}. Tôi tin rằng ở đây, tôi sẽ có cơ hội được tiếp cận với những kiến thức sâu rộng
                    và thực hành thực
                    tế, từ đó phát triển bản thân một cách toàn diện.

                    Trường Đại học Khoa học Huế không chỉ là nơi cung cấp kiến thức mà còn là một môi trường sống động
                    và năng động. Tôi hy vọng qua những năm tháng tại đây, tôi sẽ không chỉ trang bị cho mình những kiến
                    thức chuyên môn mà còn có được những kỹ năng sống và công nghệ mềm cần thiết để tự tin bước vào thế
                    giới thực tế.

                    Đặc biệt, tôi rất mong được gặp gỡ và học hỏi từ các thầy cô giáo, những người có kinh nghiệm và tâm
                    huyết trong việc truyền đạt kiến thức cho các thế hệ sinh viên tương lai. Tôi tin rằng sẽ có những
                    mối quan hệ chuyên môn và cá nhân rất đáng quý được xây dựng trong suốt quãng thời gian học tập tại
                    đây.

                    Cuối cùng, tôi muốn cam kết sẽ nỗ lực hết mình, học hỏi và rèn luyện để trở thành một người học
                    giỏi, một thành viên tích cực của cộng đồng sinh viên Đại học Khoa học Huế và một tương lai triển
                    vọng cho xã hội. Tôi mong muốn có cơ hội được chia sẻ và góp phần vào sứ mệnh giáo dục của trường,
                    cùng xây dựng một tương lai tươi sáng cho bản thân và đất nước.

                    Chân thành cảm ơn sự chào đón nồng hậu của các thầy cô và các bạn. Xin chào và chúc mọi người một
                    năm học mới thành công và hạnh phúc!

                </p>
            </div>
        </div>
        <div class="col-span-2  sticky top-60 ">
            <div class=" sticky top-40">
                <img class=" rounded-lg w-4/5 " :src="student.avt" alt="">
            </div>
        </div>
    </div>
</template>