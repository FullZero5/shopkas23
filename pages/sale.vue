<template>
  <main class="capsule">
    <div class="saleimg">
      <app-masthead img="bk-sale" title="Дисконт" bkcolor="#1ba079"/>
    </div>
    <div class="contain">
      <app-sidebar :pricerange.sync="highprice" :sale="true"/>
      <transition-group name="items" tag="section" class="content">
        <app-item
          v-for="(item, index) in sProducts"
          :key="index"
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
    };
  },
  computed: {
    sProducts() {
      return this.$store.getters.sale.filter(el => el.price < this.highprice);
    }
  },
  head () {
    return {
      title: 'Онлайн кассы со скидкой',
      meta: [
        { hid: 'description', name: 'description', content: 'Купить онлайн кассы со скидкой в Краснодаре' }
      ]
    }
  }
};
</script>

<style>
.saleimg .ppl-banner {
  height: 105%;
}
</style>
