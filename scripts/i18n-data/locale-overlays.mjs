/** Full shell UI overlays (common, homeSeo, trustStrip, deals, product, nav aria) for all locales. */

function pick(map, locale) {
	return map[locale] ?? map.en;
}

const reviewsEyebrowFromShell = {
	en: 'Reviews', es: 'Reseñas', fr: 'Avis', de: 'Bewertungen', pt: 'Avaliações', it: 'Recensioni',
	nl: 'Recensies', pl: 'Opinie', ru: 'Отзывы', tr: 'Yorumlar', ar: 'المراجعات', ja: 'レビュー',
	ko: '리뷰', zh: '评价', hi: 'समीक्षाएँ', id: 'Ulasan', th: 'รีวิว', vi: 'Đánh giá',
	uk: 'Відгуки', cs: 'Recenze', ro: 'Recenzii', sv: 'Omdömen',
};

const primaryAria = {
	en: 'Primary', es: 'Principal', fr: 'Principal', de: 'Haupt', pt: 'Principal', it: 'Principale',
	nl: 'Hoofd', pl: 'Główne', ru: 'Основное', tr: 'Ana', ar: 'رئيسي', ja: 'メイン', ko: '기본',
	zh: '主要', hi: 'मुख्य', id: 'Utama', th: 'หลัก', vi: 'Chính', uk: 'Головне', cs: 'Hlavní',
	ro: 'Principal', sv: 'Primär',
};

const mobileAria = {
	en: 'Mobile', es: 'Móvil', fr: 'Mobile', de: 'Mobil', pt: 'Móvel', it: 'Mobile',
	nl: 'Mobiel', pl: 'Mobilne', ru: 'Мобильное', tr: 'Mobil', ar: 'جوال', ja: 'モバイル', ko: '모바일',
	zh: '移动', hi: 'मोबाइल', id: 'Seluler', th: 'มือถือ', vi: 'Di động', uk: 'Мобільне', cs: 'Mobilní',
	ro: 'Mobil', sv: 'Mobil',
};

const englishOfficial = {
	en: 'English — official language', es: 'Inglés — idioma oficial', fr: 'Anglais — langue officielle',
	de: 'Englisch — offizielle Sprache', pt: 'Inglês — idioma oficial', it: 'Inglese — lingua ufficiale',
	nl: 'Engels — officiële taal', pl: 'Angielski — język oficjalny', ru: 'Английский — официальный язык',
	tr: 'İngilizce — resmi dil', ar: 'الإنجليزية — اللغة الرسمية', ja: '英語 — 公式言語', ko: '영어 — 공식 언어',
	zh: '英语 — 官方语言', hi: 'अंग्रेज़ी — आधिकारिक भाषा', id: 'Bahasa Inggris — bahasa resmi',
	th: 'อังกฤษ — ภาษาทางการ', vi: 'Tiếng Anh — ngôn ngữ chính thức', uk: 'Англійська — офіційна мова',
	cs: 'Angličtina — oficiální jazyk', ro: 'Engleza — limba oficială', sv: 'Engelska — officiellt språk',
};

const englishIsOfficial = {
	en: 'English is the official language', es: 'El inglés es el idioma oficial',
	fr: "L'anglais est la langue officielle", de: 'Englisch ist die offizielle Sprache',
	pt: 'Inglês é o idioma oficial', it: "L'inglese è la lingua ufficiale",
	nl: 'Engels is de officiële taal', pl: 'Angielski jest językiem oficjalnym',
	ru: 'Английский — официальный язык', tr: 'Resmi dil İngilizcedir', ar: 'الإنجليزية هي اللغة الرسمية',
	ja: '英語が公式言語です', ko: '영어가 공식 언어입니다', zh: '英语为官方语言',
	hi: 'अंग्रेज़ी आधिकारिक भाषा है', id: 'Bahasa Inggris adalah bahasa resmi',
	th: 'ภาษาอังกฤษเป็นภาษาทางการ', vi: 'Tiếng Anh là ngôn ngữ chính thức',
	uk: 'Англійська — офіційна мова', cs: 'Angličtina je oficiální jazyk',
	ro: 'Engleza este limba oficială', sv: 'Engelska är det officiella språket',
};

const dismiss = {
	en: 'Dismiss', es: 'Cerrar', fr: 'Fermer', de: 'Schließen', pt: 'Fechar', it: 'Chiudi',
	nl: 'Sluiten', pl: 'Zamknij', ru: 'Закрыть', tr: 'Kapat', ar: 'إغلاق', ja: '閉じる', ko: '닫기',
	zh: '关闭', hi: 'बंद करें', id: 'Tutup', th: 'ปิด', vi: 'Đóng', uk: 'Закрити', cs: 'Zavřít',
	ro: 'Închide', sv: 'Stäng',
};

const breadcrumb = {
	en: 'Breadcrumb', es: 'Miguitas de pan', fr: "Fil d'Ariane", de: 'Brotkrumen', pt: 'Trilha',
	it: 'Navigazione', nl: 'Broodkruimel', pl: 'Okruszki', ru: 'Навигация', tr: 'Konum',
	ar: 'مسار التنقل', ja: 'パンくず', ko: '탐색 경로', zh: '面包屑', hi: 'ब्रेडक्रंब',
	id: 'Jejak', th: 'เส้นทาง', vi: 'Đường dẫn', uk: 'Навігація', cs: 'Drozděk', ro: 'Urme', sv: 'Brödsmulor',
};

const gallery = {
	en: 'Gallery', es: 'Galería', fr: 'Galerie', de: 'Galerie', pt: 'Galeria', it: 'Galleria',
	nl: 'Galerij', pl: 'Galeria', ru: 'Галерея', tr: 'Galeri', ar: 'معرض', ja: 'ギャラリー', ko: '갤러리',
	zh: '图库', hi: 'गैलरी', id: 'Galeri', th: 'แกลเลอรี', vi: 'Thư viện ảnh', uk: 'Галерея',
	cs: 'Galerie', ro: 'Galerie', sv: 'Galleri',
};

const inGameLook = {
	en: 'In-game look', es: 'Aspecto en el juego', fr: 'Aspect en jeu', de: 'Im Spiel', pt: 'Visual no jogo',
	it: 'Aspetto in gioco', nl: 'In-game weergave', pl: 'Wygląd w grze', ru: 'В игре', tr: 'Oyun içi görünüm',
	ar: 'المظهر داخل اللعبة', ja: 'ゲーム内表示', ko: '인게임 화면', zh: '游戏内效果', hi: 'इन-गेम दृश्य',
	id: 'Tampilan in-game', th: 'มุมมองในเกม', vi: 'Giao diện trong game', uk: 'У грі', cs: 'Ve hře',
	ro: 'Aspect in-game', sv: 'I spelet',
};

