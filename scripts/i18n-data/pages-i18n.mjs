import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Overwatch 2 indetectables para Overwatch 2 en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat anti-cheat. Entrega digital instantánea.', h1: 'Overwatch 2 Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Overwatch 2 en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat anti-cheat tras cada parche.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'Galería Overwatch 2 Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Overwatch 2 Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en Quick Play y PvE.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Overwatch 2 indétectables pour Overwatch 2 sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat anti-cheat. Livraison numérique instantanée.', h1: 'Overwatch 2 Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Overwatch 2 sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat anti-cheat après chaque patch.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'Galerie Overwatch 2 Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Overwatch 2 Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en Quick Play et PvE.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Overwatch 2 Cheats für Overwatch 2 auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat anti-cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Overwatch 2 Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Overwatch 2: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat anti-cheat-Wartung nach jedem Patch.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'Overwatch 2 Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Overwatch 2 Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in Quick Play und PvE zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Overwatch 2 indetectáveis para Overwatch 2 no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat anti-cheat. Entrega digital instantánea.', h1: 'Overwatch 2 Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Overwatch 2 no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat anti-cheat após cada patch.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'Galeria Overwatch 2 Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Overwatch 2 Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em Quick Play e PvE.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Overwatch 2 indetectable per Overwatch 2 su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat anti-cheat. Consegna digitale istantanea.', h1: 'Overwatch 2 Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Overwatch 2 su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat anti-cheat dopo ogni patch.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'Galleria Overwatch 2 Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Overwatch 2 Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in Quick Play e PvE.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Overwatch 2 cheats voor Overwatch 2 op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat anti-cheat-onderhoud. Directe digitale levering.', h1: 'Overwatch 2 Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Overwatch 2: ESP wallhack, radar en Aimbot met Easy Anti-Cheat anti-cheat-onderhoud na elke patch.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'Overwatch 2 Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Overwatch 2 Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in Quick Play en PvE.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Overwatch 2 dla Overwatch 2 na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat anti-cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Overwatch 2 Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Overwatch 2 na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat anti-cheat po każdym patchu.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'Galeria Overwatch 2 Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Overwatch 2 Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w Quick Play i PvE.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Overwatch 2 для Overwatch 2 на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat anti-cheat. Мгновенная цифровая доставка.', h1: 'Overwatch 2 Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Overwatch 2 на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat anti-cheat после патчей.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'Галерея Overwatch 2 Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Overwatch 2 Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в Quick Play и PvE.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Overwatch 2 için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat anti-cheat bakımı. Anında dijital teslimat.', h1: 'Overwatch 2 Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Overwatch 2 Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat anti-cheat bakımı dahil.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'Overwatch 2 Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Overwatch 2 Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'Quick Play ve PvE\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Overwatch 2 Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Overwatch 2 undetected لـ Overwatch 2 على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat anti-cheat. تسليم رقمي فوري.', h1: 'Overwatch 2 Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Overwatch 2 على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat anti-cheat.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'معرض Overwatch 2 Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Overwatch 2 Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في Quick Play وPvE.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Overwatch 2 Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Overwatch 2向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat anti-cheatメンテナンス。即時デジタル配信。', h1: 'Overwatch 2 Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Overwatch 2 Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheat anti-cheatメンテナンス付き。', imageAlt: 'Overwatch 2 cheats hero ESP aimbot wallhack', gallery: 'Overwatch 2 Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にOverwatch 2 Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'Quick PlayとPvEで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Overwatch 2 undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat anti-cheat 유지보수. 즉시 디지털 배송.', h1: 'Overwatch 2 Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Overwatch 2 Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat anti-cheat 유지보수 포함.', imageAlt: 'Overwatch 2 cheats hero ESP aimbot wallhack', gallery: 'Overwatch 2 Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Overwatch 2 Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 PvE에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Overwatch 2 Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Overwatch 2 undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat anti-cheat维护。即时数字交付。', h1: 'Overwatch 2 Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Overwatch 2 Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat anti-cheat维护。', imageAlt: 'Overwatch 2 cheats hero ESP aimbot wallhack', gallery: 'Overwatch 2 Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Overwatch 2 Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在Quick Play和PvE中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Overwatch 2 undetected cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.', h1: 'Overwatch 2 Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Overwatch 2 Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.', imageAlt: 'Overwatch 2 cheats hero ESP aimbot wallhack', gallery: 'Overwatch 2 Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Overwatch 2 Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और PvE में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Overwatch 2 undetected untuk Overwatch 2 di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat anti-cheat. Pengiriman digital instan.', h1: 'Overwatch 2 Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Overwatch 2 di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat anti-cheat.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'Galeri Overwatch 2 Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Overwatch 2 Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di Quick Play dan PvE.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Overwatch 2 undetected สำหรับ Overwatch 2 บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Overwatch 2 Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Overwatch 2 บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'แกลเลอรี Overwatch 2 Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Overwatch 2 Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน Quick Play และ PvE', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Overwatch 2 undetected cho Overwatch 2 trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat anti-cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Overwatch 2 Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Overwatch 2 trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat anti-cheat.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'Thư viện Overwatch 2 Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Overwatch 2 Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong Quick Play và PvE.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Overwatch 2 для Overwatch 2 на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat anti-cheat. Мгновенная цифровая доставка.', h1: 'Overwatch 2 Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Overwatch 2 на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat anti-cheat.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'Галерея Overwatch 2 Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Overwatch 2 Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у Quick Play і PvE.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Overwatch 2 cheaty pro Overwatch 2 na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat anti-cheat. Okamžité digitální doručení.', h1: 'Overwatch 2 Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Overwatch 2 na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat anti-cheat.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'Galerie Overwatch 2 Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Overwatch 2 Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v Quick Play a PvE.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Overwatch 2 undetected pentru Overwatch 2 pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat anti-cheat. Livrare digitală instantă.', h1: 'Overwatch 2 Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Overwatch 2 pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat anti-cheat.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'Galerie Overwatch 2 Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Overwatch 2 Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în Quick Play și PvE.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Overwatch 2 Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Overwatch 2 cheats för Overwatch 2 på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat anti-cheat-underhåll. Omedelbar digital leverans.', h1: 'Overwatch 2 Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Overwatch 2 på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat anti-cheat-underhåll.', imageAlt: 'Overwatch 2 ESP player tags hack', gallery: 'Overwatch 2 Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Overwatch 2 Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i Quick Play och PvE.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'overwatch-2-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'overwatch-2-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Easy Anti-Cheat Maintenance Log', focus: 'Easy Anti-Cheat patch status and rebuild notes', altKeyword: 'updates Easy Anti-Cheat maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Easy Anti-Cheat questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Easy Anti-Cheat Safe Status', focus: 'undetected maintenance after Easy Anti-Cheat anti-cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	anticheat: { suffix: 'Patch Maintenance', focus: 'how Easy Anti-Cheat updates are handled for Overwatch 2 cheats', altKeyword: 'Easy Anti-Cheat bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Overwatch 2 cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'Overwatch 2 cheats with ESP, aimbot, and wallhack', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'crucible-cheats': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'aim-assist': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Overwatch 2 cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Overwatch 2', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'pve-cheats': { suffix: 'What It Means', focus: 'pve-cheats searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'overwatch-2-esp': 'Cajas de jugador y wallhack',
		'overwatch-2-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		anticheat: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'crucible-cheats': 'Controles en partida',
		'aim-assist': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'pve-cheats': 'Qué significa',
	},
	fr: {
		'overwatch-2-esp': 'Boîtes joueur et wallhack',
		'overwatch-2-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Easy Anti-Cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		anticheat: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'crucible-cheats': 'Contrôles en jeu',
		'aim-assist': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'pve-cheats': 'Ce que ça signifie',
	},
	de: {
		'overwatch-2-esp': 'Spielerboxen & Wallhack',
		'overwatch-2-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Easy Anti-Cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		anticheat: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'crucible-cheats': 'In-Game Toggles',
		'aim-assist': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'pve-cheats': 'Was es bedeutet',
	},
	pt: {
		'overwatch-2-esp': 'Caixas de jogador e wallhack',
		'overwatch-2-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		anticheat: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'crucible-cheats': 'Controles in-game',
		'aim-assist': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'pve-cheats': 'O que significa',
	},
	it: {
		'overwatch-2-esp': 'Box giocatore e wallhack',
		'overwatch-2-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Easy Anti-Cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		anticheat: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'crucible-cheats': 'Toggle in-game',
		'aim-assist': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'pve-cheats': 'Cosa significa',
	},
	ru: {
		'overwatch-2-esp': 'Боксы игроков и wallhack',
		'overwatch-2-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Easy Anti-Cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		easy-anticheat: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'crucible-cheats': 'Игровые переключатели',
		'aim-assist': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'pve-cheats': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Overwatch 2 Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Overwatch 2 Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'overwatch-2-esp': { en: 'Overwatch 2 ESP', es: 'ESP Overwatch 2', fr: 'ESP Overwatch 2', de: 'Overwatch 2 ESP', pt: 'ESP Overwatch 2', it: 'ESP Overwatch 2', nl: 'Overwatch 2 ESP', pl: 'ESP Overwatch 2', ru: 'ESP Overwatch 2', tr: 'Overwatch 2 ESP', ar: 'ESP Overwatch 2', ja: 'Overwatch 2 ESP', ko: 'Overwatch 2 ESP', zh: 'Overwatch 2 ESP', hi: 'Overwatch 2 ESP', id: 'ESP Overwatch 2', th: 'Overwatch 2 ESP', vi: 'ESP Overwatch 2', uk: 'ESP Overwatch 2', cs: 'Overwatch 2 ESP', ro: 'ESP Overwatch 2', sv: 'Overwatch 2 ESP' },
	'overwatch-2-aimbot': { en: 'Overwatch 2 Aimbot', es: 'Aimbot Overwatch 2', fr: 'Aimbot Overwatch 2', de: 'Overwatch 2 Aimbot', pt: 'Aimbot Overwatch 2', it: 'Aimbot Overwatch 2', nl: 'Overwatch 2 Aimbot', pl: 'Aimbot Overwatch 2', ru: 'Aimbot Overwatch 2', tr: 'Overwatch 2 Aimbot', ar: 'Aimbot Overwatch 2', ja: 'Overwatch 2 Aimbot', ko: 'Overwatch 2 Aimbot', zh: 'Overwatch 2 Aimbot', hi: 'Overwatch 2 Aimbot', id: 'Aimbot Overwatch 2', th: 'Overwatch 2 Aimbot', vi: 'Aimbot Overwatch 2', uk: 'Aimbot Overwatch 2', cs: 'Overwatch 2 Aimbot', ro: 'Aimbot Overwatch 2', sv: 'Overwatch 2 Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Overwatch 2 Wallhack', es: 'Wallhack Overwatch 2', fr: 'Wallhack Overwatch 2', de: 'Overwatch 2 Wallhack', pt: 'Wallhack Overwatch 2', it: 'Wallhack Overwatch 2', nl: 'Overwatch 2 Wallhack', pl: 'Wallhack Overwatch 2', ru: 'Wallhack Overwatch 2', tr: 'Overwatch 2 Wallhack', ar: 'Wallhack Overwatch 2', ja: 'Overwatch 2 Wallhack', ko: 'Overwatch 2 Wallhack', zh: 'Overwatch 2 Wallhack', hi: 'Overwatch 2 Wallhack', id: 'Wallhack Overwatch 2', th: 'Overwatch 2 Wallhack', vi: 'Wallhack Overwatch 2', uk: 'Wallhack Overwatch 2', cs: 'Overwatch 2 Wallhack', ro: 'Wallhack Overwatch 2', sv: 'Overwatch 2 Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	anticheat: { en: 'Easy Anti-Cheat Bypass', es: 'Bypass Easy Anti-Cheat', fr: 'Bypass Easy Anti-Cheat', de: 'Easy Anti-Cheat Bypass', pt: 'Bypass Easy Anti-Cheat', it: 'Bypass Easy Anti-Cheat', nl: 'Easy Anti-Cheat Bypass', pl: 'Bypass Easy Anti-Cheat', ru: 'Bypass Easy Anti-Cheat', tr: 'Easy Anti-Cheat bypass', ar: 'Bypass Easy Anti-Cheat', ja: 'Easy Anti-Cheat Bypass', ko: 'Easy Anti-Cheat Bypass', zh: 'Easy Anti-Cheat Bypass', hi: 'Easy Anti-Cheat Bypass', id: 'Bypass Easy Anti-Cheat', th: 'Easy Anti-Cheat Bypass', vi: 'Bypass Easy Anti-Cheat', uk: 'Bypass Easy Anti-Cheat', cs: 'Easy Anti-Cheat Bypass', ro: 'Bypass Easy Anti-Cheat', sv: 'Easy Anti-Cheat Bypass' },
	'cheats-2026': { en: 'Overwatch 2 Cheats 2026', es: 'Trucos Overwatch 2 2026', fr: 'Triches Overwatch 2 2026', de: 'Overwatch 2 Cheats 2026', pt: 'Cheats Overwatch 2 2026', it: 'Cheat Overwatch 2 2026', nl: 'Overwatch 2 Cheats 2026', pl: 'Cheaty Overwatch 2 2026', ru: 'Читы Overwatch 2 2026', tr: 'Overwatch 2 Hileleri 2026', ar: 'غش Overwatch 2 2026', ja: 'Overwatch 2 Cheats 2026', ko: 'Overwatch 2 Cheats 2026', zh: 'Overwatch 2作弊 2026', hi: 'Overwatch 2 Cheats 2026', id: 'Cheat Overwatch 2 2026', th: 'Overwatch 2 Cheats 2026', vi: 'Cheat Overwatch 2 2026', uk: 'Чіти Overwatch 2 2026', cs: 'Overwatch 2 cheaty 2026', ro: 'Cheats Overwatch 2 2026', sv: 'Overwatch 2 Cheats 2026' },
	hacks: { en: 'Overwatch 2 Cheats', es: 'Trucos Overwatch 2', fr: 'Triches Overwatch 2', de: 'Overwatch 2 Cheats', pt: 'Cheats Overwatch 2', it: 'Cheat Overwatch 2', nl: 'Overwatch 2 Cheats', pl: 'Cheaty Overwatch 2', ru: 'Читы Overwatch 2', tr: 'Overwatch 2 Hileleri', ar: 'غش Overwatch 2', ja: 'Overwatch 2 Cheats', ko: 'Overwatch 2 Cheats', zh: 'Overwatch 2作弊', hi: 'Overwatch 2 Cheats', id: 'Cheat Overwatch 2', th: 'Overwatch 2 Cheats', vi: 'Cheat Overwatch 2', uk: 'Чіти Overwatch 2', cs: 'Overwatch 2 cheaty', ro: 'Cheats Overwatch 2', sv: 'Overwatch 2 Cheats' },
	'cheat-download': { en: 'Overwatch 2 Cheat Download', es: 'Descarga Overwatch 2 Cheats', fr: 'Téléchargement Overwatch 2 Cheats', de: 'Overwatch 2 Cheat Download', pt: 'Download Overwatch 2 Cheats', it: 'Download Overwatch 2 Cheats', nl: 'Overwatch 2 Cheat Download', pl: 'Pobieranie Overwatch 2 Cheats', ru: 'Скачать Overwatch 2 Cheats', tr: 'Overwatch 2 Hile İndir', ar: 'تحميل Overwatch 2 Cheats', ja: 'Overwatch 2 Cheat Download', ko: 'Overwatch 2 Cheat Download', zh: 'Overwatch 2作弊下载', hi: 'Overwatch 2 Cheat Download', id: 'Download Cheat Overwatch 2', th: 'ดาวน์โหลด Overwatch 2 Cheats', vi: 'Tải Cheat Overwatch 2', uk: 'Завантаження Overwatch 2 Cheats', cs: 'Stáhnout Overwatch 2 Cheats', ro: 'Descărcare Overwatch 2 Cheats', sv: 'Overwatch 2 Cheat Download' },
	'crucible-cheats': { en: 'Overwatch 2 Mod Menu', es: 'Menú mod Overwatch 2', fr: 'Menu mod Overwatch 2', de: 'Overwatch 2 Mod-Menü', pt: 'Menu mod Overwatch 2', it: 'Mod menu Overwatch 2', nl: 'Overwatch 2 Mod Menu', pl: 'Mod menu Overwatch 2', ru: 'Мод-меню Overwatch 2', tr: 'Overwatch 2 Mod Menü', ar: 'قائمة مود Overwatch 2', ja: 'Overwatch 2 Mod Menu', ko: 'Overwatch 2 모드 메뉴', zh: 'Overwatch 2修改菜单', hi: 'Overwatch 2 Mod Menu', id: 'Menu mod Overwatch 2', th: 'เมนูมอด Overwatch 2', vi: 'Mod menu Overwatch 2', uk: 'Мод-меню Overwatch 2', cs: 'Overwatch 2 mod menu', ro: 'Meniu mod Overwatch 2', sv: 'Overwatch 2 Mod-meny' },
	'aim-assist': { en: 'Overwatch 2 Soft Aim', es: 'Soft aim Overwatch 2', fr: 'Soft aim Overwatch 2', de: 'Overwatch 2 Soft Aim', pt: 'Soft aim Overwatch 2', it: 'Soft aim Overwatch 2', nl: 'Overwatch 2 Soft Aim', pl: 'Soft aim Overwatch 2', ru: 'Soft aim Overwatch 2', tr: 'Overwatch 2 Soft Aim', ar: 'Soft aim Overwatch 2', ja: 'Overwatch 2 Soft Aim', ko: 'Overwatch 2 Soft Aim', zh: 'Overwatch 2 Soft Aim', hi: 'Overwatch 2 Soft Aim', id: 'Soft aim Overwatch 2', th: 'Overwatch 2 Soft Aim', vi: 'Soft aim Overwatch 2', uk: 'Soft aim Overwatch 2', cs: 'Overwatch 2 Soft Aim', ro: 'Soft aim Overwatch 2', sv: 'Overwatch 2 Soft Aim' },
	'best-cheats': { en: 'Best Overwatch 2 Cheats', es: 'Mejores trucos Overwatch 2', fr: 'Meilleures triches Overwatch 2', de: 'Beste Overwatch 2 Cheats', pt: 'Melhores cheats Overwatch 2', it: 'Migliori cheat Overwatch 2', nl: 'Beste Overwatch 2 Cheats', pl: 'Najlepsze cheaty Overwatch 2', ru: 'Лучшие читы Overwatch 2', tr: 'En İyi Overwatch 2 Hileleri', ar: 'أفضل غش Overwatch 2', ja: '最強Overwatch 2チート', ko: '최고의 Overwatch 2 치트', zh: '最佳Overwatch 2作弊', hi: 'सर्वश्रेष्ठ Overwatch 2 Cheats', id: 'Cheat Overwatch 2 terbaik', th: 'Cheat Overwatch 2 ที่ดีที่สุด', vi: 'Cheat Overwatch 2 tốt nhất', uk: 'Найкращі чіти Overwatch 2', cs: 'Nejlepší Overwatch 2 cheaty', ro: 'Cele mai bune cheats Overwatch 2', sv: 'Bästa Overwatch 2 Cheats' },
	'aimbot-hack': { en: 'Overwatch 2 Aimbot Hack', es: 'Hack aimbot Overwatch 2', fr: 'Hack aimbot Overwatch 2', de: 'Overwatch 2 Aimbot Hack', pt: 'Hack aimbot Overwatch 2', it: 'Hack aimbot Overwatch 2', nl: 'Overwatch 2 Aimbot Hack', pl: 'Hack aimbot Overwatch 2', ru: 'Хак aimbot Overwatch 2', tr: 'Overwatch 2 Aimbot Hilesi', ar: 'هاك Aimbot Overwatch 2', ja: 'Overwatch 2 Aimbot Hack', ko: 'Overwatch 2 에임봇 핵', zh: 'Overwatch 2自瞄外挂', hi: 'Overwatch 2 Aimbot Hack', id: 'Hack aimbot Overwatch 2', th: 'Hack Aimbot Overwatch 2', vi: 'Hack aimbot Overwatch 2', uk: 'Хак aimbot Overwatch 2', cs: 'Overwatch 2 aimbot hack', ro: 'Hack aimbot Overwatch 2', sv: 'Overwatch 2 Aimbot Hack' },
	'esp-hack': { en: 'Overwatch 2 ESP Hack', es: 'Hack ESP Overwatch 2', fr: 'Hack ESP Overwatch 2', de: 'Overwatch 2 ESP Hack', pt: 'Hack ESP Overwatch 2', it: 'Hack ESP Overwatch 2', nl: 'Overwatch 2 ESP Hack', pl: 'Hack ESP Overwatch 2', ru: 'Хак ESP Overwatch 2', tr: 'Overwatch 2 ESP Hilesi', ar: 'هاك ESP Overwatch 2', ja: 'Overwatch 2 ESP Hack', ko: 'Overwatch 2 ESP 핵', zh: 'Overwatch 2 ESP外挂', hi: 'Overwatch 2 ESP Hack', id: 'Hack ESP Overwatch 2', th: 'Hack ESP Overwatch 2', vi: 'Hack ESP Overwatch 2', uk: 'Хак ESP Overwatch 2', cs: 'Overwatch 2 ESP hack', ro: 'Hack ESP Overwatch 2', sv: 'Overwatch 2 ESP Hack' },
	'pve-cheats': { en: 'Overwatch 2 Unlock All', es: 'Unlock all Overwatch 2', fr: 'Unlock all Overwatch 2', de: 'Overwatch 2 Unlock All', pt: 'Unlock all Overwatch 2', it: 'Unlock all Overwatch 2', nl: 'Overwatch 2 Unlock All', pl: 'Unlock all Overwatch 2', ru: 'Unlock all Overwatch 2', tr: 'Overwatch 2 Unlock All', ar: 'Unlock all Overwatch 2', ja: 'Overwatch 2 Unlock All', ko: 'Overwatch 2 Unlock All', zh: 'Overwatch 2 Unlock All', hi: 'Overwatch 2 Unlock All', id: 'Unlock all Overwatch 2', th: 'Overwatch 2 Unlock All', vi: 'Unlock all Overwatch 2', uk: 'Unlock all Overwatch 2', cs: 'Overwatch 2 Unlock All', ro: 'Unlock all Overwatch 2', sv: 'Overwatch 2 Unlock All' },
};

const CTA2_HREF = {
	'overwatch-2-esp': '/overwatch-2-cheats/',
	'overwatch-2-aimbot': '/overwatch-2-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/overwatch-2-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/overwatch-2-cheats/',
	wallhack: '/overwatch-2-esp/',
	radar: '/overwatch-2-esp/',
	anticheat: '/status/',
	'cheats-2026': '/overwatch-2-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'crucible-cheats': '/features/',
	'aim-assist': '/overwatch-2-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/overwatch-2-aimbot/',
	'esp-hack': '/overwatch-2-esp/',
	'pve-cheats': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Overwatch 2 Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Overwatch 2 Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for overwatchcheats.org and Overwatch 2 licenses.`),
		imageAlt: 'Overwatch 2 cheats',
		galleryTitle: 'Overwatch 2 cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed at checkout — not stored on overwatchcheats.org.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Bungie terms of service — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@overwatchcheats.org',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
