<template>
  <q-img class="gt-xs" src="~assets/h1_hero.png" style="height: 400px; margin-top:22px">
    <div class="text-h1 q-ml-xl text-white bg-transparent text-weight-bolder" style="margin-top: 250px">
      PRICING
    </div>
  </q-img>
  <q-img class="lt-sm q-mt-lg" height="500px" src="~assets/h1_hero.png">
    <div class="text-h2 q-ml-sm text-white bg-transparent text-weight-bolder" style="margin-top: 250px">
      PRICING
    </div>
  </q-img>
  <!-- ----------------------- -->
  <div class="text-h1 q-my-lg text-center gt-xs" style="
      font-size: 130px;
      font-weight: 1000;
      text-transform: uppercase;
      -webkit-text-stroke: 1px white;
      -webkit-text-fill-color: transparent;
      line-height: 1.2;
    ">
    PRICING
  </div>
  <div class="q-my-lg text-center lt-sm" style="
      font-size: 40px;
      font-weight: 1000;
      text-transform: uppercase;
      -webkit-text-stroke: 1px white;
      -webkit-text-fill-color: transparent;
      line-height: 1.2;
    ">
    PRICING
  </div>
  <!-- ----------------------- -->
  <div class="row q-mt-lg q-col-gutter-xl gt-xs" style="margin-left: 100px; margin-right: 100px">
    <div class="col-md-4 col-sm-6 col-xs-12 q-pa-md text-white" v-for="item in price" :key="item">
      <div class="q-pa-md" style="border: 2px solid rgb(95, 94, 94)">
        <q-icon size="60px" color="white" class="q-pa-lg text-whtie" :name="item.icon"></q-icon>
        <div class="text-h4">{{ item.name }}</div>
        <div class="text-h4 text-primary">
          {{ item.title }}
          <span class="text-white text-caption">(SINGLE CLASS)</span>
        </div>
        <div class="text-subtitle1 q-my-md">
          <q-icon name="fas fa-check" color="primary" /> {{ item.head1 }}
        </div>
        <div class="text-subtitle1 q-my-md">
          <q-icon name="fas fa-check" color="primary" /> {{ item.head2 }}
        </div>
        <div class="text-subtitle1 q-my-md">
          <q-icon name="fas fa-check" color="primary" /> {{ item.head3 }}
        </div>
        <div class="text-subtitle1 q-my-md">
          <q-icon name="fas fa-check" color="primary" /> {{ item.head4 }}
        </div>
        <div class="text-subtitle1 q-my-md">
          <q-icon name="fas fa-check" color="primary" /> {{ item.head5 }}
        </div>
        <div class="text-center">
          <q-btn class="full-weight q-my-xl text-h5" style="padding-left: 135px; padding-right: 135px" outline
            label="Join Now" />
        </div>
      </div>
    </div>
  </div>
  <div class="row q-mt-lg lt-sm">
    <div class="col-md-4 col-sm-6 col-xs-12 q-pa-md text-white" v-for="item in price" :key="item">
      <div class="q-pa-md" style="border: 2px solid rgb(95, 94, 94)">
        <q-icon size="60px" color="white" class="q-pa-lg text-whtie" :name="item.icon"></q-icon>
        <div class="text-h4">{{ item.name }}</div>
        <div class="text-h4 text-primary">
          {{ item.title }}
          <span class="text-white text-caption">(SINGLE CLASS)</span>
        </div>
        <div class="text-subtitle1 q-my-md">
          <q-icon name="fas fa-check" color="primary" /> {{ item.head1 }}
        </div>
        <div class="text-subtitle1 q-my-md">
          <q-icon name="fas fa-check" color="primary" /> {{ item.head2 }}
        </div>
        <div class="text-subtitle1 q-my-md">
          <q-icon name="fas fa-check" color="primary" /> {{ item.head3 }}
        </div>
        <div class="text-subtitle1 q-my-md">
          <q-icon name="fas fa-check" color="primary" /> {{ item.head4 }}
        </div>
        <div class="text-subtitle1 q-my-md">
          <q-icon name="fas fa-check" color="primary" /> {{ item.head5 }}
        </div>
        <div class="text-center">
          <q-btn outline label="Join Now" />
        </div>
      </div>
    </div>
  </div>
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
      price: [
        {
          icon: "fas fa-dumbbell",
          name: "6 MONTH",
          title: "$30/M",
          head1: "Free Riding",
          head2: "Unlimited Equipments",
          head3: "Personal Trainer",
          head4: "Weight Losing Classes",
          head5: "Month To Mouth",
        },
        {
          icon: "fas fa-dumbbell",
          name: "6 MONTH",
          title: "$30/M",
          head1: "Free Riding",
          head2: "Unlimited Equipments",
          head3: "Personal Trainer",
          head4: "Weight Losing Classes",
          head5: "Month To Mouth",
        },
        {
          icon: "fas fa-dumbbell",
          name: "6 MONTH",
          title: "$30/M",
          head1: "Free Riding",
          head2: "Unlimited Equipments",
          head3: "Personal Trainer",
          head4: "Weight Losing Classes",
          head5: "Month To Mouth",
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
    };
  },
};
</script>