const browse = {
	en: 'Browse', es: 'Explorar', fr: 'Parcourir', de: 'Durchsuchen', pt: 'Explorar', it: 'Sfoglia',
	nl: 'Bladeren', pl: 'Przeglądaj', ru: 'Обзор', tr: 'Göz at', ar: 'تصفح', ja: '閲覧', ko: '둘러보기',
	zh: '浏览', hi: 'ब्राउज़', id: 'Jelajahi', th: 'เรียกดู', vi: 'Duyệt', uk: 'Огляд', cs: 'Procházet',
	ro: 'Răsfoiește', sv: 'Bläddra',
};

const share = {
	en: 'Share', es: 'Compartir', fr: 'Partager', de: 'Teilen', pt: 'Compartilhar', it: 'Condividi',
	nl: 'Delen', pl: 'Udostępnij', ru: 'Поделиться', tr: 'Paylaş', ar: 'مشاركة', ja: '共有', ko: '공유',
	zh: '分享', hi: 'साझा करें', id: 'Bagikan', th: 'แชร์', vi: 'Chia sẻ', uk: 'Поділитися', cs: 'Sdílet',
	ro: 'Distribuie', sv: 'Dela',
};

const guides = {
	en: 'Guides', es: 'Guías', fr: 'Guides', de: 'Guides', pt: 'Guias', it: 'Guide',
	nl: 'Gidsen', pl: 'Poradniki', ru: 'Гайды', tr: 'Rehberler', ar: 'أدلة', ja: 'ガイド', ko: '가이드',
	zh: '指南', hi: 'गाइड', id: 'Panduan', th: 'คู่มือ', vi: 'Hướng dẫn', uk: 'Гайди', cs: 'Průvodce',
	ro: 'Ghiduri', sv: 'Guider',
};

const homeSeoTitle = {
	en: 'Browse by category', es: 'Explorar por categoría', fr: 'Parcourir par catégorie',
	de: 'Nach Kategorie stöbern', pt: 'Explorar por categoria', it: 'Sfoglia per categoria',
	nl: 'Bladeren op categorie', pl: 'Przeglądaj według kategorii', ru: 'Обзор по категориям',
	tr: 'Kategoriye göre göz at', ar: 'تصفح حسب الفئة', ja: 'カテゴリ別に見る', ko: '카테고리별 보기',
	zh: '按类别浏览', hi: 'श्रेणी के अनुसार देखें', id: 'Jelajahi menurut kategori',
	th: 'เรียกดูตามหมวดหมู่', vi: 'Duyệt theo danh mục', uk: 'Огляд за категоріями',
	cs: 'Procházet podle kategorie', ro: 'Explorează pe categorii', sv: 'Bläddra efter kategori',
};

const homeSeoLede = {
	en: 'Short links for features, status, store, and help.',
	es: 'Enlaces rápidos a funciones, estado, tienda y ayuda.',
	fr: 'Liens rapides vers fonctions, statut, boutique et aide.',
	de: 'Kurzlinks zu Features, Status, Shop und Hilfe.',
	pt: 'Links rápidos para recursos, status, loja e ajuda.',
	it: 'Link rapidi a funzioni, stato, negozio e aiuto.',
	nl: 'Snelle links naar functies, status, winkel en hulp.',
	pl: 'Szybkie linki do funkcji, statusu, sklepu i pomocy.',
	ru: 'Быстрые ссылки на функции, статус, магазин и помощь.',
	tr: 'Özellikler, durum, mağaza ve yardım için kısa bağlantılar.',
	ar: 'روابط سريعة للميزات والحالة والمتجر والمساعدة.',
	ja: '機能、ステータス、ストア、ヘルプへのショートリンク。',
	ko: '기능, 상태, 스토어, 도움말 바로가기.',
	zh: '功能、状态、商店和帮助的快捷链接。',
	hi: 'फ़ीचर, स्थिति, स्टोर और सहायता के लिए शॉर्ट लिंक।',
	id: 'Tautan cepat ke fitur, status, toko, dan bantuan.',
	th: 'ลิงก์สั้นไปยังฟีเจอร์ สถานะ ร้านค้า และความช่วยเหลือ',
	vi: 'Liên kết nhanh tới tính năng, trạng thái, cửa hàng và trợ giúp.',
	uk: 'Швидкі посилання на функції, статус, магазин і допомогу.',
	cs: 'Rychlé odkazy na funkce, stav, obchod a nápovědu.',
	ro: 'Linkuri rapide către funcții, status, magazin și ajutor.',
	sv: 'Snabblänkar till funktioner, status, butik och hjälp.',
};

const catFeaturesHint = {
	en: 'What is included', es: 'Qué incluye', fr: 'Ce qui est inclus', de: 'Was enthalten ist',
	pt: 'O que inclui', it: 'Cosa include', nl: 'Wat is inbegrepen', pl: 'Co zawiera',
	ru: 'Что входит', tr: 'Neler dahil', ar: 'ما المُضمَّن', ja: '含まれる内容', ko: '포함 내용',
	zh: '包含内容', hi: 'क्या शामिल है', id: 'Yang termasuk', th: 'สิ่งที่รวมอยู่',
	vi: 'Nội dung bao gồm', uk: 'Що входить', cs: 'Co je zahrnuto', ro: 'Ce este inclus', sv: 'Vad som ingår',
};

const catStatusHint = {
	en: 'Before you play', es: 'Antes de jugar', fr: 'Avant de jouer', de: 'Vor dem Spielen',
	pt: 'Antes de jogar', it: 'Prima di giocare', nl: 'Voor je speelt', pl: 'Zanim zagrasz',
	ru: 'Перед игрой', tr: 'Oynamadan önce', ar: 'قبل اللعب', ja: 'プレイ前', ko: '플레이 전',
	zh: '开始游戏前', hi: 'खेलने से पहले', id: 'Sebelum bermain', th: 'ก่อนเล่น',
	vi: 'Trước khi chơi', uk: 'Перед грою', cs: 'Před hraním', ro: 'Înainte de a juca', sv: 'Innan du spelar',
};

const catStoreHint = {
	en: 'Buy & plans', es: 'Compra y planes', fr: 'Achat et offres', de: 'Kauf & Pläne',
	pt: 'Compra e planos', it: 'Acquisto e piani', nl: 'Kopen & plannen', pl: 'Zakup i plany',
	ru: 'Покупка и тарифы', tr: 'Satın al & planlar', ar: 'الشراء والخطط', ja: '購入とプラン',
	ko: '구매 및 요금제', zh: '购买与方案', hi: 'खरीद और प्लान', id: 'Beli & paket',
	th: 'ซื้อและแพ็กเกจ', vi: 'Mua & gói', uk: 'Купівля та плани', cs: 'Nákup a plány',
	ro: 'Cumpără & planuri', sv: 'Köp & planer',
};

const catHelpHint = {
	en: 'Need a hand', es: '¿Necesitas ayuda?', fr: 'Besoin d’aide', de: 'Brauchst du Hilfe?',
	pt: 'Precisa de ajuda?', it: 'Serve aiuto?', nl: 'Hulp nodig?', pl: 'Potrzebujesz pomocy?',
	ru: 'Нужна помощь?', tr: 'Yardım lazım mı?', ar: 'تحتاج مساعدة؟', ja: 'ヘルプが必要',
	ko: '도움이 필요하신가요?', zh: '需要帮助', hi: 'मदद चाहिए?', id: 'Butuh bantuan?',
	th: 'ต้องการความช่วยเหลือ', vi: 'Cần trợ giúp', uk: 'Потрібна допомога?', cs: 'Potřebujete pomoc?',
	ro: 'Ai nevoie de ajutor?', sv: 'Behöver du hjälp?',
};

