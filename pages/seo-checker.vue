<template>
  <div class="">
      <div class="">
          <h1>SEO Page Checker</h1>
          <card class="card-register card-black">
            <base-input
              v-validate="'required'"
              :error="getError('domain')"
              v-model="model.domain"
              name="domain"
              placeholder="Enter Domain"
              addon-left-icon="tim-icons icon-link-72"
            >
            </base-input>
            <base-button
                    type="primary"
                    block
                    @click.native="register('top', 'center')"
                    class="btn btn-info btn-block btn-round">Check web page
                  </base-button>
          </card>
          <card class="card-white">

            <table v-if="response === 200" style="width:100%">
    <tr>
      <th style="width:30%">Field</th>
      <th style="width:70%">Value</th>
    </tr><hr>
    <tr>
      <td>protocol</td>
      <td v-if="protocol === 'https'">{{ protocol }}
        <h4 style="color: green;">Great! Your website is using HTTPs protocol which is good for SEO and website users trust.</h4>
      </td>
      <td v-if="protocol === 'http'">{{ protocol }}
        <h4 style="color: red;">Your website is not using HTTPs protocol. We recommend to use HTTPs for SEO and website users trust.</h4>
      </td>
    </tr><hr>
    <tr>
      <td>title</td>
      <td v-if="title.length > 40 && title.length < 70">{{title}}
      <h4 style="color: green;">Great! Your title's length is between 40 to 70 characters.</h4></td>
      <td v-if="title.length < '40' || title.length > '70' && title.length > '1'">{{title}}
      <h4 style="color: red;">Your title's length is {{title.length}}. We recommend to keep it between 40 to 70 characters.</h4></td>
    </tr><hr>
    <tr>
      <td>Description</td>
      <td v-if="description.length > 40 && description.length < 160">{{description}}
        <h4 style="color: green;">Great! Your description's length is between 40 to 160 characters.</h4>
      </td>
      <td v-if="description.length < 40 || description.length > 160">{{description}}
        <h4 style="color: red;">Your description's length is {{description.length}}. We recommend to keep it around 160 characters and include targeted keywords.</h4>
      </td>
    </tr><hr>
    <tr>
      <td>Canonical</td>
      <td v-if="canonical">{{canonical}}
        <h4 style="color: green;">This page {{domain}} has a proper canonical tag.</h4>
      </td>
      <td v-if="canonical === ''">
        <h4 style="color: red;">This page {{model.domain}} has not a canonical tag.</h4>
      </td>
    </tr><hr>
    <tr>
      <td>Robots</td>
      <td>{{robots}}</td>
    </tr><hr>
    <tr>
      <td>ALT Tag Found?</td>
      <td v-if="alttag ==='images without alt'"> <h4 style="color: red">We found images without Alt tags on {{model.domian}}</h4> </td>
    </tr><hr>
    <tr>
      <td>response</td>
      <td>{{response}}</td>
    </tr><hr>
    <tr>
      <td>pagesize</td>
      <td>{{pagesize/1000}} Kb</td>
    </tr><hr>
    <tr>
      <td>File Data Size</td>
      <td v-if="filedatasize < pagesize">{{filedatasize/1000}} Kb
        <h4 style="color: green;">Great! Your HTML is compressed. Compressed size is {{filedatasize/1000}} Kb & actual size is {{pagesize/1000}} Kb.</h4>
      </td>
      <td v-if="filedatasize >= pagesize">
        {{ filedatasize/1000 }} Kb
      </td>
    </tr><hr>

    <tr>
      <td>Source download time</td>
      <td>{{downtime}}</td>
    </tr><hr>
    <tr>
      <td>Loadingtime</td>
      <td v-if="lodingtime < 5000">{{lodingtime/1000}} Seconds
        <h4 style="color: green;">Great! Your website's page loading speed is less then 5 seconds.</h4>
      </td>
      <td v-if="lodingtime > 5000">{{lodingtime/1000}} Seconds
        <h4 style="color: green;">Your website's page loading speed is {{lodingtime/1000}}. We recommend you to reduce it to less then 5 seconds.</h4>
      </td>
    </tr><hr>
    <tr>
      <td>server</td>
      <td>{{server}}</td>
    </tr><hr>
    <tr>
      <td>referrer</td>
      <td v-if="referrer === null">Not found{{referrer}}</td>
    </tr><hr>
    <tr>
      <td>Is there sitemap?</td>
      <td>{{sitemap}}</td>
    </tr><hr>
    <tr>
      <td>Is there robotstxt?</td>
      <td>{{robotstxt}}</td>
    </tr><hr>
    <tr>
      <td>h1</td>
      <td>{{h1}}</td>
    </tr><hr>
    <tr>
      <td>h2</td>
      <td>{{h2}}</td>
    </tr><hr>
  </table>
  <p v-if="model.counter === 'true'">
    <h1 v-if="model.counter === 'true'" style="color: blue">Crawling {{ model.domain }}...</h1>
    <p v-if="model.counter === 'true'" style="color: blue">It may take upto 16 seconds...</p>
  </p>
          </card>
      </div>
    </div>
