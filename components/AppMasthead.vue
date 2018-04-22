<template>
  <div class="masthead" :style="`background:${bkcolor}`">
    <img class="ppl-banner" :src="`/${img}.png`" alt="ООО Маяк Кубани">
    <svg class="bk" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1367.57 190.59" preserveAspectRato="none" role="presentation">
      <path d="M576.6,166.37c-9.69-14.55-21.23-27.62-33.7-39.77a81,81,0,0,0-30.38-18.95c-4-1.35-8.54-3.09-12.08.51-3.27,3.32-1.25,7.44-.26,11.23.08.3.25.58.32.89,1.21,4.74-.39,6.37-5.13,4.9a53.63,53.63,0,0,1-13.45-6.94,460.36,460.36,0,0,1-67.6-55.12,53.43,53.43,0,0,1-8.24-10.4c-4.39-7.25-3.32-11.48,4-15.61a37.66,37.66,0,0,1,6.43-3c3.85-1.31,6.09-3.78,6.55-7.83-2.71-3.56-6.63-5.17-10.64-6.65-9.88-3.65-19.22-8.08-24.78-17.76-1.33-2.31-2.82-4.58-2.75-7.42H280.77c5.05,5.3,9.78,10.18,14.4,15.16,4.36,4.69,8.4,9.71,8.84,16.39.52,7.74,3.56,14.35,8.05,20.44,8.77,11.92,19.2,22.3,30,32.36,12.38,11.57,25.71,22.08,37.63,34.16a31.74,31.74,0,0,1,6.28,8.28c1.86,3.79.58,6.39-3.06,8.08-2.84,1.32-5.89,1.11-8.88,1.08-14.15-.18-27.9-3.53-41.83-5.43-6.59-.89-13.18-1.79-19.86-1.41-8.54.49-10.77,4.56-6.35,11.76,1.41,2.29,3,4.46,4.62,6.61,7.65,10.26,17.7,18,27.29,26.29,6.6-.1,13.2,0,19.58,1.89,4.69,1.41,8.25,3.33,10.81,5.91H581.73A44.12,44.12,0,0,0,576.6,166.37Z" transform="translate(-0.95 5.75)" style="fill: #758ee2"/>
    </svg>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    bkcolor: {
      type: String,
      default: '#3b60ed'
    },
    title: {
      type: String,
      default: 'Онлайн кассы'
    },
    img: {
      type: String,
      default: 'banner-ppl'
    }
  }
};
</script>

<style scoped>
h1 {
  color: white;
  position: relative;
  z-index: 100;
  font-size: 60px;
  padding: 8px 80px;
}

.bk {
  position: absolute;
  top: 0;
  left: 0;
}

.ppl-banner {
  position: absolute;
  z-index: 10;
  right: 100px;
}

.masthead {
  width: 100%;
  height: 100px;
  color: white;
  position: relative;
  overflow: hidden;
  margin: 10px 0;
}
@media screen and (max-width: 480px) {
	h1{    font-size: 30px;}
}
</style>