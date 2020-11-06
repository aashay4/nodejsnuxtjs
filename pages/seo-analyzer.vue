<template lang="html">
  <div class="">
    <h1>
      SEO Analyzer
    </h1>
    <div class="">
      H1:{{ isShowing }}<br>
    Description: {{ isShowing1 }}<br>
    Title: {{ isShowing2 }}<br>
    h2: {{ isShowing3 }}<br>
    canonical: {{ isShowing4 }}<br>
    Keywords: {{ isShowing5 }}<br>
    Protocol: {{ isShowing6 }}<br>
    Pagespeed: {{ isShowing7 }}<br>
  </div><br>
  <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing1 = 0; isShowing ^= true; isShowing2 = 0; isShowing3 = 0; isShowing4 = 0; isShowing5 = 0; isShowing6 = 0; isShowing7 = 0">H1</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing = 0; isShowing1 ^= true; isShowing2 = 0; isShowing3 = 0; isShowing4 = 0; isShowing5 = 0; isShowing6 = 0; isShowing7 = 0">Description</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing2 ^= true; isShowing = 0; isShowing1 = 0; isShowing3 = 0; isShowing4 = 0; isShowing5 = 0; isShowing6 = 0; isShowing7 = 0">Title</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing3 ^= true; isShowing = 0; isShowing1 = 0; isShowing2 = 0; isShowing4 = 0; isShowing5 = 0; isShowing6 = 0; isShowing7 = 0">H2</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing3 = 0; isShowing = 0; isShowing4 ^= true; isShowing1 = 0; isShowing2 = 0; isShowing5 = 0; isShowing6 = 0; isShowing7 = 0">Canonical</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing3 = 0; isShowing = 0; isShowing5 ^= true; isShowing1 = 0; isShowing2 = 0; isShowing4 = 0; isShowing6 = 0; isShowing7 = 0">Keywords</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing3 = 0; isShowing = 0; isShowing5 = 0; isShowing6 ^= true; isShowing1 = 0; isShowing2 = 0; isShowing4 = 0; isShowing7 = 0">Protocol</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing3 = 0; isShowing = 0; isShowing5 = 0; isShowing7 ^= true; isShowing6 = 0; isShowing1 = 0; isShowing2 = 0; isShowing4 = 0">Page Speed</button>
  <client-only>
  <div class="">
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
  </div>
</client-only>
  </div>
</template>

<script>
import { BaseTable, BaseProgress } from '@/components';

export default {
  components: {
    BaseTable,
    BaseProgress
  },
  data(){
    return {
      isShowing: '',
      isShowing1: '',
      isShowing2: '',
      isShowing3: '',
      isShowing4: '',
      isShowing5: '',
      isShowing6: '',
      isShowing7: '',
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
    }
  }
}
</script>

<style lang="css">
</style>
