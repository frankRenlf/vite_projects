import { ref, onMounted, onUnmounted } from "vue";

export const useEventListener = (
  target: any,
  event1: string,
  event2: string,
  callback1: Function,
  callback2: Function
) => {
  onMounted(() => {
    target.addEventListener(event1, callback1);
    target.addEventListener(event2, callback2);
  });
  onUnmounted(() => {
    target.removeEventListener(event1, callback1);
    target.removeEventListener(event2, callback2);
  });
  console.log(typeof window, typeof event2);
};
