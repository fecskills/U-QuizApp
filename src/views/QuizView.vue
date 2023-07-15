<script setup>
import Question from './Question.vue';
import Result from '../components/Result.vue';
import QuizHeader from '../components/QuizHeader.vue';
import { useRoute } from 'vue-router';
import { ref, watch, computed, } from 'vue';
import quizes from '../data/quizes.json';

const route = useRoute();

const quizId = parseInt(route.params.id);


const quiz = quizes.find(q => q.id == quizId);


const currentQuestionIndex = ref(0);
const questionStatus = computed(() => {
    return `${currentQuestionIndex.value}/${quiz.questions.length}`;
});

const barPercentage = computed(() => {
    return `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
});
const numberOfCorrectAnswers = ref(0);
const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        numberOfCorrectAnswers.value++;
    }
    if (quiz.questions.length - 1 == currentQuestionIndex.value) {
        showResults.value = true;
    }
    currentQuestionIndex.value++;
};

const showResults = ref(false);

const goToHome = () => {
    router.push('/');
};



</script>
<template>
    <section>
        <div class="container pt-3 flex-wrap">
            <div>
                <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
                <!-- <Question v-for="question in quiz.questions" :question="question" /> -->
                
            </div>
            <Question 
            v-if="!showResults"
            :question="quiz.questions[currentQuestionIndex]" @answerSelected="onOptionSelected" />
            <Result 
            :quizQuestionLength="quiz.questions.length"
            :numberOfCorrectAnswers="numberOfCorrectAnswers"
            v-else/>
        </div>
    </section>
</template>

<style></style>