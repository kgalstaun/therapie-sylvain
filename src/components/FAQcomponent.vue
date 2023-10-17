<template>
  <div class="faq">
    <div class="faq__container">
      <div v-if="data.title" class="faq__title">
        <h1>
          {{ data.title }}
        </h1>
      </div>
      <ul class="faq__list">
        <li
          ref="itemRefs"
          v-for="(item, index) in data.items"
          :key="item.title"
          class="faq__item"
        >
          <div
            class="faq__item-upper"
            role="button"
            @click="openFaqItem(index)"
          >
            <span
              class="faq__item-title"
              :class="{ active: openedItems.includes(index) }"
            >
              {{ item.title }}
            </span>
            <div class="faq__item-icon">
              <SvgPlusComponent
                :active="openedItems.includes(index)"
              ></SvgPlusComponent>
            </div>
          </div>
          <div class="faq__item-text-container">
            <HtmlText class="faq__item-text" :data="item.text.html"></HtmlText>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import HtmlText from "./HtmlText.vue";
import SvgPlusComponent from "./svg/SvgPlusComponent.vue";

defineProps(["data"]);
const itemRefs = ref([]);

const openedItems = ref([]);

const openFaqItem = (index) => {
  const isOpened = openedItems.value.includes(index);

  const textContainerEl = itemRefs.value[index].querySelector(
    ".faq__item-text-container"
  );
  const textEl = itemRefs.value[index].querySelector(".faq__item-text");

  if (isOpened) {
    openedItems.value = openedItems.value.filter(
      (itemIndex) => itemIndex !== index
    );

    textContainerEl.style.maxHeight = "0px";
  } else {
    openedItems.value.push(index);

    textContainerEl.style.maxHeight = textEl.clientHeight + "px";
  }
};
</script>

<style lang="scss" scoped>
.faq {
  width: 100%;
  display: flex;
  justify-content: center;

  &__container {
    @include contentOutline;
    max-width: 86rem;
  }

  &__list {
    width: 100%;
    margin-top: 1.2rem;

    background-color: rgb(242, 242, 242);
    border-radius: 20px;
    padding: 1.3rem 2.3rem;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 1.2rem;
      border-bottom: 1px solid black;
    }
    overflow: hidden;
  }

  &__item-upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    z-index: 1;
  }

  &__item-title {
    text-align: start;

    padding-top: 1rem;
    padding-bottom: 2rem;
    line-height: normal;

    font-family: "Quicksand";
    font-size: 2rem;
    font-weight: normal;
  }

  &__item-text-container {
    transition: max-height 0.22s ease-out;
    max-height: 0px;
  }

  &__item-text {
    padding-bottom: 2rem;
  }

  @media screen and (max-width: $screen-size-lg) {
  }
}
</style>
