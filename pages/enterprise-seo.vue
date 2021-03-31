<template lang="html">
  <div class="row">
    <div class="col-md-12">
    <h1>Enterprise SEO Services</h1>
    <card class="card">
    <p>Enterprise SEO is building a comprehensive SEO strategy for large organizations and targeting high search volume keywords to maximize leads from the digital platform. Enterprise SEO is not as simple as local SEO. An SEO agency must be aware of the latest trends and having experience working in various technologies and frameworks. In the last five years, we have worked on more than 20 technologies and generated hundreds of thousands of leads for our clients. Have a look at the leads we have delivered in the last six months.</p>
  </card></div>
    <div class="col-md-12">
      <card class="card-chart">
        <template slot="header">
          <h5 class="card-category">Total Leads Generated With Enterprise SEO Services</h5>
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
    <h1>Why Us for Enterprise SEO Services?</h1>
    <p>Enterprise SEO is all about creating a unique SEO strategy, understanding the technology or framework a website is built with, and implementing all the necessary changes quickly. Apart from that, keyword research makes a huge impact on enterprise SEO to deliver leads for the business. We usually target the keywords with higher search volume. A keyword with higher search volume brings more traffic to the website and eventually it increases the lead generation chances.</p><br>
    <div class="col-md-12 ml-auto">
      <card>
        <div class="text-center">
          <p class="card-text">Basic example</p>
          <base-button type="" class="btn btn-info btn-block btn-round col-md-3" @click.native="showSwal('basic')"
            >Try me!</base-button
          >
        </div>
      </card>
    </div>
    <p>Having in-depth technical errors solving skills helps us to rank more keywords for the enterprises on the first page and Google maps. Have a look at some of the facts that make us the best Enterprise SEO company.</p><br>
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
        <h6 class="title d-inline">Basic Tasks in Enterprise SEO Services</h6>
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
          <h2 slot="header">Who Should Opt For Enterprise SEO Services?</h2>
          <p slot="content">
            Mostly, big enterprises opt for this service. In enterprise SEO services, we target hundreds of keywords and try to rank most of them on the first page. Most companies with higher budgets opt for enterprise SEO services. If your company provides multiple services or sells many products, you should go with this service. Because optimizing more keywords for different services or products can be beneficial for your business from the digital platform.
          </p>
          </time-line-item>

      </time-line>
    </card>
  </div>
</div>
<div class="container pricing-page">
  <h2 class="text-center">Frequently Asked Questions</h2>
  <p class="category text-center">
    <p class="text-center">Questions our clients asked us regarding our Enterprise SEO</p><br>
  </div>
  <div class="col-md-12">
    <card>
      <template slot="header">
        <h5 class="card-category">Questions Regarding</h5>
        <h3 class="card-title">Enterprise SEO</h3>
      </template>

      <collapse :multiple-active="false" :active-index="0">
        <collapse-item title="What is Enterprise SEO?">
          <div>
            Enterprise SEO is optimizing an enterprise website for more leads, website engagement, and reputation building on the digital platform. We recommend this service only if you provide multiple services or sell a huge amount of products online.
          </div>
        </collapse-item>

        <collapse-item title="How long does it take to rank?">
          <div>
            Normally, there is less competition in the local keywords. We work on all the keywords simultaneously. It takes a maximum of three months to rank for 30% of the total keywords we are targeting. Time to get keywords ranking depends on the keywords search volume and competition. But as said earlier, local keywords are not as competitive as the other keywords.
          </div>
        </collapse-item>

        <collapse-item title="Do you make web designing change?">
          <div>
            Though you purchase an enterprise SEO package if we expect more leads by changing designs, we change the website design totally for free. We have a dedicated team of web developers who take care of website design updates and all the on-page changes implementation. Along with web design, we also take care of click rate optimization(CRO).
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
          <p class="plan">Best for enterprises & large Ecommerce websites</p>
        </div>
        <base-button slot="footer" round type="primary" class="btn-just-icon">
        <nuxt-link to="/seo-packages"><a href="/seo-packages" style="color: white"> <b>Get started</b></a></nuxt-link>
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
          <h3 class="text-on-front"><span>$</span>799</h3><br>br

          <p class="plan">Best for medium business and small ecommerce</p>
        </div>
        <base-button slot="footer" round type="primary" class="btn-just-icon">
        <nuxt-link to="/seo-packages"><a href="/seo-packages" style="color: white"> <b>Get started</b></a></nuxt-link>
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
  title: 'Enterprise SEO Services: Grow Your Business With Best SEO Services',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: ''}
  ],
  link: [
  {rel: 'canonical', href: 'https://seojs.co/enterprise-seo'}
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
      labels: ['OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'],
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
          data: [3114, 1019, 2456, 2598, 2465, 3001]
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
