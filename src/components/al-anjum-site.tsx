import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowRight,
  ArrowUp,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  FileCheck2,
  Landmark,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import logoAsset from "@/assets/al-anjum-logo.png.asset.json";
import heroImage from "@/assets/al-anjum-hero.jpg";
import bookkeepingImage from "@/assets/al-anjum-bookkeeping.jpg";
import advisoryImage from "@/assets/al-anjum-advisory.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navItems = ["About", "Services", "Solutions", "Industries", "Resources", "Contact"];

const services = [
  { icon: BookOpenCheck, title: "Bookkeeping & Reporting", text: "Reliable books, reconciliations and management reports that keep every decision grounded." },
  { icon: ReceiptText, title: "VAT Advisory & Filing", text: "Practical VAT support, accurate returns and clear guidance for UAE compliance." },
  { icon: Landmark, title: "Corporate Tax", text: "Registration, impact reviews, computation and filing support built around your business." },
  { icon: Calculator, title: "Payroll Services", text: "Structured payroll processing, records and reporting for growing teams." },
  { icon: BarChart3, title: "CFO Advisory", text: "Forecasting, cash-flow insight and board-ready financial intelligence without a full-time CFO." },
  { icon: FileCheck2, title: "Audit Preparation", text: "Organised schedules, supporting records and audit-ready files that reduce disruption." },
  { icon: ShieldCheck, title: "Compliance Support", text: "Ongoing financial controls and documentation designed for confident compliance." },
  { icon: BriefcaseBusiness, title: "Business Finance Setup", text: "A clean financial foundation for new entities, from chart of accounts to reporting workflows." },
];

const industries = [
  ["Professional services", "Clear records and reporting for advisory, agency and specialist firms."],
  ["Retail & hospitality", "Practical controls for daily transactions, suppliers and cash flow."],
  ["Construction & real estate", "Organised project finances, documentation and management visibility."],
  ["Trading & logistics", "Reliable books for inventory, margins, payments and operational decisions."],
] as const;

const solutions = [
  { number: "01", title: "Essential Books", text: "For founders who need dependable monthly records and reconciliations.", points: ["Monthly bookkeeping", "Bank reconciliation", "Management summary"] },
  { number: "02", title: "Tax Ready", text: "For UAE businesses that need coordinated books, VAT and corporate tax support.", points: ["Tax-ready records", "VAT return support", "Corporate tax guidance"] },
  { number: "03", title: "Finance Partner", text: "For scaling teams that need deeper reporting and proactive financial direction.", points: ["Cash-flow planning", "Performance dashboards", "CFO-level advisory"] },
];

const stats = [
  ["[500+]", "Businesses supported"],
  ["[10+]", "Years' experience"],
  ["[50+]", "Industries served"],
  ["[98%]", "Client satisfaction"],
];

const testimonials = [
  { quote: "Placeholder testimonial — add a verified client statement about responsive bookkeeping and clearer reporting.", name: "Client name", role: "Founder · Company name" },
  { quote: "Placeholder testimonial — add a verified client statement about VAT, tax readiness and dependable guidance.", name: "Client name", role: "Managing Director · Company name" },
  { quote: "Placeholder testimonial — add a verified client statement about gaining control of cash flow and decisions.", name: "Client name", role: "Finance Lead · Company name" },
];

const faqs = [
  ["How are your services priced?", "Fees depend on transaction volume, reporting needs and service scope. Request a consultation for a tailored proposal."],
  ["How quickly can you begin?", "The timeline depends on the condition and availability of your records. After a short discovery call, we provide a clear onboarding plan."],
  ["What documents do you need?", "Typically, bank statements, sales and purchase records, expense documents, payroll records and prior filings. We confirm the exact list for your service."],
  ["Can you take over from another accountant?", "Yes. We can review the current position, identify gaps and coordinate an orderly transition."],
  ["Do you support VAT and corporate tax?", "Yes. Our proposed scope can include registration guidance, record readiness, computations and filing support."],
  ["Can you help a newly formed company?", "Yes. We can establish bookkeeping workflows, reporting structures and a compliance calendar from the start."],
  ["Will I have a dedicated contact?", "Your final service proposal will define the support model and points of contact for your account."],
  ["Is the initial consultation free?", "The requested website offer is a free initial consultation. Confirm this offer before publishing publicly."],
];

