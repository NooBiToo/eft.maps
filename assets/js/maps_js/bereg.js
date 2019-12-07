var image = "maps/bereg";
var width = 5864;
var height = 3808;
var maxLevel = 5;
var minLevel = 4;
var orgLevel = 5;

var keys = L.layerGroup(),
  places = L.layerGroup(),
  exitScav = L.layerGroup(),
  exitPMC = L.layerGroup(),
  shronKeys = L.layerGroup(),
  JustMaps = L.layerGroup();

// Some weird calculations to fit the image to the initial position
// Leaflet has some bugs there. The fitBounds method is not correct for large scale bounds
var tileWidth = 256 * Math.pow(2, orgLevel);
var radius = tileWidth / 2 / Math.PI;
var rx = width - tileWidth / 2;
var ry = -height + tileWidth / 2;

var west = -180;
var east = (180 / Math.PI) * (rx / radius);
var north = 85.05;
var south = (360 / Math.PI) * (Math.atan(Math.exp(ry / radius)) - Math.PI / 4);
var rc = (tileWidth / 2 + ry) / 2;
var centerLat =
  (360 / Math.PI) * (Math.atan(Math.exp(rc / radius)) - Math.PI / 4);
var centerLon = (west + east) / 3;
var bounds = [
  [south, west],
  [north, east]
];

var map = new L.Map("map", { maxBounds: bounds });

L.tileLayer(image + "/{z}-{x}-{y}.jpg", {
  maxZoom: maxLevel,
  minZoom: minLevel,
  opacity: 1.0,
  noWrap: true,
  bounds: bounds
}).addTo(map);

var zoom = map.getBoundsZoom(bounds);
var center = new L.latLng(centerLat, centerLon);

map.setView(center, zoom);

var KeyIcon = L.Icon.extend({
  options: {
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -10]
  }
});

var keyIcon = new KeyIcon({ iconUrl: "/img/key.png" }),
  caseIcon = new KeyIcon({ iconUrl: "/img/case.png" }),
  exitIcon = new KeyIcon({ iconUrl: "/img/exit.png" }),
  dobbyIcon = new KeyIcon({ iconUrl: "/img/dobby.png" }),
  labaIcon = new KeyIcon({ iconUrl: "/img/laba.png" }),
  shronIcon = new KeyIcon({ iconUrl: "assets/img/klad.png" }),
  exitIcon2 = new KeyIcon({ iconUrl: "/img/exit2.png" });

