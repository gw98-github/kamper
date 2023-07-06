<template>
  <div>
    <div class="main-element">
      <div class="main-element__text">
        <h1>
          Jesteś gotowy na przygodę?<br />
          No to w drogę!
        </h1>
        <div class="go-down" @click="scrollDown()">
          <svg class="arrows">
            <path class="a1" d="M0 0 L30 32 L60 0"></path>
            <path class="a2" d="M0 20 L30 52 L60 20"></path>
            <path class="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </div>
      </div>
    </div>
    <image-panel-with-text>
      <template #elem1>
        Przedstawiamy bardzo komfortowy kamper dla 6 osób. Dzięki alkowie, która
        dodaje wysokości, w środku komfortowo czują się również osoby wysokie.
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
        nie trzeba czekać aż butle się skończą) na każdej stacji LPG.
      </template>
      <template #elem2
        ><div class="image-box">
          <img :src="require('@/assets/images/IMG-6754.webp')" />
        </div>
      </template>
    </image-panel-with-text>
    <image-panel-with-text>
      <template #elem1>
        <div class="image-box">
          <img :src="require('@/assets/images/IMG-6765.webp')" />
        </div>
      </template>
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
  methods: {
    scrollDown() {
      window.scrollBy(0, 500, "smooth");
    },
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
.main-element {
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("../assets/images/IMG-9441.webp") -50px 0;

  background-size: cover;
  background-position-y: bottom;
  background-attachment: fixed;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 700px) and (max-width: 1024px) {
    align-items: flex-start;
  }
  @media only screen and (max-width: 700px) {
    background-repeat: no-repeat;
    align-items: flex-start;
    background-attachment: scroll;
  }
}
.main-element__text {
  background: white;
  margin-top: 20%;
  border: 10px solid hsla(0, 0%, 100%, 0.5);
  background-clip: padding-box;
  color: black;
  width: 60%;
  height: fit-content;
  margin-bottom: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 800px) {
    width: 80%;
    text-align: center;
  }
}

.image-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  max-width: 100%;
  height: auto;
}
@media only screen and (max-width: 800px) {
  img {
    max-width: 100%;
    height: auto;
  }
}

h1 {
  color: #333;
  text-align: center;
  font-weight: 400;
}

.arrows {
  width: 60px;
  height: 72px;
  margin: auto;
  bottom: 20px;
}

.arrows path {
  stroke: #c42217;
  fill: transparent;
  stroke-width: 1px;
  animation: arrow 2s infinite;
  -webkit-animation: arrow 2s infinite;
}

@keyframes arrow {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes arrow /*Safari and Chrome*/ {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.arrows path.a1 {
  animation-delay: -1s;
  -webkit-animation-delay: -1s; /* Safari 和 Chrome */
}

.arrows path.a2 {
  animation-delay: -0.5s;
  -webkit-animation-delay: -0.5s; /* Safari 和 Chrome */
}

.arrows path.a3 {
  animation-delay: 0s;
  -webkit-animation-delay: 0s; /* Safari 和 Chrome */
}

.go-down {
  cursor: pointer;
  padding-bottom: 40px;
}
</style>