</template>
<script>
import { Modal, BaseAlert } from '@/components';

export default {
  data() {
    return {
      type: ['', 'info', 'success', 'warning', 'danger'],
    notifications: {
      topCenter: false
    },
    protocol: '',
    title: '',
    lodingtime: '',
    response: '',
    downtime: '',
    server: '',
    referrer: '',
    sitemap: '',
    robotstxt: '',
    pagesize: '',
    h1: '',
    h2: '',
    description: '',
    canonical: '',
    robots: '',
    alttag: '',
    filedatasize: '',
    modals: {
      classic: false,
      notice: false,
      mini: false
    },
      model: {
        required: '',
        email: '',
        number: '',
        equalToSourceurl: '',
        equalToSource: '',
        equalToDest: '',
        message: '',
        domain: '',
        counter: 'false'
      },
      modelValidations: {
        required: {
          required: true
        },
        email: {
          email: true,
          required: true
        },
        number: {
          numeric: true,
          reqired: true
        },
        url: {
          url: true
        },
        equalToSource: {
          required: true
        },
        equalToDest: {
          required: true,
          confirmed: 'equalToSource'
        }
      }
    };
  },
  methods: {
    getError(fieldName) {
      return this.errors.first(fieldName);
    },
    async register(verticalAlign, horizontalAlign) {
      this.model.counter = 'true';
      let isValidForm = await this.$validator.validateAll();
      if (isValidForm) {
        // TIP use this.model to send it to api and perform register call
        alert("Site you entered:" + this.model.domain);
        if(this.model.domain.includes("http")){
        this.$axios.post('/api/crawll', {
            site: this.model.domain
          })
          .then((response) => {
            console.log(response);
            this.protocol = response.data[0].protocol;
            this.title = response.data[0].title;
            this.protocol = response.data[0].protocol;
            this.lodingtime = response.data[0].requesttime;
            this.response = response.data[0].code;
            this.downtime = response.data[0].downloadtime;
            this.server = response.data[0].server;
            this.referrer = response.data[0].referrer;
            this.sitemap = response.data[0].sitemapfound;
            this.robotstxt = response.data[0].robotsfile;
            this.pagesize = response.data[0].pagesize;
            this.h1 = response.data[0].h1;
            this.h2 = response.data[0].h2;
            this.description = response.data[0].description;
            this.canonical = response.data[0].canonical;
            this.robots = response.data[0].robots;
            this.alttag = response.data[0].alttag;
            this.filedatasize = response.data[0].filedatasize;
            this.model.counter = false;
            })
          .catch( (error) => {
            console.log(error)
            if(error.response.data.errors){
              this.errors = error.response.data.errors
            }
          });
      }
      else{
        this.model.domain = "http://" + this.model.domain;
        alert(this.model.domain);
      }
    }
    }
  }
};
</script>
<style>
.card .alert {
  position: relative !important;
  width: 100%;
}
.underline {
    text-decoration: underline;
}
</style>
