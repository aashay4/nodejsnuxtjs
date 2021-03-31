<template>
  <div class="row">
    <!-- Big Chart -->
    <div class="col-12">
      <card type="chart">
        <template slot="header">
          <div class="row">
            <div class="col-sm-6">
              <h5 class="card-category">Stay Ahead and Above With Our SEO Services</h5>
              <h2 class="card-title">Our Achievements</h2>
            </div>
            <div class="col-sm-6 d-flex d-sm-block">
              <div
                class="btn-group btn-group-toggle"
                data-toggle="buttons"
              >
              <client-only>
                <label
                  v-for="(option, index) in bigLineChartCategories"
                  :key="option.name"
                  class="btn btn-sm btn-info btn-simple"
                  :class="{ active: bigLineChart.activeIndex === index }"
                  :id="index"
                >
                  <input
                    type="radio"
                    @click="initBigChart(index)"
                    name="options"
                    autocomplete="off"
                    :checked="bigLineChart.activeIndex === index"
                  />
                  <span class="d-none d-sm-block">{{ option.name }}</span>
                  <span class="d-block d-sm-none">
                    <i :class="option.icon"></i>
                  </span>
                </label>
              </client-only>
              </div>
            </div>
          </div>
        </template>
        <div class="chart-area">
          <line-chart
            style="height: 100%"
            ref="bigChart"
            :chart-data="bigLineChart.chartData"
            :gradient-colors="bigLineChart.gradientColors"
            :gradient-stops="bigLineChart.gradientStops"
            :extra-options="bigLineChart.extraOptions"
          >
          </line-chart>
        </div>
      </card>
    </div>
    <!-- Stats Cards -->
    <client-only>
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
  </client-only>
    <!-- Small charts -->

    <div class="col-lg-4 mr-auto">
      <card class="card-chart card-chart-pie">
        <template slot="header">
          <h5 class="card-category">Different Frameworks/Technologies We Made Search Friendly</h5>
          <h3 class="card-title">
            <i class="tim-icons icon-laptop text-info "></i> 31
          </h3>
        </template>

        <div class="row">
          <div class="col-6">
            <div class="chart-area">
              <pie-chart
                :chart-data="pieChart2.chartData"
                :extra-options="pieChart2.extraOptions"
                :height="120"
              >
              </pie-chart>
            </div>
          </div>

          <div class="col-6">
            <h4 class="card-title">
              <i class="tim-icons  icon-tag text-warning "></i> 8 Frameworks
            </h4>

            <p class="category">With our SEO services, we have made Angular, React, Wordpress, Magento, Vue, Shopify, Joomla and Drupal SEO friendly.</p>
          </div>
        </div>
      </card>
    </div>

    <div class="col-lg-4">
      <card type="chart">
        <template slot="header">
          <h5 class="card-category">Total Running Projects</h5>
          <h3 class="card-title">
            <i class="tim-icons icon-laptop text-info "></i> 20
          </h3>
        </template>
        <div class="chart-area">
          <bar-chart
            style="height: 100%"
            :chart-data="blueBarChart.chartData"
            :gradient-stops="blueBarChart.gradientStops"
            :extra-options="blueBarChart.extraOptions"
          >
          </bar-chart>
        </div>
      </card>
    </div>
    <div class="col-lg-4" :class="{ 'text-right': isRTL }">
      <card type="chart">
        <template slot="header">
          <h5 class="card-category">Tasks Completed</h5>
          <h3 class="card-title">
            <i class="tim-icons icon-send text-success "></i> 11,200
          </h3>
        </template>
        <div class="chart-area">
          <line-chart
            style="height: 100%"
            :chart-data="greenLineChart.chartData"
            :gradient-stops="greenLineChart.gradientStops"
            :extra-options="greenLineChart.extraOptions"
          >
          </line-chart>
        </div>
      </card>
    </div>
    <div class="col-lg-12"><country-map-card></country-map-card></div>
    <div class="col-lg-12">
      <card class="card" :header-classes="{ 'text-right': isRTL }">
        <h3 slot="header" class="card-title">Management table of our SEO Services</h3>
        <h5>We create individual password-protected dashboards for each client where they can see the performance information about their website. This information includes total leads, work completed, total keywords ranking in the top 10, sessions in one last month, and pageviews.</h5>
        <div class="table-responsive">
          <client-only>
          <user-table></user-table></client-only>
        </div>
      </card>
    </div>
    <div>
      <div class="row col-lg-12">
        <div class="col-lg-6 col-sm-6 text-center">
          <card
            type="tasks"
            class="text-left"
            :header-classes="{ 'text-right': $rtl.isRTL }"
          >
            <template slot="header">
              <h6 class="title d-inline">Basic Tasks in SEO Services</h6>

              </template>

            <div class="table-full-width table-responsive">
              <task-list></task-list>

            </div>
          </card>
          <card type="contributions">
          <h1 class="card-title">696</h1>
          <h3 class="card-category">Total Tickets Solved</h3>
          <p class="card-description">
            We solve client's queries on the same day. We successfully solved 696 client queries in last six months.
          </p>
          <hr />

          <template slot="footer">
            <div class="row">
              <div class="col-lg-6 col-md-8 ml-auto mr-auto">
                <div class="card-stats justify-content-center">
                  <base-switch
                    v-model="allContributions"
                    on-text="DONE"
                    off-text="DONE"
                  ></base-switch>
                  <span>Design Changes Implemented</span>
                </div>
              </div>
              <div class="col-lg-6 col-md-8 ml-auto mr-auto">
                <div class="card-stats justify-content-center">
                  <base-switch
                    v-model="pastWeekContributions"
                    on-text="DONE"
                    off-text="DONE"
                    :disabled="true"
                  ></base-switch>
                  <span>On-Page Changes Implemented</span>
                </div>
              </div>
            </div>
          </template>
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
                <h2 slot="header">Why SEOJS is the best SEO Agency?</h2>
                <p slot="content">
                  We are not only good at providing SEO services for WordPress CMS or any other CMS, but we are also expert in making different Javascript website SEO-friendly. We make all websites built with Javascript frameworks like react.js, angular, Vue, or Ember.
                </p>
                  </time-line-item>

              <time-line-item
                inverted
                badge-type="success"
                badge-icon="tim-icons icon-gift-2"
              >
                <h2 slot="header">How SEO Services Help Your Business?</h2>
                <p slot="content">
                  In our SEO services, we make a website's pages search engine friendly by adding useful content, improving page loading speed, make user-friendly pages. By targeting high search volume keyword and ranking for those keywords, eventually increases web presence and increases lead for the business.
                </p>
              </time-line-item>
              <time-line-item
              inverted
              badge-type="info"
              badge-icon="tim-icons icon-planet"
            >
              <span slot="header" class="badges badge-info">Revolutionary Thinking</span>

              <template slot="content">
                <p>
                  Not going by the books and improvising every strategy for the best possible results help us to run a successful campaign for our clients. We have multiple in-house websites where we perform SEO experiments and if we get a positive result, we implement the same strategy on our client's websites.
                </p>
                <p>
                  Revolutionary thinking is the biggest reason for our success. We spend a huge amount of our time in research & analysis and come up with a creative solution.
                </p>
                <hr />
              </template>

            </time-line-item>
            </time-line>
          </card>
        </div>

        <div class="container pricing-page">
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto text-center">
              <h1 class="title">Pick the best plan for you</h1>
              <h4 class="description">
                You have Premium Support and full on-page and design changes implementation on each package.
              </h4>
            </div>
          </div><br>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <card
                type="pricing"
                class="card-primary"
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
                  <p class="plan">
                  Best for Enterprises & large Ecommerce websites
                </p>
                </div>
                <base-button
                slot="footer"
                round type="primary"
                class="btn-just-icon">
                  <nuxt-link to="/seo-packages"><a href="/seo-packages" style="color: white"> <b>Get started</b></a></nuxt-link>
                </base-button>
              </card>
            </div>

            <div class="col-lg-3 col-md-6">
              <card
                type="pricing"
                class="card-success card-white"
                footer-classes="text-center mb-3 mt-3"
              >
                <h1 class="card-title">biz</h1>
                <img class="card-img" src="img//card-success.png" alt="Image" />
                <ul class="list-group">
                  <li class="list-group-item">50 keywords</li>
                  <li class="list-group-item">On-Page implementation</li>
                  <li class="list-group-item">24/7 Support</li>
                </ul>
                <div class="card-prices">
                  <h3 class="text-on-front"><span>$</span>799</h3>
                  <h5 class="text-on-back">799</h5>
                  <h6 class="plan">
                  Best for medium business and Ecommerce</h6>
                </div>

                <base-button slot="footer" round type="success" class="btn-just-icon">
                <nuxt-link to="/seo-packages"><a href="/seo-packages" style="color: white"> <b>Get started</b></a></nuxt-link>
                </base-button>
              </card>
            </div>

            <div class="col-lg-3 col-md-6">
              <card
                type="pricing"
                class="card-warning card-raised card-white"
                footer-classes="text-center mb-3 mt-3"
              >
                <h1 class="card-title">mid</h1>
                <img class="card-img" src="img//card-warning.png" alt="national seo plan" />
                <ul class="list-group">
                  <li class="list-group-item">30 keywords</li>
                  <li class="list-group-item">On-Page implementation</li>
                  <li class="list-group-item">24/7 Support</li>
                </ul>
                <div class="card-prices">
                  <h3 class="text-on-front"><span>$</span>550</h3>
                  <h5 class="text-on-back">55</h5>
                  <h6 class="plan">
                  More National Keywords</h6>
                </div>

                <base-button slot="footer" round type="warning" class="btn-just-icon">
                            <nuxt-link to="/seo-packages"><a href="/seo-packages" style="color: white"> <b>Get started</b></a></nuxt-link>
                </base-button>
              </card>
            </div>
            <div class="col-lg-3 col-md-6">
              <card
                type="pricing"
                class="card-danger card-white"
                footer-classes="text-center mb-3 mt-3"
              >
                <h1 class="card-title">Local</h1>
                <img class="card-img" src="img//card-danger.png" alt="Local SEO Sol" />
                <ul class="list-group">
                  <li class="list-group-item">15 Keywords</li>
                  <li class="list-group-item">On-Page implementation</li>
                  <li class="list-group-item">24/7 Support</li>
                </ul>
                <div class="card-prices">
                  <h3 class="text-on-front"><span>$</span>299</h3>
                  <h5 class="text-on-back">299</h5>
                  <h6 class="plan">
                  Best for Local Businesses</h6>
                </div>

                <base-button slot="footer" round type="danger" class="btn-just-icon">
                            <nuxt-link to="/seo-packages"><a href="/seo-packages" style="color: white"> <b>Get started</b></a></nuxt-link>
                </base-button>
              </card>
            </div>
          </div>
            <div class="col-md-6 ml-auto mr-auto text-center">
            <h1 class="title">Contact Us</h1>
            <h4 class="description">
              Contact us for the best SEO Services
            </h4>
          </div>
          <div class=""><edit-profile-form> </edit-profile-form></div>
        </div>
      </div>
      </div>
      </div>
