<template lang="html">
  <div class="row">
    <div class="col-md-12">
    <h1>Angular SEO</h1>
    <card class="card">
    <p>More than 58% start ups that are built with Javascript frameworks fail due to bad SEO. To avoid any disaster due to this, you need to make your Angular, React, or Vue website SEO friendly. Talking about Angular SEO, it is a Javascript framework powered by Google and it is also a single page application framework. It is one of the oldest Javascript JS frameworks and follows Model-view-controller architecture.</p><br>
    <p>By default, Angular routing is configured in the hash mode which means every route on the website is going to be after a hashtag("#"). For example, the path to the /about page will have the URL example.com/#/about. The fact of the matter is, Google and Bing do not index URLs with a hashtag. To index all the routes, you need to configure your website routes with history mode.</p><br>
    <p>We have worked on two startups made with Angular and made both of the websites SEO friendly. Check out our key achievements:</p>
  </card></div>
    <div class="col-md-12">
      <card class="card-chart">
        <template slot="header">
          <h5 class="card-category">Keywords Ranking on the First Page</h5>
          <h3 class="card-title">
            <i class="tim-icons icon-send text-info "></i> 761
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
    <h1>Why Us for Angular SEO Services?</h1>
    <p>More than link building, Angular SEO is all about solving technical SEO errors and implement all the necessary On-page changes. We have worked on several Angular websites and solved multiple technical errors and helped different business owners to generate leads for their respective business. With the experience of several years and frameworks, we can rank your website on the Google SERP, maps, and generate the best return of investment in the least amount of time.</p><br>
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
    <p>Having in-depth technical errors solving skills helps us to rank more local keywords on the first page and Google maps. Have a look at some of the facts that make us the best Angular SEO company.</p><br>
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
          <h2 slot="header">Who Should Opt For Angular SEO Services?</h2>
          <p slot="content">
            In many aspects, Angular might be one of the greatest javascript front-end frameworks but when it comes to SEO, it lacks many key things. It is built for tools and web applications and SEO was not the prime goal. Apart from hash URLs, many other important SEO points need to be taken care of. The SEO points are meta titles and description integration, canonical tag insertion, sitemap.XML file update, schema markup and much more. If you are running a start up then opting for Anguar SEO can be an affordable solution to generate leads for your business.
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
        <h5 class="card-category">Questions regarding</h5>
        <h3 class="card-title">Angular SEO Services</h3>
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
          data: [99, 112, 120, 121, 143, 166]
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
