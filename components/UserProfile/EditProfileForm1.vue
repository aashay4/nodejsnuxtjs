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
            type="text"
            label="First Name"
            placeholder="First Name"
            v-model="user.firstName"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="text"
            label="Last Name"
            placeholder="Last Name"
            v-model="user.lastName"
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
export default {
  data() {
    return {
      user: {
        company: '',
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
        aboutMe: ``
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style></style>
