<template lang="html">
  <div class="row">
    <div class="col-md-12">
    <h1>Local SEO Services</h1>
    <card class="card">
    <p>Local SEO is the process of optimizing your online business website for local searches and generate leads from the surrounding areas of your online store. In most cases, local SEO businesses that provide services in a limited region. Along with Google's SERP, we focus on ranking for Google maps as well.</p>
  </card></div>
    <div class="col-md-12">
      <card class="card-chart">
        <template slot="header">
          <h5 class="card-category">Total Leads Generated from Local SEO Till Now</h5>
          <h3 class="card-title">
            <i class="tim-icons icon-send text-info "></i> 8623
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
    <h1>Why Us for Local SEO Services?</h1>
    <p>More than link building, Local SEO is all about on-page changes implementation and business listing on local sites. We have worked on several local business websites that are built with Joomla, WordPress, Godaddy CMS, and Wix. With the experience of several years and frameworks, we can rank your website on the Google SERP, maps, and generate the best return of investment in the least amount of time.</p><br>
    <p>Having in-depth technical errors solving skills helps us to rank more local keywords on the first page and Google maps. Have a look at some of the facts that make us the best Local SEO company.</p><br>
    <ul>
    <li>Technical Errors solving skills</li>
    <li>Familiar with all the CMS platforms</li>
    <li>Ability to make On-page changes quickly</li>
    <li>We build a unique SEO strategy for each local business website based on the niche and keywords trend</li>
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
        <h6 class="title d-inline">Basic Tasks in Local SEO Services</h6>
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
          <h2 slot="header">Who Should Opt For Local SEO Services?</h2>
          <p slot="content">
            If you are running a business that is limited to a specific region, county or city then you should opt for the local SEO services. Using the innovative strategy, we help your website rank in the local search results and Google maps which are most preferred to generate a healthy amount of leads for the local businesses. It also includes listing your business website to different sites like Yelp and Google My Business.
          </p>
          </time-line-item>

        <time-line-item
          inverted
          badge-type="success"
          badge-icon="tim-icons icon-gift-2"
        >
          <h2 slot="header">On-Page Implementations</h2>
          <p slot="content">
            On-Page is one of the most important factors for local business in most cases, more important than the link building. Having on-page changes implemented in the right way helps your website the most and eventually ends up in quick results.
          </p>
        </time-line-item>

      </time-line>
    </card>
  </div>
</div>
<div class="container pricing-page">
  <h2 class="text-center">Frequently Asked Questions</h2>
  <p class="category text-center">
    <p class="text-center">Questions our clients asked us regarding our Local SEO services</p><br>
  </div>
  <div class="col-md-12">
    <card>
      <template slot="header">
        <h5 class="card-category">FAQ</h5>
        <h3 class="card-title">Questions regarding Local SEO</h3>
      </template>

      <collapse :multiple-active="false" :active-index="0">
        <collapse-item title="What is Local SEO?">
          <div>
            Local SEO is creating a unique strategy to rank your business website for the local keywords. Local SEO is helpful for various small businesses that provide their services around the city or county.
          </div>
        </collapse-item>

        <collapse-item title="How long does it take to rank?">
          <div>
            Normally, there is less competition in the local keywords. We work on all the keywords simultaneously. It takes a maximum of three months to rank for 30% of the total keywords we are targeting. Time to get keywords ranking actually depends on the keywords search volume and competition. But as said earlier, local keywords are not as competitive as the other keywords.
          </div>
        </collapse-item>

        <collapse-item title="Do you make web designing change?">
          <div>
            Though you purchase a local SEO package if we expect more leads by changing designs, we change the website design totally for free. We have a dedicated team of web developers who take care of website design updates and all the on-page changes implementation. Along with web design, we also take care of click rate optimization(CRO).
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
        <h1 class="card-title">local</h1>
        <img class="card-img" src="img//card-primary.png" alt="Image" />
        <ul class="list-group">
          <li class="list-group-item">15 Keywords</li>
          <li class="list-group-item">On-Page implementation</li>
          <li class="list-group-item">24/7 Support</li>
        </ul>
        <div class="card-prices">
          <h3 class="text-on-front"><span>$</span>299</h3>
          <h5 class="text-on-back">299</h5>
          <p class="plan">Best for local businesses</p>
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
        <h1 class="card-title">mid</h1>
        <img class="card-img" src="img//card-primary.png" alt="Image" />
        <ul class="list-group">
          <li class="list-group-item">30 keywords</li>
          <li class="list-group-item">On-Page implementation</li>
          <li class="list-group-item">24/7 Support</li>
        </ul>
        <div class="card-prices">
          <h3 class="text-on-front"><span>$</span>550</h3><br>br

          <p class="plan">More national keywords</p>
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
import Tasklist1 from '@/components/Dashboard/Tasklist1';
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
  title: 'Best Local SEO Services | Local SEO Company',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: ''}
  ],
  link: [
  {rel: 'canonical', href: 'https://seojs.co/local-seo'}
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
        title: '14+',
        subTitle: 'Local SEO Projects',
        type: 'primary',
        icon: 'tim-icons icon-shape-star',
        footer: '<i class="tim-icons icon-sound-wave"></i></i> In Last Five Years'
      },
      {
        title: '700+',
        subTitle: 'Local keywords',
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
          data: [2013, 1114, 1279, 1290, 1330, 1597]
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
