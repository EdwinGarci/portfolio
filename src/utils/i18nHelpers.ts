import { loadTranslations } from './i18n';

export async function getLocale(Astro: any): Promise<{ locale: 'en' | 'es'; translations: any }> {
    const lang = Astro.url.searchParams.get('lang');
    const locale: 'en' | 'es' = (lang === 'en' || lang === 'es') ? lang : 'es';
    const translations = await loadTranslations(locale);
    return { locale, translations };
}
