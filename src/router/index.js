import {
  createRouter,
  createWebHistory
} from "vue-router";
import NewAccountView from "../components/NewAccount/NewAccount.vue";
import LoginView from "../components/Login/Login.vue"
import ForgotPasswordView from "../components/ForgotPassword/ForgotPassword.vue"
import DashboardPage from "../components/Dashboard/Dashboard.vue"
import InvestmentPage from "../components/Investment/Investment.vue"
import InvestmentTab from "../components/Investment/InvestmentTab.vue"
import ListingPage from "../components/Listing/Listing.vue"
import ListingTab from "../components/Listing/ListingTab.vue"
import OrderPage from "../components/Order/Order.vue"
import OrderTab from "../components/Order/OrderTab.vue"
import SettingsPage from "../components/Setting/Setting.vue"
import PasswordSetting from "../components/Setting/PasswordSetting.vue"
import KycSetting from "../components/Setting/KycSetting.vue"
import ProfileSetting from "../components/Setting/ProfileSetting.vue"
import SingleInvestment from "../components/Investment/SingleInvestment.vue"
import AllListing from "../components/Listing/AllListing.vue"
import SingleListing from "../components/Listing/SingleListing.vue"
import SingleOrder from "../components/Order/SingleOrder.vue"
import ProfilePage from "../components/Profile/Profile.vue"

const routes = [{
    path: "/",
    name: "new-account",
    component: NewAccountView,
  },
  {
    path: "/login",
    name: "login-page",
    component: LoginView
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPasswordView
  },
  {
    path: "/user/dashboard",
    component: DashboardPage
  },
  {
    path: "/investments",
    component: InvestmentPage,
    redirect: '/investment/index',
    children: [{
      path: "/investment/:id",
      name: 'InvestmentDetails',
      component: SingleInvestment
    },
    {
      path: '/investment/index',
      component: InvestmentTab
    }
  ]
  },

  {
    path: "/listing",
    component: ListingPage,
    redirect: '/listing/index',
    children: [{
        path: '/listing/index',
        component: ListingTab
      },
      {
        path: "/listing/:id",
        name: 'ListingDetails',
        component: SingleListing
      },
      {
        path: "/listing/find-listing",
        component: AllListing
      },
    ]
  },

  {
    path: "/orders",
    component: OrderPage,
    redirect: '/orders/index',
    children: [{
        path: "/orders/index",
        component: OrderTab
      },
      {
        path: "/orders/:id",
        name: 'OrderDetails',
        component: SingleOrder
      },
    ]
  },

  {
    path: "/settings",
    component: SettingsPage,
    redirect: '/settings/profile',
    children: [{
        path: "/settings/password",
        component: PasswordSetting
      },
      {
        path: "/settings/kyc",
        component: KycSetting,
      },
      {
        path: "/settings/profile",
        component: ProfileSetting,
      },
    ]
  },


  {
    path: "/logout",
    component: DashboardPage
  },
  {
    path: "/user/profile",
    component: ProfilePage
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;