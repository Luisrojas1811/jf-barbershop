'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  ChevronRight,
  Menu,
  MessageCircle,
  Package,
  Pencil,
  Plus,
  Settings2,
  ShoppingBag,
  Star,
  Users,
  X,
} from 'lucide-react'

const localImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-09-04%20at%201.35.44%20PM-nOMWRFqVHCED5Zn0vGPbLn90QCwtCw.mp4'
const logoImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-04%20151746-VRQ9DxNa9M93suFkaZEo0mQUQFA0K2.png'
const cuts = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-04%20145510-62PhkY3eGc8w3lDoCgtjNs3vqThEsN.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-04%20145559-F3ufndvRDTh557VnLEStvxW3mc7VD0.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-04%20145539-jDG9RbLoDcr92hOciGYKVhmCBkQEzq.png',
]

const barbers = [
  { name: 'Tu próximo barbero', specialty: 'Fades · Barba · Detalles', phone: '+54 9 11 0000 0000', image: cuts[0] },
  { name: 'Especialista JF', specialty: 'Corte clásico · Estilo moderno', phone: '+54 9 11 0000 0000', image: cuts[1] },
]

const products = [
  { name: 'Máquina profesional', type: 'Equipamiento', price: '$120.000' },
  { name: 'Pomada mate JF', type: 'Styling', price: '$18.500' },
  { name: 'Trimmer de precisión', type: 'Equipamiento', price: '$74.000' },
]

