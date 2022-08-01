import russianMessages from "ra-language-russian";
import polyglotI18nProvider from "ra-i18n-polyglot";

const messages = {
    ...russianMessages,
    pos: {
        menu: {
            categories: 'Категории'
        }
    },
    resources: {
        lots: {
            name: 'Лот |||| Лоты',
        },
        modules: {
            name: 'Модуль |||| Модули',
        },
        settings: {
            name: 'Настройка |||| Настройки',
        },
        orders: {
            name: 'Заказ |||| Заказы',
        },
        reviews: {
            name: 'Отзыв |||| Отзывы',
        },
        categories: {
            name: {
                shop: 'Магазин',
                freelance: 'Фриланс',
            },
        },
        feedBacks: {
            name: 'Обратная связь',
        },
        questions: {
            name: 'F.A.Q',
        },
        pricing: {
            name: 'Цены',
        },
        domains: {
            name: 'Домен |||| Домены',
        },
        shops: {
            name: 'Магазин |||| Магазины',
        },
        "categories/shop": {
            name: 'Магазин',
        },
        "categories/freelance": {
            name: 'Фриланс',
        },
        users: {
            name: 'Пользователь |||| Пользователи',
            fields: {
                first_name: 'First name',
                last_name: 'Last name',
            },
            errors: {
                password_mismatch: 'Требуется подтверждение пароля'
            },
            tabs: {
                shops: 'Магазины'
            },
            fieldGroups: {
                roles: "Роли",
                identity: "Личность",
                location: "Местоположение",
                password: "Пароль",
            }
        },
    },
    roles: {
        freelancer: "Фрилансер",
        admin: "Админ",
    }
}

const i18nProvider = polyglotI18nProvider(() => messages, "ru", {
    allowMissing: "true",
});

export default i18nProvider;