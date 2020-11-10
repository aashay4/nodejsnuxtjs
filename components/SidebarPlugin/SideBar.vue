<template>
  <client-only>
  <div class="sidebar" :data="backgroundColor">
    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="" class="simple-text logo-mini">
          <img src="img/e9b4f1b4-0fd3-4782-8b5e-54e1f330db99_200x200.png" alt="seojs-logo" />
        </a>
        <a href="https://seojs.co/" class="simple-text logo-normal">
          SEOJS
        </a>
      </div>
      <slot></slot>
      <ul class="nav row">
        <slot>
          <sidebar-item
            class="nav-link"
            :link="{
              name: $t('sidebar.dashboard'),
              icon: 'tim-icons icon-chart-pie-36',
              path: '/'
            }"
          >
          </sidebar-item>
          <sidebar-item
            class="nav-link"
            :link="{
              name: 'Data Science Services',
              icon: 'tim-icons icon-sound-wave',
              path: '/data-science-services'
            }"
          >
          </sidebar-item>
          <sidebar-item
            class="nav-link"
            :link="{
              name: 'Ecommerce SEO',
              icon: 'tim-icons icon-cart',
              path: '/ecommerce-seo'
            }"
          >
          </sidebar-item>
          <sidebar-item
            class="nav-link"
            :link="{
              name: 'Local SEO',
              icon: 'tim-icons icon-map-big',
              path: '/local-seo'
            }"
          >
          </sidebar-item>
          <sidebar-item
            class="nav-link"
            :link="{
              name: 'Angular SEO',
              icon: 'tim-icons icon-laptop',
              path: '/angular-seo'
            }"
          >
          </sidebar-item>
          <sidebar-item
            class="nav-link"
            :link="{
              name: 'Vuejs SEO',
              icon: 'tim-icons icon-molecule-40',
              path: '/vuejs-seo'
            }"
          >
          </sidebar-item>
          <sidebar-item
            class="nav-link"
            :link="{
              name: 'Reactjs SEO',
              icon: 'tim-icons icon-atom',
              path: '/reactjs-seo'
            }"
          >
          </sidebar-item>
          <sidebar-item
            class="nav-link"
            :link="{
              name: 'Enterprise SEO',
              icon: 'tim-icons icon-chart-bar-32',
              path: '/enterprise-seo'
            }"
          >
          </sidebar-item>
            </slot>
      </ul>
    </div>
  </div>
</client-only>
</template>
<script>
export default {
  name: 'sidebar',
  props: {
    logo: {
      type: String,
      default: 'img//e9b4f1b4-0fd3-4782-8b5e-54e1f330db99_200x200',
      description: 'SEOJS Logo'
    },
    backgroundColor: {
      type: String,
      default: 'vue',
      validator: value => {
        let acceptedValues = [
          '',
          'vue',
          'blue',
          'green',
          'orange',
          'red',
          'primary'
        ];
        return acceptedValues.indexOf(value) !== -1;
      },
      description:
        'Sidebar background color (vue|blue|green|orange|red|primary)'
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
      description:
        "List of sidebar links as an array if you don't want to use components for these."
    },
    autoClose: {
      type: Boolean,
      default: true,
      description:
        'Whether sidebar should autoclose on mobile when clicking an item'
    }
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
    mounted() {
      if (this.isActive && this.isMenu) {
        this.collapsed = false;
      }
    },
  methods: {
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    }
  },
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  }
};
</script>
<style>
@media (min-width: 992px) {
  .navbar-search-form-mobile,
  .nav-mobile-menu {
    display: none;
  }
}
</style>
