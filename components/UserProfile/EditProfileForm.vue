<template>
  <div class="row">
    <div class="col-md-5 ml-auto">
          <div class="info-area info-horizontal mt-5">
            <div class="icon icon-warning">
              <i class="tim-icons icon-wifi"></i>
            </div>
            <div class="description">
              <h3 class="info-title">Commitment</h3>
              <client-only>
              <p class="description">
                We're committed to provide the best services and a profitable collaboration form
                our clients.
              </p>
            </client-only>
            </div>
          </div>
          <div class="info-area info-horizontal">
            <div class="icon icon-primary">
              <i class="tim-icons icon-triangle-right-17"></i>
            </div>
            <div class="description">
              <h3 class="info-title">Full Design & Development Support</h3>
              <client-only>
              <p class="description">


                We take full responsibility of fixing design, on-page issues and
                CRO of your website.

              </p>
            </client-only>
            </div>
          </div>
          <div class="info-area info-horizontal">
            <div class="icon icon-info">
              <i class="tim-icons icon-trophy"></i>
            </div>
            <div class="description">
              <h3 class="info-title">Great Return of Investment</h3>
              <client-only>
              <p class="description">
                Our ultimate goal is to go beyond your expections with our best
                SEO services.
              </p>
            </client-only>
            </div>
          </div>
        </div>
  <div class="col-md-7 mr-auto">
        <form>
          <card class="card-register card-white">
            <template slot="header">
              <img class="card-img" src="img/card-primary.png" alt="Card image"/>
              <h4 class="card-title">contact</h4>
            </template>

            <base-input
              v-validate="'required'"
              :error="getError('Full Name')"
              v-model="model.fullName"
              name="Full Name"
              placeholder="Full Name"
              addon-left-icon="tim-icons icon-single-02"
            >
            </base-input>

            <base-input
              v-validate="'required|email'"
              :error="getError('email')"
              v-model="model.email"
              name="email"
              placeholder="Email"
              autocomplete="username"
              addon-left-icon="tim-icons icon-email-85"
            >
            </base-input>

            <base-input
              v-validate="'required|min:5'"
              :error="getError('message')"
              v-model="model.message"
              name="message"
              type="text"
              placeholder="Enter Message"
              autocomplete="current-message"
              addon-left-icon="tim-icons icon-send"
            >
            </base-input>

            <base-input
              v-validate="'required'"
              :error="getError('number')"
              v-model="model.number"
              name="number"
              type="number"
              placeholder="Number"
              addon-left-icon="tim-icons icon-headphones"
            >
            </base-input>

            <base-button
                    type="primary"
                    block
                    @click.native="register('top', 'center')"
                    >Contact Now
                  </base-button>
          </card>
        </form>
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
        fullName: ''
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
      let isValidForm = await this.$validator.validateAll();
      if (isValidForm) {
        // TIP use this.model to send it to api and perform register call
        alert(this.model.email);
        this.$axios.post('/api/sendmail', {
            email: this.model.email,
            fullName: this.model.fullName,
            message: this.model.message,
            number: this.model.number
          })
          .then((response) => {
            console.log(response);
          })
          .catch( (error) => {
            console.log(error)
            if(error.response.data.errors){
              this.errors = error.response.data.errors
            }
          });
        let color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message:
          'We have received your inquiry. We will be in touch <b>in 24 hours.</b>',
        timeout: 30000,
        icon: 'tim-icons icon-bell-55',
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color]
      });
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
</style>
