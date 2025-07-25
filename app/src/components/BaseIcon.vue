<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { defineAsyncComponent,computed } from 'vue';
import IconMountain from './icons/IconMountain.vue';


const props = defineProps({
  name:{
    type:String,
    required:true
  },
  source:{
    type:String,
    default:'iconify'
  },
  width:{
    type:[String,Number],
    default:20
  },
  height:{
    type:[String,Number],
    default:20
  }
})

const customIcon = computed (()=>{
  if(props.source !== 'iconify') {
    return defineAsyncComponent(() => import(`./icons/${props.name}.vue`));
  }
  return null;

})
</script>

<template>
  <div>
    <Icon v-if="source === 'iconify'" :icon="name" :width="width" :height="height" />
    <component v-else :is="customIcon"/>
  </div>
</template>

<style scoped>

</style>
