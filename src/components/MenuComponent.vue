<template>
  <div class="menu" v-if="windowWidth > 800">
    <div class="top-panel">
      <div class="logo">
        <router-link to="/" title="Home"
          ><img
            class="logo"
            :src="logo"
            alt="W drogę!"
            title="W drogę!"
            height="64"
            width="184"
        /></router-link>
      </div>
      <div class="button-panel">
        <router-link
          :to="item.href"
          v-for="item in items"
          :key="item.name"
          :title="item.name"
          :class="['button', { active: item.href === current }]"
        >
          <span>{{ item.name }}</span></router-link
        >
        <a
          class="button"
          href="/files/regulamin.pdf"
          download
          title="Regulamin"
        >
          <span
            >Regulamin <font-awesome-icon :icon="['fas', 'download']"
          /></span>
        </a>

        <a
          href="https://instagram.com/wypozyczalniawdroge?igshid=YmMyMTA2M2Y="
          target="_blank"
          title="Instagram"
        >
          <img
            class="ig-icon"
            :src="require('@/assets/icon-ig2.svg')"
            alt="Instagram"
            srcset=""
            title="Instagram"
            height="53"
            width="53"
          />
        </a>
        <a
          href="https://www.facebook.com/wdroge.wynajemkamperow/"
          target="_blank"
          title="Facebook"
        >
          <img
            class="fb-icon"
            :src="require('@/assets/icon-fb.svg')"
            alt="Facebook"
            srcset=""
            title="Facebook"
            height="53"
            width="53"
          />
        </a>
      </div>
    </div>
  </div>
  <div class="menu" v-else>
    <div class="top-panel">
      <div class="logo">
        <router-link to="/"
          ><img
            class="logo"
            :src="logo"
            alt="W drogę!"
            title="W drogę!"
            height="64"
            width="184"
        /></router-link>
      </div>

      <div>
        <img
          class="menu-icon"
          :src="require('@/assets/icon-menu.svg')"
          alt="Menu"
          title="Menu"
          height="30"
          width="30"
          @click="openMenu"
        />
      </div>
      <div class="small-menu" v-show="openedMenu">
        <hr />
        <router-link
          :to="item.href"
          v-for="item in items"
          :key="item.name"
          :class="['button', { active: item.href === current }]"
        >
          <span @click="openMenu">{{ item.name }}</span></router-link
        >
        <a class="button" href="/files/regulamin.pdf" download>
          <span
            >Regulamin <font-awesome-icon :icon="['fas', 'download']"
          /></span>
        </a>
        <div class="icons">
          <a
            href="https://instagram.com/wypozyczalniawdroge?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <img
              class="ig-icon"
              :src="require('@/assets/icon-ig2.svg')"
              alt="Instagram"
              srcset=""
              title="Instagram"
              height="64"
              width="64"
            />
          </a>
          <a
            href="https://www.facebook.com/wdroge.wynajemkamperow/"
            target="_blank"
          >
            <img
              class="fb-icon"
              :src="require('@/assets/icon-fb.svg')"
              alt="Facebook"
              srcset=""
              title="Facebook"
              height="64"
              width="64"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      this.current = this.$route.path;
    },
  },
  data() {
    return {
      openedMenu: false,
      windowWidth: window.innerWidth,
      current: "",
      logo: require("@/assets/logo.webp"),
      items: [
        { name: "Strona główna", href: "/" },
        { name: "Kalendarz", href: "/calendar" },
        { name: "Cennik", href: "/price-list" },
        { name: "Galeria", href: "/gallery" },
        { name: "Kontakt", href: "/contact" },
      ],
    };
  },
  created() {
    this.current = this.$route.path;
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    openMenu() {
      this.openedMenu = !this.openedMenu;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style>
.menu {
  background: white;
}
.top-panel {
  /* background: #c52118; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5em;
}
.button-panel {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
}
.button {
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: bolder;
  font-family: "Gill Sans", "Trebuchet MS", sans-serif;
  color: #333232;
  align-items: center;
  background: white;
  text-decoration: none;
  padding: 1em;
  margin: 0.3rem;
  text-transform: uppercase;
  border-radius: 0.5em;
  /* border: #c52118 1px solid; */
}
.button:hover {
  color: #c42217;
  transition: ease-in-out 0.2s;
  z-index: 1;
  transform: scale(1.2);
}

.active {
  color: #c42217;
  transition: ease-in 0.2s;
  transform: scale(1.1);
}
.logo {
  height: 4em;
  border-radius: 0.5em;
  margin-left: 0.3em;
  cursor: pointer;
}

.ig-icon {
  height: 3.3em;
  border-radius: 1em;
  margin-right: 0.5em;
  margin-left: 0.5em;
}
.fb-icon {
  margin-right: 1em;
  height: 3.3em;
  border-radius: 1em;
}
.menu-icon {
  margin-right: 1em;
  height: 5em;
  cursor: pointer;
}

.small-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  position: fixed;
  top: 5em;
  left: 0;
  right: 0;
  border-bottom: 1em #c42217 solid;
}

.icons {
  display: flex;
  flex-direction: row;
}

@media only screen and (max-width: 1100px) and (min-width: 800px) {
  .button {
    font-size: 12px;
    margin: 0.65em;
    padding: 0;
    /* padding: 0.5em; */
  }
  .ig-icon {
    height: 2.5em;
  }
  .fb-icon {
    margin-right: 0.3em;
    height: 2.5em;
  }
}

@media only screen and (max-width: 800px) {
  .button {
    margin: 0;
  }
  .button:hover {
    transform: scale(1.1);
  }
  .active {
    transform: scale(1.1);
  }
  .ig-icon {
    height: 3em;
    margin: 0.5em;
  }
  .fb-icon {
    height: 3em;
    margin: 0.5em;
  }
}
</style>
