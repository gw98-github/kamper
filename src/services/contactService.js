import database from "@/firebaseConfig.js";
import { ref } from "@firebase/database";
const db = ref(database, "/contact");
class ContactService {
  db() {
    return db;
  }
}
export default new ContactService();
