<template>
  <div class="overlay">
    <div class="lead">
      <p class="lead__text">Добавить актив</p>
    </div>
    <div class="content">
      <form
        @submit.prevent="checkForm">
        <ul class="fields">
          <li class="fields__field">
            <label for="currency">Валюта</label>
            <select name="currency" id="currency" autocomplete="off" required
                    v-model="currency">
              <option value="RUB">Рубли</option>
              <option value="USD">Доллары</option>
              <option value="EUR">Евро</option>
            </select>
          </li>
          <li class="fields__field">
            <label for="value">Сумма</label>
            <input type="number"
                   step="0.01"
                   id="value"
                   autocomplete="off"
                   min="0"
                   required
                   v-model="value">
          </li>
          <li class="fields__field">
            <label for="custodian">Место хранения</label>
            <input type="text"
                   id="custodian"
                   autocomplete="off"
                   required
                   v-model="custodian">
          </li>
          <li class="fields__field">
            <label for="type">Вид актива</label>
            <input type="text"
                   id="type"
                   autocomplete="off"
                   required
                   v-model="type">
          </li>
        </ul>
        <div class="buttons">
          <button type="button" class="buttons__button buttons__button--remove"
                  @click="switchModal"
          >Назад
          </button>
          <button type="submit" class="buttons__button buttons__button--add">Добавить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewAccountModal',
    data: () => ({
      currency: 'RUB',
      value: null,
      custodian: null,
      type: null,
    }),
    methods: {
      switchModal () {
        this.$store.commit('switchModal')
      },
      checkForm () {
        this.$store.commit('addAccount', {
          currency: this.currency,
          value: parseFloat(this.value),
          custodian: this.custodian,
          type: this.type
        })
        this.switchModal()
      }
    }
  }
</script>

<style scoped>
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }

  .content {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .lead {
    background-color: #4287f5;
    margin-bottom: 15px;
  }

  .lead__text {
    color: #ffffff;
    font-weight: 700;
    margin: 0;
    padding-left: 5%;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 26px;
  }

  .fields {
    display: grid;
    margin: 0;
    padding: 0;
    list-style: none;
    grid-gap: 10px;
    margin-bottom: 15px;
  }

  .fields__field {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-left: 15px;
    margin-bottom: 5px;
    font-size: 16px;
  }

  input, select {
    background-color: transparent;
    border: 1px solid #838383;
    border-radius: 3px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    font: inherit;
    font-size: 18px;
    display: block;
    box-sizing: border-box;
    outline: none;
  }

  select {
    margin: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='230' height='140'%3E%3Cpolygon points='5,5 115,135 225,5' fill='%234287f5' stroke-width='5' /%3E%3C/svg%3E"),
    linear-gradient(to bottom, transparent 0%, transparent 100%);
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
    background-repeat: no-repeat;
  }

  select::-ms-expand {
    display: none;
  }

  option {
    font-weight: normal;
  }

  input[type="number"] {
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
    appearance: textfield;
  }

  input:focus,
  select:focus {
    border-color: #4287f5;
    box-shadow: 0 0 10px 0 #4287f5;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }

  .buttons__button {
    background-color: transparent;
    border: 1px solid #838383;
    border-radius: 3px;
    padding: 10px;
    margin-right: 15px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
  }

  .buttons__button:last-of-type {
    margin-right: 0;
  }

  .buttons__button:focus {
    outline: none;
    box-shadow: 0 0 10px 0 #4287f5;
  }

  .buttons__button--add {
    background-color: #4287f5;
    border-color: #4287f5;
    color: #ffffff;
  }
</style>
