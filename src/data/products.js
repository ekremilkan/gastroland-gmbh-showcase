export const productCategories = [
  {
    id: 1,
    name: "Fleischprodukte",
    image: "/placeholder.svg",
    description: "Hochwertige Fleischprodukte für professionelle Küchen, direkt von ausgewählten Lieferanten.",
    certifications: ["Halal", "ISO 22000"],
    products: [
      { 
        id: 101, 
        name: "Rinderfilet", 
        image: "/placeholder.svg", 
        description: "Sorgfältig ausgewähltes erstklassiges Rinderfilet.", 
        detailedDescription: "Unser Premium-Rinderfilet wird von ausgewählten Bauernhöfen bezogen, wo die Tiere unter optimalen Bedingungen gehalten werden. Das Fleisch zeichnet sich durch seine hervorragende Marmorierung, Zartheit und sein reiches Aroma aus. Ideal für Steaks, Carpaccio oder Rindermedaillons. Vakuumverpackt und bei optimaler Temperatur geliefert."
      },
      { 
        id: 102, 
        name: "Lammkoteletts", 
        image: "/placeholder.svg", 
        description: "Von speziellen Bauernhöfen bezogene frische Lammkoteletts.", 
        detailedDescription: "Diese saftigen Lammkoteletts stammen von jungen Lämmern, die auf saftigen Weiden aufgezogen wurden. Das Fleisch zeichnet sich durch einen milden Geschmack und eine zarte Textur aus. Perfekt zum Grillen oder Braten mit Kräutern der Provence. Jedes Stück ist handverlesen und garantiert höchste Qualität."
      },
      { 
        id: 103, 
        name: "Hähnchenbrust", 
        image: "/placeholder.svg", 
        description: "Aus natürlich gefütterten Hühnern gewonnene Brustfilets.", 
        detailedDescription: "Unsere Hähnchenbrustfilets stammen von Hühnern, die mit natürlichem Futter ohne Antibiotika aufgezogen wurden. Das Fleisch ist mager, proteinreich und vielseitig in der Zubereitung. Jedes Filet ist gleichmäßig geschnitten und garantiert konstante Garzeit. Ideal für Grillgerichte, Geschnetzeltes oder gefüllte Hähnchenbrust."
      },
      { 
        id: 104, 
        name: "Putenfilet", 
        image: "/placeholder.svg", 
        description: "Speziell geschnittenes Putenfilet.", 
        detailedDescription: "Unser mageres Putenfilet wird von ausgewählten Bauernhöfen bezogen, wo die Tiere unter stressfreien Bedingungen aufwachsen. Das Fleisch ist besonders mager und proteinreich, ideal für gesundheitsbewusste Gerichte. Vielseitig einsetzbar von Schnitzel bis Rouladen oder als Basis für Aufschnitt."
      },
      { id: 105, name: "Piliç But", image: "/placeholder.svg", description: "Özel yetiştirilen pilicin but kısmı." },
      { id: 106, name: "Dana Kıyma", image: "/placeholder.svg", description: "Yağ oranı düşük, protein değeri yüksek özel kıyma." },
      { id: 107, name: "Kuzu Kol", image: "/placeholder.svg", description: "Özel seçim kuzu kol eti." },
      { id: 108, name: "Dana Antrikot", image: "/placeholder.svg", description: "Marblingı yüksek dana antrikot." },
      { id: 109, name: "Karışık Izgara Seti", image: "/placeholder.svg", description: "Özel restoranlar için karışık ızgara set." },
      { id: 110, name: "Burger Köftesi", image: "/placeholder.svg", description: "El yapımı özel burger köfteleri." }
    ]
  },
  {
    id: 2,
    name: "Milchprodukte",
    image: "/placeholder.svg",
    description: "Frische und natürliche Milchprodukte von ausgewählten Molkereien aus der Region.",
    certifications: ["ISO 9001", "HACCP"],
    products: [
      { 
        id: 201, 
        name: "Vollmilch", 
        image: "/placeholder.svg", 
        description: "Von natürlichen Bauernhöfen bezogene frische Milch.", 
        detailedDescription: "Unsere Vollmilch wird täglich frisch von regionalen Bauernhöfen geliefert. Die Kühe grasen auf saftigen Weiden und werden artgerecht gehalten, was zu einer besonders cremigen und geschmackvollen Milch führt. Erhältlich in verschiedenen Packungsgrößen für Gastronomie-Bedürfnisse, von 1-Liter-Packungen bis zu 10-Liter-Gebinden."
      },
      { 
        id: 202, 
        name: "Käse", 
        image: "/placeholder.svg", 
        description: "Gereifter Spezialkäse.", 
        detailedDescription: "Unser Sortiment an gereiftem Käse umfasst Spezialitäten aus verschiedenen Regionen Europas. Von mildem Gouda bis hin zu charaktervollem Blauschimmelkäse bieten wir eine Auswahl, die jede Käseplatte bereichert. Alle Sorten werden unter optimalen Bedingungen gereift und gelagert, um das volle Aroma zu entwickeln."
      },
      { id: 203, name: "Beyaz Peynir", image: "/placeholder.svg", description: "Geleneksel yöntemlerle üretilen beyaz peynir." },
      { id: 204, name: "Yoğurt", image: "/placeholder.svg", description: "Doğal mayalı yoğurt." },
      { id: 205, name: "Tereyağı", image: "/placeholder.svg", description: "El yapımı tereyağı." },
      { id: 206, name: "Kaymak", image: "/placeholder.svg", description: "Taze günlük kaymak." },
      { id: 207, name: "Krem Peynir", image: "/placeholder.svg", description: "Profesyonel mutfaklar için krem peynir." },
      { id: 208, name: "Labne", image: "/placeholder.svg", description: "Özel üretim labne peyniri." },
      { id: 209, name: "Mozarella", image: "/placeholder.svg", description: "İtalyan usulü mozarella peyniri." },
      { id: 210, name: "Ayran", image: "/placeholder.svg", description: "Geleneksel yöntemle hazırlanan ayran." }
    ]
  },
  {
    id: 3,
    name: "Unlu Mamüller",
    image: "/placeholder.svg",
    description: "Özel fırınlanmış unlu mamüller",
    certifications: ["Organik", "Glutensiz Seçenekler"],
    products: [
      { id: 301, name: "Simit", image: "/placeholder.svg", description: "Geleneksel Türk simidi." },
      { id: 302, name: "Ekmek Çeşitleri", image: "/placeholder.svg", description: "Farklı çeşitlerde günlük taze ekmekler." },
      { id: 303, name: "Poğaça", image: "/placeholder.svg", description: "Peynirli ve patatesli çeşitleriyle poğaça." },
      { id: 304, name: "Açma", image: "/placeholder.svg", description: "Yumuşak hamurlu açma." },
      { id: 305, name: "Çörek", image: "/placeholder.svg", description: "Tahinli ve cevizli çörek çeşitleri." },
      { id: 306, name: "Sandviç Ekmeği", image: "/placeholder.svg", description: "Hamburger ve sandviç için özel ekmekler." },
      { id: 307, name: "Pizza Hamuru", image: "/placeholder.svg", description: "İtalyan usulü inceltilmiş pizza hamuru." },
      { id: 308, name: "Kruvasan", image: "/placeholder.svg", description: "Fransız usulü tereyağlı kruvasan." },
      { id: 309, name: "Lavaş", image: "/placeholder.svg", description: "Taze ve yumuşak lavaş ekmeği." },
      { id: 310, name: "Glutensiz Ekmek", image: "/placeholder.svg", description: "Özel üretim glutensiz ekmek çeşitleri." }
    ]
  },
  {
    id: 4,
    name: "Bakliyat",
    image: "/placeholder.svg",
    description: "Kaliteli ve doğal bakliyat çeşitleri",
    certifications: ["Organik", "Non-GMO"],
    products: [
      { id: 401, name: "Kırmızı Mercimek", image: "/placeholder.svg", description: "Yüksek protein değerine sahip kırmızı mercimek." },
      { id: 402, name: "Nohut", image: "/placeholder.svg", description: "İri taneli nohut." },
      { id: 403, name: "Kuru Fasulye", image: "/placeholder.svg", description: "Seçkin kuru fasulye." },
      { id: 404, name: "Pirinç", image: "/placeholder.svg", description: "Baldo pirinç." },
      { id: 405, name: "Bulgur", image: "/placeholder.svg", description: "Köftelik ve pilavlık bulgur çeşitleri." },
      { id: 406, name: "Yeşil Mercimek", image: "/placeholder.svg", description: "Özel seçim yeşil mercimek." },
      { id: 407, name: "Barbunya", image: "/placeholder.svg", description: "Toprak barbunya." },
      { id: 408, name: "Mısır", image: "/placeholder.svg", description: "Süt mısır ve beyaz mısır." },
      { id: 409, name: "Buğday", image: "/placeholder.svg", description: "Doğal işlenmemiş buğday." },
      { id: 410, name: "Kinoa", image: "/placeholder.svg", description: "Protein zengini kinoa." }
    ]
  },
  {
    id: 5,
    name: "Sebze ve Meyveler",
    image: "/placeholder.svg",
    description: "Taze sebze ve meyve çeşitleri",
    certifications: ["Organik", "Yerli Üretim"],
    products: [
      { id: 501, name: "Domates", image: "/placeholder.svg", description: "Salkım ve beef çeşitleriyle domates." },
      { id: 502, name: "Salatalık", image: "/placeholder.svg", description: "Bursa ve Çengelköy salatalık çeşitleri." },
      { id: 503, name: "Patates", image: "/placeholder.svg", description: "Kızartma ve haşlama için farklı patates çeşitleri." },
      { id: 504, name: "Soğan", image: "/placeholder.svg", description: "Kuru ve taze soğan çeşitleri." },
      { id: 505, name: "Elma", image: "/placeholder.svg", description: "Golden, starking ve granny smith elma çeşitleri." },
      { id: 506, name: "Portakal", image: "/placeholder.svg", description: "Taze sıkmalık ve sofralık portakal." },
      { id: 507, name: "Limon", image: "/placeholder.svg", description: "C vitamini dolu limon." },
      { id: 508, name: "Biber", image: "/placeholder.svg", description: "Dolma, çarliston ve kıl biber çeşitleri." },
      { id: 509, name: "Patlıcan", image: "/placeholder.svg", description: "Kemer patlıcan." },
      { id: 510, name: "Üzüm", image: "/placeholder.svg", description: "Çekirdekli ve çekirdeksiz üzüm çeşitleri." }
    ]
  },
  {
    id: 6,
    name: "Yağlar",
    image: "/placeholder.svg",
    description: "Özel üretim yağlar",
    certifications: ["Soğuk Sıkım", "Organik"],
    products: [
      { id: 601, name: "Zeytinyağı", image: "/placeholder.svg", description: "Erken hasat soğuk sıkım zeytinyağı." },
      { id: 602, name: "Ayçiçek Yağı", image: "/placeholder.svg", description: "Rafine edilmiş ayçiçek yağı." },
      { id: 603, name: "Mısır Yağı", image: "/placeholder.svg", description: "Yüksek ısıya dayanıklı mısır yağı." },
      { id: 604, name: "Fındık Yağı", image: "/placeholder.svg", description: "Naturel sıkım fındık yağı." },
      { id: 605, name: "Kanola Yağı", image: "/placeholder.svg", description: "Rafine kanola yağı." },
      { id: 606, name: "Tereyağı", image: "/placeholder.svg", description: "Tuzlu ve tuzsuz tereyağı çeşitleri." },
      { id: 607, name: "Margarin", image: "/placeholder.svg", description: "Mutfak ve hamur işi için özel margarinler." },
      { id: 608, name: "Hindistan Cevizi Yağı", image: "/placeholder.svg", description: "Organik hindistan cevizi yağı." },
      { id: 609, name: "Susam Yağı", image: "/placeholder.svg", description: "Asya mutfağı için susam yağı." },
      { id: 610, name: "Avokado Yağı", image: "/placeholder.svg", description: "Soğuk pres avokado yağı." }
    ]
  },
  {
    id: 7,
    name: "Baharatlar",
    image: "/placeholder.svg",
    description: "Doğal ve aromatik baharatlar",
    certifications: ["Doğal", "Katkısız"],
    products: [
      { id: 701, name: "Karabiber", image: "/placeholder.svg", description: "Tane ve çekilmiş karabiber." },
      { id: 702, name: "Kırmızı Pul Biber", image: "/placeholder.svg", description: "Maraş ve Urfa pul biber çeşitleri." },
      { id: 703, name: "Kimyon", image: "/placeholder.svg", description: "Aroması yüksek kimyon." },
      { id: 704, name: "Kekik", image: "/placeholder.svg", description: "Kurutulmuş kekik." },
      { id: 705, name: "Nane", image: "/placeholder.svg", description: "Kurutulmuş nane yaprağı." },
      { id: 706, name: "Zerdeçal", image: "/placeholder.svg", description: "Antioksidan zengini zerdeçal." },
      { id: 707, name: "Tarçın", image: "/placeholder.svg", description: "Toz ve çubuk halinde tarçın." },
      { id: 708, name: "Sumak", image: "/placeholder.svg", description: "Taze limon aromalı sumak." },
      { id: 709, name: "Köri", image: "/placeholder.svg", description: "Hint mutfağının vazgeçilmezi köri." },
      { id: 710, name: "Defne Yaprağı", image: "/placeholder.svg", description: "Kurutulmuş defne yaprağı." }
    ]
  },
  {
    id: 8,
    name: "Deniz Ürünleri",
    image: "/placeholder.svg",
    description: "Taze deniz ürünleri",
    certifications: ["Sürdürülebilir Balıkçılık", "MSC"],
    products: [
      { id: 801, name: "Levrek", image: "/placeholder.svg", description: "Taze ve çiftlik levrek çeşitleri." },
      { id: 802, name: "Çipura", image: "/placeholder.svg", description: "Ege çipurası." },
      { id: 803, name: "Somon", image: "/placeholder.svg", description: "Norveç somonu." },
      { id: 804, name: "Hamsi", image: "/placeholder.svg", description: "Karadeniz hamsisi." },
      { id: 805, name: "Karides", image: "/placeholder.svg", description: "Jumbo boy karides." },
      { id: 806, name: "Kalamar", image: "/placeholder.svg", description: "Temizlenmiş kalamar." },
      { id: 807, name: "Ahtapot", image: "/placeholder.svg", description: "Taze ahtapot." },
      { id: 808, name: "Alabalık", image: "/placeholder.svg", description: "Dere ve çiftlik alabalığı." },
      { id: 809, name: "Midye", image: "/placeholder.svg", description: "Kabuklu ve içi doldurulmuş midye çeşitleri." },
      { id: 810, name: "Ton Balığı", image: "/placeholder.svg", description: "Taze ton balığı." }
    ]
  },
  {
    id: 9,
    name: "Kuruyemiş",
    image: "/placeholder.svg",
    description: "Taze kavrulmuş kuruyemiş çeşitleri",
    certifications: ["Organik", "Taze Kavrum"],
    products: [
      { id: 901, name: "Fındık", image: "/placeholder.svg", description: "Kavrulmuş iç fındık." },
      { id: 902, name: "Ceviz", image: "/placeholder.svg", description: "İç ceviz." },
      { id: 903, name: "Badem", image: "/placeholder.svg", description: "Çiğ ve kavrulmuş badem." },
      { id: 904, name: "Antep Fıstığı", image: "/placeholder.svg", description: "Kavrulmuş Antep fıstığı." },
      { id: 905, name: "Yer Fıstığı", image: "/placeholder.svg", description: "Tuzlu ve tuzsuz yer fıstığı." },
      { id: 906, name: "Kaju", image: "/placeholder.svg", description: "Taze kavrulmuş kaju." },
      { id: 907, name: "Kabak Çekirdeği", image: "/placeholder.svg", description: "Kavrulmuş kabak çekirdeği." },
      { id: 908, name: "Ay Çekirdeği", image: "/placeholder.svg", description: "Kavrulmuş ay çekirdeği." },
      { id: 909, name: "Karışık Kuruyemiş", image: "/placeholder.svg", description: "Özel karışım kuruyemiş." },
      { id: 910, name: "Kuru Üzüm", image: "/placeholder.svg", description: "Çekirdeksiz kuru üzüm." }
    ]
  },
  {
    id: 10,
    name: "İçecekler",
    image: "/placeholder.svg",
    description: "Özel içecek çeşitleri",
    certifications: ["Şeker İlavesiz Seçenekler", "Doğal"],
    products: [
      { id: 1001, name: "Maden Suyu", image: "/placeholder.svg", description: "Sade ve meyveli maden suyu çeşitleri." },
      { id: 1002, name: "Meyve Suları", image: "/placeholder.svg", description: "Farklı meyve suyu çeşitleri." },
      { id: 1003, name: "Türk Kahvesi", image: "/placeholder.svg", description: "Özel çekim Türk kahvesi." },
      { id: 1004, name: "Çay", image: "/placeholder.svg", description: "Karadeniz çayı." },
      { id: 1005, name: "Bitki Çayları", image: "/placeholder.svg", description: "Farklı bitki çayı karışımları." },
      { id: 1006, name: "Espresso Kahve", image: "/placeholder.svg", description: "İtalyan espresso kahve çekirdeği." },
      { id: 1007, name: "Filtre Kahve", image: "/placeholder.svg", description: "Özel kavrum filtre kahve çekirdeği." },
      { id: 1008, name: "Şalgam Suyu", image: "/placeholder.svg", description: "Acılı ve acısız şalgam suyu." },
      { id: 1009, name: "Ayran", image: "/placeholder.svg", description: "Doğal yoğurttan üretilen ayran." },
      { id: 1010, name: "Limonata", image: "/placeholder.svg", description: "Doğal limonata." }
    ]
  },
  {
    id: 11,
    name: "Yöresel Ürünler",
    image: "/placeholder.svg",
    description: "Türkiye'nin farklı bölgelerinden yöresel ürünler",
    certifications: ["Coğrafi İşaret", "Geleneksel Üretim"],
    products: [
      { id: 1101, name: "Antep Baklavası", image: "/placeholder.svg", description: "Orijinal Gaziantep baklavası." },
      { id: 1102, name: "Maraş Dondurması", image: "/placeholder.svg", description: "Gerçek keçi sütünden Maraş dondurması." },
      { id: 1103, name: "Van Otlu Peyniri", image: "/placeholder.svg", description: "Doğal otlarla hazırlanan Van peyniri." },
      { id: 1104, name: "Kayseri Mantısı", image: "/placeholder.svg", description: "El yapımı Kayseri mantısı." },
      { id: 1105, name: "Trabzon Tereyağı", image: "/placeholder.svg", description: "Hakiki Trabzon tereyağı." },
      { id: 1106, name: "Edirne Peyniri", image: "/placeholder.svg", description: "Geleneksel usulde üretilen Edirne peyniri." },
      { id: 1107, name: "İzmit Pişmaniyesi", image: "/placeholder.svg", description: "El yapımı pişmaniye." },
      { id: 1108, name: "Adana Kebap", image: "/placeholder.svg", description: "Adana usulü zırh kıyma kebabı." },
      { id: 1109, name: "Bafra Pidesi", image: "/placeholder.svg", description: "Orijinal Bafra pidesi." },
      { id: 1110, name: "Safranbolu Lokumu", image: "/placeholder.svg", description: "Safranbolu'ya özgü lokum çeşitleri." }
    ]
  },
  {
    id: 12,
    name: "Konserve Ürünler",
    image: "/placeholder.svg",
    description: "Uzun ömürlü konserve ürünler",
    certifications: ["BPA İçermeyen Ambalaj", "Katkısız"],
    products: [
      { id: 1201, name: "Domates Salçası", image: "/placeholder.svg", description: "Ev yapımı domates salçası." },
      { id: 1202, name: "Biber Salçası", image: "/placeholder.svg", description: "Acı ve tatlı biber salçası." },
      { id: 1203, name: "Konserve Bezelye", image: "/placeholder.svg", description: "Taze bezelye konservesi." },
      { id: 1204, name: "Konserve Mısır", image: "/placeholder.svg", description: "Tatlı mısır konservesi." },
      { id: 1205, name: "Ton Balığı Konservesi", image: "/placeholder.svg", description: "Zeytinyağlı ve ay çekirdek yağlı ton balığı." },
      { id: 1206, name: "Zeytin", image: "/placeholder.svg", description: "Yeşil ve siyah zeytin çeşitleri." },
      { id: 1207, name: "Turşu", image: "/placeholder.svg", description: "Karışık ve kornişon turşu." },
      { id: 1208, name: "Reçel", image: "/placeholder.svg", description: "Farklı meyve reçelleri." },
      { id: 1209, name: "Pekmez", image: "/placeholder.svg", description: "Üzüm ve dut pekmezi." },
      { id: 1210, name: "Tahin", image: "/placeholder.svg", description: "Öğütülmüş susam tahin." }
    ]
  },
  {
    id: 13,
    name: "Dondurulmuş Ürünler",
    image: "/placeholder.svg",
    description: "Pratik dondurulmuş gıdalar",
    certifications: ["Şoklanmış", "Koruyucu İçermez"],
    products: [
      { id: 1301, name: "Karışık Sebze", image: "/placeholder.svg", description: "Dondurulmuş karışık sebze." },
      { id: 1302, name: "Bezelye", image: "/placeholder.svg", description: "Dondurulmuş bezelye." },
      { id: 1303, name: "Mısır", image: "/placeholder.svg", description: "Dondurulmuş tatlı mısır." },
      { id: 1304, name: "Patates Kızartması", image: "/placeholder.svg", description: "Dondurulmuş patates kızartması." },
      { id: 1305, name: "Mantı", image: "/placeholder.svg", description: "Dondurulmuş el yapımı mantı." },
      { id: 1306, name: "Köfte", image: "/placeholder.svg", description: "Farklı çeşitlerde dondurulmuş köfte." },
      { id: 1307, name: "Hamburger Köftesi", image: "/placeholder.svg", description: "Dondurulmuş hamburger köftesi." },
      { id: 1308, name: "Pizza", image: "/placeholder.svg", description: "Dondurulmuş pizza çeşitleri." },
      { id: 1309, name: "Milföy Hamuru", image: "/placeholder.svg", description: "Dondurulmuş milföy hamuru." },
      { id: 1310, name: "Karides", image: "/placeholder.svg", description: "Dondurulmuş karides." }
    ]
  },
  {
    id: 14,
    name: "Temizlik Ürünleri",
    image: "/placeholder.svg",
    description: "Profesyonel mutfak temizlik ürünleri",
    certifications: ["Endüstriyel", "Antibakteriyel"],
    products: [
      { id: 1401, name: "Bulaşık Deterjanı", image: "/placeholder.svg", description: "Profesyonel bulaşık deterjanı." },
      { id: 1402, name: "Yüzey Temizleyici", image: "/placeholder.svg", description: "Farklı yüzeyler için özel temizleyiciler." },
      { id: 1403, name: "Yağ Çözücü", image: "/placeholder.svg", description: "Güçlü formüllü yağ çözücü." },
      { id: 1404, name: "Kireç Sökücü", image: "/placeholder.svg", description: "Endüstriyel kireç sökücü." },
      { id: 1405, name: "Dezenfektan", image: "/placeholder.svg", description: "Gıdaya uygun dezenfektan." },
      { id: 1406, name: "Çamaşır Deterjanı", image: "/placeholder.svg", description: "Profesyonel çamaşır deterjanı." },
      { id: 1407, name: "Çamaşır Suyu", image: "/placeholder.svg", description: "Konsantre çamaşır suyu." },
      { id: 1408, name: "El Sabunu", image: "/placeholder.svg", description: "Antibakteriyel el sabunu." },
      { id: 1409, name: "Hijyen Ürünleri", image: "/placeholder.svg", description: "Tek kullanımlık hijyen ürünleri." },
      { id: 1410, name: "Mutfak Havlusu", image: "/placeholder.svg", description: "Endüstriyel mutfak havlusu." }
    ]
  },
  {
    id: 15,
    name: "Mutfak Ekipmanları",
    image: "/placeholder.svg",
    description: "Profesyonel mutfak gereçleri",
    certifications: ["Profesyonel Kalite", "Dayanıklı"],
    products: [
      { id: 1501, name: "Tencere Seti", image: "/placeholder.svg", description: "Profesyonel paslanmaz çelik tencere takımı." },
      { id: 1502, name: "Çelik Tava", image: "/placeholder.svg", description: "Yapışmaz yüzeyli profesyonel tavalar." },
      { id: 1503, name: "Şef Bıçağı", image: "/placeholder.svg", description: "Yüksek kaliteli şef bıçakları." },
      { id: 1504, name: "Kesme Tahtası", image: "/placeholder.svg", description: "Profesyonel kesme tahtaları." },
      { id: 1505, name: "Karıştırma Kabı", image: "/placeholder.svg", description: "Farklı boylarda karıştırma kapları." },
      { id: 1506, name: "Kepçe & Spatula", image: "/placeholder.svg", description: "Profesyonel servis ekipmanları." },
      { id: 1507, name: "Elektrikli Mikser", image: "/placeholder.svg", description: "Endüstriyel mikserler." },
      { id: 1508, name: "Mutfak Tartısı", image: "/placeholder.svg", description: "Hassas mutfak tartıları." },
      { id: 1509, name: "Rende Seti", image: "/placeholder.svg", description: "Profesyonel rende seti." },
      { id: 1510, name: "Servis Tabakları", image: "/placeholder.svg", description: "Şık ve dayanıklı servis tabakları." }
    ]
  }
];

export const findProductCategory = (categoryId) => {
  return productCategories.find(category => category.id === parseInt(categoryId));
};

export const findAllProductCategories = () => {
  return productCategories;
};

export const searchProducts = (query) => {
  if (!query || query.trim() === '') {
    return productCategories;
  }
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return productCategories.filter(category => {
    // Search in category name and description
    if (category.name.toLowerCase().includes(normalizedQuery) || 
        category.description.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    
    // Search in products
    const matchingProducts = category.products.filter(product => 
      product.name.toLowerCase().includes(normalizedQuery) || 
      product.description.toLowerCase().includes(normalizedQuery)
    );
    
    return matchingProducts.length > 0;
  });
};
