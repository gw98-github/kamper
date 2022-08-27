import database from "@/firebaseConfig.js";
import { ref } from "@firebase/database";
const db = ref(database, "/prices");
class PricesService {
  db() {
    return db;
  }
}
export default new PricesService();
