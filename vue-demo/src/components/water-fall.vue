<template>
  <div class="wraps">
    <div
      :style="{
        height: item.height + 'px',
        background: item.background,
        top: item.top + 'px',
        left: item.left + 'px',
      }"
      v-for="item in waterList" :key="item"
      class="items"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
const dp = defineProps<{
  list: any[];
}>();
const waterList = reactive<any[]>([]);
const init = () => {
  const heightList: any[] = [];
  const width = 130;
  const x = document.body.clientWidth;
  const column = Math.floor(x / width);

  for (let i = 0; i < dp.list.length; i++) {
    if (i < column) {
      dp.list[i].top = 10;
      dp.list[i].left = i * width;
      heightList.push(dp.list[i].height + 10);
      waterList.push(dp.list[i]);
    } else {
      let current = heightList[0];
      let index = 0;
      heightList.forEach((h, inx) => {
        if (current > h) {
          current = h;
          index = inx;
        }
      });
      console.log(current, "c");
      dp.list[i].top = current + 20;
      console.log(dp.list[i].top, "top", i);
      dp.list[i].left = index * width;
      heightList[index] = heightList[index] + dp.list[i].height + 20;
      waterList.push(dp.list[i]);
    }
  }
  console.log(dp.list);
};

onMounted(() => {
  window.onresize = () => init();
  init();
});
</script>

<style scoped lang="less">
.wraps {
  position: relative;
  height: 100%;
  .items {
    position: absolute;
    width: 120px;
  }
}
</style>
