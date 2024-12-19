type Locale = 'en' | 'es';

const translations = {
    en: () => import('../locales/en.json'),
    es: () => import('../locales/es.json')
};

export async function loadTranslations(locale: Locale) {
    const translationModule = await translations[locale]();
    return translationModule.default;
}