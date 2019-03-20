<template>
  <v-container>
    <v-layout column>
      <v-card
        class="pa-3 mb-2 mt-2 card-wrap"
      >
        <v-img
          :src="require('@/assets/icons/usd.svg')"
          height="40px"
          width="40px"
          class="primary card-img"
          style="border-radius: 2px"
        />
        <v-flex class="align-content-start ml-2">
          <p class="title ma-0">
            1 234 155,35
          </p>
          <p class="grey--text ma-0">
            <span>
              Альфа-Банк
            </span>
            <span>
              Депозит
            </span>
          </p>
        </v-flex>
        <v-spacer />
        <v-btn
          class="primary primary--text v-btn--icon v-btn--large ma-0"
          outline
        >
          <v-icon class="material-icons">
            edit
          </v-icon>
        </v-btn>
        <v-btn class="error v-btn--icon v-btn--large ma-0">
          <v-icon class="material-icons">
            close
          </v-icon>
        </v-btn>
      </v-card>
      <v-btn
        class="primary pa-3 mb-2 mt-2"
        block
      >
        Добавить счёт
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style scoped>
  .card-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .card-img {
    flex-grow: 0;
  }
</style>
