<template>
  <v-container>
    <v-layout column>
      <v-card
        class="pa-3 mb-2 mt-2"
        row
      >
        <v-img
          :src="require('@/assets/icons/usd.svg')"
          height="40px"
          width="40px"
          class="primary"
          style="border-radius: 50%"
        />
        <v-spacer />
        <p class="title">
          1 234 155,35
        </p>
        <p class="grey--text">
          Альфа-Банк
        </p>
        <p class="grey--text">
          Депозит
        </p>
        <v-btn class="error">
          Удалить
        </v-btn>
        <v-btn
          class="primary primary--text"
          outline
        >
          Изменить
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
