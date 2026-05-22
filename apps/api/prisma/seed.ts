import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Seeding database...')

  // ── Categories ───────────────────────────────────────

  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'engine-parts' },
      update: {},
      create: { name: 'Engine Parts', slug: 'engine-parts', description: 'Filters, belts, spark plugs and more' },
    }),
    prisma.category.upsert({
      where: { slug: 'brakes' },
      update: {},
      create: { name: 'Brakes', slug: 'brakes', description: 'Brake pads, discs, and brake fluids' },
    }),
    prisma.category.upsert({
      where: { slug: 'electrical' },
      update: {},
      create: { name: 'Electrical', slug: 'electrical', description: 'Batteries, bulbs, and wiring' },
    }),
    prisma.category.upsert({
      where: { slug: 'tyres-wheels' },
      update: {},
      create: { name: 'Tyres & Wheels', slug: 'tyres-wheels', description: 'Tyres, rims, and tyre care' },
    }),
    prisma.category.upsert({
      where: { slug: 'accessories' },
      update: {},
      create: { name: 'Accessories', slug: 'accessories', description: 'Seat covers, floor mats, and more' },
    }),
  ])

  const [engine, brakes, electrical, tyres, accessories] = categories
  console.log(`✓ ${categories.length} categories seeded`)

  // ── Products ─────────────────────────────────────────

  const products = [
    // Engine Parts
    {
      name: 'Oil Filter — Maruti Swift',
      slug: 'oil-filter-maruti-swift',
      description: 'Genuine quality oil filter for Maruti Swift. Ensures clean oil circulation and extends engine life.',
      categoryId: engine.id,
      basePrice: 349,
      sku: 'ENG-OIL-001',
      stock: 150,
      images: [],
      compatibility: [{ make: 'Maruti', model: 'Swift', yearFrom: 2015, yearTo: 2024 }],
    },
    {
      name: 'Air Filter — Hyundai Creta',
      slug: 'air-filter-hyundai-creta',
      description: 'High-performance air filter for Hyundai Creta. Improves airflow and fuel efficiency.',
      categoryId: engine.id,
      basePrice: 599,
      sku: 'ENG-AIR-002',
      stock: 80,
      images: [],
      compatibility: [{ make: 'Hyundai', model: 'Creta', yearFrom: 2018, yearTo: 2024 }],
    },
    {
      name: 'Spark Plug Set — Honda City',
      slug: 'spark-plug-set-honda-city',
      description: 'Set of 4 iridium spark plugs for Honda City. Better ignition and fuel economy.',
      categoryId: engine.id,
      basePrice: 1299,
      sku: 'ENG-SPK-003',
      stock: 60,
      images: [],
      compatibility: [{ make: 'Honda', model: 'City', yearFrom: 2014, yearTo: 2024 }],
    },
    {
      name: 'Timing Belt Kit — Tata Nexon',
      slug: 'timing-belt-kit-tata-nexon',
      description: 'Complete timing belt kit with tensioner for Tata Nexon diesel variants.',
      categoryId: engine.id,
      basePrice: 2499,
      sku: 'ENG-TBK-004',
      stock: 30,
      images: [],
      compatibility: [{ make: 'Tata', model: 'Nexon', yearFrom: 2017, yearTo: 2024 }],
    },
    {
      name: 'Universal Engine Oil — 10W-30 (1L)',
      slug: 'universal-engine-oil-10w30',
      description: 'Semi-synthetic engine oil suitable for most petrol and diesel engines.',
      categoryId: engine.id,
      basePrice: 449,
      sku: 'ENG-OIL-005',
      stock: 500,
      images: [],
      compatibility: [],  // Universal — fits all
    },

    // Brakes
    {
      name: 'Front Brake Pads — Maruti Swift',
      slug: 'front-brake-pads-maruti-swift',
      description: 'OEM-grade front brake pads for Maruti Swift. Low dust, low noise formulation.',
      categoryId: brakes.id,
      basePrice: 899,
      sku: 'BRK-PAD-001',
      stock: 120,
      images: [],
      compatibility: [{ make: 'Maruti', model: 'Swift', yearFrom: 2015, yearTo: 2024 }],
    },
    {
      name: 'Rear Brake Pads — Hyundai Creta',
      slug: 'rear-brake-pads-hyundai-creta',
      description: 'Premium rear brake pads for Hyundai Creta with ceramic compound.',
      categoryId: brakes.id,
      basePrice: 1099,
      sku: 'BRK-PAD-002',
      stock: 75,
      images: [],
      compatibility: [{ make: 'Hyundai', model: 'Creta', yearFrom: 2018, yearTo: 2024 }],
    },
    {
      name: 'Brake Disc — Honda City',
      slug: 'brake-disc-honda-city',
      description: 'Ventilated front brake disc for Honda City. Better heat dissipation.',
      categoryId: brakes.id,
      basePrice: 1899,
      sku: 'BRK-DSC-003',
      stock: 40,
      images: [],
      compatibility: [{ make: 'Honda', model: 'City', yearFrom: 2014, yearTo: 2024 }],
    },
    {
      name: 'Brake Fluid DOT 4 (500ml)',
      slug: 'brake-fluid-dot4-500ml',
      description: 'High boiling point DOT 4 brake fluid. Compatible with all hydraulic brake systems.',
      categoryId: brakes.id,
      basePrice: 299,
      sku: 'BRK-FLD-004',
      stock: 200,
      images: [],
      compatibility: [],
    },

    // Electrical
    {
      name: 'Car Battery 35Ah — Maruti Alto',
      slug: 'car-battery-35ah-maruti-alto',
      description: 'Maintenance-free 35Ah battery for Maruti Alto and small hatchbacks.',
      categoryId: electrical.id,
      basePrice: 3299,
      sku: 'ELC-BAT-001',
      stock: 25,
      images: [],
      compatibility: [
        { make: 'Maruti', model: 'Alto', yearFrom: 2010, yearTo: 2024 },
        { make: 'Maruti', model: 'Swift', yearFrom: 2015, yearTo: 2020 },
      ],
    },
    {
      name: 'LED Headlight Bulb Set H4',
      slug: 'led-headlight-bulb-set-h4',
      description: '6000K white LED H4 bulb set. 3x brighter than halogen. Plug and play.',
      categoryId: electrical.id,
      basePrice: 1499,
      sku: 'ELC-BLB-002',
      stock: 90,
      images: [],
      compatibility: [],
    },
    {
      name: 'Alternator — Tata Nexon',
      slug: 'alternator-tata-nexon',
      description: 'Remanufactured alternator for Tata Nexon petrol. 12 month warranty.',
      categoryId: electrical.id,
      basePrice: 5999,
      sku: 'ELC-ALT-003',
      stock: 12,
      images: [],
      compatibility: [{ make: 'Tata', model: 'Nexon', yearFrom: 2017, yearTo: 2024 }],
    },

    // Tyres & Wheels
    {
      name: 'MRF ZV2K 185/65 R15',
      slug: 'mrf-zv2k-185-65-r15',
      description: 'MRF ZV2K tyre with superior wet grip and low rolling resistance.',
      categoryId: tyres.id,
      basePrice: 4299,
      sku: 'TYR-MRF-001',
      stock: 50,
      images: [],
      compatibility: [
        { make: 'Hyundai', model: 'Creta', yearFrom: 2018, yearTo: 2024 },
        { make: 'Kia', model: 'Seltos', yearFrom: 2019, yearTo: 2024 },
      ],
    },
    {
      name: 'Apollo Alnac 4G 175/65 R14',
      slug: 'apollo-alnac-4g-175-65-r14',
      description: 'Apollo Alnac 4G tyre for compact hatchbacks. Smooth ride, long tread life.',
      categoryId: tyres.id,
      basePrice: 3599,
      sku: 'TYR-APL-002',
      stock: 60,
      images: [],
      compatibility: [
        { make: 'Maruti', model: 'Swift', yearFrom: 2015, yearTo: 2024 },
        { make: 'Maruti', model: 'Baleno', yearFrom: 2015, yearTo: 2024 },
      ],
    },
    {
      name: 'Tyre Puncture Repair Kit',
      slug: 'tyre-puncture-repair-kit',
      description: 'Complete puncture repair kit with sealant and inflator. Works on all tubeless tyres.',
      categoryId: tyres.id,
      basePrice: 799,
      sku: 'TYR-KIT-003',
      stock: 180,
      images: [],
      compatibility: [],
    },

    // Accessories
    {
      name: 'All-Weather Floor Mats — Universal',
      slug: 'all-weather-floor-mats-universal',
      description: 'Heavy-duty rubber floor mats. Waterproof, anti-slip. Set of 4.',
      categoryId: accessories.id,
      basePrice: 999,
      sku: 'ACC-MAT-001',
      stock: 200,
      images: [],
      compatibility: [],
    },
    {
      name: 'Seat Cover Set — Leatherette',
      slug: 'seat-cover-set-leatherette',
      description: 'Premium leatherette seat cover set for 5-seater cars. Easy to clean.',
      categoryId: accessories.id,
      basePrice: 2999,
      sku: 'ACC-SCO-002',
      stock: 45,
      images: [],
      compatibility: [],
    },
    {
      name: 'Dash Cam — 1080p Full HD',
      slug: 'dash-cam-1080p-full-hd',
      description: '1080p dashcam with night vision, loop recording, and G-sensor.',
      categoryId: accessories.id,
      basePrice: 3499,
      sku: 'ACC-CAM-003',
      stock: 35,
      images: [],
      compatibility: [],
    },
    {
      name: 'Car Phone Mount — Magnetic',
      slug: 'car-phone-mount-magnetic',
      description: 'Strong magnetic phone mount for dashboard or AC vent. 360° rotation.',
      categoryId: accessories.id,
      basePrice: 499,
      sku: 'ACC-MNT-004',
      stock: 300,
      images: [],
      compatibility: [],
    },
    {
      name: 'Microfibre Cleaning Kit',
      slug: 'microfibre-cleaning-kit',
      description: 'Set of 6 microfibre cloths and interior detailing brush. Scratch-free cleaning.',
      categoryId: accessories.id,
      basePrice: 699,
      sku: 'ACC-CLN-005',
      stock: 250,
      images: [],
      compatibility: [],
    },
  ]

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product as any,
    })
  }

  console.log(`✓ ${products.length} products seeded`)
  console.log('✅ Seeding complete')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())