<template>
  <div class="hello">
    <MglMap
      :accessToken="mapboxAccessToken"
      :mapStyle.sync="mapStyle"
      :center="coordinates"
    >
      <MglMarker :coordinates="coordinates">
        <MglPopup>
          <div>Hello, I'm popup!</div>
        </MglPopup>
      </MglMarker>
    </MglMap>
  </div>
</template>

<script>
// pk.eyJ1IjoiYWRpdGlhcWJpdCIsImEiOiJjbDI2cm5oYzIwM2V0M2twOWFzNW1ib2s3In0.0vC3dF0vWgxeOepkEptvvw
// sk.eyJ1IjoiYWRpdGlhcWJpdCIsImEiOiJjbDI2czVvejcybHo5M2NtdDhqczhucjk5In0.JZnDfH1biA-55aAPfmMahg
import { MglMap, MglPopup, MglMarker } from "vue-mapbox";

export default {
  name: 'MapBox',
  components: {
    MglMap,
    MglMarker,
    MglPopup
  },
  data() {
    return {
      mapboxAccessToken: 'pk.eyJ1IjoiYWRpdGlhcWJpdCIsImEiOiJjbDI2cm5oYzIwM2V0M2twOWFzNW1ib2s3In0.0vC3dF0vWgxeOepkEptvvw',
      mapStyle: "mapbox://styles/aditiaqbit/cl26se0a4000115ogixoyyyh3",
      coordinates: [-111.549668, 39.014]
    };
  }
}
</script>

<style scoped>
.hello {
  height: 100%;
  width: 100%;
}
a {
  color: #42b983;
}
</style>
