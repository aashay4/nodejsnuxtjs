<template>
  <card>
    <template slot="header">
      <h4 class="card-title">Countries We Serve</h4>
      <p class="card-category"></p>
    </template>
    <div class="row">
      <div class="col-md-6 ml-auto mr-auto">
        <div class="table-responsive">
          <table class="table">
            <tbody>
              <tr>
                <td>
                  <div class="flag"><img src="img/US.png" alt="US"/></div>
                </td>
                <td>USA</td>
                <td class="text-right">12</td>
                <td class="text-right">60.00%</td>
              </tr>
              <tr>
                <td>
                  <div class="flag"><img src="img/GB.png" alt="GB"/></div>
                </td>
                <td>United Kingdom</td>
                <td class="text-right">3</td>
                <td class="text-right">15.00%</td>
              </tr>
              <tr>
                <td>
                  <div class="flag"><img src="img/DE.png" alt="DE"/></div>
                </td>
                <td>Germany</td>
                <td class="text-right">2</td>
                <td class="text-right">10.00%</td>
              </tr>
              <tr>
                <td>
                  <div class="flag"><img src="img/UAE.png" alt="UAE"/></div>
                </td>
                <td>United Aram Emirates</td>
                <td class="text-right">1</td>
                <td class="text-right">5.00%</td>
              </tr>
              <tr>
                <td>
                  <div class="flag"><img src="img/CA.png" alt="CA"/></div>
                </td>
                <td>Canada</td>
                <td class="text-right">1</td>
                <td class="text-right">5.00%</td>
              </tr>
              <tr>
                <td>
                  <div class="flag"><img src="img/AU.png" alt="AU"/></div>
                </td>
                <td>Australia</td>
                <td class="text-right">1</td>
                <td class="text-right">5.00%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6">
        <client-only>
          <world-map style="height: 300px"></world-map>
        </client-only>
      </div>
    </div>
  </card>
</template>
<script>
export default {
  name: 'country-map-card'
};
</script>
<style></style>