export default function Page() {
  const [adminOpen, setAdminOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#11110f] text-[#f1eee6] selection:bg-[#b98b3e] selection:text-[#11110f]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#11110f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3"><img src={logoImage} alt="JF Barber logo" className="size-9 rounded-full border border-[#b98b3e]/60 object-cover" /><span className="font-mono text-sm font-bold tracking-[0.3em]">JF<span className="text-[#b98b3e]">.</span></span></a>
          <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-white/60 md:flex">
            <a href="#equipo" className="transition hover:text-[#b98b3e]">El equipo</a>
            <a href="#trabajos" className="transition hover:text-[#b98b3e]">Trabajos</a>
            <a href="#shop" className="transition hover:text-[#b98b3e]">Shop</a>
            <a href="#visitanos" className="transition hover:text-[#b98b3e]">Visitá JF</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setAdminOpen(true)} className="hidden rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white/60 transition hover:border-[#b98b3e] hover:text-[#b98b3e] sm:flex"><Settings2 className="mr-2 size-3" /> Admin demo</button>
            <button aria-label="Abrir menú" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-white/10 px-5 py-6 text-xs uppercase tracking-[0.2em] md:hidden"><a href="#equipo">El equipo</a><a href="#trabajos">Trabajos</a><a href="#shop">Shop</a><a href="#visitanos">Visitá JF</a></nav>}
      </header>

      <section id="inicio" className="relative flex min-h-[760px] items-end overflow-hidden px-5 pb-12 pt-32 lg:min-h-screen lg:px-10 lg:pb-20">
        <video className="absolute inset-0 size-full object-cover opacity-45" autoPlay muted loop playsInline poster={cuts[1]}><source src={localImage} type="video/mp4" /></video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#11110f] via-[#11110f]/45 to-[#11110f]/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[#b98b3e]"><span className="size-2 rounded-full bg-[#b98b3e]" /> Barbería venezolana · CABA · Desde 2021</div>
          <h1 className="max-w-4xl text-balance text-6xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-8xl lg:text-[10rem]">El corte<br /><span className="text-[#b98b3e]">te representa.</span></h1>
          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/20 pt-5 sm:flex-row sm:items-end"><p className="max-w-sm text-sm leading-6 text-white/60">Un espacio para encontrar tu estilo, conocer a tu próximo barbero y volver a elegirlo.</p><a href="#equipo" className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em]">Conocé al equipo <span className="flex size-10 items-center justify-center rounded-full bg-[#b98b3e] text-[#11110f] transition group-hover:rotate-45"><ArrowUpRight /></span></a></div>
        </div>
      </section>

      <section id="equipo" className="border-y border-white/10 bg-[#191916] px-5 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#b98b3e]">02 / El equipo</p><h2 className="text-5xl font-medium tracking-[-0.05em] sm:text-7xl">¿Te gustó el corte?<br /><span className="text-[#b98b3e]">Contactate directo con el barbero.</span></h2></div></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{barbers.map((barber, index) => <article key={barber.name} className="group overflow-hidden border border-white/10 bg-[#252520]"><div className="relative"><img src={barber.image} alt={`Foto de ${barber.name}`} className="aspect-square w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /><span className="absolute left-4 top-4 bg-[#0d0c0a]/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#b98b3e]">{index === 0 ? 'Perfil pendiente' : 'Nuevo perfil'}</span></div><div className="p-5"><h3 className="text-2xl font-medium">{barber.name}</h3><p className="mt-2 text-sm text-white/55">{barber.specialty}</p><a href={`https://wa.me/${barber.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="mt-6 flex items-center justify-center gap-2 bg-[#b98b3e] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#11110f] transition hover:bg-[#d0a65e]"><MessageCircle className="size-4" /> Contactar por WhatsApp</a></div></article>)}</div></div></section>

      <section className="border-y border-white/10 bg-[#191916] px-5 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#b98b3e]">02 / Mientras esperás</p><h2 className="max-w-xl text-5xl font-medium leading-none tracking-[-0.06em] sm:text-7xl">Tu tiempo<br /><span className="text-white/40">también cuenta.</span></h2></div><div className="grid gap-px bg-white/10 sm:grid-cols-3"><Amenity icon="PS5" title="PlayStation" text="Una partida mientras llega tu turno." /><Amenity icon="POOL" title="Pool" text="Jugá, relajate y hacé tiempo." /><Amenity icon="DARDOS" title="Dardos" text="Competí con quien te acompaña." /></div></div></div></section>

      <section id="trabajos" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32"><div className="mb-12 flex items-end justify-between"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#b98b3e]">03 / Trabajos reales</p><h2 className="text-5xl tracking-[-0.05em] sm:text-7xl">Hecho en JF.</h2></div><ChevronRight className="hidden size-8 text-[#b98b3e] sm:block" /></div><div className="grid grid-cols-2 gap-3 md:grid-cols-3">{cuts.map((cut, i) => <img key={cut} src={cut} alt={`Corte realizado en JF ${i + 1}`} className={`w-full object-cover ${i === 0 ? 'col-span-2 aspect-[2/1] md:col-span-1 md:aspect-[3/4]' : 'aspect-[3/4]'}`} />)}</div></section>

      <section id="shop" className="bg-[#b98b3e] px-5 py-24 text-[#11110f] lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-10 md:flex-row md:items-end"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.25em]">04 / JF shop</p><h2 className="max-w-2xl text-5xl font-medium leading-none tracking-[-0.06em] sm:text-8xl">Lo que usamos.<br />Lo que recomendamos.</h2></div><ShoppingBag className="size-12" /></div><div className="mt-16 grid gap-px bg-[#11110f]/20 md:grid-cols-3">{products.map(product => <article key={product.name} className="bg-[#b98b3e] p-6"><Package className="mb-16 size-6" /><p className="text-[10px] uppercase tracking-[0.2em] opacity-60">{product.type}</p><h3 className="mt-3 text-xl font-medium">{product.name}</h3><div className="mt-8 flex items-center justify-between border-t border-[#11110f]/20 pt-4"><span>{product.price}</span><ArrowUpRight className="size-5" /></div></article>)}</div></div></section>

      <section id="visitanos" className="mx-auto max-w-7xl px-5 py-28 lg:px-10 lg:py-40"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#b98b3e]">04 / Visitá JF</p><h2 className="text-5xl font-medium leading-none tracking-[-0.06em] sm:text-8xl">Te esperamos<br /><span className="text-[#b98b3e]">en el local.</span></h2><div className="mt-10 flex flex-col gap-5 border-t border-white/20 pt-6 text-sm leading-6 text-white/60"><p>Presidente Luis Sáenz Peña 338<br />CABA, Buenos Aires</p><p>Lun a Sáb · 9 hs a 21 hs<br />Barbería venezolana · Desde 2021 en la zona</p><a href="https://instagram.com" className="text-white transition hover:text-[#b98b3e]">Instagram</a></div></div><div className="overflow-hidden border border-white/10 bg-[#191916]"><iframe title="Ubicación de JF Barbershop" src="https://www.google.com/maps?q=Presidente%20Luis%20Saenz%20Pe%C3%B1a%20338%2C%20CABA%2C%20Buenos%20Aires&output=embed" className="h-[360px] w-full grayscale invert-[0.9] sm:h-[480px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section>

      <footer className="border-t border-white/10 px-5 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-[10px] uppercase tracking-[0.2em] text-white/40 sm:flex-row"><span>JF Barbershop © 2026</span><span>El corte importa. Cómo te hacen sentir, también.</span></div></footer>

      {adminOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"><div className="w-full max-w-2xl bg-[#f1eee6] p-6 text-[#11110f] sm:p-10"><div className="flex items-start justify-between"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-black/50">Panel de administración</p><h2 className="mt-2 text-4xl font-medium tracking-tight">Contenido JF</h2></div><button onClick={() => setAdminOpen(false)} aria-label="Cerrar administración"><X /></button></div><div className="mt-10 grid gap-3 sm:grid-cols-2"><AdminCard icon={<Users />} title="Barberos" text="Nombres, fotos, especialidades y WhatsApp" /><AdminCard icon={<Package />} title="Productos" text="Máquinas, pomadas y precios" /><AdminCard icon={<Pencil />} title="Trabajos" text="Galería y fotos de cortes" /><AdminCard icon={<Star />} title="Reseñas" text="Opiniones visibles en la web" /></div><button className="mt-8 flex w-full items-center justify-center gap-2 bg-[#11110f] px-5 py-4 text-xs uppercase tracking-[0.18em] text-[#b98b3e]"><Plus className="size-4" /> Agregar contenido</button><p className="mt-5 text-center text-xs text-black/45">Vista demo del panel. La próxima etapa conecta estos datos a una base editable.</p></div></div>}
    </main>
  )
}

function Amenity({ icon, title, text }: { icon: string; title: string; text: string }) { return <article className="bg-[#191916] p-6"><span className="font-mono text-[10px] tracking-[0.2em] text-[#b98b3e]">{icon}</span><h3 className="mt-16 text-2xl font-medium">{title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{text}</p></article> }

function AdminCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <button className="flex items-start gap-4 border border-black/10 p-5 text-left transition hover:border-black/40"><span>{icon}</span><span><strong className="block text-lg font-medium">{title}</strong><small className="mt-1 block leading-5 text-black/50">{text}</small></span></button> }
