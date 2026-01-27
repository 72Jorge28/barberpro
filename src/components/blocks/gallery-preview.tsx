// import Image from "next/image";
// import { Container } from "@/components/ui/container";
// import { Card } from "@/components/ui/card";

// const IMAGES = ["/images/demo/g1.jpg", "/images/demo/g2.jpg", "/images/demo/g3.jpg"];

// export function GalleryPreview() {
//   return (
//     <section className="py-12 sm:py-14">
//       <Container>
//         <h2 className="text-2xl font-semibold tracking-tight">Galería</h2>
//         <p className="mt-2 text-sm text-[hsl(var(--muted-fg))]">
//           Imágenes demo (reemplazables por el comprador).
//         </p>

//         <div className="mt-6 grid gap-4 sm:grid-cols-3">
//           {IMAGES.map((src) => (
//             <Card key={src} className="overflow-hidden">
//               <Image
//                 src={src}
//                 alt="Gallery demo"
//                 width={900}
//                 height={700}
//                 className="h-56 w-full object-cover"
//               />
//             </Card>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }
