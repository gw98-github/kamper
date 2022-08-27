<template>
  <div class="grid">
    <div class="header-item">Sezon</div>
    <div class="header-item">Kiedy?</div>
    <div class="header-item">
      Wymagania
      <div class="header-item-details">(min. okres wynajmu kampera)</div>
    </div>
    <div class="header-item">
      Cena za dobę
      <div class="header-item-details">(wszystkie ceny zawierają 23% VAT)</div>
    </div>

    <div
      class="grid-val"
      v-for="(item, index) in dataArray"
      :key="index"
      :class="{ price: (index + 1) % 4 == 0 }"
      v-html="item"
    ></div>
  </div>
</template>

<script>
import pricesService from "../services/pricesService.js";
import { onValue } from "firebase/database";
export default {
  data() {
    return {
      dataArray: [],
    };
  },
  methods: {
    getData() {
      onValue(pricesService.db(), (snapshot) => {
        let arr = [];
        snapshot.forEach(function (childSnapshot) {
          arr.push(childSnapshot.child("season").val());
          arr.push(childSnapshot.child("date").val());
          arr.push(childSnapshot.child("details").val());
          arr.push(childSnapshot.child("price").val());
        });
        this.dataArray = arr;
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 3fr);
  grid-template-rows: 2fr 3fr 3fr 3fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
  padding: 2em 0.5em;
  align-items: top;
}
.header-item {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}
.grid-val {
  align-self: center;
  font-size: 20px;
  font-weight: 400;
  padding: 0.5em 0 1em 0;
}
.grid-val.price {
  color: #c42217;
  font-weight: 600;
  font-size: 24px;
}
.header-item-details {
  font-size: 12px;
  font-weight: 400;
}
@media only screen and (max-width: 1100px) and (min-width: 800px) {
  .header-item {
    font-size: 14px;
  }
  .grid-val {
    font-size: 18px;
  }
  .grid-val.price {
    font-size: 20px;
  }
  .header-item-details {
    font-size: 10px;
  }
}

@media only screen and (max-width: 800px) {
  .header-item {
    font-size: 12px;
  }
  .grid-val {
    font-size: 14px;
  }
  .grid-val.price {
    font-size: 18px;
  }
  .header-item-details {
    font-size: 10px;
  }
}
</style>