<template>
  <base-table :data="table" thead-classes="text-primary">
    <template slot="columns" slot-scope="{ columns }">
      <th></th>
      <th>Domain Name</th>
      <th>Type</th>
      <th>Work Completed</th>
      <th class="text-right">Leads/Revenue</th>
      <th class="text-right">Actions</th>
    </template>

    <template slot-scope="{ row, index }">
      <td class="text-center">
        <div class="photo"><img :src="row.img" alt="photo" /></div>
      </td>
      <td>{{ row.name }}</td>
      <td>{{ row.job }}</td>
      <td class="text-center"><base-progress :value="row.progress" /></td>
      <td class="text-right">$ 29,552</td>
      <td class="text-right">
        <el-tooltip
          content="Refresh"
          effect="light"
          :open-delay="300"
          placement="top"
        >
          <base-button
            :type="index > 2 ? 'success' : 'neutral'"
            icon
            size="sm"
            class="btn-link"
          >
            <i class="tim-icons icon-refresh-01"></i>
          </base-button>
        </el-tooltip>
        <el-tooltip
          content="Delete"
          effect="light"
          :open-delay="300"
          placement="top"
        >
            </el-tooltip>
      </td>
    </template>
  </base-table>
</template>
<script>
import { BaseTable, BaseProgress } from '@/components';

export default {
  components: {
    BaseTable,
    BaseProgress
  },
  data() {
    return {
      table: [
        {
          id: 1,
          img: 'img/tania.jpg',
          name: 'Example.com',
          job: 'Ecommerce',
          progress: 79,
          salary: '$ 29,656'
        }
      ]
    };
  }
};
</script>
<style></style>
