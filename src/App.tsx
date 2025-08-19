
import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Menu, Star, box, Package, Truck, Shield, Wand2, Leaf, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const PRODUCTS = [
  { id: 'mini-fox', name: 'Articulated Fox', price: 24.0, rating: 4.8, category: 'Miniatures', material: 'PLA', color: 'Orange',
    image: 'https://images.unsplash.com/photo-1544551763-7ef420c7d43e?q=80&w=1200&auto=format&fit=crop', features: ['No supports','Flexible joints','Made to order'] },
  { id: 'desk-stand', name: 'Modular Headphone Stand', price: 32.0, rating: 4.7, category: 'Desk', material: 'PETG', color: 'Black',
    image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop', features: ['Cable slot','Snap-fit','Matte texture'] },
  { id: 'planter', name: 'Geometric Planter', price: 18.0, rating: 4.5, category: 'Home', material: 'PLA+', color: 'White',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop', features: ['Water-safe liner','Variant sizes','Recyclable'] },
  { id: 'camera-rig', name: 'Action Cam Mount Kit', price: 28.0, rating: 4.6, category: 'Gadgets', material: 'ABS', color: 'Gray',
    image: 'https://images.unsplash.com/photo-1519183071298-a2962be96f83?q=80&w=1200&auto=format&fit=crop', features: ['M5 hardware','Heat resistant','Low vibration'] },
  { id: 'cookie-cutter', name: 'Custom Cookie Cutter', price: 12.0, rating: 4.9, category: 'Kitchen', material: 'PETG', color: 'Any',
    image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop', features: ['Food-safe PETG','Dishwasher safe','Upload design'] },
  { id: 'table-hook', name: 'Under-Desk Hook', price: 9.0, rating: 4.4, category: 'Desk', material: 'PLA', color: 'Assorted',
    image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=1200&auto=format&fit=crop', features: ['Strong infill','No drilling','Soft edges'] },
];
const CATEGORIES = ['All','Miniatures','Desk','Home','Gadgets','Kitchen'] as const;

function formatCurrency(n:number){ return new Intl.NumberFormat(undefined,{style:'currency',currency:'USD'}).format(n); }

function Nav({ onContactClick }:{ onContactClick:()=>void }){
  return (
    <div className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3"><box className="h-6 w-6"/><span className="font-semibold text-lg">PrintForge</span></div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#products" className="hover:underline">Products</a>
          <a href="#how" className="hover:underline">How it works</a>
          <a href="#about" className="hover:underline">About</a>
          <button onClick={onContactClick} className="hover:underline">Contact</button>
        </div>
        <div className="md:hidden"><Menu className="h-6 w-6" /></div>
      </div>
    </div>
  );
}

function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Sell Stunning <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">3D Prints</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg">A sleek, conversion-focused template built for makers. Showcase products, take custom orders, and ship fast.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#products"><Button size="lg"><ShoppingCart className="h-4 w-4 mr-2" /> Shop Prints</Button></a>
            <a href="#custom"><Button size="lg" variant="outline">Request a Custom</Button></a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1"><Star className="h-4 w-4" /> 4.8 average rating</div>
            <div className="flex items-center gap-1"><Truck className="h-4 w-4" /> Fast shipping</div>
            <div className="flex items-center gap-1"><Shield className="h-4 w-4" /> Quality guaranteed</div>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="relative">
          <div className="aspect-[4/3] rounded-3xl shadow-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1400&auto=format&fit=crop" alt="3D printer in action" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-white shadow-lg rounded-2xl p-4">
            <div className="flex items-center gap-3"><Wand2 className="h-6 w-6"/><div><div className="font-semibold">Upload STL</div><div className="text-xs text-slate-500">Instant quote in minutes</div></div></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureGrid(){
  const features = [
    { icon: <Package className="h-5 w-5" />, title: "On‑Demand", desc: "Printed after purchase to reduce waste." },
    { icon: <Leaf className="h-5 w-5" />, title: "Eco Materials", desc: "PLA, PLA+, PETG, ABS & recycled blends." },
    { icon: <Shield className="h-5 w-5" />, title: "QC Checked", desc: "Dimensional checks & post‑processing." },
    { icon: <Truck className="h-5 w-5" />, title: "Worldwide", desc: "Tracked shipping with protective packaging." },
  ];
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <Card key={i} className="rounded-2xl">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="p-2 rounded-xl bg-slate-50">{f.icon}</div>
              <div className="font-semibold">{f.title}</div>
            </CardHeader>
            <CardContent className="text-slate-600">{f.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }:{ product:any; onAdd:(p:any)=>void }){
  return (
    <Card className="rounded-2xl overflow-hidden flex flex-col">
      <CardHeader className="p-0">
        <div className="aspect-square w-full overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
            <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
              <Badge>{product.material}</Badge>
              <span>•</span>
              <span>{product.category}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold">{formatCurrency(product.price)}</div>
            <div className="text-xs text-slate-500 flex items-center justify-end gap-1"><Star className="h-3 w-3" /> {product.rating}</div>
          </div>
        </div>
        <ul className="mt-3 text-sm text-slate-600 list-disc list-inside space-y-1">
          {product.features.map((f:string, i:number) => (<li key={i}>{f}</li>))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full" onClick={()=>onAdd(product)}><ShoppingCart className="h-4 w-4 mr-2" /> Add to cart</Button>
      </CardFooter>
    </Card>
  );
}

function HowItWorks(){
  const steps = [
    { title: "Choose a print", desc: "Pick from the catalog or request a custom model.", icon: <box className="h-4 w-4" /> },
    { title: "We print it", desc: "Optimized slicing, clean supports, and QA checks.", icon: <Wand2 className="h-4 w-4" /> },
    { title: "Ship worldwide", desc: "Packed with care and tracked to your door.", icon: <Truck className="h-4 w-4" /> },
  ];
  return (
    <section id="how" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {steps.map((s,i)=>(
          <Card key={i} className="rounded-2xl">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="p-2 rounded-xl bg-slate-50">{s.icon}</div>
              <div className="font-semibold">{s.title}</div>
            </CardHeader>
            <CardContent className="text-slate-600">{s.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Testimonials(){
  const quotes = [
    { name: 'Ava M.', text: 'Gorgeous quality and fast turnaround. The articulated fox is my new desk buddy!' },
    { name: 'Nikhil R.', text: 'They printed my custom camera mount perfectly—fit was spot on.' },
    { name: 'Sara K.', text: 'Appreciate the eco materials and recyclable packaging. Great shop.' },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-4">
        {quotes.map((q,i)=>(
          <Card key={i} className="rounded-2xl">
            <CardContent className="pt-6 text-slate-700">
              <p>“{q.text}”</p>
              <div className="mt-4 font-semibold">{q.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Newsletter(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="rounded-3xl bg-slate-50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Get 10% off your first print</h3>
          <p className="text-slate-600 mt-2">Join our newsletter for new drops and maker tips.</p>
        </div>
        <form className="flex w-full md:w-auto gap-2" onSubmit={(e)=>e.preventDefault()}>
          <Input type="email" placeholder="you@domain.com" className="w-full md:w-72" />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6 text-sm">
        <div className="col-span-2">
          <div className="flex items-center gap-2"><box className="h-5 w-5"/><span className="font-semibold">PrintForge</span></div>
          <p className="text-slate-600 mt-3">Small studio turning filament into functional art. Made with love and precision.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@printforge.shop</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 010-3344</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Follow</div>
          <div className="flex gap-3">
            <a aria-label="Instagram" href="#" className="p-2 rounded-full bg-slate-100"><Instagram className="h-4 w-4" /></a>
            <a aria-label="Twitter" href="#" className="p-2 rounded-full bg-slate-100"><Twitter className="h-4 w-4" /></a>
            <a aria-label="Facebook" href="#" className="p-2 rounded-full bg-slate-100"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} PrintForge — All rights reserved.</div>
    </footer>
  );
}

export default function ThreeDPrintShop(){
  const [query,setQuery] = useState('');
  const [category,setCategory] = useState<(typeof CATEGORIES)[number]>('All');
  const [cart,setCart] = useState<{id:string; name:string; qty:number; price:number}[]>([]);

  const filtered = useMemo(()=>{
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter(p => (category==='All' || p.category===category) && (q==='' || p.name.toLowerCase().includes(q) || p.material.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)));
  }, [query, category]);

  const subtotal = cart.reduce((sum,i)=>sum + i.qty*i.price, 0);

  function addToCart(p:any){
    setCart(prev=>{
      const f = prev.find(i=>i.id===p.id);
      if (f) return prev.map(i=> i.id===p.id ? {...i, qty:i.qty+1} : i);
      return [...prev, {id:p.id, name:p.name, price:p.price, qty:1}];
    });
  }
  function changeQty(id:string, delta:number){
    setCart(prev=> prev.map(i=> i.id===id ? {...i, qty:Math.max(0, i.qty+delta)} : i).filter(i=>i.qty>0));
  }
  function clearCart(){ setCart([]); }

  async function checkout(){
    const items = cart.map(i=>({ id:i.id, name:i.name, amount: Math.round(i.price*100), quantity:i.qty }));
    const res = await fetch('/api/create-checkout-session', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ items }) });
    const data = await res.json();
    if (data?.url) { window.location.href = data.url; }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <CartBar cart={cart} subtotal={subtotal} changeQty={changeQty} clearCart={clearCart} onCheckout={checkout} />
      <Nav onContactClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} />
      <Hero />
      <FeatureGrid />

      <section id="products" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Shop the catalog</h2>
          <div className="flex gap-2 w-full md:w-auto"><Input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search prints, materials, categories…" /></div>
        </div>

        <Tabs value={category} onValueChange={(v:any)=>setCategory(v)} className="mt-6">
          <TabsList className="flex flex-wrap gap-2">
            {CATEGORIES.map(c=> (<TabsTrigger key={c} value={c} className="rounded-full">{c}</TabsTrigger>))}
          </TabsList>
          <TabsContent value={category} className="mt-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map(p=> (<ProductCard key={p.id} product={p} onAdd={addToCart} />))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section id="custom" className="max-w-6xl mx-auto px-4 pb-8">
        <div className="rounded-3xl border p-6 md:p-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Need a custom print?</h3>
            <p className="text-slate-600 mt-2">Upload your STL or STEP file and we'll provide a quick quote. Choose materials, color, infill, and finish.</p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>Materials: PLA / PLA+ / PETG / ABS / TPU</li>
              <li>Finishes: Raw, sanded, primed, painted</li>
              <li>Tolerances: ±0.2 mm typical</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <Button>Upload file</Button>
              <Button variant="outline">Learn more</Button>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6">
            <div className="text-sm font-semibold mb-3">Quick quote</div>
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Your name" />
              <Input placeholder="Email" />
              <Input placeholder="Material (e.g., PETG)" />
              <Input placeholder="Color" />
              <Input className="col-span-2" placeholder="Link to model (Drive/Dropbox)" />
            </div>
            <Button className="mt-4 w-full">Request quote</Button>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Testimonials />
      <Newsletter />

      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-3xl border p-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Say hello</h3>
            <p className="text-slate-600 mt-2">Have a question about materials, sizing, or shipping times? We're here to help.</p>
            <ul className="mt-4 text-slate-700 space-y-2">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@printforge.shop</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 010-3344</li>
            </ul>
          </div>
          <form className="grid grid-cols-2 gap-3" onSubmit={(e)=>e.preventDefault()}>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input className="col-span-2" placeholder="Subject" />
            <textarea className="col-span-2 border rounded-md p-2 min-h-[120px]" placeholder="Your message" />
            <div className="col-span-2"><Button className="w-full">Send message</Button></div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CartBar({ cart, subtotal, changeQty, clearCart, onCheckout }: { cart:{id:string; name:string; qty:number; price:number}[]; subtotal:number; changeQty:(id:string,delta:number)=>void; clearCart:()=>void; onCheckout:()=>void; }){
  return (
    <div className="fixed bottom-5 inset-x-0 z-50 flex justify-center">
      <Sheet>
        <SheetTrigger><Button className="rounded-full shadow-2xl"><ShoppingCart className="h-4 w-4 mr-2" /> Cart ({cart.reduce((a,b)=>a+b.qty,0)})</Button></SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader><SheetTitle>Your cart</SheetTitle></SheetHeader>
          <div className="mt-4 flex-1 overflow-auto divide-y">
            {cart.length===0 && <div className="text-sm text-slate-500">Your cart is empty.</div>}
            {cart.map(i => (
              <div key={i.id} className="py-3 flex items-center justify-between gap-3">
                <div><div className="font-medium">{i.name}</div><div className="text-xs text-slate-500">{formatCurrency(i.price)}</div></div>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline" onClick={()=>changeQty(i.id,-1)}>-</Button>
                  <div className="w-8 text-center">{i.qty}</div>
                  <Button size="icon" variant="outline" onClick={()=>changeQty(i.id,1)}>+</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 space-y-3 border-t">
            <div className="flex items-center justify-between"><div className="text-sm text-slate-600">Subtotal</div><div className="font-semibold">{formatCurrency(subtotal)}</div></div>
            <Button className="w-full" onClick={onCheckout} disabled={cart.length===0}>Checkout</Button>
            <Button className="w-full" variant="outline" onClick={clearCart}>Clear cart</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
