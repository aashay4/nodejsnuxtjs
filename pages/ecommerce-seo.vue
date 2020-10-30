<template lang="html">
  <div class="row">
    <div class="col-md-12">
    <h1>Ecommerce seo</h1>
    <card class="card">
    <p>With a unique and creative strategy for different Ecommerce websites, we have been running a successful campaign for all the Ecommerce websites. For Ecommerce SEO services, we do a proper research of the niche, perform a keyword research and analyics, and solve all the on-page errors before starting our Ecommerce seo campaign.</p></card></div>
    <div class="col-md-12">
      <card class="card-chart">
        <template slot="header">
          <h5 class="card-category">Total Revenue Generated</h5>
          <h3 class="card-title">
            <i class="tim-icons icon-send text-info "></i> $ 602274
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
    <h1>Why Us for Ecommerce SEO Services?</h1>
    <p>We have worked on absolutely every ecommerce platform including Magento, Shopify, Woo-commerce and prestashop. We have worked on more then 10 Ecommerce project over last three years. We know, having an innovative SEO strategy does not really work for an Ecommerce store. In an Ecommerce website, we have to deal with thousands of pages and hundreds technical errors. So, we not only develop an SEO strategy but also sort all the on-page and technical SEO errors from a website.</p><br>
    <p>Having an indepth technical errors solving skills help us to rank more keywords on the first page. Have a look at some of the facts that make us the best Ecommerce SEO company.</p><br>
    <ul>
    <li>Technical Errors solving skills</li>
    <li>Familiar with all the Ecommerce platforms</li>
    <li>Ability to make On-page changes in the least amount of time</li>
    <li>We build a unique SEO strategy for each website based on the niche and keywords trend</li>
    <li>Result-oriented approach</li>
    <li>Innovative Keyword research</li>
    <li>Best SEO audit reports</li>
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
        <h6 class="title d-inline">Basic Tasks in Ecommerce SEO</h6>
        </template>
      <div class="table-full-width table-responsive">
        <tasklist1></tasklist1>
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
          <h2 slot="header">What is technical error solving?</h2>
          <p slot="content">
            If you have an Ecommerce website and set up Google search console then you might have noticed some on-page errors displayed there. Many times these errors are shown for the multiple pages. These errors make it difficult for the search engines to crawl whole page quickly, solving these error can really help search engines crawl a webpage quickly.
          </p>
          <h6 slot="footer">
            <i class="ti-time"></i> 11 hours ago via Twitter
          </h6>
        </time-line-item>

        <time-line-item
          inverted
          badge-type="success"
          badge-icon="tim-icons icon-gift-2"
        >
          <h2 slot="header">On-Page Implementations</h2>
          <p slot="content">
            On-Page is one of the most important factors for an Ecommerce website especially when there are thousands of pages available. There are some of the basic of page changes that we do for all website and then anlyse how Google reacts towards the changes we have made.
          </p>
        </time-line-item>

      </time-line>
    </card>
  </div>
