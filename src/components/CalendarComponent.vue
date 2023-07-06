<template>
  <div id="calendar">
    <h1>dostępne terminy</h1>
    <div class="calendar">
      <v-calendar
        :columns="windowWidth > 1100 ? 3 : windowWidth > 700 ? 2 : 1"
        :rows="2"
        :is-expanded="windowWidth > 700"
        :attributes="attrs"
        :min-date="new Date()"
      ></v-calendar>
    </div>
    <span class="info">*na czerwono zaznaczono terminy zarezerwowane</span>
  </div>
</template>

<script>
import calendarService from "../services/calendarService.js";
import { onValue } from "firebase/database";
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      data: null,
      attrs: [],
    };
  },
  methods: {
    updateCalendarAttributes() {
      this.getData();
      this.attrs.push({
        key: "today",
        highlight: true,
        dates: new Date(),
      });
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    getData() {
      onValue(calendarService.db(), (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          this.attrs.push({
            highlight: "red",
            dates: {
              start: new Date(childSnapshot.val().dates.start),
              end: new Date(childSnapshot.val().dates.end),
            },
          });
        });
      });
    },
  },
  mounted() {
    this.updateCalendarAttributes();
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style scoped>
#calendar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2em;
  overflow: auto;
}
h1 {
  text-transform: uppercase;
  margin-bottom: 2em;
  text-align: center;
  color: #c42217;
}
.calendar {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  z-index: 0 !important;
}
.vc-pane {
  border: 1px solid #33323285 !important;
  border-radius: 0.3em;
  margin: 3px;
}
.vc-container {
  border: none !important;
}
.info {
  color: gray;
  margin-top: 3px;
}

@media only screen and (max-width: 1100px) {
  .calendar {
    width: 90%;
  }
}
</style>
