"use client";

import { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { orderSchema, type OrderSchema } from "@/lib/validators";
import { MACBOOK_MODELS, STAGE_OPTIONS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { OrderConfirmation } from "./OrderConfirmation";

const inputStyles = "w-full rounded-xl border border-sky-200 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400/40 placeholder:text-slate-400";

type StageValue = OrderSchema["stage"];

export function OrderForm() {
  const searchParams = useSearchParams();
  const preselect = searchParams.get("stage");
  const defaultStage: StageValue | undefined =
    preselect === "stage-1" || preselect === "stage-2" || preselect === "both" ? preselect : undefined;

  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<OrderSchema>({
    resolver: zodResolver(orderSchema) as unknown as Resolver<OrderSchema>,
    defaultValues: {
      stage: defaultStage,
      name: "",
      email: "",
      model: "",
      message: "",
    },
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Mod selection */}
        <fieldset
          aria-invalid={!!errors.stage}
          aria-describedby={errors.stage ? "err-stage" : undefined}
        >
          <legend className="text-sm font-medium text-slate-900 mb-3">Select Your Mod</legend>
          <div className="space-y-2">
            {STAGE_OPTIONS.map((opt) => (
              <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  value={opt.value}
                  {...register("stage")}
                  className="accent-[#38bdf8] w-4 h-4"
                />
                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{opt.label}</span>
              </label>
            ))}
          </div>
          {errors.stage && <p id="err-stage" className="mt-1 text-sm text-red-400">{errors.stage.message}</p>}
        </fieldset>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-1">
            Name <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            required
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined}
            {...register("name")}
            className={inputStyles}
            placeholder="Your name"
          />
          {errors.name && <p id="err-name" className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1">
            Email <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
            {...register("email")}
            className={inputStyles}
            placeholder="you@example.com"
          />
          {errors.email && <p id="err-email" className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
        </div>

        {/* Model */}
        <div>
          <label htmlFor="model" className="block text-sm font-medium text-slate-900 mb-1">
            MacBook Model <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <select
            id="model"
            required
            aria-invalid={!!errors.model}
            aria-describedby={errors.model ? "err-model" : undefined}
            {...register("model")}
            className={inputStyles}
          >
            <option value="">Select your model...</option>
            {MACBOOK_MODELS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          {errors.model && <p id="err-model" className="mt-1 text-sm text-red-400">{errors.model.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-1">Message <span className="text-slate-400">(optional)</span></label>
          <textarea
            id="message"
            rows={3}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "err-message" : undefined}
            {...register("message")}
            className={`${inputStyles} resize-none`}
            placeholder="Any additional notes..."
          />
          {errors.message && <p id="err-message" className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
        </div>

        {serverError && <p role="alert" className="text-sm text-red-400">{serverError}</p>}

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Submitting..." : "Submit Order Request"}
        </Button>
      </form>
    </GlassCard>
  );
}
