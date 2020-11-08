<template>
  <div class="content">
    <div class="col-md-8 ml-auto mr-auto">
      <h2 class="text-center">Broken Link Checker</h2>
      <div style="margin-left: 30%">
      <input type="text" placeholder="Enter a Domain" v-model="domain" value="" @keyup.enter="senddomain">
      <button type="button" class="btn btn-sm btn-info" name="button" @click="senddomain">Check Domain</button></div><br>
      <p class="text-center">
        Important Note: Our crawler sends hundreds of requests to the domain you enter per second and gets all the data. This is indeed one of the fasted web crawlers but many web servers cannot handle too many requests at the same time and eventually crash. To avoid any damage to the website, our crawler terminates the program as soon as it finds a fluctuation in the requesting website's server bandwidth.
      </p>
    </div>
    <div class="row mt-5" v-show="isShowing">
      <div class="col-12">
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">Paginated Tables</h4>
          <div>
            <div
              class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
            >
              <el-select
                class="select-primary mb-3 pagination-select"
                v-model="pagination.perPage"
                placeholder="Per page"
              >
                <el-option
                  class="select-primary"
                  v-for="item in pagination.perPageOptions"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>

              <base-input>
                <el-input
                  type="search"
                  class="mb-3 search-input"
                  clearable
                  prefix-icon="el-icon-search"
                  placeholder="Search records"
                  v-model="searchQuery"
                  aria-controls="datatables"
                >
                </el-input>
              </base-input>
            </div>
            <el-table :data="queriedData">
              <el-table-column
                v-for="column in tableColumns"
                :key="column.label"
                :min-width="column.minWidth"
                :prop="column.prop"
                :label="column.label"
              >
              </el-table-column>
              </el-table>
          </div>
          <div
            slot="footer"
            class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
          >
            <div class="">
              <p class="card-category">
                Showing {{ from + 1 }} to {{ to }} of {{ total }} entries
              </p>
            </div>
            <base-pagination
              class="pagination-no-border"
              v-model="pagination.currentPage"
              :per-page="pagination.perPage"
              :total="total"
            >
            </base-pagination>
          </div>
        </card>
      </div>
    </div>


    <div class="row mt-5" v-show="isShowing1">
      <div class="col-12">
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">Broken links</h4>
          <div>
            <div
              class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
            >
              <el-select
                class="select-primary mb-3 pagination-select"
                v-model="pagination1.perPage"
                placeholder="Per page"
              >
                <el-option
                  class="select-primary"
                  v-for="item in pagination1.perPageOptions"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>

              <base-input>
                <el-input
                  type="search"
                  class="mb-3 search-input"
                  clearable
                  prefix-icon="el-icon-search"
                  placeholder="Search records"
                  v-model="searchQuery1"
                  aria-controls="datatables"
                >
                </el-input>
              </base-input>
            </div>
            <el-table :data="queriedData1">
              <el-table-column
                v-for="column in tableColumns1"
                :key="column.label"
                :min-width="column.minWidth"
                :prop="column.prop"
                :label="column.label"
              >
              </el-table-column>
              </el-table>
          </div>
          <div
            slot="footer"
            class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
          >
            <div class="">
              <p class="card-category">
                Showing {{ from1 + 1 }} to {{ to1 }} of {{ total1 }} entries
              </p>
            </div>
            <base-pagination
              class="pagination-no-border"
              v-model="pagination1.currentPage"
              :per-page="pagination1.perPage"
              :total="total1"
            >
            </base-pagination>
          </div>
        </card>
      </div>
    </div>


    </div></template>
<script>
import socket from '~/plugins/socket.io.js'
import { Table, TableColumn, Select, Option } from 'element-ui';
import { BasePagination } from '@/components';
import Fuse from 'fuse.js';
import swal from 'sweetalert2';

