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
          title: 'Detailed Business Analysis',
          description: '',
          done: true
        },
        {
          title: 'Data Gathering',
          description:
            '',
          done: true
        },
        {
          title: 'Data Mining',
          description:
            '',
          done: true
        },
        {
          title: 'Develop Algoriths for Prediction',
          description: '',
          done: true
        },
        {
          title: 'Apply Neural Network Model for Demand Prediction',
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
          title: 'Machine Learning Based Approach for Better Opportunity Score',
          description: '',
          done: true
        },
      ]
    };
  }
};
</script>
<style></style>
