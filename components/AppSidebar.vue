<template>
  <aside>
    <div class="sidearea">
      <label for="pricerange">Не дороже: <span>{{ pricerange }} ₽</span></label>
      <input 
        class="slider" 
        id="pricerange" 
        type="range"
        :value="pricerange"  
        :min="min" 
        :max="max" 
        step="100" 
        @input="$emit('update:pricerange', $event.target.value)"
      />
      <span class="min">{{ min }} ₽</span>
      <span class="max">{{ max }} ₽</span>
    </div>
    <app-switch v-if="!sale" />
    <div class="sidearea callout">
      <h4>Справка</h4>
      <ul>
        <li>Используйте ползунок чтобы увидеть более дорогие модели</li>
        <li>Для выбора ккт только со скидкой используйте переключатель</li>
      </ul>
    </div>
    <div class="sidearea callout">
      <h4>Контакты</h4>
      <p>
        <a href="tel:+78612312340">+7(861) 231-23-40</a><br>
        <a href="tel:+78612312664">+7(861) 231-26-64</a>
      </p>
    </div>
  </aside>
</template>

<script>
import AppSwitch from './AppSwitch.vue';

export default {
   props: {
    sale: {
      type: Boolean,
      default: false
    },
    pricerange: {
      type: [Number, String],
      default: 50000
    }
  },
  data() {
    return {
      min: 10000,
      max: 50000
    };
  },
  components: {
    AppSwitch
  }
};
</script>

<style lang="scss" scoped>
aside {
  background: white;
  float: left;
  padding: 20px;
}

.sidearea {
  border-bottom: 1px solid #ccc;
  &:last-of-type {
    border: none;
  }
}

.callout {
  padding: 20px 0;
  h4 {
    padding-bottom: 10px;
  }
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}

/*--input range--*/
.sidearea:first-of-type {
  padding-bottom: 40px;
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}

span {
  font-family: 'Barlow', sans-serif;
}

.max {
  font-size: 12px;
  float: right;
  color: #565656;
}

.min {
  float: left;
  font-size: 12px;
  color: #565656;
}
</style>