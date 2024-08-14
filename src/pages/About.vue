<template>
  <q-img class="gt-xs" src="~assets/h1_hero.png" style="height: 400px; margin-top:22px">
    <div class="text-h1 q-ml-xl text-white bg-transparent text-weight-bolder" style="margin-top: 250px">
      ABOUT
    </div>
  </q-img>
  <q-img class="lt-sm q-mt-lg" height="500px" src="~assets/h1_hero.png">
    <div class="text-h2 q-ml-sm text-white bg-transparent text-weight-bolder" style="margin-top: 250px">
      ABOUT
    </div>
  </q-img>
  <!-- ----------------------- -->
  <div class="row q-col-gutter-lg q-px-xl q-mt-md gt-xs">
    <div class="col-md-4 col-sm-6 col-xs-12 text-center text-white" v-for="item in card" :key="item">
      <q-img :src="item.src"></q-img>
      <div class="text-h4 q-my-lg text-weight-bolder">{{ item.title }}</div>
      <div class="text-subtitle1">{{ item.name }}</div>
    </div>
  </div>
  <div class="row q-col-gutter-lg q-px-sm q-mt-md lt-sm">
    <div class="col-md-4 col-sm-6 col-xs-12 text-center text-white" v-for="item in card" :key="item">
      <q-img :src="item.src"></q-img>
      <div class="text-h6 q-mt-md text-weight-bolder">{{ item.title }}</div>
      <div class="text-subtitle1">{{ item.name }}</div>
    </div>
  </div>
  <!-- ----------------------- -->
  <div class="row q-pa-lg q-col-gutter-xl gt-xs">
    <div class="col-6">
      <q-img src="~assets/about.png" />
    </div>
    <div class="col-6 text-white">
      <div class="text-h1 text-weight-bolder">ABOUT ME</div>
      <div class="text-h6 q-mt-xl text-weight-light">
        You’ll look at graphs and charts in Task One, how to approach the task
        and the language needed for a successful answer. You’ll examine Task Two
        questions and learn how to plan, write and check academic essays.<br />
        Task One, how to approach the task and the language needed for a
        successful answer. You’ll examine Task Two questions and learn how to
        plan, write and check academic essays.
      </div>
      <q-btn outline class="q-py-lg q-px-xl q-my-xl text-h6" label="my courses" />
    </div>
  </div>
  <div class="row q-px-md lt-sm q-mt-md">
    <div class="col-xs-12">
      <q-img src="~assets/about.png" />
    </div>
    <div class="col-xs-12 q-mt-md text-white">
      <div class="text-h3 text-weight-bolder">ABOUT ME</div>
      <div class="text-subtitle2 q-mt-md text-weight-light">
        You’ll look at graphs and charts in Task One, how to approach the task
        and the language needed for a successful answer. You’ll examine Task Two
        questions and learn how to plan, write and check academic essays.<br />
        Task One, how to approach the task and the language needed for a
        successful answer. You’ll examine Task Two questions and learn how to
        plan, write and check academic essays.
      </div>
      <div class="text-center">
        <q-btn outline class="q-mt-md" label="my courses" />
      </div>
    </div>
  </div>
  <!-- ----------------------- -->
  <div class="text-h1 q-my-lg text-center gt-xs" style="
      font-size: 130px;
      font-weight: 1000;
      text-transform: uppercase;
      -webkit-text-stroke: 1px white;
      -webkit-text-fill-color: transparent;
      line-height: 1.2;
    ">
    FROM BLOG
  </div>
  <div class="text-h1 q-my-lg text-center lt-sm" style="
      font-size: 58px;
      font-weight: 1000;
      text-transform: uppercase;
      -webkit-text-stroke: 1px white;
      -webkit-text-fill-color: transparent;
      line-height: 1.2;
    ">
    FROM BLOG
  </div>
  <!-- ------------------------ -->
  <div class="row q-mb-xl q-col-gutter-lg gt-xs" style="margin-left: 100px; margin-right: 100px">
    <div class="col-6 text-white" v-for="item in blog" :key="item">
      <q-img :src="item.src"></q-img>
      <div class="text-subtitle2 q-my-md">{{ item.name }}</div>
      <div class="text-h5">{{ item.title }}</div>
    </div>
  </div>
  <div class="row q-mb-xl q-col-gutter-lg lt-sm">
    <div class="col-xs-12 text-white" v-for="item in blog" :key="item">
      <q-img :src="item.src"></q-img>
      <div class="q-px-md">
        <div class="text-subtitle2">{{ item.name }}</div>
        <div class="text-h5">{{ item.title }}</div>
      </div>
    </div>
  </div>
  <!-- ----------------------- -->
  <q-parallax src="~assets/vid.jpg" class="gt-xs">
    <div class="text-h1 text-white">NEVER GIVE UP</div>
  </q-parallax>
  <q-parallax :height="300" src="~assets/vid.jpg" class="lt-sm">
    <div class="text-h4 text-white text-weight-bold">NEVER GIVE UP</div>
  </q-parallax>
  <!-- ----------------------- -->
  <div class="row q-mt-xl q-col-gutter-lg gt-xs" style="margin-left: 100px; margin-right: 100px">
    <div class="col-4 text-white" v-for="item in add" :key="item">
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
    <div class="col-xs-12 text-white" v-for="item in add" :key="item">
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
  <!-- ----------------------- -->
</template>

<script>
export default {
  setup() {
    return {
      card: [
        {
          src: require("assets/team1.png"),
          title: "BODY BUILDING",
          name: "You’ll look at graphs and charts in Task One, how to approach the task",
        },
        {
          src: require("assets/team2.png"),
          title: "MUSCLE GAIN",
          name: "You’ll look at graphs and charts in Task One, how to approach the task",
        },
        {
          src: require("assets/team3.png"),
          title: "WEIGHT LOSS",
          name: "You’ll look at graphs and charts in Task One, how to approach the task",
        },
      ],
      blog: [
        {
          src: require("assets/blog1.png"),
          name: "Gym & Fitness",
          title: "YOUR ANTIBIOTIC ONE DAY TO 10 DAY OPTIONS",
        },
        {
          src: require("assets/blog2.png"),
          name: "Gym & Fitness",
          title: "YOUR ANTIBIOTIC ONE DAY TO 10 DAY OPTIONS",
        },
      ],
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
