<template>
  <q-toolbar>
    <q-toolbar-title class="text-weight-bolder">
      <q-img width="120px" src="~assets/logo.png"></q-img>
    </q-toolbar-title>
    <div class="text-h5 text-weight-light" style="text-align: center">
      <q-tabs no-caps narrow-indicator active-color="black" class="text-white" style="font-size:large">
        <q-route-tab to="/" exact replace label="Home" />
        <q-route-tab to="/About" exact replace label="About Us" />
        <q-route-tab to="/Courses" exact replace label="Courses" />
        <q-route-tab to="/Pricing" exact replace label="Pricing" />
        <q-route-tab to="/Gallery" exact replace label="Gallery" />
        <q-route-tab to="/Blog" exact replace label="Blog" />
        <q-route-tab to="/Contact" exact replace label="Contact" />
      </q-tabs>
    </div>
    <div>
      <q-btn
        class="q-pa-md bg-red text-white"
        label="Contact Me"
        style="border: 1px solid white"
      ></q-btn>
    </div>
  </q-toolbar>
</template>


<script>
export default {
  name: "navbar",
};
</script>

