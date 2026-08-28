export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "kalu-dodol",
    name: "Kalu Dodol",
    category: "Signature",
    description:
      "Our founding recipe — a rich, dark treacle-and-coconut dodol, slow-stirred for hours until glossy and dense.",
    price: "Rs. 950 / kg",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "kokis",
    name: "Crispy Kokis",
    category: "Festive",
    description:
      "Golden, flower-shaped rice crisps fried to a delicate crunch — a New Year table essential.",
    price: "Rs. 700 / kg",
    image:
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "aluwa",
    name: "Semolina Aluwa",
    category: "Classic",
    description:
      "A honey-coloured semolina fudge studded with cashew, gently spiced with cardamom.",
    price: "Rs. 850 / kg",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "athirasa",
    name: "Athirasa",
    category: "Festive",
    description:
      "Rice-flour and jaggery discs, fried until the edges lace and caramelise around a soft centre.",
    price: "Rs. 80 / piece",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "mun-kavum",
    name: "Mun Kavum",
    category: "Festive",
    description:
      "Sweet mung bean-filled oil cakes, hand-shaped and fried to a deep golden brown.",
    price: "Rs. 90 / piece",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "konda-kavum",
    name: "Konda Kavum",
    category: "Classic",
    description:
      "The iconic 'top-knot' oil cake — treacle-sweetened batter fried until the crown puffs and darkens.",
    price: "Rs. 60 / piece",
    image:
      "https://images.unsplash.com/photo-1589301773859-ba7f2fce0d76?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "weli-thalapa",
    name: "Weli Thalapa",
    category: "Classic",
    description:
      "Steamed rice-flour and treacle sweet, pressed into delicate discs with a soft, sandy crumb.",
    price: "Rs. 65 / piece",
    image:
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "undu-walalu",
    name: "Undu Walalu",
    category: "Classic",
    description:
      "Crisp, coiled urad-flour rings dipped in treacle syrup — light, lacy, and lightly sweet.",
    price: "Rs. 75 / piece",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "wattalapan",
    name: "Wattalapan",
    category: "Signature",
    description:
      "A silken jaggery-and-coconut custard, steamed with cashew and a whisper of nutmeg.",
    price: "Rs. 220 / cup",
    image:
      "https://images.unsplash.com/photo-1589301773859-ba7f2fce0d76?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "gift-box",
    name: "KMD Festive Gift Box",
    category: "Gift Box",
    description:
      "A curated assortment box of our best-loved sweets, packed for gifting and celebrations.",
    price: "Rs. 2,500 / box",
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80&w=1200",
  },
];
