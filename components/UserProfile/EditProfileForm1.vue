<template>
  <card>
    <h5 slot="header" class="title">Contact Us</h5>
    <form @submit.prevent="updateProfile">
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Company"
            placeholder="Company"
            v-model="user.company"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
          v-validate="'required'"
          :error="getError('email')"
            type="email"
            label="Email address"
            placeholder="mike@email.com"
            v-model="user.email"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input
          v-validate="'required'"
          :error="getError('name')"
            type="text"
            label="Full Name"
            placeholder="Full Name"
            v-model="user.name"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
          v-validate="'required'"
          :error="getError('number')"
            type="number"
            label="Number"
            placeholder="Number"
            v-model="user.number"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input
            type="text"
            label="Address"
            placeholder="Address"
            v-model="user.address"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input
            type="text"
            label="City"
            placeholder="City"
            v-model="user.city"
          >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input
            type="text"
            label="Country"
            placeholder="Country"
            v-model="user.country"
          >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input
            label="Postal Code"
            placeholder="ZIP Code"
            v-model="user.postalCode"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input label="What You're Looking for?">
            <textarea
              class="form-control"
              placeholder="Query"
              v-model="user.aboutMe"
            >
            </textarea>
          </base-input>
        </div>
      </div>

      <base-button native-type="submit" type="primary" class="btn-fill">
        Send
      </base-button>
    </form>
  </card>
</template>
<script>
import { Modal, BaseAlert } from '@/components';
export default {
  data() {
    return {
      type: ['', 'info', 'success', 'warning', 'danger'],
    notifications: {
      topCenter: true
    },
    modals: {
      classic: false,
      notice: false,
      mini: false
    },
      user: {
        company: '',
        required: '',
        username: '',
        email: '',
        name: '',
        number: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
        aboutMe: ``
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
        name:{
          required: true
        }
      }
    };
  },
  methods: {
    getError(fieldName) {
      return this.errors.first(fieldName);
    },
    async updateProfile(verticalAlign, horizontalAlign) {
      let isValidForm = await this.$validator.validateAll();
      if (isValidForm) {
        // TIP use this.model to send it to api and perform register call
        alert(this.user.company);
        this.$axios.post('/api/sendmail', {
            email: this.user.email,
            fullName: this.user.fullName,
            message: this.user.message,
            number: this.user.number
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
        timeout: 60000,
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
