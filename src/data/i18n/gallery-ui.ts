import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'Overwatch 2 cheats',
		title: 'Overwatch 2 cheats gallery',
		subtitle: 'Simple Overwatch 2 cheats visuals — ESP, wallhack, aimbot, and radar for Overwatch 2 on PC.',
		lead: 'Overwatch 2 Cheats helps you spot heroes, enemies, loot, and objectives with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'Overwatch 2 cheats esp', copy: 'See players through walls with Overwatch 2 cheats esp and wallhack overlays.' },
			{ title: 'Overwatch 2 cheats radar', copy: 'Track nearby threats with Overwatch 2 cheats radar before you push or rotate.' },
			{ title: 'Overwatch 2 cheats aimbot', copy: 'Use soft aim and aimbot controls tuned for Overwatch 2 raids on Windows PC.' },
		],
		updatesLabel: 'Overwatch 2 cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Galería Overwatch 2',
		subtitle: 'Visuales de Overwatch 2 con loadouts, peleas de escuadrón y combate raid — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Overwatch 2 Cheats está pensado para el loop Quick Play de Overwatch 2: leer el mapa, rastrear escuadrones enemigos, lootear y completar objetivos.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Quick Play y PvE para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Overwatch 2', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Overwatch 2 Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Galerie Overwatch 2',
		subtitle: 'Visuels Overwatch 2 — loadouts, combats d\'escouade et raid — avec ESP, radar et Aimbot.',
		lead: 'Overwatch 2 Cheats suit la boucle Quick Play de Overwatch 2 : lire la carte, suivre les escouades, loot et terminer les objectifs.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Quick Play et PvE pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Overwatch 2', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Overwatch 2 Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Overwatch 2 Galerie',
		subtitle: 'Overwatch 2-Bilder zu Loadouts, Squad-Kämpfen und raid — mit ESP, Radar und Aimbot.',
		lead: 'Overwatch 2 Cheats passt zur Raid-Schleife von Overwatch 2: Karte lesen, Gegner-Trupps tracken, looten und Begegnungen überstehen.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Quick Play und PvE für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Overwatch 2 Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Overwatch 2 Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Galeria Overwatch 2',
		subtitle: 'Visuais de Overwatch 2 com loadouts, combates de esquadrão e raid — com ESP, radar e Aimbot.',
		lead: 'Overwatch 2 Cheats segue o loop Quick Play do Overwatch 2: ler o mapa, rastrear esquadrões, lootar e completar objetivos.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Quick Play e PvE para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Overwatch 2', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Overwatch 2 Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Galleria Overwatch 2',
		subtitle: 'Immagini Overwatch 2 — loadout, scontri di squadra e raid — con ESP, radar e Aimbot.',
		lead: 'Overwatch 2 Cheats è pensato per il loop Quick Play di Overwatch 2: leggere la mappa, tracciare squadre nemiche, loot e completare gli obiettivi.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Quick Play e PvE per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Overwatch 2', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Overwatch 2 Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Overwatch 2 galerij',
		subtitle: 'Overwatch 2-beelden van loadouts, squadgevechten en raid — met ESP, radar en Aimbot.',
		lead: 'Overwatch 2 Cheats volgt de raid-loop van Overwatch 2: kaart lezen, vijandelijke squads volgen, looten en activiteiten voltooien.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Quick Play en PvE voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Overwatch 2 Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Overwatch 2 Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Galeria Overwatch 2',
		subtitle: 'Grafiki Overwatch 2 — loadouty, walki drużynowe i raid — z ESP, radar i Aimbot.',
		lead: 'Overwatch 2 Cheats pasuje do pętli Quick Play Overwatch 2: czytaj mapę, śledź wrogie drużyny, lootuj i ukończ cele.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Quick Play i PvE dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Overwatch 2', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Overwatch 2 Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Галерея Overwatch 2',
		subtitle: 'Визуалы Overwatch 2 — лоадауты, бои отрядов и raid — с ESP, радаром и Aimbot.',
		lead: 'Overwatch 2 Cheats создан для рейд-цикла Overwatch 2: читать карту, отслеживать вражеские отряды, собирать лут и завершать активности.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Quick Play и PvE для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Overwatch 2', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Overwatch 2 Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Overwatch 2 galerisi',
		subtitle: 'Loadout, takım savaşları ve raid görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Overwatch 2 Cheats, Overwatch 2 Quick Play döngüsü için: haritayı oku, düşman takımları izle, loot al ve hedefleri tamamla.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Quick Play ve PvE\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Overwatch 2 Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Overwatch 2 Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'معرض Overwatch 2',
		subtitle: 'صور Overwatch 2 — loadouts ومعارك الفرق وraid — مع ESP ورادار وAimbot.',
		lead: 'Overwatch 2 Cheats مبني لحلقة Quick Play في Overwatch 2: قراءة الخريطة، تتبع الفرق، جمع اللوت وإكمال الأهداف.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Quick Play وPvE لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Overwatch 2', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Overwatch 2 Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Overwatch 2 ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのOverwatch 2ビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Overwatch 2 CheatsはOverwatch 2のレイドループ向け：マップを読み、敵スクワッドを追跡し、ルートして目的を達成する。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Quick PlayとPvEで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Overwatch 2エイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Overwatch 2 Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Overwatch 2 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, Quick Play 컴뱃 Overwatch 2 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Overwatch 2 Cheats는 Overwatch 2 Quick Play 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, 목표 완료.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Quick Play와 PvE에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Overwatch 2 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Overwatch 2 Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Overwatch 2 图库',
		subtitle: 'Overwatch 2 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Overwatch 2 Cheats 为 Overwatch 2 Quick Play 循环设计：读图、追踪敌方小队、搜刮并完成目标。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Quick Play 和 PvE 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Overwatch 2 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Overwatch 2 Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Overwatch 2 गैलरी',
		subtitle: 'Loadout, squad fights और raid visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Overwatch 2 Cheats Overwatch 2 Quick Play loop के लिए: map पढ़ें, enemy squads track करें, loot करें और objectives पूरे करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Quick Play और PvE पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Overwatch 2 Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Overwatch 2 Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Galeri Overwatch 2',
		subtitle: 'Visual Overwatch 2 — loadout, pertempuran squad, dan raid — dengan ESP, radar, dan Aimbot.',
		lead: 'Overwatch 2 Cheats untuk loop Quick Play Overwatch 2: baca peta, lacak squad musuh, loot, dan selesaikan objektif.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Quick Play dan PvE untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Overwatch 2', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Overwatch 2 Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'แกลเลอรี Overwatch 2',
		subtitle: 'ภาพ Overwatch 2 — loadout การต่อสู้ทีม และ raid — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Overwatch 2 Cheats สำหรับลูป Quick Play ของ Overwatch 2: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และทำเป้าหมายให้สำเร็จ',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Quick Play และ PvE เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Overwatch 2', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Overwatch 2 Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Thư viện Overwatch 2',
		subtitle: 'Hình ảnh Overwatch 2 — loadout, chiến đấu squad và raid — với ESP, radar và Aimbot.',
		lead: 'Overwatch 2 Cheats cho vòng Quick Play Overwatch 2: đọc bản đồ, theo dõi squad địch, loot và hoàn thành mục tiêu.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Quick Play và PvE để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Overwatch 2', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Overwatch 2 Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Галерея Overwatch 2',
		subtitle: 'Візуали Overwatch 2 — loadout, бої загонів і raid — з ESP, радаром і Aimbot.',
		lead: 'Overwatch 2 Cheats для рейд-циклу Overwatch 2: читати карту, відстежувати ворожі загони, збирати лут і завершувати активності.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Quick Play і PvE для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Overwatch 2', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Overwatch 2 Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Galerie Overwatch 2',
		subtitle: 'Overwatch 2 vizuály — loadouty, squad souboje a raid — s ESP, radarem a Aimbot.',
		lead: 'Overwatch 2 Cheats pro Quick Play smyčku Overwatch 2: číst mapu, sledovat nepřátelské squady, loot a dokončit cíle.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Quick Play a PvE pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Overwatch 2', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Overwatch 2 Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Galerie Overwatch 2',
		subtitle: 'Vizualuri Overwatch 2 — loadout, lupte de squad și raid — cu ESP, radar și Aimbot.',
		lead: 'Overwatch 2 Cheats pentru bucla Quick Play Overwatch 2: citește harta, urmărește squad-uri inamice, loot și finalizează obiectivele.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Quick Play și PvE pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Overwatch 2', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Overwatch 2 Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Overwatch 2 Cheats',
		title: 'Overwatch 2 galleri',
		subtitle: 'Overwatch 2-bilder — loadouts, squadstrider och raid — med ESP, radar och Aimbot.',
		lead: 'Overwatch 2 Cheats för Overwatch 2:s raid-loop: läs kartan, spåra fiendesquads, loota och slutför mål.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Quick Play och PvE för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Overwatch 2 Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Overwatch 2 Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
