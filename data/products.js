const products = [
  {
    "id": 1,
    "img": "/images/products/gift-set-gucci-flora-gorgeous-orchid_38733bb695824716bd1b29060e175fed_master.jpg",
    "brand": "Dior",
    "name": "Sauvage Eau de Parfum",
    "price": "3.250.000₫",
    "link": "/product/sauvage-edp"
  },
  {
    "id": 2,
    "img": "/images/products/gift-set-gucci-flora-gorgeous-orchid_38733bb695824716bd1b29060e175fed_master.jpg",
    "brand": "Chanel",
    "name": "Bleu de Chanel Eau de Toilette",
    "price": "3.950.000₫",
    "link": "/product/bleu-de-chanel"
  },
  {
    "id": 3,
    "img": "/images/products/gift-set-gucci-flora-gorgeous-orchid_38733bb695824716bd1b29060e175fed_master.jpg",
    "brand": "Gucci",
    "name": "Flora Gorgeous Gardenia EDP",
    "price": "2.800.000₫",
    "link": "/product/gucci-flora-gardenia"
  },
  {
    "id": 4,
    "img": "/images/products/gift-set-gucci-flora-gorgeous-orchid_38733bb695824716bd1b29060e175fed_master.jpg",
    "brand": "YSL",
    "name": "Y Eau de Parfum",
    "price": "3.450.000₫",
    "link": "/product/ysl-y-edp"
  },
  {
    "id": 5,
    "img": "/images/products/gift-set-gucci-flora-gorgeous-orchid_38733bb695824716bd1b29060e175fed_master.jpg",
    "brand": "Lancôme",
    "name": "La Vie Est Belle EDP",
    "price": "3.100.000₫",
    "link": "/product/la-vie-est-belle"
  },
  {
    "id": 6,
    "img": "/images/products/gift-set-gucci-flora-gorgeous-orchid_38733bb695824716bd1b29060e175fed_master.jpg",
    "brand": "Giorgio Armani",
    "name": "Acqua Di Gio Profumo",
    "price": "3.550.000₫",
    "link": "/product/acqua-di-gio-profumo"
  },
  {
    "id": 7,
    "img": "/images/products/gift-set-gucci-flora-gorgeous-orchid_38733bb695824716bd1b29060e175fed_master.jpg",
    "brand": "Tom Ford",
    "name": "Oud Wood Eau de Parfum",
    "price": "6.800.000₫",
    "link": "/product/tom-ford-oud-wood"
  },
  {
    "id": 8,
    "img": "/images/products/gift-set-gucci-flora-gorgeous-orchid_38733bb695824716bd1b29060e175fed_master.jpg",
    "brand": "Hermès",
    "name": "Terre d'Hermès Pure Parfum",
    "price": "4.150.000₫",
    "link": "/product/terre-d-hermes-parfum"
  },
  {
    "id": 9,
    "img": "/images/products/gift-set-gucci-flora-gorgeous-orchid_38733bb695824716bd1b29060e175fed_master.jpg",
    "brand": "Versace",
    "name": "Eros Eau de Toilette",
    "price": "2.100.000₫",
    "link": "/product/versace-eros-edt"
  },
  {
    "id": 10,
    "img": "/images/products/gift-set-gucci-flora-gorgeous-orchid_38733bb695824716bd1b29060e175fed_master.jpg",
    "brand": "Creed",
    "name": "Aventus",
    "price": "7.990.000₫",
    "link": "/product/creed-aventus"
  },
  {
    "id": 11,
    "img": "/images/products/jean-paul-gaultier-scandal-2025-edp-intense7.webp",
    "brand": "Jean Paul Gaultier",
    "name": "Le Male Le Parfum",
    "price": "2.900.000₫",
    "link": "/product/jpg-le-male-le-parfum"
  },
  {
    "id": 12,
    "img": "/images/products/jean-paul-gaultier-scandal-2025-edp-intense7.webp",
    "brand": "Viktor&Rolf",
    "name": "Spicebomb Extreme",
    "price": "3.350.000₫",
    "link": "/product/spicebomb-extreme"
  },
  {
    "id": 13,
    "img": "/images/products/jean-paul-gaultier-scandal-2025-edp-intense7.webp",
    "brand": "Paco Rabanne",
    "name": "Invictus Platinum",
    "price": "2.700.000₫",
    "link": "/product/invictus-platinum"
  },
  {
    "id": 14,
    "img": "/images/products/jean-paul-gaultier-scandal-2025-edp-intense7.webp",
    "brand": "Maison Margiela",
    "name": "Replica Jazz Club EDT",
    "price": "4.500.000₫",
    "link": "/product/replica-jazz-club"
  },
  {
    "id": 15,
    "img": "/images/products/jean-paul-gaultier-scandal-2025-edp-intense7.webp",
    "brand": "Dolce & Gabbana",
    "name": "Light Blue Intense",
    "price": "2.650.000₫",
    "link": "/product/light-blue-intense"
  },
  {
    "id": 16,
    "img": "/images/products/jean-paul-gaultier-scandal-2025-edp-intense7.webp",
    "brand": "Givenchy",
    "name": "Gentleman Réserve Privée",
    "price": "3.200.000₫",
    "link": "/product/givenchy-reserve-privee"
  },
  {
    "id": 17,
    "img": "/images/products/jean-paul-gaultier-scandal-2025-edp-intense7.webp",
    "brand": "Burberry",
    "name": "Hero Eau de Parfum",
    "price": "2.550.000₫",
    "link": "/product/burberry-hero-edp"
  },
  {
    "id": 18,
    "img": "/images/products/jean-paul-gaultier-scandal-2025-edp-intense7.webp",
    "brand": "Calvin Klein",
    "name": "CK One Summer Daze",
    "price": "1.450.000₫",
    "link": "/product/ck-one-summer"
  },
  {
    "id": 19,
    "img": "/images/products/jean-paul-gaultier-scandal-2025-edp-intense7.webp",
    "brand": "Hugo Boss",
    "name": "Boss Bottled Elixir",
    "price": "2.850.000₫",
    "link": "/product/boss-bottled-elixir"
  },
  {
    "id": 20,
    "img": "/images/products/jean-paul-gaultier-scandal-2025-edp-intense7.webp",
    "brand": "Kilian",
    "name": "Angels' Share",
    "price": "6.500.000₫",
    "link": "/product/kilian-angels-share"
  }
];

export default products;
