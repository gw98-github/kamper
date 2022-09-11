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
  background: #b1b0b0;
}

.components {
  width: 90vw;
  margin: auto;
  margin-top: 7em;
  background: white;
  /* border-radius: 0.4em; */
  min-height: calc(100vh - 12em);
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
