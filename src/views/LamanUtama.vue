<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Monitor- Pipeline Project Monitoring</ion-title>
        <!-- <ion-title size="small">Monitor - Pipeline Project Monitoring</ion-titl> -->
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item button detail="true">
        <ion-label>
          <h3>Dashboard</h3>
        </ion-label>
      </ion-item>
      <ion-item button detail="true">
        <ion-label>
          <h3>Projek</h3>
        </ion-label>
      </ion-item>
      <ion-item button detail="true">
        <ion-label>
          <h3>Meeting</h3>
        </ion-label>
      </ion-item>
      <ion-item button detail="true">
        <ion-label>
          <h3>Rujukan</h3>
        </ion-label>
      </ion-item>
      <ion-item button detail="true">
        <ion-label>
          <h3>Status</h3>
        </ion-label>
      </ion-item>
    </ion-content>
  </ion-menu>

  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Senarai Aktiviti</ion-card-title>
        </ion-card-header>
        <ion-card-content> -- need put datatable here -- </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Senarai Hasil</ion-card-title>
        </ion-card-header>
        <ion-card-content> -- need put datatable here -- </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  useIonRouter,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { caretForwardOutline } from "ionicons/icons";

export default defineComponent({
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
  },
  setup() {
    return {
      caretForwardOutline,
    };
  },
});
</script>