<script setup lang="ts">
import dayjs from 'dayjs';

const weekLink: { class: string; href: string; date: string; count: number; }[] = [];
const jsonFilePath = '/data/update_counts.json'
const updateCounts: { date: string, count: number }[] = await fetch(jsonFilePath).then(r => r.json())

updateCounts.forEach(uc => {
  const d = dayjs(uc.date, 'YYYY-MM-DD')
  weekLink.push({ class: d.format('ddd').toLowerCase(), href: d.format('YYYYMMDD'), date: d.format('MM/DD'), count: uc.count })
});
</script>

<template>
  <ul class="nav nav-tabs">
    <li v-for="day in weekLink" :key=day.date :class=day.class>
      <router-link :to="{name: 'books', params: {targetDate: day.href }}">{{day.date}}<br>{{day.count}}</router-link>
    </li>
  </ul>
</template>

<style scoped>
ul {
  padding: 0px;
}

li {
  display: inline-block;
  margin: 2px;
  padding: 5px;
  border-radius: 5px;
}

li.sat {
  background-color: #93b2ed;
}

li.sun {
  background-color: #ed9393;
}

li a {
  display: block;
  height: 100%;
  width: 100%
}
</style>
