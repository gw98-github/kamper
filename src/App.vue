<template>
  <header><menu-component id="menu"></menu-component></header>

  <div class="components"><router-view></router-view></div>

  <footer>
    <div class="footer-value">&copy; Copyright 2022 W drogę</div>
    <div class="footer-value" style="padding-left: 0.5em">
      Designed by:
      <a
        href="https://www.linkedin.com/in/grzegorz-wa%C5%BCny-0676341a3/"
        target="_blank"
        title="Author"
      >
        G.Ważny</a
      >
    </div>
  </footer>
</template>

<script>
import MenuComponent from "./components/MenuComponent.vue";
export default {
  name: "App",
  components: { MenuComponent },
};
</script>

<style>
body {
  margin: 0 !important;
  font-family: Candara;
  color: #333232;
}
html {
  height: 100%;
  background: #e7e7e7;
}

.components {
  width: 100vw;
  margin: auto;
  margin-top: 5em;
  background: white;
  /* border-radius: 0.4em; */
  min-height: calc(100vh - 12em);

  @media (min-width: 700px) {
    width: 90vw;
  }

  @media (min-width: 1024px) {
    width: 80vw;
    margin-top: 6em;
  }
}
#app {
  height: 100%;
}
#menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
footer {
  display: flex;
  align-items: center;
  padding-left: 1em;
  padding-right: 1em;
  justify-content: space-between;
  color: white;
  background: #333232;
  height: 3em;
  margin-top: 2em;
}
a {
  color: white;
  text-decoration: none;
}

@media (max-width: 700px) {
  .footer-value {
    font-size: small;
  }
}
</style>
