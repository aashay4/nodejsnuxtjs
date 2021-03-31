<template lang="html">
  <div class="row">
    <div class="col-md-12">
    <h1>React SEO</h1>
    <card class="card">
    <p>Just like Angular and Vue, Reactjs is also a single page application framework which has just one HTML file, and all the content is rendered dynamically inside of that HTML file. For that reason, it is really important to perform reactjs SEO tasks and make startups built with this framework SEO friendly to get the maximum number of leads and visibility on the digital platform.</p><br>
    <p>Apart from that HTML file, the react.js app has javascript files for the routes and components. So, it is not possible to add meta titles, descriptions, robots tag, and canonical tags in the Javascript file. You need to install additional packages to perform these tasks. We have worked on three React websites and helped our clients to make their websites SEO friendly. We are familiar with all the additional packages that can be beneficial to make the reactjs website SEO friendly.</p><br>
    <p>As said above, we have worked on three startups made with React and made both of the websites SEO friendly. Check out our key achievements of Reactjs SEO services:</p>
  </card></div>
    <div class="col-md-12">
      <card class="card-chart">
        <template slot="header">
          <h5 class="card-category">Keywords Ranking on the First Page</h5>
          <h3 class="card-title">
            <i class="tim-icons icon-send text-info "></i> 1244
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
    <h1>Why Us for React SEO Services?</h1>
    <p>More than link building, off-page SEO and backlinks analysis React SEO is all about implementing all the necessary on-page changes. For example, all react apps have a hashtag in their URL and Google does not index URLs with the hashtag. So, first of all, you need to remove the hashtag from the URL and implement the history mode. Along with that, many of the reactjs websites face content rendering issues. To render content perfectly, you need to implement either server-side rendering or pre-rendering which is also known as client-side rendering.</p><br>
    <p>Having technical errors solving skills helps us to rank more keywords on the first page. Have a look at some of the facts that make us the best React SEO Company.</p><br>
    <ul>
    <li>Technical Errors solving skills from Google search console</li>
    <li>Familiar with Pre-rendering, server-side rendering, and all other server-side rendering framework next.js</li>
    <li>Ability to make On-page changes quickly</li>
    <li>We build a unique SEO strategy for each business website based on the niche and keywords trend</li>
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
        <h6 class="title d-inline">Basic Tasks in React SEO Services</h6>
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
          <h2 slot="header">Who Should Opt For React SEO Services?</h2>
          <p slot="content">
            As the recent trends suggest, Reactjs is widely used for the development of both web applications, websites, and innovative blogs. Talking about the websites and blogs, SEO plays a huge role if you want to be seen on Google and all the other search engines. By targeting high search volume keywords, we can bring a flood of traffic to your website or blog. If your start-up provides any kind of online service or sells digital products then SEO can be beneficial to increase online leads and sales.
          </p>
          </time-line-item>
      </time-line>
    </card>
  </div>
</div>
<div class="container pricing-page">
  <h2 class="text-center">Frequently Asked Questions</h2>
  <p class="category text-center">
    <p class="text-center">Questions our clients asked us regarding React SEO</p><br>
  </div>
  <div class="col-md-12">
    <card>
      <template slot="header">
        <h5 class="card-category">Questions regarding</h5>
        <h3 class="card-title">React SEO Services</h3>
      </template>

      <collapse :multiple-active="false" :active-index="0">
        <collapse-item title="How does SEO help my business?">
          <div>
            Making on-page changes is not enough to rank in Google and get leads for your business. In our SEO campaign, firstly we do detailed keyword research and analysis and then start optimizing your website for those keywords. Once, the keywords start ranking on the Google SERP first page, eventually traffic and leads also increases.
          </div>
        </collapse-item>

        <collapse-item title="How long does it take to rank?">
          <div>
            Normally, there is less competition in the local keywords. We work on all the keywords simultaneously. It takes a maximum of three months to rank for 30% of the total keywords we are targeting. Time to get keywords ranking depends on the keywords search volume and competition. But as said earlier, local keywords are not as competitive as the other keywords.
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
        <h1 class="card-title">audit</h1>
        <img class="card-img" src="img//card-primary.png" alt="Image" />
        <ul class="list-group">
          <li class="list-group-item">detailed audit report</li>
          <li class="list-group-item">On-Page suggestions</li>
          <li class="list-group-item">CRO suggestions</li>
        </ul>
        <div class="card-prices">
          <h3 class="text-on-front"><span>$</span>199</h3>
          <h5 class="text-on-back">199</h5>
          <p class="plan">One time audit report and suggestions</p>
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
          <li>detailed audit report</li>
          <li class="list-group-item">30 keywords</li>
          <li class="list-group-item">On-Page implementation</li>
          <li class="list-group-item">24/7 Support</li>
        </ul>
        <div class="card-prices">
          <h3 class="text-on-front"><span>$</span>550</h3><br>br

          <p class="plan">SEO+on-page monthly recurring</p>
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
  title: 'Reactjs SEO Services',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: ''}
  ],
  link: [
  {rel: 'canonical', href: 'https://seojs.co/reactjs-seo'}
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
        title: '3',
        subTitle: 'React SEO Projects',
        type: 'primary',
        icon: 'tim-icons icon-shape-star',
        footer: '<i class="tim-icons icon-sound-wave"></i></i> In Last One Year'
      },
      {
        title: '1000+',
        subTitle: 'ReactJS Keywords',
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
          data: [179, 182, 184, 222, 236, 241]
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
