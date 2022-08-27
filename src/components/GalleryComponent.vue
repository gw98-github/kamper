<template>
  <div class="spinner-container" v-show="loadingImages">
    <div class="spinner"></div>
  </div>

  <div class="gallery" v-show="!loadingImages">
    <div
      class="image-box"
      v-for="(image, i) in imagesArray"
      :key="i"
      v-show="this.imagesArrayLoaded[i] == true"
    >
      <img
        class="image"
        :src="image"
        @click="openModal(i)"
        alt=""
        @load="this.imagesArrayLoaded[i] = true"
      />
    </div>
  </div>
  <div
    class="modal-overlay"
    v-if="showModal"
    @click.self="showModal = false"
    @touchmove.prevent
  >
    <div v-show="!imageLoaded" style="margin-top: 45vh">
      <div class="spinner"></div>
    </div>
    <div class="modal-value" v-show="imageLoaded">
      <button
        class="nav-button prev"
        v-if="currentImageIndex != 0"
        @click="prevImage"
      >
        <span>&#9664;</span>
      </button>
      <img
        class="modal-image"
        :src="currentImage"
        alt=""
        @load="imageLoaded = true"
      />
      <button
        v-if="currentImageIndex != imagesArray.length - 1"
        @click="nextImage"
        class="nav-button next"
      >
        <span>&#9658;</span>
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import firebaseImages from "../services/firebaseImages.js";
import { getDownloadURL } from "firebase/storage";
export default {
  data() {
    return {
      imagesArray: [],
      imagesNamesArray: [],
      imagesArrayLoaded: [],
      showModal: false,
      currentImage: "",
      currentImageIndex: 0,
      loadingImages: true,
      imageLoaded: false,
    };
  },
  mounted() {
    this.getImages();
  },
  watch: {
    imagesArrayLoaded: {
      deep: true,
      handler() {
        if (
          this.imagesArrayLoaded.length == this.imagesArray.length &&
          this.imagesArray.length > 70
        )
          this.loadingImages = false;
      },
    },
  },
  methods: {
    getImages() {
      firebaseImages
        .getImages()
        .then((res) => {
          res.items.forEach((itemRef, index) => {
            getDownloadURL(itemRef).then((url) => {
              this.imagesNamesArray.push(itemRef.name);
              this.imagesArray.push(url);
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getImage(name) {
      this.imageLoaded = false;
      getDownloadURL(firebaseImages.getImage(name)).then((url) => {
        this.currentImage = url;
      });
    },
    closeModal() {
      this.showModal = false;
    },
    openModal(i) {
      this.getImage(this.imagesNamesArray[i]);
      this.currentImageIndex = i;
      this.showModal = true;
    },
    nextImage() {
      this.currentImageIndex += 1;
      this.currentImage = this.getImage(
        this.imagesNamesArray[this.currentImageIndex]
      );
    },
    prevImage() {
      this.currentImageIndex -= 1;
      this.currentImage = this.getImage(
        this.imagesNamesArray[this.currentImageIndex]
      );
    },
  },
};
</script>

<style>
.gallery {
  padding: 2em 0.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
}
.image {
  width: 200px;
  height: auto;
}
.image-box {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  overflow: hidden;
  margin: 4px;
  background: black;
}
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  background-color: #00000048;
}
.modal-image {
  max-height: 85vh;
  max-width: 80vw;
}
.modal-value {
  position: relative;
  text-align: center;
  background-color: white;
  min-height: 200px;
  max-height: 85vh;
  min-width: 200px;
  max-width: 80vw;
  margin: auto;
  padding: 1rem;
  border-radius: 0.3rem;
}

.nav-button {
  position: fixed;
  cursor: pointer;
  border-radius: 50%;
  background: #c42217;
  font-size: xx-large;
  height: 50px;
  width: 50px;
  border: none;
  opacity: 0.7;
  color: white;
}

.nav-button:hover {
  opacity: 1;
  transition: 0.2s ease-in-out;
}
.nav-button.prev {
  position: fixed;
  top: 50%;
  padding-top: 5px;
  padding-left: 1px;
  transform: translateX(20px);
}
.nav-button.next {
  position: fixed;
  top: 50%;
  padding-top: 3px;
  padding-left: 11px;
  transform: translateX(-70px);
}
.spinner-container {
  padding-top: 2em;
}
.spinner {
  width: 4rem;
  height: 4rem;
  margin: auto;
  border: 5px solid #f3f3f3;
  border-top: 6px solid #c42217;
  border-radius: 100%;
  animation: spin 1s infinite linear;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 800px) {
  .gallery {
    padding: 0.5em 0.5em;
  }
  .image {
    width: 150px;
  }
  .image-box {
    width: 150px;
    height: 150px;
  }
  .modal-value {
    padding: 0.5em;
  }
  .nav-button.prev {
    position: fixed;
    top: 50%;
    padding-top: 5px;
    padding-left: 1px;
    transform: translateX(5px);
  }
  .nav-button.next {
    position: fixed;
    top: 50%;
    padding-top: 3px;
    padding-left: 11px;
    transform: translateX(-55px);
  }
}
</style>