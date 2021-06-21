import Links from "./pages/link";
import StyleGuide from "./pages/styleguide";
import Home from "./pages/home";
import Categories from "./pages/categories";
import ProductDetails from "./pages/product-details";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import DeliveryAddress from "./pages/address";
import OrderStatus from "./pages/order-status";
import DeliverAnything from "./pages/deliver-anything";
import StoreList from "./pages/stores-list";
import IndividualStores from "./pages/individual-store";
import Search from "./pages/search";
import AboutUs from "./pages/about-us";
import BecomeRider from "./pages/become-rider";
import Faq from "./pages/faq";
import RegisterStore from "./pages/register-store";
import OrderHistory from "./pages/order-history";
import AccountDetails from "./pages/account";
import StoreAccount from "./pages/store-account";
import AnimationPage from "./pages/animations";
import Errorpage from "./pages/error";
export default class Routes {
    // eslint-disable-next-line
    apply(routeHandler) {
        const routes = [
            ...Links,
            ...StyleGuide,
            ...Home,
            ...Categories,
            ...ProductDetails,
            ...Cart,
            ...Checkout,
            ...DeliveryAddress,
            ...OrderStatus,
            ...DeliverAnything,
            ...StoreList,
            ...IndividualStores,
            ...Search,
            ...AboutUs,
            ...BecomeRider,
            ...Faq,
            ...RegisterStore,
            ...OrderHistory,
            ...AccountDetails,
            ...StoreAccount,
            ...Errorpage,
            ...AnimationPage,
        ];
        routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async() => {
            routeHandler.addRoutes(routes);
        });
    }
}
