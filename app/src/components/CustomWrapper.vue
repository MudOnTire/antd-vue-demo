<template>
  <Draggable
    ghostClass="ghost"
    tag="tbody"
    :list="data.dataSource"
    @change="onChange"
  >
    <slot></slot>
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
  },
};
</script>