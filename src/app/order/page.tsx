import { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { OrderForm } from "@/components/order/OrderForm";

export const metadata: Metadata = {
  title: "Order Your Mod",
  description: "Request your Neocool thermal mod for MacBook Neo.",
};

export default function OrderPage() {
  return (
    <section className="py-24 min-h-screen bg-ice-surface ice-texture">
      <Container className="relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Order Your Mod</h1>
          <p className="mt-3 text-lg text-slate-500">Select your thermal mod and we&apos;ll get back to you with next steps.</p>
        </div>
        <Suspense fallback={<div className="text-center text-slate-400">Loading...</div>}>
          <OrderForm />
        </Suspense>
      </Container>
    </section>
  );
}
