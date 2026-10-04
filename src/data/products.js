export const categories = [
  { id: "etims", label: "eTIMS & ETR" },
  { id: "pos", label: "Point of Sale" },
  { id: "printers", label: "Receipt Printers" },
];

export const products = [
  {
    id: "android-cs30",
    image: "/images/products/android-cs30.jpg",
    name: "Android POS CS30",
    category: "pos",
    tagline: "All-in-one Android terminal for checkout and stock",
    spec: [
      ["Platform", "Android"],
      ["Use", "Sales, stock, receipts"],
      ["Connectivity", "SIM / Wi-Fi / Bluetooth"],
    ],
  },
  {
    id: "aclas-etims",
    image: "/images/products/aclas-etims.jpg",
    name: "Aclas eTIMS",
    category: "etims",
    tagline: "KRA-approved device for eTIMS invoicing",
    spec: [
      ["Compliance", "KRA eTIMS"],
      ["Use", "Electronic tax invoicing"],
      ["Setup", "Installed & registered on site"],
    ],
  },
  {
    id: "comstore-pos",
    image: "/images/products/comstore-pos.jpg",
    name: "Comstore POS",
    category: "pos",
    tagline: "Dedicated POS terminal built for daily retail counters",
    spec: [
      ["Use", "Sales & inventory"],
      ["Fit", "Retail shops, supermarkets"],
      ["Support", "On-site repair available"],
    ],
  },
  {
    id: "thermal-58",
    image: "/images/products/thermal-58.jpg",
    name: "58mm Thermal Bluetooth Printer",
    category: "printers",
    tagline: "Compact receipt printer for small counters and mobile sales",
    spec: [
      ["Paper width", "58mm"],
      ["Connectivity", "Bluetooth"],
      ["Fit", "Kiosks, boda riders, market stalls"],
    ],
  },
  {
    id: "thermal-80",
    image: "/images/products/thermal-80.jpg",
    name: "80mm Thermal Bluetooth Printer",
    category: "printers",
    tagline: "Full-width receipt printer for higher-volume counters",
    spec: [
      ["Paper width", "80mm"],
      ["Connectivity", "Bluetooth"],
      ["Fit", "Supermarkets, restaurants, shops"],
    ],
  },
];
