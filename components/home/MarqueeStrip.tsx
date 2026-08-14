import { microgrammaBold } from '@/lib/fonts'
import { 
  Car, 
  Tag, 
  Wrench, 
  Activity, 
  Truck, 
  ShieldCheck, 
  FileText, 
  Shield, 
  PlugZap, 
  Headset 
} from 'lucide-react'

export function MarqueeStrip() {
  const items = [
    { label: 'RC Verified Vehicles', icon: Car },
    { label: 'FASTag Recharge', icon: Tag },
    { label: 'Genuine Parts', icon: Wrench },
    { label: 'Vehicle Health Score', icon: Activity },
    { label: 'Pan India Delivery', icon: Truck },
    { label: 'Secure Payments', icon: ShieldCheck },
    { label: 'E-Challan Check', icon: FileText },
    { label: 'Car Insurance', icon: Shield },
    { label: 'EV Stations', icon: PlugZap },
    { label: 'Expert Support', icon: Headset },
  ]

  return (
    <div className="w-full overflow-hidden py-4 md:py-5">
      <style>{`
        @keyframes marquee {
          0%, 5% { transform: translateX(0%); }
          10%, 15% { transform: translateX(-5%); }
          20%, 25% { transform: translateX(-10%); }
          30%, 35% { transform: translateX(-15%); }
          40%, 45% { transform: translateX(-20%); }
          50%, 55% { transform: translateX(-25%); }
          60%, 65% { transform: translateX(-30%); }
          70%, 75% { transform: translateX(-35%); }
          80%, 85% { transform: translateX(-40%); }
          90%, 95% { transform: translateX(-45%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 35s ease-in-out infinite;
        }
      `}</style>
      <div className="marquee-track flex gap-8 md:gap-12 w-max">
        {[...items, ...items].map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={i}
              className={`${microgrammaBold.className} flex items-center gap-2.5 whitespace-nowrap text-sm md:text-base py-2`}
              style={{
                color: '#124E45',
              }}
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5 opacity-80" strokeWidth={2.5} />
              {item.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}