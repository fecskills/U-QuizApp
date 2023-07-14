<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const {quiz} = defineProps(["quiz"]);

const gotoQuiz = () => {
    router.push(`/quiz/${quiz.id}`);
};

</script>

<template>
    <div class="d-flex flex-wrap mt-4" @click="gotoQuiz">
        <div class="card-img">
            <img :src="quiz.img" alt="">
            <div class="p-2">
                <h4 class="fw-bold">{{ quiz.name }}</h4>
                <p>{{ quiz.questions.length }} Questions</p>
            </div>
        </div>
    </div>
</template>