const linkLiveStatus = {
	en: 'Live status', es: 'Estado en vivo', fr: 'Statut en direct', de: 'Live-Status',
	pt: 'Status ao vivo', it: 'Stato live', nl: 'Live status', pl: 'Status na żywo',
	ru: 'Статус онлайн', tr: 'Canlı durum', ar: 'الحالة المباشرة', ja: 'ライブステータス',
	ko: '실시간 상태', zh: '实时状态', hi: 'लाइव स्थिति', id: 'Status langsung',
	th: 'สถานะสด', vi: 'Trạng thái trực tiếp', uk: 'Статус онлайн', cs: 'Stav online',
	ro: 'Status live', sv: 'Livestatus',
};

const linkFeatureList = {
	en: 'Full feature list', es: 'Lista completa de funciones', fr: 'Liste complète des fonctions',
	de: 'Vollständige Feature-Liste', pt: 'Lista completa de recursos', it: 'Elenco completo funzioni',
	nl: 'Volledige functielijst', pl: 'Pełna lista funkcji', ru: 'Полный список функций',
	tr: 'Tam özellik listesi', ar: 'قائمة الميزات الكاملة', ja: '全機能リスト', ko: '전체 기능 목록',
	zh: '完整功能列表', hi: 'पूरी फ़ीचर सूची', id: 'Daftar fitur lengkap', th: 'รายการฟีเจอร์ทั้งหมด',
	vi: 'Danh sách tính năng đầy đủ', uk: 'Повний список функцій', cs: 'Úplný seznam funkcí',
	ro: 'Listă completă funcții', sv: 'Fullständig funktionslista',
};

const linkEspOverview = {
	en: 'ESP overview', es: 'Resumen de ESP', fr: 'Aperçu ESP', de: 'ESP-Übersicht',
	pt: 'Visão geral do ESP', it: 'Panoramica ESP', nl: 'ESP-overzicht', pl: 'Przegląd ESP',
	ru: 'Обзор ESP', tr: 'ESP genel bakış', ar: 'نظرة عامة على ESP', ja: 'ESP概要', ko: 'ESP 개요',
	zh: 'ESP 概览', hi: 'ESP अवलोकन', id: 'Ringkasan ESP', th: 'ภาพรวม ESP', vi: 'Tổng quan ESP',
	uk: 'Огляд ESP', cs: 'Přehled ESP', ro: 'Prezentare ESP', sv: 'ESP-översikt',
};

const linkAimbotControls = {
	en: 'Aimbot controls', es: 'Controles de aimbot', fr: 'Contrôles aimbot', de: 'Aimbot-Steuerung',
	pt: 'Controles de aimbot', it: 'Controlli aimbot', nl: 'Aimbot-bediening', pl: 'Sterowanie aimbotem',
	ru: 'Настройки aimbot', tr: 'Aimbot kontrolleri', ar: 'عناصر تحكم aimbot', ja: 'Aimbot設定',
	ko: 'Aimbot 컨트롤', zh: 'Aimbot 控制', hi: 'Aimbot नियंत्रण', id: 'Kontrol aimbot',
	th: 'การควบคุม aimbot', vi: 'Điều khiển aimbot', uk: 'Керування aimbot', cs: 'Ovládání aimbotu',
	ro: 'Controale aimbot', sv: 'Aimbot-kontroller',
};

const linkWallhackOverlay = {
	en: 'Wallhack overlay', es: 'Overlay wallhack', fr: 'Overlay wallhack', de: 'Wallhack-Overlay',
	pt: 'Overlay wallhack', it: 'Overlay wallhack', nl: 'Wallhack-overlay', pl: 'Overlay wallhack',
	ru: 'Wallhack-оверлей', tr: 'Wallhack katmanı', ar: 'طبقة wallhack', ja: 'Wallhackオーバーレイ',
	ko: 'Wallhack 오버레이', zh: 'Wallhack  overlay', hi: 'Wallhack overlay', id: 'Overlay wallhack',
	th: 'Wallhack overlay', vi: 'Lớp wallhack', uk: 'Wallhack-оверлей', cs: 'Wallhack overlay',
	ro: 'Overlay wallhack', sv: 'Wallhack-overlay',
};

const linkPatchNotes = {
	en: 'Patch maintenance notes', es: 'Notas de mantenimiento', fr: 'Notes de maintenance',
	de: 'Patch-Wartungshinweise', pt: 'Notas de manutenção', it: 'Note di manutenzione',
	nl: 'Patch-onderhoudsnotities', pl: 'Notatki konserwacji', ru: 'Заметки по патчам',
	tr: 'Yama bakım notları', ar: 'ملاحظات صيانة التحديثات', ja: 'パッチメンテナンス', ko: '패치 유지보수',
	zh: '补丁维护说明', hi: 'पैच रखरखाव नोट', id: 'Catatan pemeliharaan patch', th: 'บันทึกการบำรุงรักษาแพตช์',
	vi: 'Ghi chú bảo trì bản vá', uk: 'Нотатки з патчів', cs: 'Poznámky k údržbě', ro: 'Note mentenanță patch',
	sv: 'Patch-underhållsanteckningar',
};

const linkQuickSetup = {
	en: 'Quick setup checklist', es: 'Lista rápida de instalación', fr: 'Checklist installation rapide',
	de: 'Kurze Setup-Checkliste', pt: 'Checklist rápido de instalação', it: 'Checklist setup rapido',
	nl: 'Snelle setup-checklist', pl: 'Szybka lista instalacji', ru: 'Быстрый чеклист установки',
	tr: 'Hızlı kurulum listesi', ar: 'قائمة إعداد سريعة', ja: 'クイックセットアップ', ko: '빠른 설치 체크리스트',
	zh: '快速安装清单', hi: 'त्वरित सेटअप चेकलिस्ट', id: 'Checklist setup cepat', th: 'เช็กลิสต์ติดตั้งด่วน',
	vi: 'Danh sách cài đặt nhanh', uk: 'Швидкий чеклист установки', cs: 'Rychlý instalační checklist',
	ro: 'Checklist instalare rapidă', sv: 'Snabb setup-checklista',
};

