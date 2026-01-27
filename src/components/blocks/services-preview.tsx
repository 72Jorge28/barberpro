// import { Container } from "@/components/ui/container";
// import { Card } from "@/components/ui/card";

// const SERVICES = [
//   { title: "Fade premium", desc: "Transiciones limpias y detalle fino." },
//   { title: "Barba & perfilado", desc: "Líneas precisas, acabado elegante." },
//   { title: "Paquete completo", desc: "Corte + barba + estilo final." },
// ];

// export function ServicesPreview() {
//   return (
//     <section className="py-12 sm:py-14">
//       <Container>
//         <div className="flex items-end justify-between gap-6">
//           <div>
//             <h2 className="text-2xl font-semibold tracking-tight">Servicios</h2>
//             <p className="mt-2 text-sm text-[hsl(var(--muted-fg))]">
//               Pensado para verse bien en 1 minuto: simple, claro y premium.
//             </p>
//           </div>
//         </div>

//         <div className="mt-6 grid gap-4 sm:grid-cols-3">
//           {SERVICES.map((s) => (
//             <Card key={s.title} className="p-6">
//               <div className="text-lg font-semibold">{s.title}</div>
//               <p className="mt-2 text-sm text-[hsl(var(--muted-fg))]">{s.desc}</p>
//             </Card>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }
