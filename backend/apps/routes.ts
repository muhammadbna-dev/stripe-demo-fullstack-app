import { Router } from "express";
import appRoutes from "./mainApp/routes";

interface routeObj {
  path: string;
  router: Router;
}

const router: Router = Router();

const mainRoutes: routeObj[] = [
  {
    path: "/main-app",
    router: appRoutes,
  },
];

mainRoutes.forEach((route: routeObj) => {
  router.use(route.path, route.router);
});

export default router;
