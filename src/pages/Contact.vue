<template>
  <q-img class="gt-xs" src="~assets/h1_hero.png" style="height: 400px; margin-top:22px">
    <div class="text-h1 q-ml-xl text-white bg-transparent text-weight-bolder" style="margin-top: 250px">
      CONTACT
    </div>
  </q-img>
  <q-img class="lt-sm q-mt-lg" height="500px" src="~assets/h1_hero.png">
    <div class="text-h2 q-ml-sm text-white bg-transparent text-weight-bolder" style="margin-top: 250px">
      CONTACT
    </div>
  </q-img>
  <!-- ----------------------- -->
  <div class="row q-my-md q-col-guter-md q-mx-md">
    <div class="col-md-8 col-sm-12 col-xs-12">
      <q-input dense outlined dark v-model="textarea" type="textarea" label="Enter Message" />
      <div class="row q-col-gutter-md q-mt-xl">
        <div class="col-6">
          <q-input dense dark outlined v-model="text" type="text" label="Enter Name" />
        </div>
        <div class="col-6">
          <q-input dense dark outlined v-model="email" type="email" label="Enter Email" />
        </div>
      </div>
      <q-input class="q-mt-xl" outlined dark dense v-model="textarea" type="text1" label="Enter Subject" />
      <q-btn outline class="q-px-xl text-h6 q-my-lg gt-xs" color="primary" label="Send" />
      <q-btn outline class="q-px-lg q-my-lg lt-sm" color="primary" label="Send" />
    </div>
    <div class="col-md-4 col-sm-12 col-xs-12 text-white">
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon style="border-radius: 50px" class="text-white q-pa-md bg-primary" size="30px" name="fas fa-home" />
          </q-item-section>
          <q-item-section>
            <div class="text-subtitle1 text-weight-bolder">
              Buttonwood, California.
            </div>
            <div class="text-subtitle2 text-grey-6">Rosemead, CA 91770</div>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon style="border-radius: 50px" class="text-white q-pa-md bg-primary" size="30px" name="fas fa-phone" />
          </q-item-section>
          <q-item-section>
            <div class="text-subtitle1 text-weight-bolder">+1 253 565 2365</div>
            <div class="text-subtitle2 text-grey-6">Mon to Fri 9am to 6pm</div>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon style="border-radius: 50px" class="text-white q-pa-md bg-primary" size="30px"
              name="fas fa-envelope" />
          </q-item-section>
          <q-item-section>
            <div class="text-subtitle1 text-weight-bolder">
              support@colorlib.com
            </div>
            <div class="text-subtitle2 text-grey-6">
              Send us your query anytime!
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
  <!-- ----------------------- -->
  <div class="text-center gt-xs">
    <q-img width="120px" src="~assets/logo2_footer.png"></q-img>
    <div class="row q-mt-lg text-white text-center" style="margin-left: 450px; margin-right: 450px">
      <div class="col-2" v-for="item in link" :key="item">
        <div class="text-subtitle1">{{ item.name }}</div>
      </div>
    </div>
    <div class="row q-my-lg" style="margin-left: 450px; margin-right: 450px; border-radius: 50px">
      <div class="col-3"></div>
      <div class="col-1 q-pa-sm bg-primary text-white" style="border-radius: 50px">
        <q-icon size="30px" name="fab fa-google" />
      </div>
      <div class="col-1"></div>
      <div class="col-1 q-pa-sm bg-primary text-white" style="border-radius: 50px">
        <q-icon size="30px" name="fab fa-twitter" />
      </div>
      <div class="col-1"></div>
      <div class="col-1 q-pa-sm bg-primary text-white" style="border-radius: 50px">
        <q-icon size="30px" name="fab fa-facebook" />
      </div>
      <div class="col-2"></div>
    </div>
  </div>
  <div class="text-center lt-sm">
    <q-img width="120px" src="~assets/logo2_footer.png"></q-img>
    <div class="row q-mt-lg text-white text-center">
      <div class="col-xs-4 q-mb-md" v-for="item in link" :key="item">
        <div class="text-subtitle1">{{ item.name }}</div>
      </div>
    </div>
    <div class="row q-my-lg">
      <div class="col-3"></div>
      <div class="col q-pa-md bg-primary text-white" style="border-radius: 50%">
        <q-icon size="20px" name="fab fa-google" />
      </div>
      <div class="col-1"></div>
      <div class="col q-pa-md bg-primary text-white" style="border-radius: 50%">
        <q-icon size="20px" name="fab fa-twitter" />
      </div>
      <div class="col-1"></div>
      <div class="col q-pa-md bg-primary text-white" style="border-radius: 50%">
        <q-icon size="20px" name="fab fa-facebook" />
      </div>
      <div class="col-2"></div>
    </div>
  </div>
  <q-separator dark />
  <!-- ------------------------ -->
  <div class="text-center q-py-md">
    <div class="text-body1 text-white">
      Copyright ©2022 All rights reserved | This template is made with
      <q-icon color="primary" name="fas fa-heart" /> by Colorlib
    </div>
  </div>
  <!-- ----------------------- -->
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      textarea: ref(""),
      text: ref(""),
      email: ref(""),
      add: [
        {
          icon: "fas fa-home",
          name: "Location",
          head: "You’ll look at graphs and charts in Task One, how to approach",
        },
        {
          icon: "fas fa-phone",
          name: "Phone",
          head: "(90) 277 278 2566",
          head1: "(78) 267 256 2578",
        },
        {
          icon: "fas fa-envelope",
          name: "Email",
          head: "jacson767@gmail.com",
          head1: "contact56@zacsion.com",
        },
      ],
      link: [
        {
          name: "Home",
        },
        {
          name: "About",
        },
        {
          name: "Courses",
        },
        {
          name: "Pricing",
        },
        {
          name: "Gallery",
        },
        {
          name: "Contact",
        },
      ],
    };
  },
};
</script>
