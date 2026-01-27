// import { Card } from "@/components/ui/card";
// import { Container } from "@/components/layout/container";

// export type ServiceItem = {
//   title: string;
//   description: string;
// };

// export function ServicesGrid(props: {
//   title: string;
//   subtitle?: string;
//   items: ServiceItem[];
// }) {
//   return (
//     <section className="py-10 sm:py-14">
//       <Container>
//         <div className="flex items-end justify-between gap-6">
//           <div>
//             <h2 className="text-2xl font-semibold tracking-tight">{props.title}</h2>
//             {props.subtitle && (
//               <p className="mt-2 text-sm text-[hsl(var(--muted-fg))] sm:text-base">
//                 {props.subtitle}
//               </p>
//             )}
//           </div>
//         </div>

//         <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {props.items.map((item) => (
//             <Card key={item.title} className="p-6">
//               <div className="flex items-start gap-3">
//                 <div className="mt-1 h-9 w-9 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] grid place-items-center">
//                   <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--accent))]" />
//                 </div>

//                 <div>
//                   <div className="font-semibold">{item.title}</div>
//                   <p className="mt-2 text-sm text-[hsl(var(--muted-fg))]">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }
