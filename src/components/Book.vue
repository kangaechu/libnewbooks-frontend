<script setup lang="ts">

interface Props {
  colid: string;
  group: string;
  title: string;
  author?: string;
  publisher: string;
  published: string;
  isbn?: string;
}
const book = defineProps<Props>();
</script>

<template>
  <tr>
    <td>{{ book.group }}</td>
    <td><a v-if=book.isbn :href="'https://www.amazon.co.jp/dp/' + book.isbn">➤</a></td>
    <td><a :href="'https://www.lib.city.itabashi.tokyo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=' + book.colid">{{ book.title }}</a></td>
    <td>{{ book.author }}</td>
    <td>{{ book.published }}</td>
  </tr>
</template>

<style scoped>
</style>
