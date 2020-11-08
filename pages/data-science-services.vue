<template lang="html">
  <div class="row">
    <div class="col-md-12">
    <h1>Data Science Services</h1>
    <card class="card">
    <p>In our data science services, we implement scientific methods, algorithms, processes to extract data from many other sources. We analyze the data and help different organizations to improve sales and create a marketing strategy to help their businesses grow. Data mining, machine learning, and big data analysis are related to data science and we use these concepts to get the best possible analytics results for our clients. With our data science capabilities, we helped three ecommerce websites to improve their sales from their ecommerce website.</p>
  </card></div>
    <div class="col-md-12">
      <card class="card-chart">
        <template slot="header">
          <h5 class="card-category">Total Revenue Generated</h5>
          <h3 class="card-title">
            <i class="tim-icons icon-send text-info "></i> 14653
          </h3>
        </template>
        <div class="chart-area">
          <line-chart
            :labels="lineChart2.labels"
            :chart-data="lineChart2.chartData"
            :extra-options="lineChart2.extraOptions"
            :height="200"
          >
          </line-chart>
        </div>
      </card>
    </div>
    <div class="col-lg-3 col-md-6" v-for="card in statsCards" :key="card.title">
      <stats-card
        :title="card.title"
        :sub-title="card.subTitle"
        :type="card.type"
        :icon="card.icon"
      >
        <div slot="footer" v-html="card.footer"></div>
      </stats-card>
    </div>
    <div class="col-lg-12">
      <card class="card">
    <h1>About Our Data Science Services?</h1>
    <p>To deliver successful results with data science, one needs great technical knowledge as well as business sense. With our advanced crawlers, data mining skills, and machine learning, we not only get the high quality of data but also analyze the data for business expansion. Eventually, this data can be useful to generate leads for a business and improve sales for an eCommerce website.</p><br>
    <div class="col-md-12 ml-auto">
        </div>
    <p>Having in-depth data science and analytics skills help us to get the most accurate result for our clients and help them to improve their business sales. Have a look at some of the facts that make us the best data science company.</p><br>
    <ul>
    <li>Technical Errors solving skills</li>
    <li>Optimize the products supply management</li>
    <li>Ability to implement innovative techniques to get data</li>
    <li>We build a unique strategy to improve production efficiency</li>
    <li>Result-oriented approach</li>
    <li>Expertise in customer behavior prediction</li>
  </ul><br>
</card>
</div>
  <div class="row col-lg-12">
  <div class="col-lg-6 col-sm-6 text-center">
    <card
      type="tasks"
      class="text-left"
      :header-classes="{ 'text-right': $rtl.isRTL }"
    >
      <template slot="header">
        <h6 class="title d-inline">Basic Tasks in Enterprise SEO Services</h6>
        </template>
      <div class="table-full-width table-responsive">
        <tasklist2></tasklist2>
      </div>
    </card>

  </div>
  <div class="col-lg-6 col-sm-6">
    <card type="timeline" class="card-plain">
      <time-line type="simple">
        <time-line-item
          inverted
          badge-type="danger"
          badge-icon="tim-icons icon-bag-16"
        >
          <h2 slot="header">Why Us?</h2>
          <p slot="content">
            Data Science is not just about software engineering or management. A company providing these services should be well experienced in sales, marketing, and software development. At SEOJS, we have different our websites in various niches like technology, maths, fashion, and sports and eCommerce stores. We analyze the data we get and try to improve our results. We have successfully improved Ecommerce sales and leads conversion with the concepts of data mining, analytics, and customer prediction. So, we are not only good at software development but also we have great analytics skills which benefit businesses.
          </p>
          </time-line-item>

      </time-line>
    </card>
  </div>
