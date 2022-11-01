<template>
  <div>
    <div class="main-element">LOREM IPSUM</div>
    <image-panel-with-text>
      <template #elem1
        >Przedstawiamy bardzo komfortowy kamper dla 6 osób. Dzięki alkowie,
        która dodaje wysokości, w środku komfortowo czują się również osoby
        wysokie.
        <br />
        <br />
        Duży aneks kuchenny wyposażony we wszystkie sprzęty oraz naczynia
        pozwala na przygotowanie prawdziwej uczty w samym środku lasu, nad
        brzegiem jeziora lub z widokiem na góry. Takie widoki mają najepsze
        widoki :)
        <br />
        <br />
        Podróżując naszym kamperem jesteście w 100% niezależni. Posiadamy solary
        na dachu jako dodatkowe źródło energii. Bardzo dużym usprawnieniem jest
        Gasbank z dwoma butlami, dzięki któremu tankujecie (lub do tankujecie -
        nie trzeba czekać aż butle się skończą) na każdej stacji LPG.</template
      >
      <template #elem2><div class="placeholder"></div> </template>
    </image-panel-with-text>
    <image-panel-with-text>
      <template #elem1> <div class="placeholder"></div> </template>
      <template #elem2
        >Rozkład łóżek:
        <ul>
          <li>łóżko alkowa: 160x210</li>
          <li>łóżko tylne: 150x215</li>
          <li>łóżko środkowe: 125x185</li>
        </ul>
        Wymiary:
        <ul>
          <li>długość: 7,50m</li>
          <li>szerokość: 2,40m</li>
          <li>wysokość: 3,60m</li>
        </ul>
        Dodatkowe parametry:
        <ul>
          <li>Silnik: Diesel 2,0 130KM</li>
          <li>Spalanie: 11,0 l/100km</li>
        </ul>
      </template>
    </image-panel-with-text>
  </div>
</template>

<script>
import ImagePanelWithText from "./ImagePanelWithText.vue";
export default {
  components: { ImagePanelWithText },
  data() {
    return {
      image: require("@/assets/main-image.webp"),
    };
  },
};
</script>

<style scoped>
.main-element {
  background: green;
  width: 90vw;
  aspect-ratio: 16 / 9;
}
.placeholder {
  background: red;
  width: 100%;
  height: 500px;
}
@media only screen and (max-width: 800px) {
  .main-element {
    aspect-ratio: 9 / 16;
  }
  .placeholder {
    background: red;
    width: 100%;
    height: 300px;
  }
}
</style>
