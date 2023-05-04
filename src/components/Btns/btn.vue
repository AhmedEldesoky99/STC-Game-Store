<template>
  <button
    @click="x"
    :class="`btn btn__${localClass} ${
      localActive ? ` btn__${localClass}--active` : false
    }`"
  >
    {{ localValue }}
    <div v-if="showIcon">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import { ref } from "vue";

export default {
  name: "customBtn",
  props: ["value", "onClick", "type", "active"],

  setup(props) {
    let className = ref(props.type);
    const showIcon = props.active === true || className.value !== "secondary";

    if (!props.type) {
      className.value = "primary";
    }

    return {
      localValue: props.value,
      localOnclick: props.onClick,
      localClass: className.value,
      localActive: props.active,
      showIcon,
    };
  },
};
</script>

<style lang="scss">
.btn {
  border: none;
  font-size: 2rem;
  text-transform: capitalize;
  padding: 1rem 2rem;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-in-out;
  width: 100%;
  &__primary {
    color: #fff;
    background-color: #572589;
    border-radius: 0.5rem;

    &--active,
    &:hover {
      background-color: #fff;
      color: #572589;
    }
  }
  &__secondary {
    color: #545454;
    background-color: #fff;
    border: 0.3rem solid #979797;
    border-radius: 3rem;

    &--active,
    &:hover {
      border: 0.3rem solid #572589;
      background-color: #572589;
      color: #fff;
    }
  }
}
</style>