function AnchorButton({ href, children, variant = "default", className = "" }: { href: string; children: React.ReactNode; variant?: "default" | "outline" | "secondary" | "ghost"; className?: string }) {
  return <Button asChild size="lg" variant={variant} className={className}><a href={href}>{children}</a></Button>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border/70 bg-background/90 shadow-sm backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:flex lg:h-24">
        <a href="#top" className="flex min-w-0 items-center" aria-label="AL ANJUM home">
          <img src={logoAsset.url} alt="AL ANJUM Accounting and Bookkeeping Co. LLC" className="h-12 w-auto max-w-[190px] object-contain lg:h-14 lg:max-w-[230px]" />
        </a>
        <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item} className="text-sm font-medium text-hero-foreground/80 transition-colors hover:text-brand" href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <AnchorButton href="#contact" className="ml-5 hidden lg:inline-flex">Book a Free Consultation <ArrowRight /></AnchorButton>
        <Button variant="ghost" size="icon" className="text-hero-foreground lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <div className="border-t border-border/20 bg-charcoal px-5 py-5 lg:hidden"><nav className="grid gap-1" aria-label="Mobile navigation">{navItems.map((item) => <a key={item} onClick={() => setOpen(false)} className="border-b border-hero-foreground/10 py-3 text-hero-foreground" href={`#${item.toLowerCase()}`}>{item}</a>)}<AnchorButton href="#contact" className="mt-4 w-full">Book a Free Consultation</AnchorButton></nav></div>}
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-[760px] overflow-hidden bg-charcoal text-hero-foreground lg:min-h-[820px]">
      <img src={heroImage} width={1600} height={1050} fetchPriority="high" alt="Business leaders reviewing financial documents in a Dubai office" className="absolute inset-0 h-full w-full object-cover object-[66%_center] opacity-60" />
      <div className="absolute inset-0 bg-hero-wash" />
      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-16 pt-32 lg:min-h-[820px] lg:items-center lg:pb-20 lg:pt-36">
        <div className="max-w-3xl animate-fade-in">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-brand"><span className="h-px w-10 bg-brand" /> From clarity to growth</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-8xl">Build your business with financial confidence.</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-hero-foreground/75 sm:text-lg">AL ANJUM helps ambitious businesses build stronger books, meet UAE tax obligations and turn financial information into practical decisions.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><AnchorButton href="#contact" className="w-full sm:w-auto">Book a Free Consultation <ArrowRight /></AnchorButton><AnchorButton href="#services" variant="outline" className="w-full border-hero-foreground/35 bg-transparent text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground sm:w-auto">Explore Our Services</AnchorButton></div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-hero-foreground/15 py-5">
            {["[500+] Businesses", "[98%] Satisfaction", "[10+] Years"].map((value) => <div key={value} className="border-r border-hero-foreground/15 px-3 first:pl-0 last:border-0"><span className="block text-sm font-semibold sm:text-lg">{value.split(" ")[0]}</span><span className="text-[10px] uppercase tracking-wider text-hero-foreground/55 sm:text-xs">{value.slice(value.indexOf(" ") + 1)} · placeholder</span></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  return <section className="border-b border-border bg-background py-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 lg:flex-row lg:items-center"><p className="shrink-0 text-sm font-semibold">Trusted by businesses across the UAE <span className="text-muted-foreground">· assets pending</span></p><div className="grid flex-1 grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4">{["CLIENT LOGO", "PARTNER LOGO", "CERTIFICATION", "AWARD"].map((item) => <div key={item} className="grid h-14 place-items-center bg-background text-[10px] font-bold tracking-[0.18em] text-muted-foreground">{item}</div>)}</div></div></section>;
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="max-w-3xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p><h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{title}</h2>{intro && <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{intro}</p>}</div>;
}

export function Services() {
  return <section id="services" className="bg-surface py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5"><SectionHeading eyebrow="What we do" title="Everything you need to move forward." intro="Focused financial services that give owners cleaner records, fewer surprises and better visibility." /><div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}</div></div></section>;
}

export function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  const Icon = service.icon;
  return <article className="group min-h-72 bg-background p-7 transition-colors hover:bg-charcoal hover:text-hero-foreground"><div className="flex items-center justify-between"><Icon className="size-7 text-accent" strokeWidth={1.5} /><span className="text-xs text-muted-foreground">0{index + 1}</span></div><h3 className="mt-16 text-xl font-semibold">{service.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground transition-colors group-hover:text-hero-foreground/65">{service.text}</p><a href="#contact" aria-label={`Discuss ${service.title}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">Discuss this service <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a></article>;
}

