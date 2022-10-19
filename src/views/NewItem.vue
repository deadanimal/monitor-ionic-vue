<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button auto-hide="false" menu="testmenu"></ion-menu-button>
        </ion-buttons>
        <ion-title>New Item</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-menu menu-id="testmenu" content-id="mycontent">
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-label>Pokémon Yellow</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-content></ion-content>
  </ion-page>
</template>

<script>
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewItem",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
});
</script>