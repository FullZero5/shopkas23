<template>
  <main class="capsule">
    <app-masthead img="banner-ppl-women" title="Автономные" bkcolor="#e82319"/>
    <div class="contain">
      <app-sidebar :pricerange.sync="highprice"/>
      <transition-group name="items" tag="section" class="content">
        <app-item
          v-for="(item, index) in wProducts"
          :key="item"
          :item="item"
          :index="index"
        />
      </transition-group>
    </div>
  </main>
</template>

<script>
import AppSidebar from './../components/AppSidebar.vue';
import AppMasthead from './../components/AppMasthead.vue';
import AppItem from './../components/AppItem.vue';

export default {
  components: {
    AppSidebar,
    AppMasthead,
    AppItem
  },
  async fetch ({ store }) {
    if (!store.products) {
      await store.dispatch('setPriceRef');
    }
  },
  data() {
    return {
      highprice: 40000
    }
  },
  computed: {
    wProducts() {
      return this.$store.getters.women.filter(el =>
        this.$store.state.sale
          ? el.price < this.highprice && el.sale
          : el.price < this.highprice
      );
    }
  },
  head () {
    return {
      title: 'Автономные кассы',
      meta: [
        { hid: 'description', name: 'description', content: 'Автономные кассы онлайн купить в Краснодаре' }
      ]
    }
  }
};
</script>