export function Introduction() {
  return <section id="about" className="py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-24"><h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Your business deserves more than just a service provider.</h2><div><p className="text-xl leading-8">It deserves a financial partner who understands what the numbers mean for your next move.</p><p className="mt-5 leading-7 text-muted-foreground">We combine disciplined accounting with clear, responsive guidance. The result is a calmer finance function, stronger compliance and information you can actually use.</p><a href="#why-choose-us" className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-semibold">Why choose AL ANJUM? <ArrowRight className="size-4" /></a></div></div></section>;
}

function FeatureRow({ image, reverse, eyebrow, title, text, bullets }: { image: string; reverse?: boolean; eyebrow: string; title: string; text: string; bullets: string[] }) {
  return <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"><div className={`overflow-hidden rounded-lg ${reverse ? "lg:order-2" : ""}`}><img src={image} loading="lazy" width={1400} height={1000} alt={title} className="aspect-[7/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" /></div><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p><h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{title}</h3><p className="mt-5 leading-7 text-muted-foreground">{text}</p><ul className="mt-7 grid gap-3">{bullets.map((item) => <li key={item} className="flex items-start gap-3"><CircleCheck className="mt-0.5 size-5 shrink-0 text-accent" /><span>{item}</span></li>)}</ul><a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">Learn more <ArrowRight className="size-4" /></a></div></div>;
}

export function ServiceFeatures() {
  return <section className="py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-24 px-5"><FeatureRow image={bookkeepingImage} eyebrow="Reliable foundations" title="Books that stay ready for every decision." text="We organise the detail behind your business so monthly reporting, VAT preparation and year-end work become more predictable." bullets={["Structured monthly close and reconciliations", "Clear management reports", "Audit-ready supporting records"]} /><FeatureRow image={advisoryImage} reverse eyebrow="Beyond compliance" title="Financial insight for the road ahead." text="Our advisory support translates performance, cash flow and forecasts into practical conversations for owners and leadership teams." bullets={["Cash-flow and scenario planning", "Performance review and commentary", "Decision support for growth"]} /></div></section>;
}

export function Solutions() {
  return <section id="solutions" className="bg-charcoal py-24 text-hero-foreground lg:py-32"><div className="mx-auto max-w-7xl px-5"><SectionHeading eyebrow="Flexible support" title="Choose the right solution for your business." intro="Example scopes shown for structure only. Final packages and pricing should reflect your approved commercial offer." /><div className="mt-14 grid gap-5 lg:grid-cols-3">{solutions.map((solution) => <article key={solution.title} className="group border border-hero-foreground/15 p-7 transition-colors hover:border-brand"><div className="flex items-center justify-between"><span className="text-sm text-brand">{solution.number}</span><Sparkles className="size-5 text-brand" /></div><h3 className="mt-10 text-2xl font-semibold">{solution.title}</h3><p className="mt-3 text-sm leading-6 text-hero-foreground/60">{solution.text}</p><ul className="mt-7 grid gap-3">{solution.points.map((point) => <li key={point} className="flex gap-3 text-sm"><Check className="size-4 text-brand" />{point}</li>)}</ul><div className="mt-8 border-t border-hero-foreground/15 pt-6"><p className="text-xs uppercase tracking-wider text-hero-foreground/40">Pricing on consultation</p><a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">Request a proposal <ArrowRight className="size-4" /></a></div></article>)}</div></div></section>;
}

export function Process() {
  const steps = [["01", "Consultation", "Understand your records, priorities and deadlines."], ["02", "Strategy", "Define scope, responsibilities and a practical action plan."], ["03", "Execution", "Organise, reconcile, report and resolve with care."], ["04", "Growth & Support", "Review results and support the decisions ahead."]];
  return <section className="py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5"><SectionHeading eyebrow="Our process" title="Simple. Clear. Done." /><div className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-8 before:absolute before:left-0 before:right-0 before:top-5 before:hidden before:h-px before:bg-border lg:before:block">{steps.map(([number, title, text]) => <div key={number} className="relative grid grid-cols-[auto_1fr] gap-5 lg:block"><div className="relative z-10 grid size-10 place-items-center rounded-full border border-accent bg-background text-xs font-bold text-accent">{number}</div><div className="lg:mt-8"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div></div>)}</div></div></section>;
}

export function WhyChooseUs() {
  const values = [[ShieldCheck, "Expert guidance"], [FileCheck2, "Transparent process"], [Sparkles, "Fast execution"], [Users, "Dedicated support"], [Building2, "End-to-end solutions"], [BarChart3, "Decision-ready insight"]] as const;
  return <section id="why-choose-us" className="bg-surface py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.05fr_.95fr]"><SectionHeading eyebrow="Why AL ANJUM" title="More than a service. A long-term partner." intro="A finance relationship designed around accountability, clarity and the realities of running a business." /><div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">{values.map(([Icon, label]) => <div key={label} className="bg-background p-6"><Icon className="size-6 text-accent" strokeWidth={1.5} /><h3 className="mt-6 font-semibold">{label}</h3></div>)}</div></div></section>;
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const [displayValue, setDisplayValue] = useState("[0]");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = Number(value.match(/\d+/)?.[0] ?? 0);
  const prefix = value.startsWith("[") ? "[" : "";
  const suffix = value.endsWith("%]") ? "%]" : value.endsWith("+]") ? "+]" : "]";

  useEffect(() => {
    const node = ref.current;
    if (!node || started) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      setStarted(true);
      const duration = 900;
      const startTime = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(`${prefix}${Math.round(numericValue * eased)}${suffix}`);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [numericValue, prefix, started, suffix]);

  return <div ref={ref} className="bg-accent px-5 py-8"><strong className="block text-4xl font-semibold sm:text-5xl">{displayValue}</strong><span className="mt-2 block text-sm opacity-75">{label}</span></div>;
}

export function Stats() {
  return <section className="bg-accent py-20 text-accent-foreground"><div className="mx-auto max-w-7xl px-5"><p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] opacity-70">Illustrative figures · replace with verified data</p><div className="grid grid-cols-2 gap-px bg-accent-foreground/20 lg:grid-cols-4">{stats.map(([value, label]) => <AnimatedStat key={label} value={value} label={label} />)}</div></div></section>;
}

export function Industries() {
  return <section id="industries" className="border-y border-border py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5"><SectionHeading eyebrow="Who we support" title="Financial clarity for the way you work." intro="Our approach adapts to the pace, paperwork and decisions that shape different businesses." /><div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{industries.map(([title, text], index) => <article key={title} className="bg-background p-7"><span className="text-xs font-bold text-accent">0{index + 1}</span><h3 className="mt-16 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div></section>;
}

export function CaseStudies() {
  const cases = [{ tag: "Retail · Placeholder", title: "From delayed books to a reliable monthly close", result: "Example result: faster reporting and clearer cash visibility", image: bookkeepingImage }, { tag: "Professional services · Placeholder", title: "Building a finance function ready for growth", result: "Example result: defined controls and decision-ready reporting", image: advisoryImage }];
  return <section className="py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><SectionHeading eyebrow="Success stories" title="Proof lives in the outcome." /><p className="max-w-sm text-sm leading-6 text-muted-foreground">These layouts contain placeholder examples. Replace them with approved, attributable client stories.</p></div><div className="mt-14 grid gap-7 lg:grid-cols-2">{cases.map((item) => <article key={item.title} className="group"><div className="overflow-hidden rounded-lg"><img src={item.image} loading="lazy" width={1400} height={1000} alt="Placeholder case study visual" className="aspect-[7/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div><p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-accent">{item.tag}</p><h3 className="mt-3 text-2xl font-semibold">{item.title}</h3><p className="mt-3 text-sm text-muted-foreground">{item.result}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">View case study <ArrowRight className="size-4" /></span></article>)}</div></div></section>;
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active] ?? testimonials[0];
  if (!item) return null;
  return <section className="bg-charcoal py-24 text-hero-foreground lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Client perspective</p><h2 className="mt-4 text-4xl font-semibold sm:text-5xl">What our clients say.</h2><p className="mt-5 text-sm text-hero-foreground/50">All testimonials are placeholders until verified client feedback is supplied.</p></div><div><Quote className="size-10 text-brand" /><blockquote className="mt-7 text-2xl leading-9 sm:text-3xl sm:leading-10">“{item.quote}”</blockquote><div className="mt-9 flex items-end justify-between gap-5"><div><strong>{item.name}</strong><p className="mt-1 text-sm text-hero-foreground/50">{item.role}</p></div><div className="flex gap-2"><Button variant="outline" size="icon" className="border-hero-foreground/20 bg-transparent text-hero-foreground hover:bg-hero-foreground/10" onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial"><ChevronLeft /></Button><Button variant="outline" size="icon" className="border-hero-foreground/20 bg-transparent text-hero-foreground hover:bg-hero-foreground/10" onClick={() => setActive((active + 1) % testimonials.length)} aria-label="Next testimonial"><ChevronRight /></Button></div></div></div></div></section>;
}

export function Blog() {
  const posts = [{ category: "Bookkeeping", title: "What a clean monthly close gives your business", date: "Date placeholder" }, { category: "UAE Tax", title: "A practical corporate tax readiness checklist", date: "Date placeholder" }, { category: "Finance", title: "The numbers growing businesses should review every month", date: "Date placeholder" }];
  return <section id="resources" className="py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="Resources" title="Insights that help you grow." /><a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold">View all insights <ArrowRight className="size-4" /></a></div><div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-3">{posts.map((post, index) => <article key={post.title} className="bg-background p-7"><div className="mb-16 flex items-center justify-between text-xs"><span className="font-bold uppercase tracking-wider text-accent">{post.category}</span><span className="text-muted-foreground">{post.date}</span></div><span className="text-xs text-muted-foreground">0{index + 1}</span><h3 className="mt-4 text-2xl font-semibold leading-8">{post.title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">Editorial placeholder — add the approved article excerpt and publishing details here.</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">Read article <ArrowRight className="size-4" /></span></article>)}</div></div></section>;
}

export function FAQ() {
  return <section className="bg-surface py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr]"><SectionHeading eyebrow="Common questions" title="Clarity before we begin." /><Accordion type="single" collapsible className="border-t border-border">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`item-${index}`}><AccordionTrigger className="py-6 text-left text-base hover:no-underline">{question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>;
}

const formSchema = z.object({ firstName: z.string().trim().min(2, "Enter your first name").max(80), lastName: z.string().trim().min(2, "Enter your last name").max(80), email: z.string().trim().email("Enter a valid email").max(255), phone: z.string().trim().min(7, "Enter a valid phone number").max(30), company: z.string().trim().max(120).optional(), service: z.string().trim().min(2, "Tell us which service you need").max(120), message: z.string().trim().min(10, "Please add a little more detail").max(1500) });
type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(formSchema) });
  if (submitted) return <div className="grid min-h-[520px] place-items-center rounded-lg bg-background p-10 text-center"><div><CircleCheck className="mx-auto size-12 text-accent" /><h3 className="mt-6 text-3xl font-semibold">Thank you.</h3><p className="mx-auto mt-3 max-w-md text-muted-foreground">Your enquiry has been captured in this website preview. Connect the final delivery destination before publishing.</p><Button variant="outline" className="mt-7" onClick={() => setSubmitted(false)}>Send another enquiry</Button></div></div>;
  return <form onSubmit={handleSubmit(() => setSubmitted(true))} className="rounded-lg bg-background p-6 sm:p-9" noValidate><div className="grid gap-5 sm:grid-cols-2">{[["firstName", "First name"], ["lastName", "Last name"], ["email", "Email"], ["phone", "Phone"], ["company", "Company name"], ["service", "Service required"]].map(([name, label]) => <label key={name} className="grid gap-2 text-sm font-medium">{label}<Input {...register(name as keyof FormValues)} aria-invalid={Boolean(errors[name as keyof FormValues])} className="h-12" placeholder={label} />{errors[name as keyof FormValues] && <span className="text-xs text-destructive">{errors[name as keyof FormValues]?.message}</span>}</label>)}</div><label className="mt-5 grid gap-2 text-sm font-medium">Message<Textarea {...register("message")} aria-invalid={Boolean(errors.message)} className="min-h-32" placeholder="Tell us what support you need" />{errors.message && <span className="text-xs text-destructive">{errors.message.message}</span>}</label><Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">Request Consultation <ArrowRight /></Button><p className="mt-4 text-xs leading-5 text-muted-foreground">Submitting this preview form does not send data yet. Delivery will be connected after contact details are approved.</p></form>;
}