const linkFaqHub = {
	en: 'Pre-purchase FAQ hub', es: 'Centro FAQ previo a compra', fr: 'Hub FAQ avant achat',
	de: 'FAQ vor dem Kauf', pt: 'Central FAQ pré-compra', it: 'Hub FAQ pre-acquisto',
	nl: 'FAQ vóór aankoop', pl: 'FAQ przed zakupem', ru: 'FAQ перед покупкой', tr: 'Satın alma öncesi SSS',
	ar: 'مركز الأسئلة قبل الشراء', ja: '購入前FAQ', ko: '구매 전 FAQ', zh: '购买前 FAQ',
	hi: 'खरीद से पहले FAQ', id: 'Pusat FAQ pra-beli', th: 'ศูนย์ FAQ ก่อนซื้อ', vi: 'Trung tâm FAQ trước mua',
	uk: 'FAQ перед покупкою', cs: 'FAQ před nákupem', ro: 'Hub FAQ pre-cumpărare', sv: 'FAQ före köp',
};

const linkComparePlans = {
	en: 'Compare monthly & lifetime', es: 'Comparar mensual y vitalicio', fr: 'Comparer mensuel et à vie',
	de: 'Monatlich & Lifetime vergleichen', pt: 'Comparar mensal e vitalício', it: 'Confronta mensile e lifetime',
	nl: 'Vergelijk maand & lifetime', pl: 'Porównaj miesięczny i lifetime', ru: 'Сравнить тарифы',
	tr: 'Aylık ve lifetime karşılaştır', ar: 'قارن الشهري والمدى الحياة', ja: '月額と買い切りを比較',
	ko: '월간·평생 요금 비교', zh: '比较月付与终身', hi: 'मासिक और लाइफ़टाइम तुलना', id: 'Bandingkan bulanan & lifetime',
	th: 'เปรียบเทียบรายเดือนและตลอดชีพ', vi: 'So sánh gói tháng & trọn đời', uk: 'Порівняти плани',
	cs: 'Porovnat měsíční a lifetime', ro: 'Compară lunar și lifetime', sv: 'Jämför månad & livstid',
};

const linkBuyerReviews = {
	en: 'Read buyer reviews', es: 'Leer reseñas de compradores', fr: 'Lire les avis acheteurs',
	de: 'Käuferbewertungen lesen', pt: 'Ler avaliações de compradores', it: 'Leggi recensioni acquirenti',
	nl: 'Kopersrecensies lezen', pl: 'Czytaj opinie kupujących', ru: 'Читать отзывы покупателей',
	tr: 'Alıcı yorumlarını oku', ar: 'اقرأ مراجعات المشترين', ja: '購入者レビューを読む', ko: '구매자 리뷰 읽기',
	zh: '阅读买家评价', hi: 'खरीदार समीक्षाएँ पढ़ें', id: 'Baca ulasan pembeli', th: 'อ่านรีวิวผู้ซื้อ',
	vi: 'Đọc đánh giá người mua', uk: 'Читати відгуки покупців', cs: 'Číst recenze kupujících',
	ro: 'Citește recenzii cumpărători', sv: 'Läs köparomdömen',
};

const linkBuyLicense = {
	en: 'Buy a license', es: 'Comprar licencia', fr: 'Acheter une licence', de: 'Lizenz kaufen',
	pt: 'Comprar licença', it: 'Acquista licenza', nl: 'Licentie kopen', pl: 'Kup licencję',
	ru: 'Купить лицензию', tr: 'Lisans satın al', ar: 'اشترِ ترخيصًا', ja: 'ライセンスを購入', ko: '라이선스 구매',
	zh: '购买许可证', hi: 'लाइसेंस खरीदें', id: 'Beli lisensi', th: 'ซื้อไลเซนส์', vi: 'Mua giấy phép',
	uk: 'Купити ліцензію', cs: 'Koupit licenci', ro: 'Cumpără licență', sv: 'Köp licens',
};

const linkRefunds = {
	en: 'Refund policy', es: 'Política de reembolso', fr: 'Politique de remboursement',
	de: 'Rückerstattungsrichtlinie', pt: 'Política de reembolso', it: 'Politica rimborsi',
	nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası',
	ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति',
	id: 'Kebijakan refund', th: 'นโยบายคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення',
	cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy',
};

const linkContactSupport = {
	en: 'Contact support', es: 'Contactar soporte', fr: 'Contacter le support', de: 'Support kontaktieren',
	pt: 'Contactar suporte', it: 'Contatta supporto', nl: 'Contact opnemen', pl: 'Kontakt z supportem',
	ru: 'Связаться с поддержкой', tr: 'Destekle iletişim', ar: 'اتصل بالدعم', ja: 'サポートに連絡',
	ko: '지원팀 문의', zh: '联系支持', hi: 'सहायता से संपर्क', id: 'Hubungi dukungan', th: 'ติดต่อฝ่ายสนับสนุน',
	vi: 'Liên hệ hỗ trợ', uk: 'Зв’язатися з підтримкою', cs: 'Kontaktovat podporu', ro: 'Contactează suportul',
	sv: 'Kontakta support',
};

const linkInstallGuide = {
	en: 'Install walkthrough', es: 'Guía de instalación paso a paso', fr: 'Guide d’installation détaillé',
	de: 'Installationsanleitung', pt: 'Guia de instalação passo a passo', it: 'Guida installazione passo passo',
	nl: 'Installatiehandleiding', pl: 'Przewodnik instalacji', ru: 'Пошаговая установка',
	tr: 'Kurulum rehberi', ar: 'دليل التثبيت', ja: 'インストール手順', ko: '설치 가이드', zh: '安装指南',
	hi: 'इंस्टॉल गाइड', id: 'Panduan instalasi', th: 'คู่มือติดตั้ง', vi: 'Hướng dẫn cài đặt',
	uk: 'Посібник з установки', cs: 'Průvodce instalací', ro: 'Ghid de instalare', sv: 'Installationsguide',
};

const linkGameGuides = {
	en: 'Game guides library', es: 'Biblioteca de guías', fr: 'Bibliothèque de guides',
	de: 'Spiele-Guides', pt: 'Biblioteca de guias', it: 'Libreria guide', nl: 'Spelgidsen',
	pl: 'Biblioteka poradników', ru: 'Библиотека гайдов', tr: 'Oyun rehberleri', ar: 'مكتبة الأدلة',
	ja: 'ゲームガイド', ko: '게임 가이드', zh: '游戏指南库', hi: 'गेम गाइड', id: 'Pustaka panduan',
	th: 'คลังคู่มือเกม', vi: 'Thư viện hướng dẫn', uk: 'Бібліотека гайдів', cs: 'Knihovna průvodců',
	ro: 'Bibliotecă ghiduri', sv: 'Spelguider',
};

const linkCommunityForum = {
	en: 'Community forum', es: 'Foro de la comunidad', fr: 'Forum communautaire', de: 'Community-Forum',
	pt: 'Fórum da comunidade', it: 'Forum community', nl: 'Communityforum', pl: 'Forum społeczności',
	ru: 'Форум сообщества', tr: 'Topluluk forumu', ar: 'منتدى المجتمع', ja: 'コミュニティフォーラム',
	ko: '커뮤니티 포럼', zh: '社区论坛', hi: 'कम्युनिटी फ़ोरम', id: 'Forum komunitas', th: 'ฟอรัมชุมชน',
	vi: 'Diễn đàn cộng đồng', uk: 'Форум спільноти', cs: 'Komunitní fórum', ro: 'Forum comunitate',
	sv: 'Communityforum',
};

