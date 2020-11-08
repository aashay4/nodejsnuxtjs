<template>
  <div class="content">
    <div class="col-md-8 ml-auto mr-auto">
      <h2 class="text-center">SEO Analyzer</h2>
      <div style="margin-left: 30%">
      <input type="text" placeholder="Enter a Domain" v-model="domain" value="" @keyup.enter="senddomain">
      <button type="button" class="btn btn-sm btn-info" name="button" @click="senddomain">Check Domain</button></div>
    </div><br>
    <!--<button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing1 = 0; isShowing0 ^= true; isshowing = 0; isShowing2 = 0; isShowing3 = 0; isShowing4 = 0; isShowing5 = 0; isShowing6 = 0; isShowing8 = 0; isShowing7 = 0">All website Links</button>-->
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing1 = 0; isShowing0 = 0; isShowing ^= true; isShowing2 = 0; isShowing3 = 0; isShowing4 = 0; isShowing5 = 0; isShowing6 = 0; isShowing8 = 0; isShowing9 = 0; isShowing7 = 0">Page Speed Check</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing3 = 0; isShowing = 0; isShowing5 = 0; isShowing7 = 0; isShowing9 ^= true; isShowing6 = 0; isShowing1 = 0; isShowing2 = 0; isShowing4 = 0; isShowing0 = 0; isShowing8 = 0">Page Size</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing = 0; isShowing1 ^= true; isShowing0 = 0; isShowing2 = 0; isShowing3 = 0; isShowing4 = 0; isShowing5 = 0; isShowing6 = 0; isShowing9 = 0; isShowing8 = 0; isShowing7 = 0">Meta Description</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing2 ^= true; isShowing = 0; isShowing1 = 0; isShowing0 = 0; isShowing3 = 0; isShowing4 = 0; isShowing5 = 0; isShowing9 = 0; isShowing8 = 0; isShowing6 = 0; isShowing7 = 0">Meta Title</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing3 = 0; isShowing = 0; isShowing5 = 0; isShowing6 ^= true; isShowing1 = 0; isShowing2 = 0; isShowing9 = 0; isShowing8 = 0; isShowing4 = 0; isShowing0 = 0; isShowing7 = 0">Protocol & Response</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing3 = 0; isShowing = 0; isShowing4 ^= true; isShowing1 = 0; isShowing2 = 0; isShowing0 = 0; isShowing5 = 0; isShowing6 = 0; isShowing9 = 0; isShowing8 = 0; isShowing7 = 0">Canonical Tag</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing3 = 0; isShowing = 0; isShowing5 ^= true; isShowing1 = 0; isShowing2 = 0; isShowing4 = 0; isShowing0 = 0; isShowing9 = 0; isShowing8 = 0; isShowing6 = 0; isShowing7 = 0">Keywords</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing3 = 0; isShowing = 0; isShowing5 = 0; isShowing7 ^= true; isShowing6 = 0; isShowing9 = 0; isShowing8 = 0; isShowing1 = 0; isShowing2 = 0; isShowing4 = 0; isShowing0 = 0">H1</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing3 = 0; isShowing = 0; isShowing5 = 0; isShowing7 = 0; isShowing8 ^= true; isShowing9 = 0; isShowing6 = 0; isShowing1 = 0; isShowing2 = 0; isShowing4 = 0; isShowing0 = 0">Images</button>
    <button type="button" class="btn btn-sm btn-info btn-simple" name="button" @click="isShowing3 ^= true; isShowing = 0; isShowing1 = 0; isShowing2 = 0; isShowing0 = 0; isShowing4 = 0; isShowing8 = 0; isShowing5 = 0; isShowing6 = 0; isShowing9 = 0; isShowing7 = 0">H2 Tag</button>


    <div class="row mt-5" v-show="isShowing9">
      <div class="col-12">
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">Page Size</h4>
          <p class="card-category">
            Showing {{ from9 + 1 }} to {{ to9 }} of {{ total9 }} entries
          </p>
          <div>
            <div
              class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
            >
              <el-select
                class="select-primary mb-3 pagination-select"
                v-model="pagination9.perPage"
                placeholder="Per page"
              >
                <el-option
                  class="select-primary"
                  v-for="item in pagination9.perPageOptions"
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
                  v-model="searchQuery9"
                  aria-controls="datatables"
                >
                </el-input>
              </base-input>
            </div>
            <el-table :data="queriedData9">
              <el-table-column
                v-for="column in tableColumns9"
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
                Showing {{ from9 + 1 }} to {{ to9 }} of {{ total9 }} entries
              </p>
            </div>
            <base-pagination
              class="pagination-no-border"
              v-model="pagination9.currentPage"
              :per-page="pagination9.perPage"
              :total="total"
            >
            </base-pagination>
          </div>
        </card>
      </div>
    </div>


    <div class="row mt-5" v-show="isShowing6">
      <div class="col-12">
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">Protocol</h4>
          <div>
            <div
              class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
            >
              <el-select
                class="select-primary mb-3 pagination-select"
                v-model="pagination6.perPage"
                placeholder="Per page"
              >
                <el-option
                  class="select-primary"
                  v-for="item in pagination6.perPageOptions"
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
                  v-model="searchQuery6"
                  aria-controls="datatables"
                >
                </el-input>
              </base-input>
            </div>
            <el-table :data="queriedData6">
              <el-table-column
                v-for="column in tableColumns6"
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
                Showing {{ from6 + 1 }} to {{ to6 }} of {{ total6 }} entries
              </p>
            </div>
            <base-pagination
              class="pagination-no-border"
              v-model="pagination6.currentPage"
              :per-page="pagination6.perPage"
              :total="total"
            >
            </base-pagination>
          </div>
        </card>
      </div>
    </div>

    <div class="row mt-5" v-show="isShowing5">
      <div class="col-12">
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">Keywords</h4>
          <div>
            <div
              class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
            >
              <el-select
                class="select-primary mb-3 pagination-select"
                v-model="pagination5.perPage"
                placeholder="Per page"
              >
                <el-option
                  class="select-primary"
                  v-for="item in pagination5.perPageOptions"
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
                  v-model="searchQuery5"
                  aria-controls="datatables"
                >
                </el-input>
              </base-input>
            </div>
            <el-table :data="queriedData5">
              <el-table-column
                v-for="column in tableColumns5"
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
                Showing {{ from5 + 1 }} to {{ to5 }} of {{ total5 }} entries
              </p>
            </div>
            <base-pagination
              class="pagination-no-border"
              v-model="pagination5.currentPage"
              :per-page="pagination5.perPage"
              :total="total"
            >
            </base-pagination>
          </div>
        </card>
      </div>
    </div>


    <div class="row mt-5" v-show="isShowing7">
      <div class="col-12">
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">H1</h4>
          <div>
            <div
              class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
            >
              <el-select
                class="select-primary mb-3 pagination-select"
                v-model="pagination7.perPage"
                placeholder="Per page"
              >
                <el-option
                  class="select-primary"
                  v-for="item in pagination7.perPageOptions"
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
                  v-model="searchQuery7"
                  aria-controls="datatables"
                >
                </el-input>
              </base-input>
            </div>
            <el-table :data="queriedData7">
              <el-table-column
                v-for="column in tableColumns7"
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
                Showing {{ from7 + 1 }} to {{ to7 }} of {{ total7 }} entries
              </p>
            </div>
            <base-pagination
              class="pagination-no-border"
              v-model="pagination7.currentPage"
              :per-page="pagination7.perPage"
              :total="total"
            >
            </base-pagination>
          </div>
        </card>
      </div>
    </div>

    <div class="row mt-5" v-show="isShowing3">
      <div class="col-12">
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">H2</h4>
          <div>
            <div
              class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
            >
              <el-select
                class="select-primary mb-3 pagination-select"
                v-model="pagination3.perPage"
                placeholder="Per page"
              >
                <el-option
                  class="select-primary"
                  v-for="item in pagination3.perPageOptions"
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
                  v-model="searchQuery3"
                  aria-controls="datatables"
                >
                </el-input>
              </base-input>
            </div>
            <el-table :data="queriedData3">
              <el-table-column
                v-for="column in tableColumns3"
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
                Showing {{ from3 + 1 }} to {{ to3 }} of {{ total3 }} entries
              </p>
            </div>
            <base-pagination
              class="pagination-no-border"
              v-model="pagination3.currentPage"
              :per-page="pagination3.perPage"
              :total="total"
            >
            </base-pagination>
          </div>
        </card>
      </div>
    </div>


    <div class="row mt-5" v-show="isShowing4">
      <div class="col-12">
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">Canonical</h4>
          <div>
            <div
              class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
            >
              <el-select
                class="select-primary mb-3 pagination-select"
                v-model="pagination4.perPage"
                placeholder="Per page"
              >
                <el-option
                  class="select-primary"
                  v-for="item in pagination4.perPageOptions"
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
                  v-model="searchQuery4"
                  aria-controls="datatables"
                >
                </el-input>
              </base-input>
            </div>
            <el-table :data="queriedData4">
              <el-table-column
                v-for="column in tableColumns4"
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
                Showing {{ from4 + 1 }} to {{ to4 }} of {{ total4 }} entries
              </p>
            </div>
            <base-pagination
              class="pagination-no-border"
              v-model="pagination4.currentPage"
              :per-page="pagination4.perPage"
              :total="total"
            >
            </base-pagination>
          </div>
        </card>
      </div>
    </div>

    <div class="row mt-5" v-show="isShowing4">
      <div class="col-12">
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">Canonical</h4>
          <div>
            <div
              class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
            >
              <el-select
                class="select-primary mb-3 pagination-select"
                v-model="pagination4.perPage"
                placeholder="Per page"
              >
                <el-option
                  class="select-primary"
                  v-for="item in pagination4.perPageOptions"
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
                  v-model="searchQuery4"
                  aria-controls="datatables"
                >
                </el-input>
              </base-input>
            </div>
            <el-table :data="queriedData4">
              <el-table-column
                v-for="column in tableColumns4"
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
                Showing {{ from4 + 1 }} to {{ to4 }} of {{ total4 }} entries
              </p>
            </div>
            <base-pagination
              class="pagination-no-border"
              v-model="pagination4.currentPage"
              :per-page="pagination4.perPage"
              :total="total"
            >
            </base-pagination>
          </div>
        </card>
      </div>
    </div>



    <div class="row mt-5" v-show="isShowing8">
      <div class="col-12">
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">Images</h4>
          <div>
            <div
              class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
            >
              <el-select
                class="select-primary mb-3 pagination-select"
                v-model="pagination8.perPage"
                placeholder="Per page"
              >
                <el-option
                  class="select-primary"
                  v-for="item in pagination8.perPageOptions"
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
                  v-model="searchQuery8"
                  aria-controls="datatables"
                >
                </el-input>
              </base-input>
            </div>
            <el-table :data="queriedData8">
              <el-table-column
                v-for="column in tableColumns8"
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
                Showing {{ from8 + 1 }} to {{ to8 }} of {{ total8 }} entries
              </p>
            </div>
            <base-pagination
              class="pagination-no-border"
              v-model="pagination8.currentPage"
              :per-page="pagination8.perPage"
              :total="total"
            >
            </base-pagination>
          </div>
        </card>
      </div>
    </div>


    <div class="row mt-5" v-show="isShowing0">
      <div class="col-12">
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">Website Links</h4>
          <div>
            <div
              class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
            >
              <el-select
                class="select-primary mb-3 pagination-select"
                v-model="pagination0.perPage"
                placeholder="Per page"
              >
                <el-option
                  class="select-primary"
                  v-for="item in pagination0.perPageOptions"
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
                  v-model="searchQuery0"
                  aria-controls="datatables"
                >
                </el-input>
              </base-input>
            </div>
            <el-table :data="queriedData0">
              <el-table-column
                v-for="column in tableColumns0"
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
                Showing {{ from0 + 1 }} to {{ to0 }} of {{ total0 }} entries
              </p>
            </div>
            <base-pagination
              class="pagination-no-border"
              v-model="pagination0.currentPage"
              :per-page="pagination0.perPage"
              :total="total"
            >
            </base-pagination>
          </div>
        </card>
      </div>
    </div>



    <div class="row mt-5" v-show="isShowing">
      <div class="col-12">
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">Page Speed</h4>
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
          <h4 slot="header" class="card-title">Description</h4>
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


    <div class="row mt-5" v-show="isShowing2">
      <div class="col-12">
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">Title</h4>
          <div>
            <div
              class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
            >
              <el-select
                class="select-primary mb-3 pagination-select"
                v-model="pagination2.perPage"
                placeholder="Per page"
              >
                <el-option
                  class="select-primary"
                  v-for="item in pagination2.perPageOptions"
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
                  v-model="searchQuery2"
                  aria-controls="datatables"
                >
                </el-input>
              </base-input>
            </div>
            <el-table :data="queriedData2">
              <el-table-column
                v-for="column in tableColumns2"
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
                Showing {{ from2 + 1 }} to {{ to2 }} of {{ total2 }} entries
              </p>
            </div>
            <base-pagination
              class="pagination-no-border"
              v-model="pagination2.currentPage"
              :per-page="pagination2.perPage"
              :total="total2"
            >
            </base-pagination>
          </div>
        </card>

      </div>
    </div>
    <h1 slot="header" class="card-title">About SEO Analyzer tool</h1>
    <p>
      SEO Analyzer is an online tool to analyze meta title, description, canonical tags, H1, page loading speed, page length and meta keywords of each route on the domain you have inserted.
    </p>


  </div></template>
