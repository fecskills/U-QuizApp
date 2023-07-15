<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const { quizQuestionLength, numberOfCorrectAnswers } = defineProps(["quizQuestionLength", "numberOfCorrectAnswers"]);

</script>

<template>
    <div class="results overlay">
        <div>
            <p>Your result ...</p>
            <h1>{{ numberOfCorrectAnswers }}/{{ quizQuestionLength }} correct</h1>
        </div>
        <div class="pt-4">
            <RouterLink class="back" to="/">
                Back to Home
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.results {
    text-align: center;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
}

.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.465);
    z-index: 10;
    display: flex;
    top: 0;
    left: 0;
}

p {
    font-size: 30px;
    font-weight: 600;
}

h1 {
    font-size: 100px;
    font-weight: 700;
}

@media(max-width: 768px) {
    h1 {
        font-size: 60px;
    }

    p {
        font-size: 20px;
    }

    .results {
        text-align: center;
        padding: 100px 0;
        display: flex;
        flex-direction: column;
    }
}

.back {
    background-color: #1c1c1c;
    padding: 10px 20px 10px 20px;
    border-radius: 5px;
    color: white;
    text-decoration: none;

    @media(max-width: 768px) {
        margin-top: 20px;
    }
}</style>