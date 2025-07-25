<script lang="ts" setup>
import BaseTextInput from '@/components/BaseTextInput.vue';
import {ref} from 'vue';

const firstName = ref('');
const lastName = ref('');
</script>

<template>
  <div>
    <p>{{firstName}} - {{lastName}}</p>
    <BaseTextInput label="First Name"
    id="firstName"
    placeholder="My test placeholder"
    v-model:first-name="firstName"
    v-model:last-name="lastName"/>
  </div>
</template>

<style scoped>

</style>
