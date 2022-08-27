import database from "@/firebaseConfig.js";
import { ref } from "@firebase/database";
const db = ref(database, "/calendar");
class CalendarService {
  db() {
    return db;
  }
}
export default new CalendarService();
