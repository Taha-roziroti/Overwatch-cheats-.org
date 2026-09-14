export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global Overwatch 2 Cheats blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Overwatch 2 Cheats Blog | Raid Guides',
		blogDescription:
			'Overwatch 2 guides — raid tips, ESP, aimbot notes, loot routes, and Blizzard Anti-Cheat update coverage. English blog at overwatchcheats.org/blog/.',
		blogH1: 'Overwatch 2 Cheats Intel',
		blogIntro:
			'Short Overwatch 2 guides for Quick Play, Competitive, and Arcade modes. Pair these tips with the Overwatch 2 Cheats product pages when you need ESP, tracking aimbot, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'Overwatch 2 Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Overwatch 2 Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Overwatch 2 Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Overwatch 2 en PC Windows.',
		blogH1: 'Blog Overwatch 2 Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos Overwatch 2 indetectables, ESP wallhack, wallhack, Aimbot y mantenimiento Blizzard Anti-Cheat en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Overwatch 2 relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Overwatch 2 Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Overwatch 2 Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Overwatch 2 Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour Overwatch 2 sur PC Windows.',
		blogH1: 'Blog Overwatch 2 Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Overwatch 2 indétectables, ESP wallhack, wallhack, Aimbot et Blizzard Anti-Cheat en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Overwatch 2 associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Overwatch 2 Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Overwatch 2 Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Overwatch 2 Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Overwatch 2 auf Windows PC.',
		blogH1: 'Overwatch 2 Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Overwatch 2 Cheats, ESP Wallhack, Wallhack, Aimbot und Blizzard Anti-Cheat in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Overwatch 2 Guides',
		allPosts: 'Alle Beiträge',
		home: 'Overwatch 2 Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Overwatch 2 Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Overwatch 2 Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Overwatch 2 no PC.',
		blogH1: 'Blog Overwatch 2 Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats Overwatch 2 indetectáveis, ESP wallhack, wallhack, Aimbot e Blizzard Anti-Cheat em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Overwatch 2 relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Overwatch 2 Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Overwatch 2 Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Overwatch 2 Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per Overwatch 2 su PC Windows.',
		blogH1: 'Blog Overwatch 2 Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat Overwatch 2 indetectable, ESP wallhack, wallhack, Aimbot e Blizzard Anti-Cheat in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Overwatch 2 correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Overwatch 2 Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Overwatch 2 Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Overwatch 2 Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Overwatch 2 op Windows PC.',
		blogH1: 'Overwatch 2 Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Overwatch 2 cheats, ESP wallhack, wallhack, Aimbot en Blizzard Anti-Cheat in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Overwatch 2 gidsen',
		allPosts: 'Alle posts',
		home: 'Overwatch 2 Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Overwatch 2 Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Overwatch 2 Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla Overwatch 2 na PC.',
		blogH1: 'Blog Overwatch 2 Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Overwatch 2, ESP wallhack, wallhack, Aimbot i Blizzard Anti-Cheat w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Overwatch 2',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Overwatch 2 Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Overwatch 2 Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Overwatch 2 Cheats: undetected ESP, wallhack, radar и Aimbot для Overwatch 2 на Windows PC.',
		blogH1: 'Блог Overwatch 2 Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Overwatch 2, ESP wallhack, wallhack, Aimbot и Blizzard Anti-Cheat на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Overwatch 2',
		allPosts: 'Все статьи',
		home: 'Главная Overwatch 2 Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Overwatch 2 Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Overwatch 2 Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Overwatch 2 Windows PC.',
		blogH1: 'Overwatch 2 Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected Overwatch 2 hileleri, ESP wallhack, wallhack, Aimbot ve Blizzard Anti-Cheat SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Overwatch 2 rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Overwatch 2 Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Overwatch 2 Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Overwatch 2 Cheats: غش undetected وESP wallhack ورadar وAimbot لـ Overwatch 2 على Windows PC.',
		blogH1: 'مدونة Overwatch 2 Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Overwatch 2 undetected وESP wallhack ورadar hack وAimbot وBlizzard Anti-Cheat بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Overwatch 2 ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Overwatch 2 Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Overwatch 2 Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Overwatch 2 Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。Overwatch 2 Windows PC向け。',
		blogH1: 'Overwatch 2 Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected Overwatch 2チート、ESP wallhack、wallhack、Aimbot、Blizzard Anti-CheatのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Overwatch 2ガイド',
		allPosts: 'すべての記事',
		home: 'Overwatch 2 Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Overwatch 2 Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Overwatch 2 Cheats 블로그: undetected ESP, wallhack, wallhack, Aimbot 가이드. Overwatch 2 Windows PC.',
		blogH1: 'Overwatch 2 Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Overwatch 2 치트, ESP wallhack, wallhack, Aimbot, Blizzard Anti-Cheat SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Overwatch 2 가이드',
		allPosts: '모든 게시물',
		home: 'Overwatch 2 Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Overwatch 2 Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Overwatch 2 Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Overwatch 2 Windows PC。',
		blogH1: 'Overwatch 2 Cheats 博客 — 全球指南',
		blogIntro:
			'undetected Overwatch 2作弊、ESP wallhack、wallhack、Aimbot和Blizzard Anti-Cheat的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Overwatch 2指南',
		allPosts: '所有文章',
		home: 'Overwatch 2 Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Overwatch 2 Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Overwatch 2 Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Overwatch 2 Windows PC के लिए।',
		blogH1: 'Overwatch 2 Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Overwatch 2 cheats, ESP wallhack, wallhack, Aimbot और Blizzard Anti-Cheat SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Overwatch 2 गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Overwatch 2 Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Overwatch 2 Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Overwatch 2 Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk Overwatch 2 di PC Windows.',
		blogH1: 'Blog Overwatch 2 Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat Overwatch 2 undetected, ESP wallhack, wallhack, Aimbot dan Blizzard Anti-Cheat dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Overwatch 2 terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Overwatch 2 Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Overwatch 2 Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Overwatch 2 Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Overwatch 2 บน PC',
		blogH1: 'บล็อก Overwatch 2 Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Overwatch 2 undetected, ESP wallhack, wallhack, Aimbot และ Blizzard Anti-Cheat 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Overwatch 2 ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Overwatch 2 Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Overwatch 2 Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Overwatch 2 Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Overwatch 2 trên PC.',
		blogH1: 'Blog Overwatch 2 Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Overwatch 2 undetected, ESP wallhack, wallhack, Aimbot và Blizzard Anti-Cheat bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Overwatch 2 liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Overwatch 2 Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Overwatch 2 Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Overwatch 2 Cheats: undetected ESP, wallhack, radar та Aimbot для Overwatch 2 на Windows PC.',
		blogH1: 'Блог Overwatch 2 Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Overwatch 2, ESP wallhack, wallhack, Aimbot та Blizzard Anti-Cheat 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Overwatch 2",
		allPosts: 'Усі статті',
		home: 'Головна Overwatch 2 Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Overwatch 2 Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Overwatch 2 Cheats: undetected ESP, wallhack, radar a Aimbot pro Overwatch 2 na Windows PC.',
		blogH1: 'Blog Overwatch 2 Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Overwatch 2 cheaty, ESP wallhack, wallhack, Aimbot a Blizzard Anti-Cheat ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Overwatch 2 průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Overwatch 2 Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Overwatch 2 Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Overwatch 2 Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Overwatch 2 pe PC.',
		blogH1: 'Blog Overwatch 2 Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Overwatch 2 undetected, ESP wallhack, wallhack, Aimbot și Blizzard Anti-Cheat în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Overwatch 2 related',
		allPosts: 'Toate articolele',
		home: 'Acasă Overwatch 2 Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Overwatch 2 Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Overwatch 2 Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för Overwatch 2 på PC.',
		blogH1: 'Overwatch 2 Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Overwatch 2 cheats, ESP wallhack, wallhack, Aimbot och Blizzard Anti-Cheat på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Overwatch 2 guider',
		allPosts: 'Alla inlägg',
		home: 'Overwatch 2 Cheats hem',
		language: 'Språk',
	},
};
