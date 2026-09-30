export const CATEGORIES = [
  "All Plants",
  "Indoor Plants",
  "Outdoor Plants",
  "Flowering Plants",
  "Succulents",
  "Fruit Plants",
  "Trees",
  "Other categories"
];

export const INITIAL_PLANTS = [
  {
    id: "plant-1",
    name: "Monstera Deliciosa",
    botanicalName: "Monstera deliciosa",
    price: 650,
    category: "Indoor Plants",
    shortDescription: "Iconic split-leaf tropical beauty that adds lush jungle vibes to living rooms and balconies.",
    description: "The Monstera Deliciosa, often called the Swiss Cheese Plant, is an absolute favorite for urban plant lovers. Known for its naturally perforated, glossy green foliage, it is fast-growing, hardy, and adapts gracefully to Indian indoor conditions. Grown locally in our R.K. Puram nursery with organic compost mix.",
    images: [
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Available",
    isFeatured: true,
    size: "18 to 24 inches tall in 8-inch nursery pot",
    sunlight: "Bright, indirect light. Thrives near east- or north-facing windows. Keep away from harsh direct Delhi summer sun.",
    watering: "Water once every 6–8 days when the top 2 inches of soil feel dry to touch. Reduce in winter.",
    careInstructions: "Gently wipe leaves with a soft damp cloth every fortnight to remove dust and maximize photosynthesis. Mist twice weekly in dry summers."
  },
  {
    id: "plant-2",
    name: "Peace Lily (Spathiphyllum)",
    botanicalName: "Spathiphyllum wallisii",
    price: 380,
    category: "Indoor Plants",
    shortDescription: "Air-purifying evergreen with deep emerald leaves and elegant white spathe blooms.",
    description: "Peace Lilies are celebrated for their graceful white hooded blooms and air-filtering capabilities verified by NASA. They communicate their needs by slightly drooping when thirsty and perking right back up after watering. Perfect for bedside tables, workspaces, and ambient indoor spots.",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Available",
    isFeatured: true,
    size: "12 to 16 inches tall in 6-inch premium pot",
    sunlight: "Low to moderate indirect sunlight. Can handle darker corners where other houseplants struggle.",
    watering: "Keep soil lightly moist. Water when top layer dries out (typically twice weekly in summer, once weekly in winter).",
    careInstructions: "Appreciates humid ambient air. Avoid direct blast of AC vents or heaters. Remove spent flower stems at the base."
  },
  {
    id: "plant-3",
    name: "Bougainvillea Imperial Pink",
    botanicalName: "Bougainvillea spectabilis",
    price: 290,
    category: "Flowering Plants",
    shortDescription: "Vibrant cascades of bright magenta blossoms. Sun-loving and extremely drought tolerant.",
    description: "A staple of Indian garden landscapes and sunny balconies. This variety produces abundant clusters of papery pink blooms from early spring right through autumn. Thrives in the Delhi climate with minimal maintenance once established.",
    images: [
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1590452366112-9c3f25608d0e?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Available",
    isFeatured: true,
    size: "2 to 3 feet height in 9-inch heavy duty planter",
    sunlight: "Full sun (minimum 5-6 hours of direct Delhi sunshine required for heavy blooming).",
    watering: "Drought hardy. Water only when the potting mix is dry. Overwatering prevents flowering.",
    careInstructions: "Prune lightly after each blooming flush to encourage bushier branching and more flowers. Feed with organic potash during early spring."
  },
  {
    id: "plant-4",
    name: "Snake Plant Golden Hahnii",
    botanicalName: "Sansevieria trifasciata",
    price: 320,
    category: "Indoor Plants",
    shortDescription: "Indestructible architectural plant that produces oxygen overnight. Ideal for beginners.",
    description: "Known as one of the toughest houseplants on earth, the Snake Plant features upright sword-like foliage edged in cheerful creamy-gold margins. It is exceptional for bedrooms because it releases oxygen and absorbs indoor toxins like benzene and formaldehyde throughout the night.",
    images: [
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1572688484437-172ce84efb48?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Available",
    isFeatured: true,
    size: "10 to 14 inches in 6-inch pot",
    sunlight: "Very adaptable: from low indirect lighting to dappled morning sun.",
    watering: "Extremely low water needs. Water once every 10–14 days. Ensure pot has proper drainage.",
    careInstructions: "Never leave water standing in the center rosette. Wipe the thick foliage with a dry microfiber cloth to keep it glossy."
  },
  {
    id: "plant-5",
    name: "Meyer Lemon (Kagzi Nimbu)",
    botanicalName: "Citrus x meyeri",
    price: 520,
    category: "Fruit Plants",
    shortDescription: "Fragrant white blossoms followed by juicy, thin-skinned lemons. Perfect for sunny balconies.",
    description: "Grafted dwarf citrus tree tailored for terrace gardens and balcony pots. Its delicate white flowers release a sweet citrus fragrance that fills the terrace, followed by continuous crops of thin-skinned, succulent lemons.",
    images: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1534856966150-c83244b78fed?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Available",
    isFeatured: true,
    size: "2.5 to 3.5 feet grafted sapling in 10-inch bag",
    sunlight: "Full sun (6+ hours daily is essential for heavy fruiting and flowering).",
    watering: "Moderate regular watering. Keep soil evenly moist during flowering and fruit setting; never allow soil to turn into dry stone.",
    careInstructions: "Feed monthly with compost manure and bone meal. Spray diluted neem oil spray quarterly to deter citrus leaf miner."
  },
  {
    id: "plant-6",
    name: "Red Hibiscus (Gudhal)",
    botanicalName: "Hibiscus rosa-sinensis",
    price: 240,
    category: "Flowering Plants",
    shortDescription: "Large, dramatic crimson blooms prized for terrace gardens, puja offerings, and hair care.",
    description: "A traditional favorite in Delhi homes. Features deep green serrated foliage and striking 5-petal scarlet flowers with prominent golden stamens. Excellent for balconies and entryways.",
    images: [
      "https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Available",
    isFeatured: false,
    size: "1.5 to 2.5 feet tall in 8-inch pot",
    sunlight: "Direct morning sunlight to partial afternoon sun (minimum 4-5 hours).",
    watering: "Requires consistent moisture in hot Delhi months; water daily in summer, alternate days in winter.",
    careInstructions: "Pinch growing tips periodically to encourage bushier growth. Protect from severe Delhi winter frost in December-January."
  },
  {
    id: "plant-7",
    name: "Jade Plant (Good Luck Crassula)",
    botanicalName: "Crassula ovata",
    price: 340,
    category: "Succulents",
    shortDescription: "Thick succulent leaves shaped like jade stones. Symbolizes prosperity and positive energy.",
    description: "Widely regarded in Vastu and Feng Shui as the money tree or friendship tree. Its woody miniature tree trunk and plump jade-green leaves make it look like a natural bonsai without complicated wiring.",
    images: [
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Available",
    isFeatured: true,
    size: "8 to 12 inches in terracotta pot",
    sunlight: "Bright sunlight with 2–4 hours of soft morning sun.",
    watering: "Allow soil to completely dry out between waterings. Typically once every 7–10 days.",
    careInstructions: "Use a sandy, well-draining cactus mix. Avoid cold drafts and do not let water puddle on the leaves."
  },
  {
    id: "plant-8",
    name: "Areca Palm (Golden Cane Palm)",
    botanicalName: "Dypsis lutescens",
    price: 750,
    category: "Outdoor Plants",
    shortDescription: "Lush feathery arching fronds that soften interior spaces and purify living environments.",
    description: "One of the most widely requested indoor and shaded outdoor landscaping plants in Delhi. Multiple bamboo-like canes emerge from the base, arching outwards in radiant feathery green fronds. Excellent air humidifier.",
    images: [
      "https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Available",
    isFeatured: false,
    size: "3 to 4 feet tall in 10-inch nursery planter",
    sunlight: "Filtered bright indirect light or dappled outdoor shade. Avoid burning midday sun.",
    watering: "Keep soil slightly damp but never waterlogged. Ensure free drainage from container.",
    careInstructions: "Trim brown leaf tips with clean shears. Delhi tap water with high salts can cause leaf tip browning; rain or rested water is preferred."
  },
  {
    id: "plant-9",
    name: "Arabian Jasmine (Bela / Mogra)",
    botanicalName: "Jasminum sambac",
    price: 190,
    category: "Flowering Plants",
    shortDescription: "Intensely fragrant white star flowers blooming all through North Indian summers.",
    description: "Nothing spells an Indian evening like the sweet aroma of fresh Mogra buds blooming at dusk. This shrub can be trained along balcony railings or kept bushy in medium-sized earthen pots.",
    images: [
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Available",
    isFeatured: true,
    size: "14 to 18 inches tall in 7-inch nursery pot",
    sunlight: "Full sun to partial sun (at least 4-5 hours sunlight).",
    watering: "Regular watering. Water whenever top soil feels slightly dry.",
    careInstructions: "Prune back shoots after blooming stops to stimulate new flowering buds. Apply mustard cake liquid fertilizer every 20 days in summer."
  },
  {
    id: "plant-10",
    name: "Ficus Lyrata (Fiddle Leaf Fig)",
    botanicalName: "Ficus lyrata",
    price: 1150,
    category: "Indoor Plants",
    shortDescription: "Dramatic violin-shaped leaves with prominent sculptural veins for modern designer rooms.",
    description: "The ultimate focal plant for high-ceiling living rooms, chic reception areas, and cozy reading corners. Each violin-shaped leaf has distinct textured veining and a glossy sheen when well maintained.",
    images: [
      "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Currently Unavailable",
    isFeatured: false,
    size: "3 to 4.5 feet tall in 10-inch ceramic/nursery container",
    sunlight: "Abundant bright indirect light. A few hours of mild early morning sun is beneficial.",
    watering: "Water thoroughly when top 2-3 inches dry out. Empty excess water from saucer.",
    careInstructions: "Prefers being stationary; avoid moving it around frequently. Rotate pot 90 degrees every month for symmetrical growth."
  },
  {
    id: "plant-11",
    name: "Guava (Allahabad Safeda Dwarf)",
    botanicalName: "Psidium guajava",
    price: 450,
    category: "Fruit Plants",
    shortDescription: "Heavy bearing sweet white guava variety specially grafted for containers and terrace garden tubs.",
    description: "Allahabad Safeda is renowned across India for its sweet, smooth, fragrant white pulp and soft seeds. This grafted dwarf variant starts flowering and fruiting within months of planting in large containers.",
    images: [
      "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1596483785465-98516d7f02d4?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Available",
    isFeatured: false,
    size: "3 feet grafted sapling in nursery grow bag",
    sunlight: "Unrestricted direct sunlight (6+ hours daily).",
    watering: "Water moderately. Do not waterlogged soil; allow upper soil to dry slightly before watering again.",
    careInstructions: "Prune tips after harvest to promote side branches. Mulch soil surface in May-June heat to protect feeder roots."
  },
  {
    id: "plant-12",
    name: "Zebra Haworthia Succulent",
    botanicalName: "Haworthiopsis fasciata",
    price: 220,
    category: "Succulents",
    shortDescription: "Charming rosette succulent striped with horizontal white textured zebra ridges.",
    description: "A compact, slow-growing succulent that looks like an exotic miniature sculpture. Safe for homes with pets, resilient to neglect, and ideal for compact desk spaces and windowsills.",
    images: [
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Available",
    isFeatured: false,
    size: "4 to 6 inches in 4-inch ceramic pot",
    sunlight: "Bright filtered sunlight or gentle morning light.",
    watering: "Water every 10–14 days. Ensure soil dries out completely.",
    careInstructions: "Never water into the crown to prevent rot. Plant in coarse sandy soil."
  },
  {
    id: "plant-13",
    name: "Golden Pothos (Money Plant)",
    botanicalName: "Epipremnum aureum",
    price: 180,
    category: "Indoor Plants",
    shortDescription: "Heart-shaped variegated green and gold trailing vine. Easy to grow in water or soil.",
    description: "The classic Indian household plant. Extremely tolerant of varied light and watering habits. Can be trained up a moss stick or allowed to cascade gracefully from hanging baskets and high shelves.",
    images: [
      "https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Available",
    isFeatured: false,
    size: "Trailing 18-24 inch vine in 6-inch hanging pot with hanger",
    sunlight: "Medium to bright indirect light; also tolerates low-light corners.",
    watering: "Water once a week in summer, every 10-12 days in winter.",
    careInstructions: "Prune trailing stems to make the base bushy. Root cuttings easily in water bottles."
  },
  {
    id: "plant-14",
    name: "Sacred Peepal Bonsai (Ficus Religiosa)",
    botanicalName: "Ficus religiosa",
    price: 1450,
    category: "Trees",
    shortDescription: "Aged miniature specimen with characteristic heart-shaped leaves and prolonged drip tips.",
    description: "Carefully trained in our nursery over several seasons. In Indian tradition, the Peepal tree represents life, knowledge, and spiritual grounding. This dwarfed bonsai version brings its timeless presence into your balcony or patio.",
    images: [
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Available",
    isFeatured: true,
    size: "14 to 18 inches aged bonsai in ceramic bonsai tray",
    sunlight: "Direct to partial morning sunshine (3-4 hours minimum).",
    watering: "Keep shallow bonsai soil consistently damp but never drenched.",
    careInstructions: "Prune new shoots back to 2-3 leaves during active spring growth to maintain miniature leaf size."
  },
  {
    id: "plant-15",
    name: "Pink Neon Syngonium (Arrowhead)",
    botanicalName: "Syngonium podophyllum 'Neon Robusta'",
    price: 260,
    category: "Indoor Plants",
    shortDescription: "Pastel pink arrow-shaped foliage with lime-green undersides. Instant splash of color.",
    description: "Add a soft pastel accent to your indoor plant collection without needing flowers. The young arrow-shaped leaves emerge in dusky blush pink and mature with subtle green veins.",
    images: [
      "https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Available",
    isFeatured: false,
    size: "8 to 12 inches bushy specimen in 6-inch pot",
    sunlight: "Medium to bright indirect light (brighter light keeps the pink hue vibrant).",
    watering: "Water when the top 1 inch feels dry. Enjoys moderate humidity.",
    careInstructions: "Pinch back vine tips if you prefer a compact bushy mound instead of a climbing vine."
  },
  {
    id: "plant-16",
    name: "Neem Sapling (Indian Lilac)",
    botanicalName: "Azadirachta indica",
    price: 150,
    category: "Trees",
    shortDescription: "Venerable medicinal tree renowned for air purifying and pest repellent properties.",
    description: "One of the most sacred and utilitarian trees of the subcontinent. Hardy, fast-growing, naturally repels mosquitoes and terrace insects, and thrives in high Delhi heat.",
    images: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=900&q=80"
    ],
    availability: "Available",
    isFeatured: false,
    size: "2 to 3 feet sapling in heavy grow bag",
    sunlight: "Direct outdoor sunlight all day.",
    watering: "Regular watering for young plants; mature trees become highly drought resistant.",
    careInstructions: "Great candidate for planting in front of homes, boundary walls, or in large 18-inch terrace tubs."
  }
];

export const NURSERY_SERVICES = [
  {
    id: "plant-sales",
    title: "Plant Sales & Selection",
    icon: "Sprout",
    shortDesc: "Healthy indoor, outdoor, flowering, fruit & exotic plants acclimatized to Delhi weather.",
    description: "Every single plant in our R.K. Puram nursery is grown and seasoned in organic soil mix with neem khali and vermicompost, ensuring zero transplant shock when you take it home."
  },
  {
    id: "pots-planters",
    title: "Pots & Planters",
    icon: "Flower2",
    shortDesc: "Terracotta pots, ceramic decorative planters, lightweight fiber pots & hanging baskets.",
    description: "Wide assortment of handcrafted earthen khurja pots, glazed decorative indoor planters, UV-stabilized balcony railing pots, and sturdy nursery containers in all sizes."
  },
  {
    id: "home-delivery",
    title: "Safe Home Delivery",
    icon: "Truck",
    shortDesc: "Doorstep delivery across New Delhi with dedicated plant-safe handling.",
    description: "We carefully pack and deliver potted plants and garden supplies right to your home in South Delhi and across NCR. No broken pots or damaged fronds."
  },
  {
    id: "balcony-gardening",
    title: "Balcony Gardening",
    icon: "SunMedium",
    shortDesc: "Custom balcony setups, railing planters, vertical green walls & aesthetic green corners.",
    description: "Turn your apartment balcony into a private green sanctuary. We evaluate your sunlight exposure, wind conditions, and layout to recommend the exact plants that will flourish."
  },
  {
    id: "garden-maintenance",
    title: "Garden Maintenance",
    icon: "Scissors",
    shortDesc: "Pruning, organic pest treatment, weeding, repotting & seasonal fertilization visits.",
    description: "Keep your home garden or office terrace lush year-round. Our experienced gardeners handle seasonal soil aeration, kharpatwar removal, and organic nutrition."
  },
  {
    id: "landscaping",
    title: "Landscaping & Greenery",
    icon: "Trees",
    shortDesc: "Residential villas, rooftop terraces, cafes & commercial green installations.",
    description: "Complete landscaping layout design, lawn grass laying (Mexican/Bermuda carpet grass), rock gardens, and border hedges crafted by nursery owner Nikhil Kanojiya."
  },
  {
    id: "plant-consultation",
    title: "Plant Doctor & Consultation",
    icon: "HeartPulse",
    shortDesc: "Personalized advice on yellowing leaves, soil health, light needs & pest control.",
    description: "Send us a photo of your struggling plant on WhatsApp or visit our R.K. Puram location. We diagnose root rot, fungal attacks, or nutrient deficiencies for free."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Aarti Sharma",
    location: "Vasant Vihar, New Delhi",
    rating: 5,
    comment: "I needed air-purifying plants for my clinic and home. Nikhil ji personally guided me through what would survive in indirect light. The Monstera and Snake Plants look stunning even after 6 months!",
    date: "1 month ago"
  },
  {
    id: 2,
    name: "Rajesh Malhotra",
    location: "R.K. Puram, Sector 4",
    rating: 5,
    comment: "Flowering Pot is our go-to neighbourhood nursery. Unlike commercial online stores that send tiny dying stems in brown boxes, Nikhil sends full-grown, lush, thriving plants directly on WhatsApp confirmation. Truly genuine pricing.",
    date: "3 weeks ago"
  },
  {
    id: 3,
    name: "Pooja & Rohan Verma",
    location: "Safdarjung Enclave",
    rating: 5,
    comment: "Got our entire 5th floor balcony greened by Flowering Pot. They helped us choose Mogra, Bougainvillea, and Kagzi Nimbu. The balcony smells heavenly every morning. Outstanding service!",
    date: "2 months ago"
  },
  {
    id: 4,
    name: "Col. Sanjeev Bakshi",
    location: "Chanakyapuri, New Delhi",
    rating: 5,
    comment: "Nikhil is very knowledgeable about plant nutrition and Delhi climate. His care tips for my Bonsai and Citrus trees made all the difference. Highly recommend WhatsApping him for any garden queries.",
    date: "Recent"
  }
];

export const NURSERY_GALLERY = [
  {
    title: "Lush Indoor Foliage Bay",
    category: "Indoor Bay",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Flowering Bougainvilleas & Hibiscus",
    category: "Outdoor Bloom Section",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Succulent & Cactus Tables",
    category: "Exotic Succulents",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Artisanal Terracotta & Glazed Planters",
    category: "Planters Collection",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Balcony Greenery Makeovers",
    category: "Client Projects",
    image: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Our R.K. Puram Greenhouse Walkway",
    category: "Nursery Grounds",
    image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=800&q=80"
  }
];
