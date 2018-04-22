<template>
  <div>
    <transition name="fade">

      <div v-if="!submitted" class="payment">
        <h3>Оформить заказ</h3>
        <p>временно оплата недоступна, введите свой телефон наш менеджер свяжется и уточнит детали Вашего заказа</p>
        <label for="email">Укажите телефон</label>
        <input
                type="tel"
                name="phone_number"
                id="phone"
                v-model="phone_number"
                placeholder="(918) 000-0000"
                autocomplete="tel"
                maxlength="14"
                class="form-control"
                pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}" required />
        <label for="card">По всем вопросам</label>
        <p>обращяйтесь по телефону <a href="tel:+78612312340">+7(861) 231-23-40</a></p>
        <button class='pay-with-stripe' @click='pay' :disabled='!phone_number'>Отправить</button>
      </div>

      <div v-else class="statussubmit">
        <div v-if="status === 'failure'">
          <h3>Что то пошло не так!</h3>
          <p>Попробуйте оставить заявку по телефон или повторите попытку!</p>
          <button @click="clearCart">Повторить</button>
        </div>

        <div v-else class="loadcontain">
          <h4>Заявка получена ожидайте звонка</h4>
          <app-loader />
        </div>
      </div>

    </transition>
  </div>
</template>

<script>
import AppLoader from './AppLoader.vue';
import axios from 'axios';

export default {
  components: {
    AppLoader
  },
  props: {
    total: {
      type: [Number, String],
      default: '50.00'
    },
    success: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      submitted: false,
      complete: true,
      status: '',
      response: '',
      phone_number: ''
    };
  },
  computed: {
    
  },
  methods: {
    pay() {
        this.submitted = true;
        axios
          .post(
            `https://api.telegram.org/${yuotoken}/sendMessage?chat_id=84675550&text=Заказ от ${this.phone_number} на ${this.total}`
          )
          .then(response => {
            this.status = 'success';
            this.$emit('successSubmit');
            this.$store.commit('clearCartCount');
            this.response = JSON.stringify(response, null, 2);
            console.log(this.response);
          })
          .catch(error => {
            this.status = 'failure';
            //console logs for you :)
            this.response = 'Error: ' + JSON.stringify(error, null, 2);
            console.log(this.response);
          });
    },
    clearCart() {
      this.submitted = false;
      this.status = '';
      this.complete = false;
      this.response = '';
    }
  }
};
</script>

<style scoped>
.payment {
  border: 1px solid #ccc;
  color: black;
  width: 500px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  min-height: 350px;
  justify-content: space-between;
  text-align: center;
}
.statussubmit {
  text-align: center;
}
.stripe-card {
  border: 1px solid #ccc;
}
p {
  margin: 0 0 10px;
}
label {
  color: black;
  margin: 15px 0 5px;
  font-family: 'Playfair Display', sans-serif;
}
button[disabled] {
  color: #ccc;
  border-color: #ccc;
  &:hover {
    background: white;
    color: #ccc;
  }
}
.loadcontain {
  text-align: center;
}
.stripe-card {
  margin-bottom: 10px;
}
.cc-number {
  color: #3964e8;
  font-weight: bold;
}

/* -- transition --*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
input[type="text"],
input[type="tel"],
input[type="email"] {
  display: block;
  padding: 0 17px;
  width: 100%;
  height: 45px;
  line-height: 45px;
  font: 600 18px 'Roboto', sans-serif;
  color: #000;
  background: transparent;
  border: 1px solid rgba(0,0,0,.11);
  border-radius: 3px;
  -webkit-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}
::-webkit-input-placeholder {
  opacity: 1;
  font-weight: 300;
  color: #393939;
}
::-moz-placeholder {
  opacity: 1;
  font-weight: 300;
  color: #393939;
}
:-moz-placeholder {
  opacity: 1;
  font-weight: 300;
  color: #393939;
}
:-ms-input-placeholder {
  opacity: 1;
  font-weight: 300;
  color: #393939;
}

</style>