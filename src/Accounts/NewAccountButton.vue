<template>
  <li class="new-account"
      @click="switchModal">
    <div class="new-account__icon">
      <img src="plus.svg" height="20" width="20" alt="">
    </div>
    <p class="new-account__text">Добавить счёт</p>
  </li>
</template>

<script>
  export default {
    name: 'NewAccountButton',
    methods: {
      switchModal () {
        this.$store.commit('switchModal')
      }
    }
  }
</script>

<style scoped>
  .new-account {
    background-color: #4287f5;
    border-radius: 6px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }

  .new-account__icon {
    margin-right: 10px;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .new-account__text {
    margin: 0;
    color: #ffffff;
    font-weight: bold;
  }
</style>
