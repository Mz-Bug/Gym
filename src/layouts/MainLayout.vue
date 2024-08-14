<template>
  <q-layout view="lHh Lpr lFf" class="bg-black">
    <q-header elevated class="q-ma-lg bg-transparent">
      <q-toolbar class="gt-xs">
        <q-toolbar-title class="text-weight-bolder">
          <q-img width="120px" src="~assets/logo.png"></q-img>
        </q-toolbar-title>
        <div class="text-h5 text-weight-light q-mr-xl" style="text-align: center">
          <q-tabs no-caps align="right" class="text-white text-caption">
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
        </div>
      </q-toolbar>

      <div class="lt-sm">
        <q-toolbar>
          <img src="~assets/logo.png">
        </q-toolbar>

        <q-tabs no-caps class="text-white text-caption">
          <q-route-tab to="/" exact replace label="Home" />
          <q-route-tab to="/About" exact replace label="About Us" />
          <q-route-tab to="/Courses" exact replace label="Courses" />
          <q-route-tab to="/Pricing" exact replace label="Pricing" />
          <q-route-tab to="/Gallery" exact replace label="Gallery" />
          <q-route-tab to="/Blog" exact replace label="Blog" />
          <q-route-tab to="/Contact" exact replace label="Contact" />
        </q-tabs>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