export function CTA() {
  return <section className="bg-brand py-20 text-brand-foreground"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-5 lg:flex-row lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] opacity-65">Take the next step</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">Ready to turn financial complexity into clarity?</h2><p className="mt-5 text-lg opacity-70">Let's build a clear, practical path forward.</p></div><div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col"><AnchorButton href="#contact" className="bg-charcoal text-hero-foreground hover:bg-charcoal/90">Book Your Free Consultation</AnchorButton><Button variant="outline" size="lg" disabled className="border-brand-foreground/30 bg-transparent text-brand-foreground">Call Us · [PHONE NUMBER]</Button></div></div></section>;
}

export function Contact() {
  return <section id="contact" className="bg-surface py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.75fr_1.25fr]"><div><SectionHeading eyebrow="Contact" title="Let’s talk about your business." /><div className="mt-10 grid gap-7 text-sm"><div><p className="font-semibold">Office</p><p className="mt-2 text-muted-foreground">[OFFICE ADDRESS], UAE</p></div><div><p className="font-semibold">Phone & WhatsApp</p><p className="mt-2 text-muted-foreground">[PHONE NUMBER]</p></div><div><p className="font-semibold">Email</p><p className="mt-2 text-muted-foreground">[EMAIL ADDRESS]</p></div><div><p className="font-semibold">Working hours</p><p className="mt-2 text-muted-foreground">[WORKING HOURS]</p></div></div><div className="mt-10 grid h-48 place-items-center rounded-lg border border-dashed border-border bg-background text-xs font-bold uppercase tracking-wider text-muted-foreground">Google Maps placeholder</div></div><ContactForm /></div></section>;
}