const faqBeforeBuy = {
	en: 'Before you buy', es: 'Antes de comprar', fr: 'Avant d’acheter', de: 'Vor dem Kauf',
	pt: 'Antes de comprar', it: 'Prima di acquistare', nl: 'Voor je koopt', pl: 'Zanim kupisz',
	ru: 'Перед покупкой', tr: 'Satın almadan önce', ar: 'قبل الشراء', ja: '購入前', ko: '구매 전',
	zh: '购买前', hi: 'खरीदने से पहले', id: 'Sebelum membeli', th: 'ก่อนซื้อ',
	vi: 'Trước khi mua', uk: 'Перед покупкою', cs: 'Před nákupem', ro: 'Înainte de cumpărare',
	sv: 'Innan du köper',
};

const faqLede = {
	en: 'Delivery, patch status, and what each plan includes.',
	es: 'Entrega, estado de detección y qué incluye.',
	fr: 'Livraison, statut et contenu inclus.',
	de: 'Lieferung, Status und enthaltene Leistungen.',
	pt: 'Entrega, status e o que está incluído.',
	it: 'Consegna, stato e cosa include.',
	nl: 'Levering, status en wat is inbegrepen.',
	pl: 'Dostawa, status i co zawiera.',
	ru: 'Доставка, статус и что входит.',
	tr: 'Teslimat, durum ve neler dahil.',
	ar: 'التسليم والحالة وما المُضمَّن.',
	ja: '配信、ステータス、含まれる内容。',
	ko: '배송, 상태 및 포함 내용.',
	zh: '交付、状态和包含内容。',
	hi: 'डिलीवरी, स्थिति और क्या शामिल है।',
	id: 'Pengiriman, status, dan apa yang termasuk.',
	th: 'การจัดส่ง สถานะ และสิ่งที่รวมอยู่',
	vi: 'Giao hàng, trạng thái và nội dung bao gồm.',
	uk: 'Доставка, статус і що входить.',
	cs: 'Doručení, stav a co je zahrnuto.',
	ro: 'Livrare, status și ce este inclus.',
	sv: 'Leverans, status och vad som ingår.',
};

const allAnswers = {
	en: 'All answers', es: 'Todas las respuestas', fr: 'Toutes les réponses', de: 'Alle Antworten',
	pt: 'Todas as respostas', it: 'Tutte le risposte', nl: 'Alle antwoorden', pl: 'Wszystkie odpowiedzi',
	ru: 'Все ответы', tr: 'Tüm yanıtlar', ar: 'كل الإجابات', ja: 'すべての回答', ko: '모든 답변',
	zh: '全部答案', hi: 'सभी उत्तर', id: 'Semua jawaban', th: 'คำตอบทั้งหมด', vi: 'Tất cả câu trả lời',
	uk: 'Усі відповіді', cs: 'Všechny odpovědi', ro: 'Toate răspunsurile', sv: 'Alla svar',
};

const openFullPage = {
	en: 'Open full page', es: 'Abrir página completa', fr: 'Ouvrir la page complète',
	de: 'Ganze Seite öffnen', pt: 'Abrir página completa', it: 'Apri pagina completa',
	nl: 'Volledige pagina openen', pl: 'Otwórz pełną stronę', ru: 'Открыть полную страницу',
	tr: 'Tam sayfayı aç', ar: 'افتح الصفحة كاملة', ja: '全文ページを開く', ko: '전체 페이지 열기',
	zh: '打开完整页面', hi: 'पूरा पेज खोलें', id: 'Buka halaman lengkap', th: 'เปิดหน้าเต็ม',
	vi: 'Mở trang đầy đủ', uk: 'Відкрити повну сторінку', cs: 'Otevřít celou stránku',
	ro: 'Deschide pagina completă', sv: 'Öppna fullständig sida',
};

const trustStripInstant = {
	en: 'Instant delivery', es: 'Entrega instantánea', fr: 'Livraison instantanée',
	de: 'Sofortige Lieferung', pt: 'Entrega instantânea', it: 'Consegna istantanea',
	nl: 'Directe levering', pl: 'Natychmiastowa dostawa', ru: 'Мгновенная доставка',
	tr: 'Anında teslimat', ar: 'تسليم فوري', ja: '即時配信', ko: '즉시 배송', zh: '即时交付',
	hi: 'तुरंत डिलीवरी', id: 'Pengiriman instan', th: 'จัดส่งทันที', vi: 'Giao ngay',
	uk: 'Миттєва доставка', cs: 'Okamžité doručení', ro: 'Livrare instantă', sv: 'Omedelbar leverans',
};

const trustStripSecure = {
	en: 'Secure checkout', es: 'Pago seguro', fr: 'Paiement sécurisé', de: 'Sicherer Checkout',
	pt: 'Checkout seguro', it: 'Checkout sicuro', nl: 'Veilig afrekenen', pl: 'Bezpieczna płatność',
	ru: 'Безопасная оплата', tr: 'Güvenli ödeme', ar: 'دفع آمن', ja: '安全な決済', ko: '안전한 결제',
	zh: '安全结账', hi: 'सुरक्षित चेकआउट', id: 'Checkout aman', th: 'ชำระเงินปลอดภัย',
	vi: 'Thanh toán an toàn', uk: 'Безпечна оплата', cs: 'Bezpečná platba', ro: 'Checkout securizat',
	sv: 'Säker betalning',
};

const trustStripSupport = {
	en: '24/7 support', es: 'Soporte 24/7', fr: 'Support 24/7', de: '24/7 Support',
	pt: 'Suporte 24/7', it: 'Supporto 24/7', nl: '24/7 support', pl: 'Wsparcie 24/7',
	ru: 'Поддержка 24/7', tr: '7/24 destek', ar: 'دعم 24/7', ja: '24時間サポート', ko: '24/7 지원',
	zh: '24/7 支持', hi: '24/7 सहायता', id: 'Dukungan 24/7', th: 'ซัพพอร์ต 24/7',
	vi: 'Hỗ trợ 24/7', uk: 'Підтримка 24/7', cs: 'Podpora 24/7', ro: 'Suport 24/7', sv: '24/7 support',
};

const chooseLicense = {
	en: 'Choose your license', es: 'Elige tu licencia', fr: 'Choisissez votre licence',
	de: 'Wähle deine Lizenz', pt: 'Escolha sua licença', it: 'Scegli la licenza',
	nl: 'Kies je licentie', pl: 'Wybierz licencję', ru: 'Выберите лицензию', tr: 'Lisansını seç',
	ar: 'اختر الترخيص', ja: 'ライセンスを選択', ko: '라이선스 선택', zh: '选择许可证',
	hi: 'अपना लाइसेंस चुनें', id: 'Pilih lisensi', th: 'เลือกไลเ�ens์', vi: 'Chọn giấy phép',
	uk: 'Оберіть ліцензію', cs: 'Vyberte licenci', ro: 'Alege licența', sv: 'Välj din licens',
};

