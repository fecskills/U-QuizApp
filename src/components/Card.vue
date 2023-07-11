<script setup>
import { defineProps } from "vue";

const {quiz} = defineProps(["quiz"]);

</script>

<template>
    <div class="d-flex flex-wrap mt-4">
        <div class="card-img">
            <img :src="quiz.img" alt="">
            <div class="p-2">
                <h4 class="fw-bold">{{ quiz.name }}</h4>
                <p>{{ quiz.questions.length }} Questions</p>
            </div>
        </div>
    </div>
</template>