export function Footer() {
  return <footer className="bg-charcoal py-16 text-hero-foreground"><div className="mx-auto max-w-7xl px-5"><div className="grid gap-12 border-b border-hero-foreground/15 pb-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><img src={logoAsset.url} alt="AL ANJUM Accounting and Bookkeeping Co. LLC" className="h-14 w-auto" /><p className="mt-5 max-w-sm text-sm leading-6 text-hero-foreground/55">Accounting, bookkeeping, tax support and financial guidance for ambitious businesses in the UAE.</p></div><div><h3 className="text-sm font-semibold">Services</h3><div className="mt-5 grid gap-3 text-sm text-hero-foreground/55">{services.slice(0, 4).map((s) => <a key={s.title} href="#services">{s.title}</a>)}</div></div><div><h3 className="text-sm font-semibold">Company</h3><div className="mt-5 grid gap-3 text-sm text-hero-foreground/55"><a href="#about">About</a><a href="#why-choose-us">Why us</a><a href="#resources">Resources</a><a href="#contact">Contact</a></div></div><div><h3 className="text-sm font-semibold">Contact</h3><div className="mt-5 grid gap-3 text-sm text-hero-foreground/55"><span>[PHONE NUMBER]</span><span>[EMAIL ADDRESS]</span><span>[OFFICE ADDRESS]</span></div></div></div><div className="flex flex-col justify-between gap-5 pt-7 text-xs text-hero-foreground/45 sm:flex-row"><p>© 2026 AL ANJUM Accounting and Bookkeeping Co. LLC. All Rights Reserved.</p><div className="flex flex-wrap gap-5"><span>Privacy Policy</span><span>Terms & Conditions</span><span>Cookie Policy</span></div></div></div></footer>;
}

export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const onScroll = () => setVisible(window.scrollY > 600); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2"><Button size="icon" className="size-12 rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90" disabled aria-label="WhatsApp number pending" title="WhatsApp number pending"><MessageCircle /></Button>{visible && <Button size="icon" variant="outline" className="size-12 rounded-full bg-background shadow-lg" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowUp /></Button>}</div>;
}

export function AlAnjumSite() {
  const schema = useMemo(() => ({ "@context": "https://schema.org", "@type": "ProfessionalService", name: "AL ANJUM Accounting and Bookkeeping Co. LLC", areaServed: "United Arab Emirates", description: "Accounting, bookkeeping, tax support and financial advisory services for businesses in the UAE." }), []);
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Header /><main><Hero /><TrustBar /><Introduction /><Services /><ServiceFeatures /><Solutions /><Process /><WhyChooseUs /><Industries /><Stats /><CaseStudies /><Testimonials /><Blog /><FAQ /><CTA /><Contact /></main><Footer /><FloatingActions /></>;
}