const productDays30 = {
	en: '30 days', es: '30 días', fr: '30 jours', de: '30 Tage', pt: '30 dias', it: '30 giorni',
	nl: '30 dagen', pl: '30 dni', ru: '30 дней', tr: '30 gün', ar: '30 يومًا', ja: '30日',
	ko: '30일', zh: '30 天', hi: '30 दिन', id: '30 hari', th: '30 วัน', vi: '30 ngày',
	uk: '30 днів', cs: '30 dní', ro: '30 zile', sv: '30 dagar',
};

const productOneTime = {
	en: 'One-time', es: 'Pago único', fr: 'Paiement unique', de: 'Einmalig', pt: 'Pagamento único',
	it: 'Una tantum', nl: 'Eenmalig', pl: 'Jednorazowo', ru: 'Разово', tr: 'Tek seferlik',
	ar: 'مرة واحدة', ja: '買い切り', ko: '일회성', zh: '一次性', hi: 'एक बार', id: 'Sekali bayar',
	th: 'ครั้งเดียว', vi: 'Một lần', uk: 'Одноразово', cs: 'Jednorázově', ro: 'O singură dată',
	sv: 'Engångs',
};

/** Build overlay patches for one locale from ui-strings nav/hero. */
export function buildLocaleOverlay(locale, ui) {
	const n = ui.nav ?? {};
	const h = ui.hero ?? {};
	return {
		nav: {
			primaryAria: pick(primaryAria, locale),
			mobileAria: pick(mobileAria, locale),
		},
		common: {
			englishOfficial: pick(englishOfficial, locale),
			englishIsOfficial: pick(englishIsOfficial, locale),
			dismiss: pick(dismiss, locale),
			languageSuggestion: pick({ en: 'Language suggestion', es: 'Sugerencia de idioma', fr: 'Suggestion de langue', de: 'Sprachvorschlag', pt: 'Sugestão de idioma', it: 'Suggerimento lingua', nl: 'Taalsuggestie', pl: 'Sugestia języka', ru: 'Предложение языка', tr: 'Dil önerisi', ar: 'اقتراح اللغة', ja: '言語の提案', ko: '언어 제안', zh: '语言建议', hi: 'भाषा सुझाव', id: 'Saran bahasa', th: 'คำแนะนำภาษา', vi: 'Gợi ý ngôn ngữ', uk: 'Пропозиція мови', cs: 'Návrh jazyka', ro: 'Sugestie limbă', sv: 'Språkförslag' }, locale),
			localeVersion: pick({ en: '{{name}} version', es: 'versión en {{name}}', fr: 'version {{name}}', de: '{{name}}-Version', pt: 'versão em {{name}}', it: 'versione {{name}}', nl: '{{name}}-versie', pl: 'wersja {{name}}', ru: 'версия {{name}}', tr: '{{name}} sürümü', ar: 'نسخة {{name}}', ja: '{{name}}版', ko: '{{name}} 버전', zh: '{{name}} 版本', hi: '{{name}} संस्करण', id: 'versi {{name}}', th: 'เวอร์ชัน {{name}}', vi: 'phiên bản {{name}}', uk: 'версія {{name}}', cs: 'verze {{name}}', ro: 'versiune {{name}}', sv: '{{name}}-version' }, locale),
			breadcrumb: pick(breadcrumb, locale),
			gallery: pick(gallery, locale),
			inGameLook: pick(inGameLook, locale),
			browse: pick(browse, locale),
			share: pick(share, locale),
			guides: pick(guides, locale),
			shareX: pick({ en: 'Share on X', es: 'Compartir en X', fr: 'Partager sur X', de: 'Auf X teilen', pt: 'Compartilhar no X', it: 'Condividi su X', nl: 'Delen op X', pl: 'Udostępnij na X', ru: 'Поделиться в X', tr: "X'te paylaş", ar: 'مشاركة على X', ja: 'Xで共有', ko: 'X에 공유', zh: '在 X 上分享', hi: 'X पर साझा करें', id: 'Bagikan di X', th: 'แชร์บน X', vi: 'Chia sẻ trên X', uk: 'Поділитися в X', cs: 'Sdílet na X', ro: 'Distribuie pe X', sv: 'Dela på X' }, locale),
			shareReddit: pick({ en: 'Share on Reddit', es: 'Compartir en Reddit', fr: 'Partager sur Reddit', de: 'Auf Reddit teilen', pt: 'Compartilhar no Reddit', it: 'Condividi su Reddit', nl: 'Delen op Reddit', pl: 'Udostępnij na Reddit', ru: 'Поделиться в Reddit', tr: "Reddit'te paylaş", ar: 'مشاركة على Reddit', ja: 'Redditで共有', ko: 'Reddit에 공유', zh: '在 Reddit 上分享', hi: 'Reddit पर साझा करें', id: 'Bagikan di Reddit', th: 'แชร์บน Reddit', vi: 'Chia sẻ trên Reddit', uk: 'Поділитися в Reddit', cs: 'Sdílet na Reddit', ro: 'Distribuie pe Reddit', sv: 'Dela på Reddit' }, locale),
			shareFacebook: pick({ en: 'Share on Facebook', es: 'Compartir en Facebook', fr: 'Partager sur Facebook', de: 'Auf Facebook teilen', pt: 'Compartilhar no Facebook', it: 'Condividi su Facebook', nl: 'Delen op Facebook', pl: 'Udostępnij na Facebook', ru: 'Поделиться в Facebook', tr: "Facebook'ta paylaş", ar: 'مشاركة على Facebook', ja: 'Facebookで共有', ko: 'Facebook에 공유', zh: '在 Facebook 上分享', hi: 'Facebook पर साझा करें', id: 'Bagikan di Facebook', th: 'แชร์บน Facebook', vi: 'Chia sẻ trên Facebook', uk: 'Поділитися у Facebook', cs: 'Sdílet na Facebook', ro: 'Distribuie pe Facebook', sv: 'Dela på Facebook' }, locale),
			packageStatus: pick({ en: 'Package status', es: 'Estado del paquete', fr: 'Statut du pack', de: 'Paketstatus', pt: 'Status do pacote', it: 'Stato pacchetto', nl: 'Pakketstatus', pl: 'Status pakietu', ru: 'Статус пакета', tr: 'Paket durumu', ar: 'حالة الحزمة', ja: 'パッケージステータス', ko: '패키지 상태', zh: '套餐状态', hi: 'पैकेज स्थिति', id: 'Status paket', th: 'สถานะแพ็กเกจ', vi: 'Trạng thái gói', uk: 'Статус пакета', cs: 'Stav balíčku', ro: 'Status pachet', sv: 'Paketstatus' }, locale),
			productDetails: pick({ en: 'Product details', es: 'Detalles del producto', fr: 'Détails du produit', de: 'Produktdetails', pt: 'Detalhes do produto', it: 'Dettagli prodotto', nl: 'Productdetails', pl: 'Szczegóły produktu', ru: 'Детали продукта', tr: 'Ürün detayları', ar: 'تفاصيل المنتج', ja: '製品詳細', ko: '제품 세부정보', zh: '产品详情', hi: 'उत्पाद विवरण', id: 'Detail produk', th: 'รายละเอียดสินค้า', vi: 'Chi tiết sản phẩm', uk: 'Деталі продукту', cs: 'Detaily produktu', ro: 'Detalii produs', sv: 'Produktdetaljer' }, locale),
			featured: pick({ en: 'Featured', es: 'Destacado', fr: 'À la une', de: 'Empfohlen', pt: 'Destaque', it: 'In evidenza', nl: 'Uitgelicht', pl: 'Polecane', ru: 'Избранное', tr: 'Öne çıkan', ar: 'مميز', ja: '注目', ko: '추천', zh: '精选', hi: 'विशेष', id: 'Unggulan', th: 'แนะนำ', vi: 'Nổi bật', uk: 'Обране', cs: 'Doporučené', ro: 'Recomandat', sv: 'Utvalt' }, locale),
			allQuestions: pick({ en: 'All questions', es: 'Todas las preguntas', fr: 'Toutes les questions', de: 'Alle Fragen', pt: 'Todas as perguntas', it: 'Tutte le domande', nl: 'Alle vragen', pl: 'Wszystkie pytania', ru: 'Все вопросы', tr: 'Tüm sorular', ar: 'كل الأسئلة', ja: 'すべての質問', ko: '모든 질문', zh: '所有问题', hi: 'सभी प्रश्न', id: 'Semua pertanyaan', th: 'คำถามทั้งหมด', vi: 'Tất cả câu hỏi', uk: 'Усі запитання', cs: 'Všechny otázky', ro: 'Toate întrebările', sv: 'Alla frågor' }, locale),
			openAnyQuestion: pick({ en: 'Open any question for the full answer.', es: 'Abre cualquier pregunta para ver la respuesta completa.', fr: 'Ouvrez une question pour la réponse complète.', de: 'Öffne eine Frage für die vollständige Antwort.', pt: 'Abra qualquer pergunta para a resposta completa.', it: 'Apri una domanda per la risposta completa.', nl: 'Open een vraag voor het volledige antwoord.', pl: 'Otwórz pytanie, aby zobaczyć pełną odpowiedź.', ru: 'Откройте вопрос для полного ответа.', tr: 'Tam yanıt için bir soru açın.', ar: 'افتح أي سؤال للإجابة الكاملة.', ja: '質問を開いて全文を表示。', ko: '질문을 열어 전체 답변을 확인하세요.', zh: '打开任意问题查看完整答案。', hi: 'पूरा उत्तर देखने के लिए कोई भी प्रश्न खोलें।', id: 'Buka pertanyaan untuk jawaban lengkap.', th: 'เปิดคำถามเพื่อดูคำตอบเต็ม', vi: 'Mở câu hỏi để xem câu trả lời đầy đủ.', uk: 'Відкрийте питання для повної відповіді.', cs: 'Otevřete otázku pro celou odpověď.', ro: 'Deschide o întrebare pentru răspunsul complet.', sv: 'Öppna en fråga för hela svaret.' }, locale),
			officialResources: pick({ en: 'Official Overwatch 2 resources', es: 'Recursos oficiales de Overwatch 2', fr: 'Ressources officielles Overwatch 2', de: 'Offizielle Overwatch 2-Ressourcen', pt: 'Recursos oficiais de Overwatch 2', it: 'Risorse ufficiali Overwatch 2', nl: 'Officiële Overwatch 2-bronnen', pl: 'Oficjalne zasoby Overwatch 2', ru: 'Официальные ресурсы Overwatch 2', tr: 'Resmi Overwatch 2 kaynakları', ar: 'موارد Overwatch 2 الرسمية', ja: 'Overwatch 2公式リソース', ko: 'Overwatch 2 공식 리소스', zh: 'Overwatch 2 官方资源', hi: 'आधिकारिक Overwatch 2 संसाधन', id: 'Sumber resmi Overwatch 2', th: 'แหล่งข้อมูล Overwatch 2 อย่างเป็นทางการ', vi: 'Tài nguyên Overwatch 2 chính thức', uk: 'Офіційні ресурси Overwatch 2', cs: 'Oficiální zdroje Overwatch 2', ro: 'Resurse oficiale Overwatch 2', sv: 'Officiella Overwatch 2-resurser' }, locale),
			officialResourcesLead: pick({ en: 'Learn the game from official and community-maintained references:', es: 'Aprende el juego con referencias oficiales y de la comunidad:', fr: 'Apprenez le jeu avec des références officielles et communautaires :', de: 'Lerne das Spiel mit offiziellen und Community-Referenzen:', pt: 'Aprenda o jogo com referências oficiais e da comunidade:', it: 'Impara il gioco con riferimenti ufficiali e della community:', nl: 'Leer het spel via officiële en community-referenties:', pl: 'Poznaj grę dzięki oficjalnym i społecznościowym materiałom:', ru: 'Изучайте игру по официальным и community-источникам:', tr: 'Oyunu resmi ve topluluk kaynaklarıyla öğrenin:', ar: 'تعلّم اللعبة من مراجع رسمية ومجتمعية:', ja: '公式およびコミュニティの参考資料で学ぶ:', ko: '공식 및 커뮤니티 참고 자료로 게임을 배우세요:', zh: '通过官方和社区参考资料了解游戏：', hi: 'आधिकारिक और समुदाय संदर्भों से गेम सीखें:', id: 'Pelajari game dari referensi resmi dan komunitas:', th: 'เรียนรู้เกมจากแหล่งอ้างอิงอย่างเป็นทางการและชุมชน:', vi: 'Tìm hiểu game qua tài liệu chính thức và cộng đồng:', uk: 'Вивчайте гру за офіційними та community-джерелами:', cs: 'Naučte se hru z oficiálních a komunitních zdrojů:', ro: 'Învățați jocul din referințe oficiale și comunitare:', sv: 'Lär dig spelet via officiella och community-referenser:' }, locale),
			support: pick({ en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'ฝ่ายสนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' }, locale),
			privacy: pick({ en: 'Privacy', es: 'Privacidad', fr: 'Confidentialité', de: 'Datenschutz', pt: 'Privacidade', it: 'Privacy', nl: 'Privacy', pl: 'Prywatność', ru: 'Конфиденциальность', tr: 'Gizlilik', ar: 'الخصوصية', ja: 'プライバシー', ko: '개인정보', zh: '隐私', hi: 'गोपनीयता', id: 'Privasi', th: 'ความเป็นส่วนตัว', vi: 'Quyền riêng tư', uk: 'Конфіденційність', cs: 'Soukromí', ro: 'Confidențialitate', sv: 'Integritet' }, locale),
			terms: pick({ en: 'Terms', es: 'Términos', fr: 'Conditions', de: 'AGB', pt: 'Termos', it: 'Termini', nl: 'Voorwaarden', pl: 'Regulamin', ru: 'Условия', tr: 'Şartlar', ar: 'الشروط', ja: '利用規約', ko: '약관', zh: '条款', hi: 'नियम', id: 'Ketentuan', th: 'ข้อกำหนด', vi: 'Điều khoản', uk: 'Умови', cs: 'Podmínky', ro: 'Termeni', sv: 'Villkor' }, locale),
			copyright: pick({ en: '© {{year}} {{brand}}', es: '© {{year}} {{brand}}', fr: '© {{year}} {{brand}}', de: '© {{year}} {{brand}}', pt: '© {{year}} {{brand}}', it: '© {{year}} {{brand}}', nl: '© {{year}} {{brand}}', pl: '© {{year}} {{brand}}', ru: '© {{year}} {{brand}}', tr: '© {{year}} {{brand}}', ar: '© {{year}} {{brand}}', ja: '© {{year}} {{brand}}', ko: '© {{year}} {{brand}}', zh: '© {{year}} {{brand}}', hi: '© {{year}} {{brand}}', id: '© {{year}} {{brand}}', th: '© {{year}} {{brand}}', vi: '© {{year}} {{brand}}', uk: '© {{year}} {{brand}}', cs: '© {{year}} {{brand}}', ro: '© {{year}} {{brand}}', sv: '© {{year}} {{brand}}' }, locale),
		},
		homeSeo: {
			eyebrow: pick(guides, locale),
			title: pick(homeSeoTitle, locale),
			lede: pick(homeSeoLede, locale),
			catFeatures: n.features,
			catFeaturesHint: pick(catFeaturesHint, locale),
			catStatus: n.updates,
			catStatusHint: pick(catStatusHint, locale),
			catStore: n.pricing,
			catStoreHint: pick(catStoreHint, locale),
			catHelp: pick({ en: 'Help', es: 'Ayuda', fr: 'Aide', de: 'Hilfe', pt: 'Ajuda', it: 'Aiuto', nl: 'Help', pl: 'Pomoc', ru: 'Помощь', tr: 'Yardım', ar: 'مساعدة', ja: 'ヘルプ', ko: '도움말', zh: '帮助', hi: 'सहायता', id: 'Bantuan', th: 'ช่วยเหลือ', vi: 'Trợ giúp', uk: 'Допомога', cs: 'Nápověda', ro: 'Ajutor', sv: 'Hjälp' }, locale),
			catHelpHint: pick(catHelpHint, locale),
			linkFeatureList: pick(linkFeatureList, locale),
			linkEspOverview: pick(linkEspOverview, locale),
			linkAimbotControls: pick(linkAimbotControls, locale),
			linkWallhackOverlay: pick(linkWallhackOverlay, locale),
			linkLiveStatus: pick(linkLiveStatus, locale),
			linkPatchNotes: pick(linkPatchNotes, locale),
			linkQuickSetup: pick(linkQuickSetup, locale),
			linkFaqHub: pick(linkFaqHub, locale),
			linkComparePlans: pick(linkComparePlans, locale),
			linkBuyerReviews: pick(linkBuyerReviews, locale),
			linkBuyLicense: pick(linkBuyLicense, locale),
			linkRefunds: pick(linkRefunds, locale),
			linkContactSupport: pick(linkContactSupport, locale),
			linkInstallGuide: pick(linkInstallGuide, locale),
			linkGameGuides: pick(linkGameGuides, locale),
			linkCommunityForum: pick(linkCommunityForum, locale),
			faqEyebrow: n.faq,
			faqTitle: pick(faqBeforeBuy, locale),
			faqLede: pick(faqLede, locale),
			allAnswers: pick(allAnswers, locale),
		},
		trustStrip: {
			instantDelivery: pick(trustStripInstant, locale),
			secureCheckout: pick(trustStripSecure, locale),
			support247: pick(trustStripSupport, locale),
		},
		deals: {
			chooseLicense: pick(chooseLicense, locale),
			features: n.features,
		},
		product: {
			days30: pick(productDays30, locale),
			oneTime: pick(productOneTime, locale),
			plans: pick({ en: 'Plans', es: 'Planes', fr: 'Offres', de: 'Pläne', pt: 'Planos', it: 'Piani', nl: 'Plannen', pl: 'Plany', ru: 'Тарифы', tr: 'Planlar', ar: 'الخطط', ja: 'プラン', ko: '요금제', zh: '方案', hi: 'प्लान', id: 'Paket', th: 'แพ็กเกจ', vi: 'Gói', uk: 'Плани', cs: 'Plány', ro: 'Planuri', sv: 'Planer' }, locale),
			perMonth: pick({ en: '/ month', es: '/ mes', fr: '/ mois', de: '/ Monat', pt: '/ mês', it: '/ mese', nl: '/ maand', pl: '/ mies.', ru: '/ мес.', tr: '/ ay', ar: '/ شهر', ja: '/ 月', ko: '/월', zh: '/月', hi: '/ माह', id: '/ bulan', th: '/ เดือน', vi: '/ tháng', uk: '/ міс.', cs: '/ měs.', ro: '/ lună', sv: '/ månad' }, locale),
			once: pick({ en: ' once', es: ' una vez', fr: ' une fois', de: ' einmal', pt: ' uma vez', it: ' una volta', nl: ' eenmalig', pl: ' raz', ru: ' раз', tr: ' bir kez', ar: ' مرة', ja: ' 一回', ko: ' 1회', zh: ' 一次', hi: ' एक बार', id: ' sekali', th: ' ครั้ง', vi: ' một lần', uk: ' раз', cs: ' jednou', ro: ' o dată', sv: ' en gång' }, locale),
			buyMonthly: pick({ en: 'Buy monthly', es: 'Comprar mensual', fr: 'Acheter mensuel', de: 'Monatlich kaufen', pt: 'Comprar mensal', it: 'Acquista mensile', nl: 'Maandelijks kopen', pl: 'Kup miesięcznie', ru: 'Купить на месяц', tr: 'Aylık satın al', ar: 'اشترِ شهريًا', ja: '月額購入', ko: '월간 구매', zh: '购买月付', hi: 'मासिक खरीदें', id: 'Beli bulanan', th: 'ซื้อรายเดือน', vi: 'Mua theo tháng', uk: 'Купити на місяць', cs: 'Koupit měsíčně', ro: 'Cumpără lunar', sv: 'Köp månadsvis' }, locale),
			buyLifetime: pick({ en: 'Buy lifetime', es: 'Comprar de por vida', fr: 'Acheter à vie', de: 'Lifetime kaufen', pt: 'Comprar vitalício', it: 'Acquista a vita', nl: 'Lifetime kopen', pl: 'Kup dożywotnio', ru: 'Купить навсегда', tr: 'Ömür boyu satın al', ar: 'اشترِ مدى الحياة', ja: '永久版を購入', ko: '평생 구매', zh: '购买终身', hi: 'लाइफ़टाइम खरीदें', id: 'Beli seumur hidup', th: 'ซื้อตลอดชีพ', vi: 'Mua trọn đời', uk: 'Купити назавжди', cs: 'Koupit navždy', ro: 'Cumpără pe viață', sv: 'Köp livstid' }, locale),
		},
	};
}
