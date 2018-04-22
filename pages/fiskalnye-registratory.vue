<template>
  <main class="capsule">
    <app-masthead img="banner-ppl" title="Фискальные" bkcolor="#474598"/>
    <div class="contain">
      <app-sidebar :pricerange.sync="highprice"/>
      <transition-group name="items" tag="section" class="content">
        <app-item
          v-for="(item, index) in mProducts"
          :key = "index"
          :item="item"
          :index="index"
        />
      </transition-group>
    </div>
  </main>
</template>

<script>
import AppSidebar from './../components/AppSidebar.vue'
import AppMasthead from './../components/AppMasthead.vue'
import AppItem from './../components/AppItem.vue'

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
    mProducts() {
      return this.$store.getters.men.filter(el =>
        this.$store.state.sale
          ? el.price < this.highprice && el.sale
          : el.price < this.highprice
      )
    }
  },
  head () {
    return {
      title: 'Фискальные регистраторы',
      meta: [
        { hid: 'description', name: 'description', content: 'Фискальные регистраторы онлайн купить в Краснодаре' }
      ]
    }
  }
}
</script>
