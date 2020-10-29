<template>
  <base-table :data="tableData" thead-classes="text-primary">
    <template slot-scope="{ row }">
      <td><base-checkbox :disabled="true" v-model="row.done"></base-checkbox></td>
      <td>
        <p class="title">{{ row.title }}</p>
        <p class="text-muted">{{ row.description }}</p>
      </td>
      <td class="td-actions text-right">
            </td>
    </template>
  </base-table>
</template>
<script>
import { BaseTable } from '@/components';

export default {
  components: {
    BaseTable
  },
  data() {
    return {
      tableData: [
        {
          title: 'Schema mark up code update',
          description: '',
          done: true
        },
        {
          title: 'Meta titles, description update',
          description:
            '',
          done: true
        },
        {
          title: 'H1 tag update',
          description:
            '',
          done: true
        },
        {
          title: 'Analyzing internal website linking structure',
          description: '',
          done: true
        },
        {
          title: 'Optimize content with targeted keywords',
          description:
            '',
          done: true
        },
        {
          title: 'Website design change for better lead conversion rate',
          description: '',
          done: true
        },
        {
          title: 'Provide Perfect SEO solution for Javascript Websites',
          description: '',
          done: true
        },
        {
          title: 'Check Mobile Responsiveness',
          description: '',
          done: true
        },
        {
          title: 'Pre-rendering, Server-side rendering as per routes',
          description: '',
          done: true
        },
        {
          title: 'Broken Link Check',
          description: '',
          done: true
        },
      ]
    };
  }
};
</script>
<style></style>
