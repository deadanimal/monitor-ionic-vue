<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Monitor</ion-title>
        <ion-title size="small">Pipeline Project Monitoring</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Login</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-item>
              <ion-label position="stacked">Email</ion-label>
              <ion-input placeholder="@pipeline.com.my"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Password</ion-label>
              <ion-input type="password" placeholder="Enter password given"></ion-input>
            </ion-item>
            <ion-button expand="block" @click="() => router.push('/lamanutama')">Login</ion-button>
          </ion-card-content>
        </ion-card>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { add } from "ionicons/icons";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  setup() {
    return {
      router: useRouter(),
      add,
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 30px;
  margin-right: 30px;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
