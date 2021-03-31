<template lang="html">
  <div class="row">
    <div class="col-md-12">
    <h1>Vuejs SEO</h1>
    <card class="card">
    <p>Vue.js is a Javascript front-end framework which is around the corner since 2016 and has been growing since then. I have been working on Vuejs since 2018. I have worked on several Vuejs projects and made many other Vue websites SEO friendly. Apart from SEOJS, I have other three websites that are built with Vuejs. It is a great Javascript framework that has multiple functionalities that are similar to the functionalities of Angular and React.js. To implement the SEO changes on a Vuejs app, you need to first understand the working of the Vuejs framework.</p><br>
    <h2>How Does a Vue.js App Work?</h2>
    <p>If you have worked on a vue cli then you would probably know that there is just one HTML file that is located in the public directory on the project. Whenever a request is sent for any route is sent, the first index.html file loads, and the division with an ID of App render dynamic content. This is great for internal page navigation. But the fact of the matter is Google and other search engines cannot read the dynamic content which is loaded once a request is sent. You can see that by pressing ctrl+u and you will find that for each route same HTML file's content is rendered. This is bad for SEO, Google and other search engines cannot read this content, and eventually it will get difficult for your website to rank better.</p><br>
    <h2>So, How to Render Content?</h2>
    <p>There is two way to render content for any website built with Javascript frameworks:</p><br>
    <ul>
      <li>Pre-rendering (No back-end language or server required)</li><br>
      <p>Perform pre-rendering for a website is easy to compare to server-side rendering. Since there is no server-side language is included, many front-end developers prefer pre-rendering more. There is already an npm package called prerender-spa available for pre-rendering. I have used a pre-render spa plug in on my website and a few challenges I faced with pre-rendering. Initially, I had just around 15-20 routes so, everything worked fine but after a few months, I started increasing pages on my website.</p><br>
      <p>When I added more than 30 routes to my website, the pre-rendering process became slow. For any singly change, I had to run build multiple times and it used to take around half an hour to update. So, I would recommend pre-rendering for a website with a few routes and not much dynamic routes or content. For more routes consider server-side rendering.</p><br>
      <li>Server-side Rendering (node.js or any back-end language is required)</li><br>
      <p>Server-side rendering is something that's done with the help of a back-end language. Node.js is the most preferred for server-side rendering but you can consider other languages as well. This may seem a difficult task if you are not familiar with the back-end language. If you do not want to perform it on your own then there are multiple options available in the form of Nut.js & Quasar. These both are frameworks of Vue.js specifically built for SEO purposes. There are more uses of these frameworks but most developers use these frameworks for SEO.</p><br>
    </ul>
  </card></div>
    <div class="col-md-12">
      <card class="card-chart">
        <template slot="header">
          <h5 class="card-category">Our Vue.js Website's Keywords Ranking</h5>
          <h3 class="card-title">
            <i class="tim-icons icon-send text-info "></i> 4777 Keywords in Top 10
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
    <h1>Why SEOJS for Vuejs SEO Services?</h1>
    <p>SEOJS has worked on several Vuejs projects in the last couple of years and helped multiple organizations with technical SEO services.</p><br>
    <p>Having in-depth technical errors solving skills helps us to make Vuejs websites search-friendly. Have a look at some of the facts that make us the best Vuejs SEO company.</p><br>
    <ul>
    <li>Technical Javascript Errors solving skills</li>
    <li>Handled websites having more than 100 routes</li>
    <li>Ability to make all the On-page changes quickly</li>
    <li>We build a unique SEO strategy for each local business website based on the niche and keywords trend</li>
    <li>Result-oriented approach</li>
    <li>Innovative Keyword research</li>
    <li>Best SEO audit reports for Vuejs website</li>
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
          <h2 slot="header">Who Should Opt For Vuejs SEO Services?</h2>
          <p slot="content">
            The answer is most probably, startups or any other organization who has their website built with Vue.js. Optimizing a Vue.js website for SEO and making it search engines can be really helpful to rank for different keywords. Once your website ranks for the high search volume keywords, your websites get more traffic and lead. Many startups may not have funds for the marketing, in this scenario, opting for the SEO services can be affordable and a great opportunity to get exposure on the digital platform.
          </p>
          </time-line-item>
      </time-line>
    </card>
  </div>
</div>
<div class="container pricing-page">
  <h2 class="text-center">Frequently Asked Questions</h2>
  <p class="category text-center">
    <p class="text-center">Questions our clients asked us regarding our Vuejs SEO services</p><br>
  </div>
  <div class="col-md-12">
    <card>
      <template slot="header">
        <h5 class="card-category">Questions Regarding</h5>
        <h3 class="card-title">Vuejs SEO</h3>
      </template>

      <collapse :multiple-active="false" :active-index="0">
        <collapse-item title="Why do I need an SEO company for Vue website?">
          <div>
            Vue.js is a single page application framework which is not SEO friendly. By default, it comes in a hash mode. Search engines do not index URLs that contain hash in it. So, deploying the Vuejs app with the default configuration will end up indexing just a home page. In our Vue.js SEO services, we make URLs SEO friendly, add meta tags, check content rendering, and implement all the other basic on-page changes.
          </div>
        </collapse-item>

        <collapse-item title="Do you make web designing change?">
          <div>
            Though you purchase local SEO packages if we expect more leads by changing designs, we change the website design totally for free. We have a dedicated team of web developers who take care of website design updates and all the on-page changes implementation. Along with web design, we also take care of click rate optimization(CRO).
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
  title: 'Vuejs SEO',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: ''}
  ],
  link: [
  {rel: 'canonical', href: 'https://seojs.co/vuejs-seo'}
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
        subTitle: 'Industries Served',
        type: 'warning',
        icon: 'tim-icons icon-chat-33',
        footer: '<i class="tim-icons icon-refresh-01"></i> From Six Different Countries'
      },
      {
        title: '4',
        subTitle: 'Vue SEO Projects',
        type: 'primary',
        icon: 'tim-icons icon-chart-bar-32',
        footer: '<i class="tim-icons icon-sound-wave"></i></i> In Last Six Months'
      },
      {
        title: '700+',
        subTitle: 'Keywords Ranking',
        type: 'info',
        icon: 'tim-icons icon-shape-star',
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
          data: [619, 729, 761, 844, 865, 959]
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
