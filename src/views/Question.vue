<script setup>
import { defineProps, defineEmits } from "vue";
const {question} = defineProps(["question"]);

const emit = defineEmits(["answerSelected"]);

const emitSelectedOption = (isCorrect) => {
    emit("answerSelected", isCorrect);
};


</script>

<template>
    <div class="question-coontainer">
        <h1 class="pt-5 pb-2">{{ question.text }}</h1>
        <div class="option-container">
            <div class="option" v-for="option in question.options" :key="option.id" @click="emitSelectedOption(option.isCorrect)">
                <p class="option-label">{{ option.label }}</p>
                <div class="option-value">
                    <p>
                        {{ option.text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option-label {
    background-color: lightblue;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.option-value {
    background-color: aliceblue;
    width: 100%;
    font-size: 30px;
    padding: 0 20px;
}
</style>