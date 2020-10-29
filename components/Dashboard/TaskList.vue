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
          description: 'Inclusing an SSL certiicate not only helps in higher search ranking but also gains trust in the website visitors. Our each SEO services package includes SSL certification.',
          done: true
        },
        {
          title: 'Content Optimization',
          description:
            'A well-optimized content is really helpful to get higher keyword rankings. Before starting our campaign, we make optimization content and make it SEO friendly and if requied we write additional web page content.',
          done: true
        },
        {
          title: 'Server Check',
          description:
            'Server plays a big role in website page loading speed, security and components loading. We check server before starting our campaign. If we find anything ususual, we suggestion clients to migrate server. With approval, we change server totally for free, included in SEO service package.',
          done: true
        },
        {
          title: 'Improving Page Loading speed',
          description: 'Slow page loading speed directly affect leads. We make sure that the page loading speed is up to the mark before starting SEO campaign.',
          done: true
        },
        {
          title: 'Backlink Profile check and Removing Spammy links',
          description:
            'Backlinks are the most important factor of SEO campaign. Having good high-authoritive backlinks can help getting higher keywords ranking while spammy backlinks makes negetive impact on search engines. We check back-link profile for each website and dis-avow negetive backlinks.',
          done: true
        },
        {
          title: 'Create Unique Meta Tags',
          description: 'We create new meta tags and include keywords in meta titles and descripton for each targeted page.',
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
