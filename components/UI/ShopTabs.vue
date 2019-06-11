<template>
  <div class="container">
    <div class="columns">
      <div class="column is-12">
        <nav :class="wrapperClass">
          <button
            class="tabs__item"
            type="button"
            v-for="tab in tabs"
            :ref="tab.value"
            :key="tab.title"
            :class="[
        { 'tabs__item_active' : tab.value === currentTab },
        tab.value === currentTab && tabActiveClass ? tabActiveClass: '',
        tabClass,
      ]"
            @click="handleClick(tab.value)"
            v-html="tab.title"
          />
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    currentTab: {
      type: String,
      required: true
    },
    tabs: {
      type: Array,
      required: true
    },
    wrapperClass: {
      type: String,
      required: false
    },
    tabClass: {
      type: String,
      required: false
    },
    tabActiveClass: {
      type: String,
      required: false
    },
    leafClass: {
      type: String,
      required: false
    }
  },
  methods: {
    handleClick(value) {
      this.$emit("onClick", value);
    }
  }
};
</script>
