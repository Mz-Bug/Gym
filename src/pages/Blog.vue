<template>
  <q-img class="gt-xs" src="~assets/h1_hero.png" style="height: 400px; margin-top:22px">
    <div class="text-h1 q-ml-xl text-white bg-transparent text-weight-bolder" style="margin-top: 250px">
      BLOG
    </div>
  </q-img>
  <q-img class="lt-sm q-mt-lg" height="500px" src="~assets/h1_hero.png">
    <div class="text-h2 q-ml-sm text-white bg-transparent text-weight-bolder" style="margin-top: 250px">
      BLOG
    </div>
  </q-img>
  <!-- ----------------------- -->
  <div class="row q-mx-xl q-col-gutter-xl q-mt-xl gt-xs">
    <div class="col-md-8 col-sm-12 col-xs-12">
      <div v-for="item in blog" :key="item">
        <q-card class="my-card bg-black text-white">
          <img :src="item.src" />

          <q-card-section>
            <div class="text-h4 text-weight-bold text-white q-mb-lg">
              {{ item.name }}
            </div>
            <div class="text-h6 text-grey-6 text-weight-light">
              {{ item.title }}
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none text-white">
            <q-icon name="fas fa-user" /> Travel, Lifestyle |
            <q-icon name="fas fa-comment" /> 03 Comment
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="col-md-4 col-sm-12 col-xs-12">
      <div class="q-pa-md bg-dark">
        <q-input dark outlined v-model="text" placeholder="Search Keyword">
          <template v-slot:append>
            <q-avatar color="red" text-color="white" icon="fas fa-search" />
          </template>
        </q-input>
        <q-btn class="full-width text-h6 q-mt-lg" outline color="primary" label="SEARCH" />
      </div>
      <div class="q-pa-md q-mt-lg text-white bg-dark">
        <div class="text-h4 text-weight-bold">Category</div>
        <div v-for="item in cata" :key="item">
          <div class="text-subtitle1 text-weight-light q-mt-md">
            {{ item.name }}
          </div>
          <q-separator dark />
        </div>
      </div>
      <div class="q-pa-md q-mt-lg text-white bg-dark">
        <div class="text-h4 text-weight-bold">Recent Post</div>
        <q-separator dark />
        <div v-for="item in add" :key="item">
          <q-list class="q-mt-lg">
            <q-item>
              <q-item-section avatar>
                <q-img width="120px" :src="item.src" />
              </q-item-section>
              <q-item-section>
                <div class="text-h5 text-weight-bolder">
                  {{ item.name }}
                </div>
                <div class="text-subtitle2">{{ item.head }}</div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <!-- ----------------------- -->
      <div class="q-pa-md q-mt-lg text-white bg-dark">
        <div class="text-h4 text-weight-bold q-mb-md">Tag Clouds</div>
        <q-separator dark />
        <div class="row q-mt-md">
          <div class="col-4 q-mt-md" v-for="item in btn" :key="item">
            <q-btn no-caps outline :label="item.name"></q-btn>
          </div>
        </div>
      </div>
      <!-- ----------------------- -->
      <div class="q-pa-md q-mt-md text-white bg-dark">
        <div class="text-h4 text-weight-bold q-mb-md">Instagram Feeds</div>
        <q-separator dark />
        <div class="row q-col-gutter-md q-mt-md">
          <div class="col-4 q-mt-md" v-for="item in feed" :key="item">
            <q-img :src="item.src"></q-img>
          </div>
        </div>
      </div>
      <!-- ----------------------- -->
      <div class="q-pa-md q-mt-md bg-dark">
        <div class="text-h4 text-white text-weight-bold q-mb-md">
          Newsletter
        </div>
        <q-separator dark />
        <q-input class="q-mt-lg" dark outlined v-model="email" placeholder="Enter Email">
          <template v-slot:append>
            <q-avatar color="red" text-color="white" icon="fas fa-search" />
          </template>
        </q-input>
        <q-btn class="full-width text-h6 q-mt-lg" outline color="primary" label="SEARCH" />
      </div>
    </div>
  </div>
  <div class="row q-mx-md q-mt-xl lt-sm">
    <div class="col-md-8 col-sm-12 col-xs-12">
      <div v-for="item in blog" :key="item">
        <q-card class="my-card bg-black text-white">
          <img :src="item.src" />

          <q-card-section>
            <div class="text-h5 text-weight-bold text-white q-mb-sm">
              {{ item.name }}
            </div>
            <div class="text-subtitle2 text-grey-6 text-weight-light">
              {{ item.title }}
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none text-white">
            <q-icon name="fas fa-user" /> Travel, Lifestyle |
            <q-icon name="fas fa-comment" /> 03 Comment
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="col-md-4 col-sm-12 col-xs-12">
      <div class="q-pa-md bg-dark">
        <q-input dark outlined v-model="text" placeholder="Search Keyword">
          <template v-slot:append>
            <q-avatar color="red" text-color="white" icon="fas fa-search" />
          </template>
        </q-input>
        <q-btn class="full-width text-h6 q-mt-lg" outline color="primary" label="SEARCH" />
      </div>
      <div class="q-pa-md q-mt-lg text-white bg-dark">
        <div class="text-h4 text-weight-bold">Category</div>
        <div v-for="item in cata" :key="item">
          <div class="text-subtitle1 text-weight-light q-mt-md">
            {{ item.name }}
          </div>
          <q-separator dark />
        </div>
      </div>
      <div class="q-pa-md q-mt-lg text-white bg-dark">
        <div class="text-h4 text-weight-bold">Recent Post</div>
        <q-separator dark />
        <div v-for="item in add" :key="item">
          <q-list class="q-mt-lg">
            <q-item>
              <q-item-section avatar>
                <q-img width="100px" :src="item.src" />
              </q-item-section>
              <q-item-section>
                <div class="text-body1 text-weight-bolder">
                  {{ item.name }}
                </div>
                <div class="text-subtitle2">{{ item.head }}</div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <!-- ----------------------- -->
      <div class="q-pa-md q-mt-lg text-white bg-dark">
        <div class="text-h4 text-weight-bold q-mb-md">Tag Clouds</div>
        <q-separator dark />
        <div class="row q-mt-md">
          <div class="col-4 q-mt-md" v-for="item in btn" :key="item">
            <q-btn no-caps outline :label="item.name"></q-btn>
          </div>
        </div>
      </div>
      <!-- ----------------------- -->
      <div class="q-pa-md q-mt-md text-white bg-dark">
        <div class="text-h4 text-weight-bold q-mb-md">Instagram Feeds</div>
        <q-separator dark />
        <div class="row q-col-gutter-md q-mt-md">
          <div class="col-4 q-mt-md" v-for="item in feed" :key="item">
            <q-img :src="item.src"></q-img>
          </div>
        </div>
      </div>
      <!-- ----------------------- -->
      <div class="q-pa-md q-mt-md bg-dark">
        <div class="text-h4 text-white text-weight-bold q-mb-md">
          Newsletter
        </div>
        <q-separator dark />
        <q-input class="q-mt-lg" dark outlined v-model="email" placeholder="Enter Email">
          <template v-slot:append>
            <q-avatar color="red" text-color="white" icon="fas fa-search" />
          </template>
        </q-input>
        <q-btn class="full-width text-h6 q-mt-lg" outline color="primary" label="SEARCH" />
      </div>
    </div>
  </div>
  <!-- ----------------------- -->
  <div class="row q-mt-xl q-col-gutter-lg gt-xs" style="margin-left: 100px; margin-right: 100px">
    <div class="col-4 text-white" v-for="item in adds" :key="item">
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon class="bg-primary q-pa-lg text-white" style="border-radius: 50px" size="30px" :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <div class="text-h5 text-weight-bolder">{{ item.name }}</div>
            <div class="text-subtitle2">{{ item.head }}</div>
            <div class="text-subtitle2">{{ item.head1 }}</div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
  <div class="row q-mt-xl q-col-gutter-lg lt-sm">
    <div class="col-xs-12 text-white" v-for="item in adds" :key="item">
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon class="bg-primary q-pa-lg text-white" style="border-radius: 50px" size="30px" :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <div class="text-h5 text-weight-bolder">{{ item.name }}</div>
            <div class="text-subtitle2">{{ item.head }}</div>
            <div class="text-subtitle2">{{ item.head1 }}</div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
  <!-- ------------------------ -->
  <div class="text-center gt-xs" style="margin-top: 100px">
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
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      text: ref(""),
      email: ref(""),
      adds: [
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
      feed: [
        {
          src: require("assets/post_5.png"),
        },
        {
          src: require("assets/post_6.png"),
        },
        {
          src: require("assets/post_7.png"),
        },
        {
          src: require("assets/post_8.png"),
        },
        {
          src: require("assets/post_9.png"),
        },
        {
          src: require("assets/post_10.png"),
        },
      ],
      btn: [
        {
          name: "project",
        },
        {
          name: "Love",
        },
        {
          name: "technology",
        },
        {
          name: "travel",
        },
        {
          name: "restaurant",
        },
        {
          name: "life style",
        },
        {
          name: "Design",
        },
        {
          name: "illustration",
        },
      ],
      add: [
        {
          src: require("assets/post_1.png"),
          name: "From life was you fish...",
          head: "January 12, 2019",
        },
        {
          src: require("assets/post_2.png"),
          name: "The Amazing Hubble",
          head: "02 Hours ago",
        },
        {
          src: require("assets/post_3.png"),
          name: "Astronomy Or Astrology",
          head: "03 Hours ago",
        },
        {
          src: require("assets/post_4.png"),
          name: "Asteroids telescope",
          head: "01 Hours ago",
        },
      ],
      cata: [
        {
          name: "Resaurant food(37)",
        },
        {
          name: "Travel news(10)",
        },
        {
          name: "Modern technology(03)",
        },
        {
          name: "Product(11)",
        },
        {
          name: "Inspiration21",
        },
        {
          name: "Health Care (21)09",
        },
      ],
      blog: [
        {
          src: require("assets/single_blog_1.png"),
          name: "Google inks pact for new 35-storey office",
          title:
            "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        },
        {
          src: require("assets/single_blog_2.png"),
          name: "Google inks pact for new 35-storey office",
          title:
            "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        },
        {
          src: require("assets/single_blog_3.png"),
          name: "Google inks pact for new 35-storey office",
          title:
            "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        },
        {
          src: require("assets/single_blog_4.png"),
          name: "Google inks pact for new 35-storey office",
          title:
            "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        },
        {
          src: require("assets/single_blog_5.png"),
          name: "Google inks pact for new 35-storey office",
          title:
            "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        },
      ],
    };
  },
};
</script>