</div>
<div class="container pricing-page">
  <h2 class="text-center">Frequently Asked Questions</h2>
  <p class="category text-center">
    <p class="text-center">Questions our clients asked us regarding Data Science</p><br>
  </div>
  <div class="col-md-12">
    <card>
      <template slot="header">
        <h5 class="card-category">Collapse Example</h5>
        <h3 class="card-title">Collapsible Accordion</h3>
      </template>

      <collapse :multiple-active="false" :active-index="0">
        <collapse-item title="Why Data Science is important?">
          <div>
            Data Science is processing existing data, utilizing it to learn about the customers and their behavior. We develop machine learning algorithms to process the data we gather and help various businesses to improve their business sales.
          </div>
        </collapse-item>
      </collapse>
    </card>
  </div>
  <div class="row container">
    <div class="col-lg-3 col-md-6">
      <card
        type="pricing"
        class="card-primary card-white"
        footer-classes="text-center mb-3 mt-3"
      >
        <h1 class="card-title">biz</h1>
        <img class="card-img" src="img//card-primary.png" alt="Image" />
        <ul class="list-group">
          <li class="list-group-item">Artificial Intelligence</li>
          <li class="list-group-item">Machine Learning</li>
          <li class="list-group-item">Data Mining</li>
          <li class="list-group-item">24/7 Support</li>
        </ul>
        <div class="card-prices">
          <h3 class="text-on-front"><span>$</span>1250</h3>
          <h5 class="text-on-back">125</h5>
          <p class="plan">Best for enterprises & large Ecommerce websites</p>
        </div>
        <base-button slot="footer" round type="primary" class="btn-just-icon">
          Get started
        </base-button>
      </card>
    </div>

      <h3 class="text-center col-md-12">Contact us</h3>
    <div class="col-md-12"><edit-profile-form></edit-profile-form></div>
  </div>
  </div>
</template>

<script>
import LineChart from '@/components/Charts/LineChart';
import StatsCard from '@/components/Cards/StatsCard';
import * as chartConfigs from '@/components/Charts/config';
import config from '@/config';
import { TabPane, Tabs, Collapse, CollapseItem } from '@/components';
import Tasklist2 from '@/components/Dashboard/Tasklist2';
import EditProfileForm from '../components/UserProfile/EditProfileForm.vue';
import {
  BaseSwitch,
  TimeLine,
  TimeLineItem,
  BaseCheckbox
} from '@/components';
export default {
  head() {
  // sets document title
  return {
  title: 'Data Science Services',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'Get the best data science services with detailed business analysis, data mining, machine learning, and web scraping. Visit our website and get more information.'}
  ],
  link: [
  {rel: 'canonical', href: 'https://seojs.co/data-science-services'}
  ]
  }
  },
  components: {
    LineChart,
    TabPane,
    Tabs,
    Collapse,
    CollapseItem,
    TimeLine,
    TimeLineItem,
    Tasklist2,
    EditProfileForm,
    StatsCard
},
data() {
  return {
    statsCards: [
      {
        title: '10+',
        subTitle: 'Industries served',
        type: 'warning',
        icon: 'tim-icons icon-chat-33',
        footer: '<i class="tim-icons icon-refresh-01"></i> From Six Different Countries'
      },
      {
        title: '10+',
        subTitle: 'Enterprise SEO',
        type: 'primary',
        icon: 'tim-icons icon-shape-star',
        footer: '<i class="tim-icons icon-sound-wave"></i></i> In Last Five Years'
      },
      {
        title: '3000+',
        subTitle: 'Enterprise keywords',
        type: 'info',
        icon: 'tim-icons icon-single-02',
        footer: '<i class="tim-icons icon-trophy"></i> 90% Returning Clients'
      },
      {
        title: '10000+',
        subTitle: 'GIT Push',
        type: 'danger',
        icon: 'tim-icons icon-molecule-40',
        footer: '<i class="tim-icons icon-watch-time"></i> In the six months'
      }
    ],
  lineChart2: {
    chartData: {
      labels: ['MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT'],
      datasets: [
        {
          label: 'Data',
          fill: true,
          borderColor: config.colors.info,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: config.colors.info,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#2380f7',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [101564, 80546, 85469, 88479, 94147, 105983]
        }
      ]
    },
    extraOptions: chartConfigs.lineChartOptionsBlue
  }
}
}
}
</script>

<style lang="css">
</style>
