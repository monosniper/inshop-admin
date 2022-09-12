import {Admin, Resource, CustomRoutes } from "react-admin";
import authProvider from "../providers/authProvider";
import LoginPage from "../components/LoginPage";
import MyLayout from "../layout";
import theme from "../theme";
import i18nProvider from "../i18n";
import dataProvider from "../providers/dataProvider";
import routes from '../routes';

import users from "../components/users";
import settings from "../components/settings";
import shops from "../components/shops";
import modules from "../components/modules";
import domains from "../components/domains";
import layoutOptions from "../components/layoutOptions";
import feedBacks from "../components/feedBacks";
import colors from "../components/colors";
import social_networks from "../components/social_networks";
import filters from "../components/filters";

const App = () => {
    return (
        <Admin
            dataProvider={dataProvider}
            authProvider={authProvider}
            i18nProvider={i18nProvider}
            customRoutes={routes}
            loginPage={LoginPage}
            layout={MyLayout}
            theme={theme}
        >
            {/*<Resource name="lots" {...lots} />*/}
            {/*<Resource name="orders" {...orders} />*/}
            {/*<Resource name="reviews" {...reviews} />*/}
            {/*<Resource name="categories/shop" {...categories.shop} />*/}
            {/*<Resource name="categories/freelance" {...categories.freelance} />*/}
            <Resource name="domains" {...domains} />
            <Resource name="shops" {...shops} />
            <Resource name="users" {...users} />
            <Resource name="modules" {...modules} />
            <Resource name="settings" {...settings} />
            <Resource name="layoutOptions" {...layoutOptions} />
            <Resource name="feedBacks" {...feedBacks} />
            <Resource name="colors" {...colors} />
            <Resource name="social_networks" {...social_networks} />
            <Resource name="filters" {...filters} />
            {/*<Resource name="tags" />*/}
            {/*<Resource name="offers" />*/}
            {/*<Resource name="questions" {...questions} />*/}
            {/*<Resource name="prices" {...prices} />*/}
        </Admin>
    );
};

export default App;