<script>
import socket from '~/plugins/socket.io.js'
import { Table, TableColumn, Select, Option } from 'element-ui';
import { BasePagination } from '@/components';
import Fuse from 'fuse.js';
import swal from 'sweetalert2';

export default {
  name: 'paginated',
  head() {
  // sets document title
  return {
  title: 'SEO Analyzer Tool',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'With our SEO Analyzer, analyze your websites Meta title, description, page loading speed and HTML file size with ease. Try SEO Analyzer now.'}
  ],
  link: [
  {rel: 'canonical', href: 'https://seojs.co/seo-analyzer	'}
  ]
  }
  },
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
     queriedData6() {
       let result6 = this.tableData6;
       if (this.searchedData6.length > 0) {
         result6 = this.searchedData6;
       }
       return result6.slice(this.from6, this.to6);
     },
     queriedData9() {
       let result9 = this.tableData9;
       if (this.searchedData9.length > 0) {
         result9 = this.searchedData9;
       }
       return result9.slice(this.from9, this.to9);
     },
     queriedData5() {
       let result5 = this.tableData5;
       if (this.searchedData5.length > 0) {
         result5 = this.searchedData5;
       }
       return result5.slice(this.from5, this.to5);
     },
     queriedData7() {
       let result7 = this.tableData7;
       if (this.searchedData7.length > 0) {
         result7 = this.searchedData7;
       }
       return result7.slice(this.from7, this.to7);
     },
     queriedData3() {
       let result3 = this.tableData3;
       if (this.searchedData3.length > 0) {
         result3 = this.searchedData3;
       }
       return result3.slice(this.from3, this.to3);
     },
      queriedData4() {
       let result4 = this.tableData4;
       if (this.searchedData4.length > 0) {
         result4 = this.searchedData4;
       }
       return result4.slice(this.from4, this.to4);
     },
     queriedData8() {
       let result8 = this.tableData8;
       if (this.searchedData8.length > 0) {
         result8 = this.searchedData8;
       }
       return result8.slice(this.from8, this.to8);
     },
     queriedData0() {
       let result0 = this.tableData0;
       if (this.searchedData0.length > 0) {
         result0 = this.searchedData0;
       }
       return result0.slice(this.from0, this.to0);
     },
    queriedData() {
      let result = this.tableData;
      if (this.searchedData.length > 0) {
        result = this.searchedData;
      }
      return result.slice(this.from, this.to);
    },
    queriedData1() {
      let result1 = this.tableData1;
      if (this.searchedData1.length > 0) {
        result1 = this.searchedData1;
      }
      return result1.slice(this.from1, this.to1);
    },
    queriedData2() {
      let result2 = this.tableData2;
      if (this.searchedData2.length > 0) {
        result2 = this.searchedData2;
      }
      return result2.slice(this.from2, this.to2);
    },
    to6() {
      let highBound6 = this.from6 + this.pagination6.perPage;
      if (this.total6 < highBound6) {
        highBound6 = this.total6;
      }
      return highBound6;
    },
    to9() {
      let highBound9 = this.from9 + this.pagination9.perPage;
      if (this.total9 < highBound9) {
        highBound9 = this.total9;
      }
      return highBound9;
    },
    to5() {
      let highBound5 = this.from5 + this.pagination5.perPage;
      if (this.total5 < highBound5) {
        highBound5 = this.total5;
      }
      return highBound5;
    },
    to7() {
      let highBound7 = this.from7 + this.pagination7.perPage;
      if (this.total7 < highBound7) {
        highBound7 = this.total7;
      }
      return highBound7;
    },
    to3() {
      let highBound3 = this.from3 + this.pagination3.perPage;
      if (this.total3 < highBound3) {
        highBound3 = this.total3;
      }
      return highBound3;
    },
    to4() {
      let highBound4 = this.from4 + this.pagination4.perPage;
      if (this.total4 < highBound4) {
        highBound4 = this.total4;
      }
      return highBound4;
    },
    to8() {
      let highBound8 = this.from8 + this.pagination8.perPage;
      if (this.total8 < highBound8) {
        highBound8 = this.total8;
      }
      return highBound8;
    },
    to0() {
      let highBound0 = this.from0 + this.pagination0.perPage;
      if (this.total0 < highBound0) {
        highBound0 = this.total0;
      }
      return highBound0;
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
    to2() {
      let highBound2 = this.from2 + this.pagination2.perPage;
      if (this.total2 < highBound2) {
        highBound2 = this.total2;
      }
      return highBound2;
    },
    from6() {
      return this.pagination6.perPage * (this.pagination6.currentPage - 1);
    },
    from9() {
      return this.pagination9.perPage * (this.pagination9.currentPage - 1);
    },
    from5() {
      return this.pagination5.perPage * (this.pagination5.currentPage - 1);
    },
    from7() {
      return this.pagination7.perPage * (this.pagination7.currentPage - 1);
    },
      from3() {
      return this.pagination3.perPage * (this.pagination3.currentPage - 1);
    },
    from4() {
      return this.pagination4.perPage * (this.pagination4.currentPage - 1);
    },
    from8() {
      return this.pagination8.perPage * (this.pagination8.currentPage - 1);
    },
    from0() {
      return this.pagination0.perPage * (this.pagination0.currentPage - 1);
    },
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },
    from1() {
      return this.pagination1.perPage * (this.pagination1.currentPage - 1);
    },
    from2() {
      return this.pagination2.perPage * (this.pagination2.currentPage - 1);
    },
    total6() {
      return this.searchedData6.length > 0
        ? this.searchedData6.length
        : this.tableData6.length;
    },
    total9() {
      return this.searchedData9.length > 0
        ? this.searchedData9.length
        : this.tableData9.length;
    },
    total5() {
      return this.searchedData5.length > 0
        ? this.searchedData5.length
        : this.tableData5.length;
    },
    total7() {
      return this.searchedData7.length > 0
        ? this.searchedData7.length
        : this.tableData7.length;
    },
    total3() {
      return this.searchedData3.length > 0
        ? this.searchedData3.length
        : this.tableData3.length;
    },
    total4() {
      return this.searchedData4.length > 0
        ? this.searchedData4.length
        : this.tableData4.length;
    },
    total8() {
      return this.searchedData8.length > 0
        ? this.searchedData8.length
        : this.tableData8.length;
    },
    total0() {
      return this.searchedData0.length > 0
        ? this.searchedData0.length
        : this.tableData0.length;
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
    },
    total2() {
      return this.searchedData2.length > 0
        ? this.searchedData2.length
        : this.tableData2.length;
    }
  },
  data() {
    return {
      domain: '',
      isShowing: true,
      isShowing0: false,
      isShowing1: false,
      isShowing2: false,
      isShowing3: false,
      isShowing4: false,
      isShowing5: false,
      isShowing6: false,
      isShowing7: false,
      isShowing8: false,
      isShowing9: false,
      pagination9: {
        perPage: 100,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50, 100, 500],
        total: 0
      },
      pagination6: {
        perPage: 100,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50, 100, 500],
        total: 0
      },
      pagination5: {
        perPage: 100,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50, 100, 500],
        total: 0
      },
      pagination7: {
        perPage: 100,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50, 100, 500],
        total: 0
      },
      pagination3: {
        perPage: 100,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50, 100, 500],
        total: 0
      },
      pagination4: {
        perPage: 100,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50, 100, 500],
        total: 0
      },
      pagination8: {
        perPage: 100,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50, 100, 500],
        total: 0
      },
      pagination0: {
        perPage: 100,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50, 100, 500],
        total: 0
      },
      pagination: {
        perPage: 100,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50, 100, 500],
        total: 0
      },
      pagination1: {
        perPage: 100,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50, 100, 500],
        total: 0
      },
      pagination2: {
        perPage: 100,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50, 100, 500],
        total: 0
      },
      searchQuery: '',
      searchQuery1: '',
      searchQuery2: '',
      searchQuery0: '',
      searchQuery8: '',
      searchQuery4: '',
      searchQuery3: '',
      searchQuery7: '',
      searchQuery5: '',
      searchQuery6: '',
      searchQuery8: '',
      searchQuery9: '',
      propsToSearch: ['url', 'downloadtime', 'verdict', 'urlfinal', 'descriptionverdict', 'titleverdict'],

      tableColumns6: [
        {
          prop: 'urll',
          label: 'url',
          minWidth: 400
        },
        {
          prop: 'protocoll',
          label: 'Protocol',
          minWidth: 100
        },
        {
          prop: 'contenttype',
          label: 'Content',
          minWidth: 100
        },
        {
          prop: 'codee',
          label: 'Response',
          minWidth: 100
        }
        ],
        tableColumns9: [
          {
            prop: 'url',
            label: 'url',
            minWidth: 400
          },
          {
            prop: 'requesttime',
            label: 'requesttime',
            minWidth: 100
          },
          {
            prop: 'datasize',
            label: 'datasize',
            minWidth: 100
          },
          {
            prop: 'actualdatasize',
            label: 'actualdatasize',
            minWidth: 100
          },
          ],
      tableColumns5: [
        {
          prop: 'urlfinal',
          label: 'url',
          minWidth: 400
        },
        {
          prop: 'keywords',
          label: 'keywords',
          minWidth: 100
        },
        {
          prop: 'keywordsverdict',
          label: 'keywordsverdict',
          minWidth: 100
        }
        ],
      tableColumns7: [
        {
          prop: 'urlfinal',
          label: 'url',
          minWidth: 400
        },
        {
          prop: 'h1',
          label: 'h1',
          minWidth: 100
        },
        {
          prop: 'h1verict',
          label: 'H1Status',
          minWidth: 100
        }
        ],

      tableColumns3: [
        {
          prop: 'urlfinal',
          label: 'url',
          minWidth: 400
        },
        {
          prop: 'h2',
          label: 'h2',
          minWidth: 100
        },
        ],
      tableColumns4: [
        {
          prop: 'urlfinal',
          label: 'url',
          minWidth: 400
        },
        {
          prop: 'canonical',
          label: 'canonical',
          minWidth: 100
        },
        {
          prop: 'canonicalverdict',
          label: 'canonical result',
          minWidth: 100
        }
        ],
      tableColumns8: [
        {
          prop: 'urlimage',
          label: 'urlimage',
          minWidth: 400
        },
        {
          prop: 'datasize',
          label: 'datasize',
          minWidth: 100
        },
        {
          prop: 'linkfrom',
          label: 'linkfrom',
          minWidth: 400
        },
        {
          prop: 'imageverdict',
          label: 'imageverdict',
          minWidth: 200
        }
          ],
      tableColumns0: [
        {
          prop: 'status',
          label: 'status',
          minWidth: 400
        },
        {
          prop: 'resource',
          label: 'resource',
          minWidth: 400
        }
      ],
      tableColumns: [
        {
          prop: 'url',
          label: 'url',
          minWidth: 200
        },
        {
          prop: 'actualdatasize',
          label: 'actualdatasize',
          minWidth: 100
        },
        {
          prop: 'downloadtime',
          label: 'downloadtime',
          minWidth: 100
        },
        {
          prop: 'requestLatency',
          label: 'requestLatency',
          minWidth: 100
        },
        {
          prop: 'requesttime',
          label: 'Total Time',
          minWidth: 100
        },
        {
          prop: 'verdict',
          label: 'verdict',
          minWidth: 120
        }
      ],
      tableColumns1: [
        {
          prop: 'urlfinal',
          label: 'url',
          minWidth: 200
        },
        {
          prop: 'description',
          label: 'description',
          minWidth: 400
        },
        {
          prop: 'descriptionlength',
          label: 'descriptionlength',
          minWidth: 100
        },
        {
          prop: 'descriptionverdict',
          label: 'verdict',
          minWidth: 100
        }
      ],
      tableColumns2: [
        {
          prop: 'urlfinal',
          label: 'url',
          minWidth: 200
        },
        {
          prop: 'title',
          label: 'title',
          minWidth: 350
        },
        {
          prop: 'titlelength',
          label: 'titlelength',
          minWidth: 100
        },
        {
          prop: 'titlelengthverdict',
          label: 'titlelengthverdict',
          minWidth: 100
        }
      ],
      tableData6: [],
      tableData5: [],
      tableData7: [],
      tableData3: [],
      tableData4: [],
      tableData8: [],
      tableData9: [],
      tableData0: [],
      tableData: [],
      tableData1: [],
      tableData2: [],
      searchedData6: [],
      searchedData5: [],
      searchedData3: [],
      searchedData0: [],
      searchedData4: [],
      searchedData7: [],
      searchedData8: [],
      searchedData9: [],
      searchedData: [],
      searchedData1: [],
      searchedData2: [],
      fuseSearch6: null,
      fuseSearch: null,
      fuseSearch1: null,
      fuseSearch2: null,
      fuseSearch0: null,
      fuseSearch8: null,
      fuseSearch4: null,
      fuseSearch3: null,
    fuseSearch7: null,
    fuseSearch5: null,
    fuseSearch9: null
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
  socket.on('images', (images) => {

    this.tableData8.push(images);
    })
  socket.on('queueItem', (queueItem) => {
    //this.xxx.push(message.url);
    //console.log(href)
    this.tableData1.push(queueItem);
    this.tableData2.push(queueItem);
    this.tableData4.push(queueItem);
    this.tableData3.push(queueItem);
    this.tableData7.push(queueItem);
    this.tableData5.push(queueItem);
  //  this.description.push(queueItem);
    //this.h1.push(queueItem);
//    this.h2.push(queueItem);
  //  this.canonical.push(queueItem);
  //  this.keywords.push(queueItem);
    })

    socket.on('queueItem1', (queueItem1) => {
      //this.xxx.push(message.url);
      //console.log(href)
      this.tableData6.push(queueItem1);
      })

      socket.on('queueItem2', (queueItem2) => {
        //this.xxx.push(message.url);
        //console.log(href)
        this.tableData.push(queueItem2);
      //  this.tableData9.push(queueItem2);
        })
        socket.on('queueItem3', (queueItem3) => {
          //this.xxx.push(message.url);
          //console.log(href)
          this.tableData9.push(queueItem3);
        //  this.tableData9.push(queueItem2);
          })
},
  methods: {
    senddomain(){
      const message = this.domain;
      //this.messages.push(message)
      socket.emit('send-title', message)
    },
  },
  mounted() {
    // Fuse search initialization.
    this.fuseSearch6 = new Fuse(this.tableData6, {
      keys: ['urll', 'codee', 'protocoll', 'contenttype'],
      threshold: 0.3
    });
    this.fuseSearch5 = new Fuse(this.tableData5, {
      keys: ['urlfinal', 'keywords'],
      threshold: 0.3
    });
    this.fuseSearch7 = new Fuse(this.tableData7, {
      keys: ['urlfinal', 'h1', 'h1verict'],
      threshold: 0.3
    });
    this.fuseSearch3 = new Fuse(this.tableData4, {
      keys: ['urlfinal', 'h2'],
      threshold: 0.3
    });
    this.fuseSearch4 = new Fuse(this.tableData4, {
      keys: ['urlfinal', 'canonical', 'canonicalverdict'],
      threshold: 0.3
    });
    this.fuseSearch8 = new Fuse(this.tableData8, {
      keys: ['urlimage', 'datasize', 'linkfrom', 'imageverdict'],
      threshold: 0.3
    });
    this.fuseSearch0 = new Fuse(this.tableData0, {
      keys: ['resources'],
      threshold: 0.3
    });
    this.fuseSearch = new Fuse(this.tableData, {
      keys: ['url', 'downloadtime', 'verdict'],
      threshold: 0.3
    });
    this.fuseSearch9 = new Fuse(this.tableData9, {
      keys: ['url', 'actualdatasize', 'datasize'],
      threshold: 0.3
    });
    this.fuseSearch1 = new Fuse(this.tableData1, {
      keys: ['urlfinal', 'description', 'descriptionverdict'],
      threshold: 0.3
    });
    this.fuseSearch2 = new Fuse(this.tableData2, {
      keys: ['urlfinal', 'title', 'titlelengthverdict', 'titlelength'],
      threshold: 0.3
    });
  },
  watch: {
    /**
     * Searches through the table data by a given query.
     * NOTE: If you have a lot of data, it's recommended to do the search on the Server Side and only display the results here.
     * @param value of the query
     */
     searchQuery6(value) {
       let result6 = this.tableData6;
       if (value !== '') {
         result6 = this.fuseSearch6.search(this.searchQuery6);
       }
       this.searchedData6 = result6;
     },
     searchQuery5(value) {
       let result5 = this.tableData5;
       if (value !== '') {
         result5 = this.fuseSearch5.search(this.searchQuery5);
       }
       this.searchedData5 = result5;
     },
     searchQuery7(value) {
       let result7 = this.tableData7;
       if (value !== '') {
         result7 = this.fuseSearch7.search(this.searchQuery7);
       }
       this.searchedData7 = result7;
     },
     searchQuery3(value) {
       let result3 = this.tableData3;
       if (value !== '') {
         result3 = this.fuseSearch3.search(this.searchQuery3);
       }
       this.searchedData3 = result3;
     },
     searchQuery4(value) {
       let result4 = this.tableData4;
       if (value !== '') {
         result4 = this.fuseSearch4.search(this.searchQuery4);
       }
       this.searchedData4 = result4;
     },
     searchQuery8(value) {
       let result8 = this.tableData8;
       if (value !== '') {
         result8 = this.fuseSearch8.search(this.searchQuery8);
       }
       this.searchedData8 = result8;
     },
     searchQuery0(value) {
       let result0 = this.tableData0;
       if (value !== '') {
         result0 = this.fuseSearch0.search(this.searchQuery0);
       }
       this.searchedData0 = result0;
     },
    searchQuery(value) {
      let result = this.tableData;
      if (value !== '') {
        result = this.fuseSearch.search(this.searchQuery);
      }
      this.searchedData = result;
    },
    searchQuery9(value) {
      let result9 = this.tableData9;
      if (value !== '') {
        result9 = this.fuseSearch9.search(this.searchQuery9);
      }
      this.searchedData9 = result9;
    },
    searchQuery1(value) {
      let result1 = this.tableData1;
      if (value !== '') {
        result1 = this.fuseSearch1.search(this.searchQuery1);
      }
      this.searchedData1 = result1;
    },
    searchQuery2(value) {
      let result2 = this.tableData2;
      if (value !== '') {
        result2 = this.fuseSearch2.search(this.searchQuery2);
      }
      this.searchedData2 = result2;
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