</template>
<script>
import swal from 'sweetalert2';
import LineChart from '@/components/Charts/LineChart';
import PieChart from '@/components/Charts/PieChart';
import BarChart from '@/components/Charts/BarChart';
import * as chartConfigs from '@/components/Charts/config';
import TaskList from '@/components/Dashboard/TaskList';
import UserTable from '@/components/Dashboard/UserTable';
import CountryMapCard from '@/components/Dashboard/CountryMapCard';
import StatsCard from '@/components/Cards/StatsCard';
import config from '@/config';
import EditProfileForm from '../components/UserProfile/EditProfileForm.vue';
import { BaseProgress } from '@/components';
import {
  BaseSwitch,
  TimeLine,
  TimeLineItem,
  BaseCheckbox
} from '@/components';

let bigChartData = [
  [2100, 2600, 1900, 2200, 2150, 2300, 2600],
  [32, 25, 11, 13, 19, 25, 24],
  [2000, 2200, 2400, 1900, 2500, 2750, 2900]
]
let bigChartLabels = ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR']
let bigChartDatasetOptions = {
  fill: true,
  borderColor: config.colors.primary,
  borderWidth: 2,
  borderDash: [],
  borderDashOffset: 0.0,
  pointBackgroundColor: config.colors.primary,
  pointBorderColor: 'rgba(255,255,255,0)',
  pointHoverBackgroundColor: config.colors.primary,
  pointBorderWidth: 20,
  pointHoverRadius: 4,
  pointHoverBorderWidth: 15,
  pointRadius: 4,
}

