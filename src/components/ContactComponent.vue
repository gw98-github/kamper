<template>
  <div class="container">
    <div class="text-info">
      Jeżeli są Państwo zainteresowani wynajmem kampera, prosimy o kontakt
      poprzez:
    </div>
    <div class="contact-element">
      <img
        :src="require('@/assets/icon-phone.svg')"
        alt="telefon"
        srcset=""
        title="numer telefonu"
      />
      <div
        class="value"
        @click="copyStringToClipboard(phone)"
        v-if="phone != ''"
      >
        {{ phone }}
        <img
          :src="require('@/assets/icon-copy.svg')"
          class="copy-icon"
          alt="kopiuj telefon"
          srcset=""
          title="kopiuj telefon"
        />
      </div>
    </div>
    <div class="contact-element">
      <img
        :src="require('@/assets/icon-mail.svg')"
        alt="email"
        srcset=""
        title="adres email"
      />
      <div
        class="value"
        @click="copyStringToClipboard(email)"
        v-if="email != ''"
      >
        {{ email }}
        <img
          :src="require('@/assets/icon-copy.svg')"
          class="copy-icon"
          alt="kopiuj email"
          srcset=""
          title="kopiuj email"
        />
      </div>
    </div>
  </div>
</template>

<script>
import contactService from "../services/contactService.js";
import { onValue } from "firebase/database";
export default {
  data() {
    return {
      phone: "",
      email: "",
    };
  },
  methods: {
    copyStringToClipboard(str) {
      this.$toast.show("Skopiowano pomyślnie!", {
        type: "success",
        position: "top",
        duration: 2000,
      });
      navigator.clipboard.writeText(str);
    },
    getData() {
      onValue(contactService.db(), (snapshot) => {
        this.phone = snapshot.child("phone").val();
        this.email = snapshot.child("email").val();
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0 !important;
}
.text-info {
  font-family: "Montserrat";
  font-size: 22px;
  margin-top: 3em;

  text-align: center;
}
.contact-element {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: fit-content;
  margin-top: 4em;
}

.value {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3em;
  margin-top: 0.1em;
  font-size: 26px;
  font-family: "Montserrat";
  padding: 0.2em 0.5em;
  margin-left: 1.1em;
  border-radius: 0.5em;
}

.value:hover {
  background: rgba(128, 128, 128, 0.14);
}
.value:hover .copy-icon {
  visibility: visible;
}
.copy-icon {
  visibility: hidden;
  width: 20px;
  height: 20px;
}

@media only screen and (max-width: 1100px) {
  .container {
    width: 90%;
  }
  .text-info {
    font-size: 18px;
  }
  .value {
    font-size: 22px;
  }
  .copy-icon {
    width: 18px;
    height: 18px;
  }
}
</style>