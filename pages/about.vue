<template>
  <client-only>
  <div class="row">
    <div class="col-md-4"><user-card> </user-card></div>
    <div class="col-md-8"><edit-profile-form> </edit-profile-form></div>
  </div>
</client-only>
</template>
<script>
import EditProfileForm from '../components/UserProfile/EditProfileForm1.vue';
import UserCard from '../components/UserProfile/UserCard.vue';

export default {
  name: 'user',
  head() {
  // sets document title
  return {
  title: 'About Us',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'About Us.' }
  ],
  link: [
  {rel: 'canonical', href: 'https://seojs.co/about'}
  ]
  }
  },
  components: {
    EditProfileForm,
    UserCard
  }
};
</script>
<style></style>
