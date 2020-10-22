<template>
  <Draggable
    ghostClass="ghost"
    tag="tbody"
    :list="data.dataSource"
    :move="onMove"
    @change="onChange"
  >
    <!-- <transition-group tag="div" name="list"> -->
    <slot></slot>
    <!-- </transition-group> -->
  </Draggable>
</template>
<script>
import Draggable from "vuedraggable";

export default {
  components: {
    Draggable,
  },
  inject: ["data"],
  data() {
    return {
      dragging: false,
    };
  },
  methods: {
    onChange(evt) {
      console.log(evt.moved);
    },
    onMove(evt, originalEvent) {
      console.log("on move", evt, originalEvent);
    },
  },
};
</script>
<style>
tr {
  cursor: grab;
  transition: all 0.5s;
}
</style>