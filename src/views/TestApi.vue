<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <img :src="photo" />
      <ion-button @click="takePhoto()">Take Photo</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonHeader, IonPage, IonTitle } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import { Plugins, CameraResultType } from '@capacitor/core';
  const { Camera } = Plugins;

  export default defineComponent({
    name: 'TestApi',
    components: {
      IonButton,
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
    },
    setup() {
      const imageSrc = ref('');
      const takePhoto = async () => {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri,
        });

        imageSrc.value = image.webPath;
      };

      return {
        photo: imageSrc,
        takePhoto,
      };
    },
  });
</script>