//Точки интереса по заданиям
L.marker([73.995328, 50.800781])
  .addTo(places)
  .bindPopup(
    "Две машины скорой помощи у тоннеля</br><strong>Врачебная тайна. Часть 1</strong></br><a href='https://tarkovwiki.ru/quest/vrachebnaya-tayna-chast-1' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([47.754098, -37.441406])
  .addTo(places)
  .bindPopup(
    "Третья машина скорой помощи, квест</br><strong>Врачебная тайна. Часть 1</strong></br><a href='https://tarkovwiki.ru/quest/vrachebnaya-tayna-chast-1' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([47.754098, -27.202148])
  .addTo(places)
  .bindPopup(
    "1-й хим. контейнер в комнате 112 под ключом</br><strong>Витамины. Часть 1</strong></br><a href='https://tarkovwiki.ru/quest/vitaminy-chast-1' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([67.892086, -108.149414])
  .addTo(places)
  .bindPopup(
    "Контроллер мотора в ящике</br><strong>Лэндлиз</strong> для Лыжника</br><a href='https://tarkovwiki.ru/quest/lendliz' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([47.783635, -40.649414])
  .addTo(places)
  .bindPopup(
    "Контроллер мотора на балконе 306 номера</br><strong>Лэндлиз</strong> для Лыжника</br><a href='https://tarkovwiki.ru/quest/lendliz' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([48.893615, -26.015625])
  .addTo(places)
  .bindPopup(
    "Волоконно-оптический гироскоп в 216</br><strong>Лэндлиз</strong> для Лыжника</br><a href='https://tarkovwiki.ru/quest/lendliz' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([47.754098, -31.069336])
  .addTo(places)
  .bindPopup(
    "Папка с информацией на подоконнике в 306</br><strong>Врачебная тайна. Часть 2</strong> для Терапевта</br><a href='https://tarkovwiki.ru/quest/vrachebnaya-tayna-chast-2' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([71.187754, -70.664063])
  .addTo(places)
  .bindPopup(
    "Источник сигнала по заданию Механика</br><strong>Сигнал. Часть 1</strong> и Часть 3</br><a href='https://tarkovwiki.ru/quest/signal-chast-1' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([46.437857, -32.783203])
  .addTo(places)
  .bindPopup(
    "Источник сигнала по на крыше</br><strong>Сигнал. Часть 1</strong> и Часть 3</br><a href='https://tarkovwiki.ru/quest/signal-chast-1' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([62.308794, -102.260742])
  .addTo(places)
  .bindPopup(
    "Установить глушитель сигнала на вышку</br><strong>Сигнал. Часть 3</strong></br><a href='https://tarkovwiki.ru/quest/signal-chast-3' target='_blank'>Описание на TarkovWIKI</a>"
  );

L.marker([78.929273, -26.015625])
  .addTo(places)
  .bindPopup(
    "Заложить СВ-98 и мультитул в лодку</br><strong>Рыболовные снасти</strong></br><a href='https://tarkovwiki.ru/quest/rybolovnye-snasti' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([68.204212, -50.844727])
  .addTo(places)
  .bindPopup(
    "Пометить первый танк Т-90 на Побережье</br><strong>Металлолом</strong></br><a href='https://tarkovwiki.ru/quest/metallolom' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([25.641526, -22.324219])
  .addTo(places)
  .bindPopup(
    "Пометить второй танк Т-90 на Побережье</br><strong>Металлолом</strong></br><a href='https://tarkovwiki.ru/quest/metallolom' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([66.739902, 55.371094])
  .addTo(places)
  .bindPopup(
    "Пометить третий танк Т-90 на Побережье</br><strong>Металлолом</strong></br><a href='https://tarkovwiki.ru/quest/metallolom' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([23.32208, -7.294922])
  .addTo(places)
  .bindPopup(
    "Место падения беспилотника</br><strong>Глаз орла</strong></br><a href='https://tarkovwiki.ru/quest/glaz-orla' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([72.369105, -101.90918])
  .addTo(places)
  .bindPopup(
    "Место падения беспилотника</br><strong>Глаз орла</strong></br><a href='https://tarkovwiki.ru/quest/glaz-orla' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([79.400085, -84.682617])
  .addTo(places)
  .bindPopup(
    "Машина с потерянным грузом ООН</br><strong>Гуманитарка</strong></br><a href='https://tarkovwiki.ru/quest/gumanitarka' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([40.010787, -33.178711])
  .addTo(places)
  .bindPopup(
    "Машина с потерянным грузом ООН</br><strong>Гуманитарка</strong></br><a href='https://tarkovwiki.ru/quest/gumanitarka' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([52.05249, 41.923828])
  .addTo(places)
  .bindPopup(
    "Найти пропавшего информатора</br><strong>Секта. Часть 1</strong></br><a href='https://tarkovwiki.ru/quest/sekta-chast-1' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([47.576526, -48.55957])
  .addTo(places)
  .bindPopup(
    "Пометить маяком место ритуала на 3 этаже</br><strong>Секта. Часть 2</strong></br><a href='https://tarkovwiki.ru/quest/sekta-chast-2' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([51.645294, -36.035156])
  .addTo(places)
  .bindPopup(
    "Установить маяк на вертолет</br><strong>Путевка в санаторий. Часть 2</strong></br><a href='https://tarkovwiki.ru/quest/putevka-v-sanatoriy-chast-2' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([51.890054, -39.023438])
  .addTo(places)
  .bindPopup(
    "Пометить безопасный путь к вертолету</br><strong>Путевка в санаторий. Часть 2</strong></br><a href='https://tarkovwiki.ru/quest/putevka-v-sanatoriy-chast-2' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([48.893615, -46.801758])
  .addTo(places)
  .bindPopup(
    "Генераторы в правом крыле 220 комната</br><strong>Путевка в санаторий. Часть 4</strong></br><a href='https://tarkovwiki.ru/quest/putevka-v-sanatoriy-chast-4' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([48.922499, -24.65332])
  .addTo(places)
  .bindPopup(
    "Генераторы в левом крыле 220/219 комната</br><strong>Путевка в санаторий. Часть 4</strong></br><a href='https://tarkovwiki.ru/quest/putevka-v-sanatoriy-chast-4' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([22.836946, -21.75293])
  .addTo(places)
  .bindPopup(
    "Ключ от закрытых помещений санатория</br><strong>Путевка в санаторий. Часть 5</strong></br><a href='https://tarkovwiki.ru/quest/putevka-v-sanatoriy-chast-5' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([47.754098, -41.264648])
  .addTo(places)
  .bindPopup(
    "Данные о грузе в комнате 306</br><strong>Груз Х. Часть 1</strong></br><a href='https://tarkovwiki.ru/quest/gruz-h-chast-1' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([47.783635, -49.658203])
  .addTo(places)
  .bindPopup(
    "Комната с резервуарами на 1 этаже</br><strong>Груз Х. Часть 2</strong></br><a href='https://tarkovwiki.ru/quest/gruz-h-chast-2' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([48.632909, -21.621094])
  .addTo(places)
  .bindPopup(
    "Груз в подвале рядом с бассейном в стене</br><strong>Груз Х. Часть 3</strong></br><a href='https://tarkovwiki.ru/quest/gruz-h-chast-3' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([78.007325, 34.145508])
  .addTo(places)
  .bindPopup(
    "Пометить остров маячком</br><strong>Мокрое дело. Часть 2</strong></br><a href='https://tarkovwiki.ru/quest/mokroe-delo-chast-2' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([75.174549, 12.392578])
  .addTo(places)
  .bindPopup(
    "Найти машину Артема (желтая машина)</br><strong>Мокрое дело. Часть 3</strong></br><a href='https://tarkovwiki.ru/quest/mokroe-delo-chast-3' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([41.343825, -38.056641])
  .addTo(places)
  .bindPopup(
    "Флешка на столе в офисе на 2 этаже</br><strong>Мокрое дело. Часть 4</strong></br><a href='https://tarkovwiki.ru/quest/mokroe-delo-chast-4' target='_blank'>Описание на TarkovWIKI</a>"
  );
L.marker([48.893615, -51.723633])
  .addTo(places)
  .bindPopup(
    "Жесткий диск на корпусе ПК в 2018</br><strong>Мокрое дело. Часть 5</strong></br><a href='https://tarkovwiki.ru/quest/mokroe-delo-chast-5' target='_blank'>Описание на TarkovWIKI</a>"
  );

//Ключи на карте
L.marker([66.955877, 60.205078], { icon: keyIcon })
  .bindPopup(
    "Здесь можно найти на стуле в доме</br><strong>Ключ от номера санатория 203</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-203' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([73.916383, 43.637695], { icon: keyIcon })
  .bindPopup(
    "В автобусе можно найти</br><strong>Ключ от номера санатория 301</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-301' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([68.130668, 55.634766], { icon: keyIcon })
  .bindPopup(
    "В автобусе на сиденьях можно найти</br><strong>Ключ от сейфа в коттедже</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-seyfa-v-kottedzhe' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([64.396938, 19.709473], { icon: keyIcon })
  .bindPopup(
    "На первом этаже ключ на стене в ключнице</br><strong>Ключ от номера санатория 220</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-220' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([63.548552, 16.12793], { icon: keyIcon })
  .bindPopup(
    "На улице на бочках можно найти</br><strong>Ключ от черного входа коттеджа</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-chernogo-vhoda-kottedzha' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([68.18789, -34.057617], { icon: keyIcon })
  .bindPopup(
    "На стуле под двумя куртками</br><strong>Ключ от номера 222 санатория</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-222' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([66.895596, -32.299805], { icon: keyIcon })
  .bindPopup(
    "В техническом помещении перед входом в ГЭС</br><strong>Ключ от номера 104 санатория</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-104' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([78.516827, -23.291016], { icon: keyIcon })
  .bindPopup(
    "На лежанке на берегу можно найти</br><strong>Ключ от номера 221 санатория</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-221' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([79.129976, -40.056152], { icon: keyIcon })
  .bindPopup(
    "В багажнике черной машины</br><strong>Ключ от номера 206 санатория</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-206' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([81.560299, -66.049805], { icon: keyIcon })
  .bindPopup(
    "Внутри маяка на ящиках</br><strong>Ключ от номера 219 санатория</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-219' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([79.651722, -44.978027], { icon: keyIcon })
  .bindPopup(
    "На первом этаже на полу перед ящиками</br><strong>Ключ от номера 205 санатория</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-205' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([71.869909, -73.652344], { icon: keyIcon })
  .bindPopup(
    "На вышке в помещении можно найти</br><strong>Ключ от сейфа в 321 номере</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-seyfa-v-321-nomere' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([62.845119, 5.163574], { icon: keyIcon })
  .bindPopup(
    "Возле мусора у забора на коробке</br><strong>Ключ от автомобиля SMW</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-avtomobilya-smw' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([55.354135, -14.018555], { icon: keyIcon })
  .bindPopup(
    "В автобусе на сиденьях можно найти</br><strong>Ключ от номера 112 санатория</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-112' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([34.651285, -25.488281], { icon: keyIcon })
  .bindPopup(
    "На коробке возле бака с мусором</br><strong>Ключ от номера 205 вост. крыла</strong>"
  )
  .addTo(keys);
L.marker([42.585444, -34.49707], { icon: keyIcon })
  .bindPopup(
    "На втором этаже в подсобке за бильярдом</br><strong>Ключ от номера 218 санатория</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-218' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([42.391009, -39.133301], { icon: keyIcon })
  .bindPopup(
    "В офисах на втором этаже на столе</br><strong>Ключ от номера 216 санатория</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-216' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([47.249407, -42.51709], { icon: keyIcon })
  .bindPopup(
    "В подсобке на втором этаже два ключа</br><strong>1) Ключ от номера 226 на стене в ящике</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-226' target='_blank'>Описание на TarkovWIKI</a></br><strong>2) Ключ от подсобки санатория (под ковром)</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-podsobki-sanatoriya' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([47.561701, -50.888672], { icon: keyIcon })
  .bindPopup(
    "В комнате 322 на столе</br><strong>Ключ от администрации OLI</strong>"
  )
  .addTo(keys);
L.marker([48.879167, -21.115723], { icon: keyIcon })
  .bindPopup(
    "В комнате 101 на столе</br><strong>Ключ от аптеки НекрусФарм на Развязке</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-apteki-nekrusfarm' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([78.157062, 33.244629], { icon: keyIcon })
  .bindPopup(
    "На столе с мотором в центре рыбацкого острова</br><strong>1) Ключ от номера 328 санатория</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-328' target='_blank'>Описание на TarkovWIKI</a></br><strong>2) Ключ от номера 226 санатория</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-226' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([43.405047, -35.749512], { icon: keyIcon })
  .bindPopup(
    "На стуле перед сценой на 2 этаже</br><strong>Ключ от номера 107</strong></br><a href='https://tarkovwiki.ru/mods/klyuch-ot-nomera-107' target='_blank'>Описание на TarkovWIKI</a>"
  )
  .addTo(keys);
L.marker([29.05617, -47.504883], { icon: keyIcon })
  .bindPopup(
    "На коробке в беседке можно найти</br><strong>Ключ от номера 303 зап. санатория</strong>"
  )
  .addTo(keys);
L.marker([47.842658, -23.510742], { icon: labaIcon })
  .bindPopup(
    "Доступ через 221/218 номер, на бочке в 218</br><strong>Лаб. Ключ-карта красная</strong></br>"
  )
  .addTo(keys);
L.marker([47.309034, -21.489258], { icon: labaIcon })
  .bindPopup(
    "В номере 104 на столе</br><strong>Лаб. Ключ-карта синяя</strong></br>"
  )
  .addTo(keys);
L.marker([47.517201, -36.936035], { icon: labaIcon })
  .bindPopup(
    "Под местом пассажира в авто скорой помощи</br><strong>Лаб. Ключ-карта синяя</strong></br>"
  )
  .addTo(keys);
L.marker([47.546872, -48.823242], { icon: labaIcon })
  .bindPopup(
    "В 221 номере через 218 (открыто)</br><strong>Лаб. Ключ-карта красная</strong></br>"
  )
  .addTo(keys);
L.marker([46.316584, -31.662598], { icon: labaIcon })
  .bindPopup(
    "В спортзале (подвал) слева в шкафчиках</br><strong>Лаб. Ключ-карта красная</strong></br>"
  )
  .addTo(keys);

//Точки выхода за дикого
L.marker([74.694854, 52.207031], { icon: exitIcon })
  .bindPopup("<strong>Разрушенная дорога</strong>")
  .addTo(exitScav);
L.marker([64.349421, 66.665039], { icon: exitIcon })
  .bindPopup("<strong>Тупик светлый</strong>")
  .addTo(exitScav);
L.marker([49.75288, 68.071289], { icon: exitIcon })
  .bindPopup("<strong>Забор у заброшенного дома</strong>")
  .addTo(exitScav);
L.marker([10.574222, -73.300781], { icon: exitIcon })
  .bindPopup("<strong>Проход в заборе на юге</strong>")
  .addTo(exitScav);
L.marker([56.46249, -126.123047], { icon: exitIcon })
  .bindPopup("<strong>Дорога на Таможню</strong>")
  .addTo(exitScav);
L.marker([40.380028, -36.5625], { icon: exitIcon })
  .bindPopup("<strong>Подвал в административном корпусе</strong>")
  .addTo(exitScav);
L.marker([46.800059, -42.275391], { icon: exitIcon })
  .bindPopup(
    "<strong>Вход в спортзал П.Крыло</strong></br>(выход под лестницей)"
  )
  .addTo(exitScav);
L.marker([81.24166, -64.6875], { icon: exitIcon })
  .bindPopup("<strong>Маяк</strong>")
  .addTo(exitScav);

//Точки выхода за ЧВК
L.marker([56.170023, -122.915039], { icon: exitIcon2 })
  .bindPopup("<strong>Дорога на Таможню</strong>")
  .addTo(exitPMC);
L.marker([79.187834, -120.761719], { icon: exitIcon2 })
  .bindPopup("<strong>Временный КПП</strong>")
  .addTo(exitPMC);
L.marker([81.710526, -48.955078], { icon: exitIcon2 })
  .bindPopup("<strong>Лодка на причале</strong>")
  .addTo(exitPMC);
L.marker([73.898111, 53.745117], { icon: exitIcon2 })
  .bindPopup("<strong>Тоннель</strong>")
  .addTo(exitPMC);
L.marker([16.425548, -27.421875], { icon: exitIcon2 })
  .bindPopup("<strong>Проход через скалы</strong>")
  .addTo(exitPMC);

//Схроны
L.marker([50, 23], { icon: shronIcon })
  .bindPopup('<img src="assets/img/bereg/17.png" alt="">')
  .addTo(shronKeys);
L.marker([56.12, 32.91], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([53.80065082633023, 37.00195312500001], { icon: shronIcon })
  .bindPopup("Тайник в кустах под забором")
  .addTo(shronKeys);
L.marker([57.11238500793404, 44.384765625], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([65.53117097417717, 46.66992187500001], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([69.4575536150494, 52.42675781250001], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([69.68761843185617, 39.41894531250001], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([70.36309108461556, 36.60644531250001], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([69.53451763078358, 30.366210937500004], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([71.85622888185527, 9.052734375000002], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([73.88591809512965, 20.522460937500004], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([79.9665895843264, 16.831054687500004], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([78.12545397262444, -4.130859375000001], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([80.12610248167239, -34.89257812500001], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([82.37331716529226, -71.32324218750001], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([77.78619050110468, -149.19433593750003], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([76.14295846479848, -150.55664062500003], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([68.86351700272681, -137.06542968750003], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([67.95814786101579, -108.10546875000001], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([67.72610818595071, -3.9990234375000004], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([27.800209937418252, -35.72753906250001], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([27.605670826465445, -22.412109375000004], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([72.04683989379397, -59.63378906250001], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);
L.marker([25.64152637306577, -73.69628906250001], { icon: shronIcon })
  .bindPopup("Тайник с сарае у дома")
  .addTo(shronKeys);

//custom
var overlays = {
  Ключи: keys,
  "Выходы за дикого": exitScav,
  "Выходы за ЧВК": exitPMC,
  "Места по заданию": places,
  Тайники: shronKeys
};
var maps = {
  "Карта Берега": JustMaps
};

L.control.layers(maps, overlays, { collapsed: false }).addTo(map);

map.on("click", function(e) {
  var coord = e.latlng;
  var lat = coord.lat;
  var lng = coord.lng;
  console.log("Координаты: " + lat + ", " + lng);
});