export default {
  name: 'paginated',
  components: {
    BasePagination,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  computed: {
    /***
     * Returns a page from the searched data or the whole data. Search is performed in the watch section below
     */
     queriedData1() {
       let result1 = this.tableData1;
       if (this.searchedData1.length > 0) {
         result1 = this.searchedData1;
       }
       return result1.slice(this.from1, this.to1);
     },
    queriedData() {
      let result = this.tableData;
      if (this.searchedData.length > 0) {
        result = this.searchedData;
      }
      return result.slice(this.from, this.to);
    },
    to() {
      let highBound = this.from + this.pagination.perPage;
      if (this.total < highBound) {
        highBound = this.total;
      }
      return highBound;
    },
    to1() {
      let highBound1 = this.from1 + this.pagination1.perPage;
      if (this.total1 < highBound1) {
        highBound1 = this.total1;
      }
      return highBound1;
    },
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },
    from1() {
      return this.pagination1.perPage * (this.pagination1.currentPage - 1);
    },
    total() {
      return this.searchedData.length > 0
        ? this.searchedData.length
        : this.tableData.length;
    },
    total1() {
      return this.searchedData1.length > 0
        ? this.searchedData1.length
        : this.tableData1.length;
    }
  },
  data() {
    return {
      domain: '',
      isShowing: false,
      isShowing1: true,
      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
      pagination1: {
        perPage: 100,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50, 100, 500, 1000],
        total: 0
      },
      searchQuery: '',
      searchQuery1: '',
      propsToSearch: ['name', 'email', 'age'],
      tableColumns: [
        {
          prop: 'href',
          label: 'URL',
          minWidth: 200
        },
        {
          prop: 'url',
          label: 'Link from',
          minWidth: 250
        },
        {
          prop: 'alt',
          label: 'alt',
          minWidth: 100
        },
        {
          prop: 'status',
          label: 'status',
          minWidth: 100
        }
      ],
      tableColumns1: [
        {
          prop: 'href',
          label: 'URL',
          minWidth: 100
        },
        {
          prop: 'url',
          label: 'Link From',
          minWidth: 100
        },
        {
          prop: 'status',
          label: 'status',
          minWidth: 100
      }],
      tableData: [],
      tableData1: [],
      searchedData: [],
      searchedData1: [],
      fuseSearch: null,
      fuseSearch1: null
    };
  },
  beforeMount () {

    //socket.on('discoveredlinks', (discoveredlinks) => {
      //this.xxx.push(message.url);
      //console.log(href)
    //  this.tableData0.push(discoveredlinks.resources);
  //    console.log(discoveredlinks.resources);
    //  this.description.push(queueItem);
      //this.h1.push(queueItem);
  //    this.h2.push(queueItem);
    //  this.canonical.push(queueItem);
    //  this.keywords.push(queueItem);
  //    })
//  socket.on('domainsgot', (message) => {
  //  this.tableData.push(message);
  //  })
    socket.on('brokenlinks', (message) => {
      this.tableData1.push(message);
      })
  },
  methods: {
    senddomain(){
      const message = this.domain;
      //this.messages.push(message)
    //  socket.emit('brokenlinks', message)
      socket.emit('brokenlinks1', message)
    },
  },
  mounted() {
    // Fuse search initialization.
    this.fuseSearch = new Fuse(this.tableData, {
      keys: ['status', 'href', 'url'],
      threshold: 0.3
    });
    this.fuseSearch1 = new Fuse(this.tableData1, {
      keys: ['status'],
      threshold: 0.3
    });
  },
  watch: {
    /**
     * Searches through the table data by a given query.
     * NOTE: If you have a lot of data, it's recommended to do the search on the Server Side and only display the results here.
     * @param value of the query
     */
    searchQuery(value) {
      let result = this.tableData;
      if (value !== '') {
        result = this.fuseSearch.search(this.searchQuery);
      }
      this.searchedData = result;
    },
    searchQuery1(value) {
      let result1 = this.tableData1;
      if (value !== '') {
        result1 = this.fuseSearch1.search(this.searchQuery1);
      }
      this.searchedData1 = result1;
    }
  }
};
</script>
<style>
.pagination-select,
.search-input {
  width: 200px;
}
</style>
