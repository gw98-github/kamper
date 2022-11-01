<template>
  <div class="wrapper">
    <div class="grid">
      <div class="header-item first">Sezon</div>
      <div class="header-item">Kiedy?</div>
      <div class="header-item">
        Wymagania
        <div class="header-item-details">(min. okres wynajmu kampera)</div>
      </div>
      <div class="header-item">
        Cena za dobę
        <div class="header-item-details">
          (wszystkie ceny zawierają 23% VAT)
        </div>
      </div>

      <div
        class="grid-val"
        v-for="(item, index) in dataArray"
        :key="index"
        :class="{ price: (index + 1) % 4 == 0, first: index % 4 === 0 }"
        v-html="item"
      ></div>
    </div>
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

<style scoped>
.wrapper {
  padding: 3rem;
}
.grid {
  display: grid;
  max-width: 1100px;
  margin: auto;
  grid-template-columns: 2fr repeat(3, 3fr);
  grid-template-rows: 2fr 3fr 3fr 3fr;
  gap: 0.6rem;
  justify-items: center;
  padding: 5rem 0.5rem;
}
.header-item {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  padding: 0.3rem;
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-right: none;
  border-top: none;
}
.header-item.first {
  border-left: none;
}
.grid-val {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  padding: 0.3rem;
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-right: none;
  border-bottom: none;
  font-weight: 400;
}
.grid-val.first {
  border-left: none;
}
.grid-val.price {
  color: #c42217;
  font-weight: 600;
  font-size: 26px;
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
  .wrapper {
    padding: 2rem;
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
  .wrapper {
    padding: 1rem;
  }
}
</style>
