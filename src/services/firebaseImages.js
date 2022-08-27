import { getStorage, ref, listAll } from "firebase/storage";

class ImagesService {
  getImages() {
    const storage = getStorage();
    return listAll(ref(storage, "/thumbnails"));
  }
  getImage(name) {
    const storage = getStorage();
    return ref(storage, name);
  }
}
export default new ImagesService();
