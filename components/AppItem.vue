<template>
  <div class="item">
    <p>{{ item.name }}</p>
    <div class='ribbon-wrapper'  v-if="item.sale">
      <div class='ribbon'>Скидка</div>
    </div>
    <img :src="`${item.img}`" :alt="`Купить ${item.name}`" v-if="item.img">
    <img  src="/noimage.svg" :alt="`Купить ${item.name}`" v-else>
    <p>{{ item.price | usdollar }}</p>
    <button class="add" @click="addItem">Купить</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  filters: {
     usdollar: function(value) {
      return `${value} ₽`;
    }
  },
  methods: {
    addItem() {
      this.$store.commit('addItem', this.item);
    }
  }
};
</script>

<style scoped>
.item {
  border-radius: 5px;
  padding: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.item img {
  max-width: 100%;
  height: auto;
}

p {
  font-size: 18px;
}

.ribbon-wrapper {
  width: 108px;
  height: 108px;
  overflow: hidden;
  position: absolute;
  top: -6px;
  right: -6px; }

.ribbon {
  font: bold 15px Sans-Serif;
  line-height: 18px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  position: relative;
  padding: 7px 0;
  left: -4px;
  top: 26px;
  width: 150px;
  background-color: #6daaab;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
  box-shadow: -3px 5px 6px -5px rgba(0, 0, 0, 0.5);
  outline-offset: -4px;
  background-image: radial-gradient(circle farthest-side, #FF1C1A, #BF0B00);
  text-shadow: 2px 1px 0px rgba(0, 0, 0, 0.2); }

.ribbon:before, .ribbon:after {
  content: "";
  border-top: 4px solid #BF0B00;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  position: absolute;
  bottom: -4px; }

.ribbon:before {
  content: "";
  position: absolute;
  left: 0px;
  top: 100%;
  z-index: -1;
  border-left: 4px solid #BF0B00;
  border-right: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-top: 4px solid #BF0B00; }

.ribbon:after {
  content: "";
  position: absolute;
  right: 7px;
  top: 100%;
  z-index: -1;
  border-left: 4px solid transparent;
  border-right: 4px solid #BF0B00;
  border-bottom: 4px solid transparent;
  border-top: 4px solid #BF0B00; }


</style>