</div>
<div class="container pricing-page">
  <h2 class="text-center">Frequently Asked Questions</h2>
  <p class="category text-center">
    <p class="text-center">Questions our clients asked us regarding our Ecommerce SEO services</p><br>
  </div>
  <div class="col-md-12">
    <card>
      <template slot="header">
        <h5 class="card-category">Collapse Example</h5>
        <h3 class="card-title">Collapsible Accordion</h3>
      </template>

      <collapse :multiple-active="false" :active-index="0">
        <collapse-item title="What is Ecommerce SEO?">
          <div>
            Ecommerce SEO is nothing but performing on-page and off-page seo tasks to make your online store more visible on the search engine and increaseing sales.
          </div>
        </collapse-item>

        <collapse-item title="How SEO can improve my sales?">
          <div>
            Before starting SEO campaign, we perform a detailed keyword research and analysis for your Ecommerce store. We suggest you high search volume and potential keywords according to the package you have selected, and try to rank for those keywords. Once, your website starts ranking for the targeted keywords, your website starts getting more traffic and eventually sales also increases. For ecommerce SEO, we recommend keywords from which we can easily sell products online.
          </div>
        </collapse-item>

        <collapse-item title="What is keyword search volume?">
          <div>
            We use multiple keywords research tools to finalize keywords. The keyword search volume each tool shows is the average monthly searches performed by the user. For example, a keyword with the search volume 720 means there are around 720 users seaching for a perticular keyword phrase in a month. In our ecommerce seo campaign, we try to target more keywords with the higher search volume with a view to getting more traffic from those keywords.
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
        <h1 class="card-title">pro</h1>
        <img class="card-img" src="img//card-primary.png" alt="Image" />
        <ul class="list-group">
          <li class="list-group-item">100 Keywords</li>
          <li class="list-group-item">On-Page implementation</li>
          <li class="list-group-item">24/7 Support</li>
        </ul>
        <div class="card-prices">
          <h3 class="text-on-front"><span>$</span>1250</h3>
          <h5 class="text-on-back">125</h5>
          <p class="plan">Best for enterprises and large Ecommerce websites</p>
        </div>
        <base-button slot="footer" round type="primary" class="btn-just-icon">
          Get started
        </base-button>
      </card>
    </div>

    <div class="col-lg-3 col-md-6">
      <card
        type="pricing"
        class="card-primary"
        footer-classes="text-center mb-3 mt-3"
      >
        <h1 class="card-title">biz</h1>
        <img class="card-img" src="img//card-primary.png" alt="Image" />
        <ul class="list-group">
          <li class="list-group-item">50 keywords</li>
          <li class="list-group-item">On-Page implementation</li>
          <li class="list-group-item">24/7 Support</li>
        </ul>
        <div class="card-prices">
          <h3 class="text-on-front"><span>$</span>799</h3>
          <h5 class="text-on-back">799</h5>
          <p class="plan">Best for medium business & Ecommerce</p>
        </div>
        <base-button slot="footer" round type="primary" class="btn-just-icon">
          Get started
        </base-button>
      </card>
    </div>

    <div class="col-md-6">
      <card type="testimonial" header-classes="card-header-avatar">
        <a slot="header" href="#pablo">
          <img class="img img-raised" src="img//james.jpg" alt="Card image" />
        </a>

        <p class="card-description">
          Honestly, when these guys aproached me with the plan, i could not believe that ranking some keywords and selling products. But then I gave them a try and from the third month revenue of my Ecommerce website really increased and today I it has proved really beneficial for my website.
        </p>
        <div class="icon icon-primary"><i class="fa fa-quote-right"></i></div>

        <template slot="footer">
          <h4 class="card-title">Robert Priscen</h4>
        </template>
      </card>
    </div>
    <h3 class="text-center col-md-12">Contact us</h3>
    <div class="col-md-12 ml-auto mr-auto"><edit-profile-form></edit-profile-form></div>
  </div>
  </div>
</template>

<script>
import LineChart from '@/components/Charts/LineChart';
import StatsCard from '@/components/Cards/StatsCard';
import * as chartConfigs from '@/components/Charts/config';
import config from '@/config';
import { TabPane, Tabs, Collapse, CollapseItem } from '@/components';
import Tasklist1 from '@/components/Dashboard/Tasklist1';
import EditProfileForm from '../components/UserProfile/EditProfileForm.vue';
import {
  BaseSwitch,
  TimeLine,
  TimeLineItem,
  BaseCheckbox
} from '@/components';
export default {
  components: {
    LineChart,
    TabPane,
    Tabs,
    Collapse,
    CollapseItem,
    TimeLine,
    TimeLineItem,
    Tasklist1,
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
        title: '250+',
        subTitle: 'Projects delivered',
        type: 'primary',
        icon: 'tim-icons icon-shape-star',
        footer: '<i class="tim-icons icon-sound-wave"></i></i> In Last Five Years'
      },
      {
        title: '100+',
        subTitle: 'Clients served',
        type: 'info',
        icon: 'tim-icons icon-single-02',
        footer: '<i class="tim-icons icon-trophy"></i> 80+ Returning Clients'
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
      labels: ['APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
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
          data: [110799, 79878, 89789, 96565, 111256, 113987]
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
