<template>
  <div class="hello" v-if="isReady">
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 600px; width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <!-- Use default icon -->
      <!-- <l-marker :lat-lng="[47.41322, -1.219482]" /> -->
      
      <!-- Use icon given in icon property -->
      <!-- <l-marker
        :lat-lng="[47.41322, -1.209482]"
        :icon="icon"
      >
        <l-popup content="TEST" />
        <l-tooltip content="TEST" />
      </l-marker> -->

      <!-- Create image icon (icon) from l-icon tag -->
      <l-marker :lat-lng="marker1GeoLoc">
        <l-icon
          :icon-size="dynamicSize"
          :icon-anchor="dynamicAnchor"
          icon-url="/images/rocket.png"
        />
        <l-popup content="TEST" />
        <l-tooltip content="TEST" />
      </l-marker>

      <l-polyline
        v-if="polyline.latlngs.length > 0"
        :lat-lngs="polyline.latlngs"
        :color="polyline.color"
      >
        <l-popup content="polyline" />
      </l-polyline>

      <!-- Create HTML icon (divIcon) by providing content inside the l-icon tag -->
      <!-- <l-marker :lat-lng="[47.41322, -1.189482]">
        <l-icon
          :icon-anchor="staticAnchor"
          class-name="someExtraClass"
        >
          <div class="headline">
            {{ customText }}
          </div>
          <img src="/images/layers.png">
        </l-icon>
        <l-popup content="TEST" />
        <l-tooltip content="TEST" />
      </l-marker> -->


      <!-- <l-control-layers /> -->
      <!--
      <l-wms-tile-layer
        v-for="layer in layers"
        :key="layer.name"
        :base-url="baseUrl"
        :layers="layer.layers"
        :visible="layer.visible"
        :name="layer.name"
        layer-type="base"
      />-->
      
    </l-map>
  </div>
</template>

<script>
// pk.eyJ1IjoiYWRpdGlhcWJpdCIsImEiOiJjbDI2cm5oYzIwM2V0M2twOWFzNW1ib2s3In0.0vC3dF0vWgxeOepkEptvvw
// sk.eyJ1IjoiYWRpdGlhcWJpdCIsImEiOiJjbDI2czVvejcybHo5M2NtdDhqczhucjk5In0.JZnDfH1biA-55aAPfmMahg
import { 
  LMap, LTileLayer, LMarker, LIcon, LPopup, LTooltip, LPolyline,
  // LControlLayers,
  // LWMSTileLayer
} from "vue2-leaflet";
import { latLng, icon } from "leaflet";
import 'leaflet/dist/leaflet.css';

export default {
  name: 'VueLeaflet',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup,
    LTooltip,
    LPolyline
    // LControlLayers,
    // "l-wms-tile-layer": LWMSTileLayer,
  },
  data() {
    return {
      isReady: false,
      // marker1GeoLoc: [-6.7462291,112.2147263],
      marker1GeoLoc: [1,1],
      zoom: 11,
      center: latLng(-6.7462291,112.2147263),
      polyline: {
        type: "polyline",
        latlngs: [
          // [-6.7462291,112.2147263],
          // [-6.7562291,112.2247263],
          // [-6.7662291,112.2347263],
          // [-6.8662291,112.3347263]
        ],
        color: "yellow"
      },
      
      // MAPBOX
      // url: 'https://api.mapbox.com/styles/v1/aditiaqbit/cl271t87l000214lku34639j5/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRpdGlhcWJpdCIsImEiOiJjbDI2cm5oYzIwM2V0M2twOWFzNW1ib2s3In0.0vC3dF0vWgxeOepkEptvvw',

      // TOPO MAP
      // url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
      //     'World_Topo_Map/MapServer/tile/{z}/{y}/{x}',

      // ESRI
      // url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery//MapServer/tile/{z}/{y}/{x}',
      // url: 'https://clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',

      // GOOGLE > source: https://socalgis.org/2019/11/06/add-google-maps-to-qgis-3/
      // url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', // reguler
      // url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', // sattelite
      url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', // sattelite hybrid
      // url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}', // road
      // url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', // terrain

      // url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      // url: 'http://maps.openweathermap.org/maps/2.0/weather/WS10/{z}/{x}/{y}?appid=0e0433cd24eb24087979575475aa2eaf',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      icon: icon({
        iconUrl: "static/images/baseball-marker.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      // staticAnchor: [16, 37],
      // customText: "Foobar",
      iconSize: 40,

      // WMS TILE LAYER
      // zoom: 2,
      // center: [49, 12],
      // baseUrl: 'http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi',
      // baseUrl: 'https://gis.bmkg.go.id/arcgis/rest/services/',
      // baseUrl: 'https://sigita.dephub.go.id/server/rest/services/GRUP_DATA_LAUT/FeatureServer/0/query',
      // baseUrl: 'http://ows.mundialis.de/services/service?',
      // layers: [
      //   // {
      //   //   name: 'Weather Data',
      //   //   visible: true,
      //   //   format: 'image/png',
      //   //   layers: 'nexrad-n0r-900913',
      //   //   transparent: true,
      //   //   attribution: "Weather data © 2012 IEM Nexrad"
      //   // },
      //   {
      //     name: 'TOPO-WMS',
      //     visible: true,
      //     format: 'image/png',
      //     layers: 'TOPO-WMS',
      //     transparent: true,
      //     attribution: 'test',
      //   }
      // ]
    };
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  },
  mounted() {
    const initialLongLat = [-6.7462291,112.2147263];
    this.marker1GeoLoc = [...initialLongLat];
    let newPolyLatLngs = [...this.polyline.latlngs];
    for (let i=0; i<100; i++) {
      console.info('i', i);
      let lat = newPolyLatLngs.length > 0 ? newPolyLatLngs[newPolyLatLngs.length - 1][0] : initialLongLat[0];
      let lng = newPolyLatLngs.length > 0 ? newPolyLatLngs[newPolyLatLngs.length - 1][1] : initialLongLat[1];
      console.info('lat', lat);
      console.info('lng', lng);

      if (i % 5 === 4) {
        lat += 0.12
        lng += 0.02
      } else {
        lat += 0.01
        lng += 0.01
      }

      newPolyLatLngs.push([lat, lng])
      console.info('newPolyLatLngs', newPolyLatLngs)
    }
    this.polyline = {
      ...this.polyline,
      latlngs: newPolyLatLngs
    }
    console.info('this.polyline', this.polyline)
    // setInterval(() => {
    //   let lat = this.marker1GeoLoc[0];
    //   let lng = this.marker1GeoLoc[1];
    //   this.marker1GeoLoc = [lat + 0.01, lng + 0.01]
    // }, 500)
    
    this.isReady = true;
  }
}
</script>

<style scoped>
.someExtraClass {
  background-color: aqua;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 0 20px 20px 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
}
</style>
