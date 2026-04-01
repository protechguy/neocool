import { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OrderForm } from "@/components/order/OrderForm";

export const metadata: Metadata = {
  title: "Order Your Mod",
  description: "Request your Neocool thermal mod for MacBook Neo.",
};

export default function OrderPage() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading title="Order Your Mod" subtitle="Select your thermal mod and we'll get back to you with next steps." />
        <Suspense fallback={<div className="text-center text-text-secondary">Loading...</div>}>
          <OrderForm />
        </Suspense>
      </Container>
    </section>
  );
}
