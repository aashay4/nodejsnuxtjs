<template>
  <div class="fixed-plugin" v-click-outside="closeDropDown">
    <div class="dropdown show-dropdown" :class="{ show: isOpen }">
      <client-only>
      <a data-toggle="dropdown" class="settings-icon">
        <i class="fa fa-cog fa-2x" @click="toggleDropDown"> </i>
      </a>
    </client-only>
    <client-only>
      <ul class="dropdown-menu" :class="{ show: isOpen }">
        <li class="header-title">Sidebar Background</li>
        <li class="adjustments-line">
          <a class="switch-trigger background-color">
            <div class="badge-colors text-center">
              <client-only>
                <span
                v-for="item in sidebarColors"
                :key="item.color"
                class="badge filter"
                :class="[`badge-${item.color}`, { active: item.active }]"
                :data-color="item.color"
                @click="changeSidebarBackground(item);"
              ></span>
            </client-only>
            </div>
            <div class="clearfix"></div>
          </a>
        </li>

        <li class="header-title">Sidebar Mini</li>
        <li class="adjustments-line">
          <div class="togglebutton switch-sidebar-mini">
            <span class="label-switch">OFF</span>
            <base-switch
              v-model="sidebarMini"
              @input="minimizeSidebar"
            ></base-switch>
            <span class="label-switch label-right">ON</span>
          </div>

          <div class="togglebutton switch-change-color mt-3">
            <span class="label-switch">LIGHT MODE</span>
            <base-switch v-model="darkMode" @input="toggleMode"></base-switch>
            <span class="label-switch label-right">DARK MODE</span>
          </div>
        </li>

        <li class="button-container mt-4">
          <nuxt-link
          to="/seo-analyzer"
          class="btn btn-info btn-block btn-round">
          SEO Analyzer
        </nuxt-link>
        <nuxt-link
        to="/broken-link-checker"
        class="btn btn-info btn-block btn-round">
        Broken Link Checker
      </nuxt-link>
          <nuxt-link
          to="/seo-checker"
          class="btn btn-info btn-block btn-round">
          Website SEO Checker Tool
        </nuxt-link>
        <nuxt-link
        to="/web-scraper-development"
        class="btn btn-info btn-block btn-round">
        Scraper Development
      </nuxt-link>
          </li>
      </ul>
    </client-only>
    </div>
  </div>
</template>
<script>
  import { BaseSwitch } from '@/components';

  export default {
    name: 'sidebar-share',
    components: {
      BaseSwitch
    },
    props: {
      backgroundColor: String
    },
    data() {
      return {
        sidebarMini: true,
        darkMode: true,
        isOpen: false,
        sidebarColors: [
          { color: 'primary', active: false, value: 'primary' },
          { color: 'vue', active: true, value: 'vue' },
          { color: 'info', active: false, value: 'blue' },
          { color: 'success', active: false, value: 'green' },
          { color: 'warning', active: false, value: 'orange' },
          { color: 'danger', active: false, value: 'red' }
        ]
      };
    },
    methods: {
      toggleDropDown() {
        this.isOpen = !this.isOpen;
      },
      closeDropDown() {
        this.isOpen = false;
      },
      toggleList(list, itemToActivate) {
        list.forEach(listItem => {
          listItem.active = false;
        });
        itemToActivate.active = true;
      },
      changeSidebarBackground(item) {
        this.$emit('update:backgroundColor', item.value);
        this.toggleList(this.sidebarColors, item);
      },
      toggleMode(type) {
        let docClasses = document.body.classList;
        if (type) {
          docClasses.remove('white-content');
        } else {
          docClasses.add('white-content');
        }
      },
      minimizeSidebar() {
        this.$sidebar.toggleMinimize();
      }
    }
  };
</script>
<style scoped lang="scss">
  @import '~@/assets/sass/dashboard/custom/variables';

  .settings-icon {
    cursor: pointer;
  }

  .badge-vue {
    background-color: $vue;
  }
</style>
