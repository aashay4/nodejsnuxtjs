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
          title: 'SSL Certificate Integration',
          description: 'Including an SSL certificate not only helps in higher search ranking but also gains trust in the website visitors. Our each SEO services package includes SSL certification.',
          done: true
        },
        {
          title: 'Content Optimization',
          description:
            'Well-optimized content is really helpful to get higher keyword rankings. Before starting our campaign, we make optimization content and make it SEO friendly and if required we write additional web page content.',
          done: true
        },
        {
          title: 'Server Check',
          description:
            'The server plays a big role in website page loading speed, security, and components loading. We check the server before starting our campaign. If we find anything unusual, we suggest clients migrate the server. With approval, we change the server totally for free, included in the SEO service package.',
          done: true
        },
        {
          title: 'Improving the Page Loading speed',
          description: 'Slow page loading speed directly affects leads. We make sure that the page loading speed is up to the mark before starting an SEO campaign.',
          done: true
        },
        {
          title: 'Backlink Profile check and Removing Spammy links',
          description:
            'Backlinks are the most important factor in an SEO campaign. Having good high-authoritative backlinks can help to get higher keywords ranking while spammy backlinks make a negative impact on search engines. We check the back-link profile for each website and dis-avow negative backlinks.',
          done: true
        },
        {
          title: 'Create Unique Meta Tags',
          description: 'We create new meta tags and include keywords in meta titles and descriptions for each targeted page.',
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
          description: 'Content rendering for vue.js, angular or react website.',
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
