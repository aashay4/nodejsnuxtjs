<template>
  <div class="container">
    <div class="row">
    <div class="col-md-5 ml-auto">
          <div class="info-area info-horizontal mt-5">
            <div class="icon icon-warning">
              <i class="tim-icons icon-wifi"></i>
            </div>
            <div class="description">
              <h3 class="info-title">Marketing</h3>
              <p class="description">
                We've created the marketing campaign of the website. It was a very
                interesting collaboration.
              </p>
            </div>
          </div>
          <div class="info-area info-horizontal">
            <div class="icon icon-primary">
              <i class="tim-icons icon-triangle-right-17"></i>
            </div>
            <div class="description">
              <h3 class="info-title">Fully Coded in HTML5</h3>
              <p class="description">
                We've developed the website with HTML5 and CSS3. The client has
                access to the code using GitHub.
              </p>
            </div>
          </div>
          <div class="info-area info-horizontal">
            <div class="icon icon-info">
              <i class="tim-icons icon-trophy"></i>
            </div>
            <div class="description">
              <h3 class="info-title">Built Audience</h3>
              <p class="description">
                There is also a Fully Customizable CMS Admin Dashboard for this
                product.
              </p>
            </div>
          </div>
        </div>
  <div class="col-md-7 mr-auto">
        <form>
          <card class="card-register card-white">
            <template slot="header">
              <img class="card-img" src="img/card-primary.png" alt="Card image" />
              <h4 class="card-title">package</h4>
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

            <base-input
              v-validate="'required'"
              :error="getError('country')"
              v-model="model.country"
              name="country"
              type="country"
              placeholder="country"
              addon-left-icon="tim-icons icon-world"
            >
            </base-input>

            <div class="row">
              <div class="col-md-12">
                <el-select
                  class="select-primary"
                  size="large"
                  placeholder="Single Select"
                  v-model="selects.simple"
                >
                  <el-option
                    v-for="option in selects.countries"
                    class="select-primary"
                    :value="option.value"
                    :label="option.label"
                    :key="option.label"
                  >
                  </el-option>
                </el-select>
              </div>
              </div>
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
    </div>
</template>
<script>
import { Modal, BaseAlert } from '@/components';
import { TimeSelect, DatePicker, Select, Option } from 'element-ui';

export default {
  components: {
    [Option.name]: Option,
    [Select.name]: Select
      },
  data() {
    return {
      selects: {
  simple: '',
  countries: [
    { value: '$1250 - PRO', label: '$1250 - PRO' },
    { value: '$799 - BIZ', label: '$799 - BIZ' },
    { value: '$550 - MID', label: '$550 - MID' },
    { value: '$299 - LOCAL', label: '$299 - LOCAL' }
  ],
  multiple: 'ARS'
},
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
        fullName: '',
        message: '',
        country: ''
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
.extended-forms .el-select {
  width: 100%;
  margin-bottom: 30px;
}

.extended-forms .progress {
  margin-bottom: 30px;
}
</style>
