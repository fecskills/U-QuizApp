<script setup>
import Question from './Question.vue';
import QuizHeader from '../components/QuizHeader.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import quizes from '../data/quizes.json';

const route = useRoute();

const quizId = parseInt(route.params.id);


const quiz = quizes.find(q => q.id == quizId);

const currentQuestionIndex = ref(quiz);

</script>
<template>
    <section>
        <div class="container pt-3 flex-wrap">
            <div>
                    <QuizHeader />
                    <Question v-for="question in quiz.questions" :question="question" />
              
            </div>
        </div>
    </section>
</template>

<style>

</style>