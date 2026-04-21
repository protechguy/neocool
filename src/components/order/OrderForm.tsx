"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { orderSchema, type OrderSchema } from "@/lib/validators";
import { MACBOOK_MODELS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { OrderConfirmation } from "./OrderConfirmation";

const stageOptions = [
  { value: "stage-1" as const, label: "Stage 1 — Thermal Pad" },
  { value: "stage-2" as const, label: "Stage 2 — Copper Heatsink" },
  { value: "both" as const, label: "Both — Stage 1 + Stage 2 Bundle" },
];

const inputStyles = "w-full rounded-xl border border-sky-200 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400/40 placeholder:text-slate-400";

export function OrderForm() {
  const searchParams = useSearchParams();
  const preselect = searchParams.get("stage");
  const defaultStage = preselect === "stage-1" || preselect === "stage-2" ? preselect : undefined;

  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<OrderSchema>({
    resolver: zodResolver(orderSchema),
    defaultValues: { stage: defaultStage, name: "", email: "", model: "", message: "" },
  });

  const onSubmit = async (data: OrderSchema) => {
    setServerError("");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please try again.");
    }
  };

  if (submitted) return <OrderConfirmation />;

  return (
    <GlassCard className="max-w-lg mx-auto p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Mod selection */}
        <fieldset>
          <legend className="text-sm font-medium text-slate-900 mb-3">Select Your Mod</legend>
          <div className="space-y-2">
            {stageOptions.map((opt) => (
              <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" value={opt.value} {...register("stage")} className="accent-[#38bdf8] w-4 h-4" />
                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{opt.label}</span>
              </label>
            ))}
          </div>
          {errors.stage && <p className="mt-1 text-sm text-red-400">{errors.stage.message}</p>}
        </fieldset>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-1">Name</label>
          <input id="name" {...register("name")} className={inputStyles} placeholder="Your name" />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1">Email</label>
          <input id="email" type="email" {...register("email")} className={inputStyles} placeholder="you@example.com" />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
        </div>

        {/* Model */}
        <div>
          <label htmlFor="model" className="block text-sm font-medium text-slate-900 mb-1">MacBook Model</label>
          <select id="model" {...register("model")} className={inputStyles}>
            <option value="">Select your model...</option>
            {MACBOOK_MODELS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          {errors.model && <p className="mt-1 text-sm text-red-400">{errors.model.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-1">Message <span className="text-slate-400">(optional)</span></label>
          <textarea id="message" rows={3} {...register("message")} className={`${inputStyles} resize-none`} placeholder="Any additional notes..." />
        </div>

        {serverError && <p className="text-sm text-red-400">{serverError}</p>}

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Submitting..." : "Submit Order Request"}
        </Button>

        <p className="text-xs text-slate-500 text-center">
          By submitting, you agree to our{" "}
          <Link href="/privacy" className="text-sky-600 underline hover:text-sky-700">
            Privacy Policy
          </Link>{" "}and{" "}
          <Link href="/terms" className="text-sky-600 underline hover:text-sky-700">
            Terms of Sale
          </Link>.
        </p>
      </form>
    </GlassCard>
  );
}
