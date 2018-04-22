<template>
  <div class="navarea">
    <nav>
      <div class="capsule">
        <nuxt-link exact to="/">
          <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="shopicon" role="presentation" width="60" height="60">
            <title id="shopicon">
              Маяк Кубани
            </title>
            <image xlink:href="data:image/png;base64,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" id="svg_1" height="100" width="100" y="0" x="0"/>
          </svg>
        </nuxt-link>
        <ul>
          <nuxt-link to="/avtonomnye"><li>Автономные</li></nuxt-link>
          <nuxt-link to="/fiskalnye-registratory"><li>Только с ПК</li></nuxt-link>
          <nuxt-link to="/sale"><li>Дисконт</li></nuxt-link>
        </ul>
        <nuxt-link to="/cart">
          <div class="cartitem">
            <div v-if="cartTotal > 0" class="cartcount">{{ cartTotal }}</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="shopicon" role="presentation" width="30" height="30">
              <title id="cart">
                Корзина
              </title>
              <path fill="black" d="M8.01 10c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2h10.376l10.53 49.813c-.107 1.14.952 2.245 2.095 2.187h50c1.057.015 2.03-.943 2.03-2s-.973-2.015-2.03-2H32.637l-1.688-8H85.01c.896-.01 1.742-.69 1.938-1.562l7-30c.26-1.16-.748-2.43-1.937-2.438H23.76l-1.78-8.437c-.2-.884-1.063-1.57-1.97-1.563zm16.594 14H89.51l-6.093 26H30.104zM42.01 72c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm28 0c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm-28 4c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5zm28 0c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5z"/>
            </svg>
          </div>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    cartTotal() {
      return this.$store.state.cartTotal;
    }
  }
};
</script>

<style scoped>
.navarea {
  overflow: hidden;
}

.capsule {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  width: 100vw;
  height: 60px;
  background: white;
}

ul {
  padding-left: 0;
  display: flex;
  list-style: none outside none;
  justify-content: center;
  align-items: center;
}

li {
  padding: 0 50px;
}

a,
a:visited,
a:active {
  text-decoration: none;
  color: black;
}

.cartitem {
  position: relative;
  float: right;
}

.cartcount {
  font-family: 'Barlow', sans-serif;
  position: absolute;
  background: #ff2211;
  color: white;
  text-align: center;
  padding-top: 4px;
  width: 20px;
  height: 20px;
  font-size: 10px;
  margin: -5px 0 0 20px;
  border-radius: 1000px;
  font-weight: 700;
}
</style>
