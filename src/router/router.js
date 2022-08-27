import CalendarComponent from "@/components/CalendarComponent.vue";
import GalleryComponent from "@/components/GalleryComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import TermsOfServiceComponent from "@/components/TermsOfServiceComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import { createRouter, createWebHistory } from "vue-router";
import PriceListComponent from "@/components/PriceListComponent.vue";

const routes = [
  { path: "/", name: "Home", component: HomeComponent },
  { path: "/calendar", name: "Calendar", component: CalendarComponent },
  { path: "/price-list", name: "Price List", component: PriceListComponent },
  { path: "/gallery", name: "Gallery", component: GalleryComponent },
  {
    path: "/terms-of-service",
    name: "Terms of Service",
    component: TermsOfServiceComponent,
  },
  { path: "/contact", name: "Contact", component: ContactComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
