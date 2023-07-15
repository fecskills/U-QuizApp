<script setup>
import { defineProps } from "vue";

const { questionStatus, barPercentage } = defineProps(["questionStatus", "barPercentage"]);

</script>

<template>
    <div>
        <h4 class="fw-bold">Question {{ questionStatus }}</h4>
        <div class="bar">
            <div :style="{ width: barPercentage }" class="completion"></div>
        </div>
    </div>
</template>

<style scoped>
.bar {
    width: 300px;
    height: 50px;
    border: 3px solid lightblue;
}

.completion {
    width: 0%;
    height: 100%;
    background-color: lightblue;
}
</style>