<script setup>
import q from "../data/quizes.json";
import Card from "../components/Card.vue";

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
    <div class="container small-screen">
        <section>
            <div class="d-flex pt-5 align-items-center">
                <h4 class="fw-bold me-2">Quizes</h4>
                <input v-model.trim="search" type="text" class="custom-input" placeholder="Search...">
            </div>
        </section>
        <section class="">
            <h4 class="pt-5 px-4">Available Quizes</h4>
            <div class="d-flex flex-wrap mx-auto w-1000">
                <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
            </div>
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

.small-screen {
    @media (max-width: 699px) {
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }
}

.w-1000 {
    @media (min-width: 700px) {
            width: 1000px;
    }
    @media (max-width: 699px) {
            margin-left: auto;
            margin-right: auto;
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