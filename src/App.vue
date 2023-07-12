<script setup>
import q from "./data/quizes.json";
import Card from "./components/Card.vue";

import { ref, watch } from "vue";

const quizes = ref(q);
const search = ref("");

watch(search, (val) => {
    quizes.value = q.filter((quiz) => {
        return quiz.name.toLowerCase().includes(val.toLowerCase());
    });
});


</script>


<template>
    <div class="container ">
        <section>
            <div class="d-flex pt-5 align-items-center">
                <h4 class="fw-bold me-2">Quizes</h4>
                <input v-model.trim="search" type="text" class="custom-input" placeholder="Search...">
            </div>
        </section>
        <section class="d-flex">
            <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
            <!-- <div v-for="quiz in quizes" :key="quiz.id" class="d-flex flex-wrap mt-4">
                <div class="card-img">
                    <img :src="quiz.img" alt="">
                    <div class="p-2">
                        <h4 class="fw-bold">{{ quiz.name }}</h4>
                        <p>{{ quiz.questions.length }} Questions</p>
                    </div>
                </div>
            </div> -->
        </section>
    </div>
</template>

<style lang="scss">
.card-img {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;

    img {
        width: 100%;
        height: 190px;
        margin: 0px;
    }
}

.custom-input {
    border-radius: 5px;
    border: none;
    padding: 10px;
    background-color: rgb(232, 234, 236);
}

.custom-input:focus-within {
    outline: 1px rgba(110, 59, 59, 0.362) solid;
}

p,
h4,
h1,
h2,
h3,
h5,
h6 {
    margin-bottom: 0px;
}
</style>