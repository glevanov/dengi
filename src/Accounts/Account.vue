<template>
  <li class="feed__item">
    <div class="account">
      <p class="account__icon">{{ account.currency.text }}</p>
      <div class="account__content">
        <p class="account__value">{{ formatNum(account.value) }}</p>
        <div class="account__wrap">
          <p class="account__name">{{ account.custodian }}</p>
          <p class="account__type">{{ account.type }}</p>
        </div>
      </div>
      <button class="account__delete"
              @click="deleteAccount"
      >
        <img src="plus.svg" height="20" width="20" alt="">
      </button>
    </div>
  </li>
</template>

<script>
  import { formatNum } from '../currency.js'

  export default {
    props: [
      'account',
      'index'
    ],
    name: 'Account',
    methods: {
      formatNum,
      deleteAccount() {
        this.$store.commit('deleteAccount', this.index)
      }
    }
  }
</script>

<style scoped>
  .account {
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    border-radius: 6px;
    padding: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  .account__icon {
    margin: 0;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    background-color: #4287f5;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: bold;
    flex-shrink: 0;
  }

  .account__content {
    display: flex;
    flex-direction: column;
  }

  .account__wrap {
    display: flex;
    flex-direction: row;
  }

  .account__value {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: #000000;
  }

  .account__name {
    margin: 0;
    font-size: 14px;
    margin-right: 5px;
  }

  .account__type {
    margin: 0;
    font-size: 14px;
    opacity: 0.5;
  }

  .account__delete {
    margin-left: auto;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #4287f5;
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
  }
</style>