export default {
  name: 'dashboard',
  head() {
  // sets document title
  return {
  title: 'SEO services: Get Affordable Search Engine Optimization Services',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'Increase your web presence with our best SEO services. With our innovative strategy and different approach has helped our clients to stay ahead and above then the rest.' }
      ],
  link: [
  {rel: 'canonical', href: 'https://seojs.co/'}
  ]
  }
  },
  components: {
    LineChart,
    BarChart,
    StatsCard,
    TaskList,
    CountryMapCard,
    UserTable,
    BaseSwitch,
    TimeLine,
    TimeLineItem,
    BaseCheckbox,
    BaseProgress,
    EditProfileForm,
    PieChart
  },
  data () {
    return {
      fuckyeah: '',
      pieChart2: {
        chartData: {
          labels: ['JAVASCRIPT', 'CMS'],
          datasets: [
            {
              label: 'Emails',
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: ['#ff8779', '#2a84e9'],
              borderWidth: 0,
              data: [13, 18]
            }
          ]
        },
        extraOptions: chartConfigs.pieChartOptions
      },
      allContributions: true,
      pastWeekContributions: true,
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
          footer: '<i class="tim-icons icon-sound-wave"></i></i> In Last Three Years'
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
      bigLineChart: {
        activeIndex: 0,
        chartData: {
          datasets: [{
            ...bigChartDatasetOptions,
            data: bigChartData[0]
          }],
          labels: bigChartLabels
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: []
      },
      purpleLineChart: {
        extraOptions: chartConfigs.purpleChartOptions,
        chartData: {
          labels: ['OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'],
          datasets: [
            {
              label: 'Data',
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [80, 100, 70, 80, 120, 80]
            }
          ]
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.2, 0]
      },
      greenLineChart: {
        extraOptions: chartConfigs.greenChartOptions,
        chartData: {
          labels: ['OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'],
          datasets: [
            {
              label: 'Tasks Completed',
              fill: true,
              borderColor: config.colors.danger,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.danger,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.danger,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [400, 450, 430, 470, 510, 525]
            }
          ]
        },
        gradientColors: [
          'rgba(66,134,121,0.15)',
          'rgba(66,134,121,0.0)',
          'rgba(66,134,121,0)'
        ],
        gradientStops: [1, 0.4, 0]
      },
      blueBarChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels: ['USA', 'UK', 'GER', 'UAE', 'CA', 'AU'],
          datasets: [
            {
              label: 'Countries',
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [12, 3, 2, 1, 1, 1]
            }
          ]
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0]
      }
    };
  },
  computed: {
    enableRTL () {
      return this.$route.query.enableRTL;
    },
    isRTL () {
      return this.$rtl.isRTL;
    },
    bigLineChartCategories () {
      return [{
        name: 'Leads Generated',
        icon: 'tim-icons icon-gift-2'
      }, { name: 'Accounts', icon: 'tim-icons icon-single-02' }, { name: 'Keywords on 1st Page', icon: 'tim-icons icon-tap-02' }];
    }
  },
  methods: {
    showSwal() {
      swal({
          title: 'Input something',
          html: `<div class="form-group">
            <input id="input-field" type="text" class="form-control" />
            </div>`,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success btn-fill',
          cancelButtonClass: 'btn btn-danger btn-fill',
          buttonsStyling: false,
        })
          .then(() => {
            swal({
              type: 'success',
              html: 'You entered',
              confirmButtonClass: 'btn btn-success btn-fill',
              buttonsStyling: false,
              alert
            });
          })
          .catch(swal.noop);
    },
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    },
    initBigChart (index) {
      let chartData = {
        datasets: [{
          ...bigChartDatasetOptions,
          data: bigChartData[index]
        }],
        labels: bigChartLabels
      };
      this.$refs.bigChart.updateGradients(chartData);
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted () {
    this.initBigChart(0);
  }
}
</script>
<style></style>
