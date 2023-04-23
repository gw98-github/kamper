<template>
  <div>
    <div class="main-element">
      <div class="main-element__text">Coś tutaj bym napisał</div>
    </div>
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
        hotele :)
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
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("../assets/images/IMG-6754.webp");
  /* aspect-ratio: 16 / 11; */
  background-size: cover;
  background-position-y: bottom;
  background-position-x: center;
  background-attachment: fixed;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 700px) and (max-width: 1024px) {
    align-items: flex-start;
  }
  @media only screen and (max-width: 700px) {
    background-position-y: -100px;
    background-repeat: no-repeat;
    align-items: flex-start;
  }
}
.main-element__text {
  background-color: white;
  opacity: 1;
  padding-bottom: 5rem;
  border: 2px solid black;
  border-radius: 0.3em;
  color: black;
  width: 80%;
  height: 40%;
  margin-bottom: 20%;
  @media only screen and (max-width: 800px) {
    width: 80%;
    height: 40%;
    text-align: center;
    margin-top: 20%;
  }
}
.placeholder {
  background: red;
  width: 100%;
  height: 500px;
}
@media only screen and (max-width: 800px) {
  /* .main-element {
    aspect-ratio: 9 / 12;
  } */
  .placeholder {
    background: red;
    width: 100%;
    height: 300px;
  }
}
@media only screen and (min-width: 800px) and (max-width: 1200px) {
  /* .main-element {
    aspect-ratio: 1;
  } */
  .main-element__text {
    margin-top: 10%;
  }
}
</style>
