<script setup lang="ts">
import NavCalendar from './NavCalendar.vue'
import Book from './Book.vue'
import dayjs from 'dayjs';
import { toRef, ref, watch } from 'vue';

const props = defineProps({
  targetDate: String
})

const date = toRef(props, "targetDate")
let tdate = ref("")
let books = ref<{ colid: string, group: string, title: string, author: string, publisher: string, published: string, isbn: string }[]>([])

watch(date, async () => {
  const d = props.targetDate ? dayjs(props.targetDate, 'YYYYMMDD') : dayjs()
  tdate.value = d.format('YYYY/MM/DD')
  const jsonFilePath = `/data/${d.format('YYYY-MM-DD')}.json`

  const updatedBooks: { colid: string, group: string, title: string, author: string, publisher: string, published: string, isbn: string }[] = await fetch(jsonFilePath).then(r => r.json())
  books.value.splice(0, books.value.length, ...updatedBooks)
}, { immediate: true })
</script>

<template>
  <h1>新書 {{tdate}}</h1>
  <NavCalendar></NavCalendar>
  <table>
    <thead>
      <tr>
        <th>Group</th>
        <th>A</th>
        <th>Title</th>
        <th>Author</th>
        <th>Published</th>
      </tr>
    </thead>
    <tbody v-for="book in books">
      <Book :colid=book.colid :group=book.group :title=book.title :author=book.author :publisher=book.publisher
        :published=book.published :isbn=book.isbn></Book>
    </tbody>
  </table>
</template>

<style scoped>

</style>
