"use client"

import Image from "next/image"
import { useState } from "react"
import { Check, Copy, Smartphone } from "lucide-react"
import { toast, Toaster } from "sonner"

import { Button } from "@/components/ui/button"
import { etransferConfig } from "@/lib/etransfer-config"
import { cn } from "@/lib/utils"

export function EtransferPaymentScreen() {
  const { email, autoDeposit, password } = etransferConfig
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      toast.success("Copied")
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error("Could not copy — select the email manually")
    }
  }

  return (
    <div
      className={cn(
        "min-h-dvh flex flex-col",
        "bg-[oklch(0.97_0.02_240)] text-foreground",
      )}
    >
      <Toaster position="top-center" richColors closeButton />

      {/* Header */}
      <header className="shrink-0 pt-5 pb-3 px-4 text-center">
        <div className="mx-auto mb-2 relative h-12 w-12 sm:h-14 sm:w-14">
          <Image
            src="/images/bbm-20logo.png"
            alt="Bluebird Motel"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="text-xs font-medium uppercase tracking-widest text-primary">
          Quick Payment
        </p>
      </header>

      {/* Card */}
      <main className="flex-1 px-4 pb-6 w-full max-w-md mx-auto flex flex-col">
        <div
          className={cn(
            "rounded-2xl border border-border/80 bg-card shadow-sm",
            "px-4 py-5 sm:px-5 sm:py-6",
          )}
        >
          <h1 className="text-[1.35rem] sm:text-2xl font-bold leading-tight tracking-tight text-balance">
            Send Payment via e-Transfer
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Use this email in your banking app
          </p>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-2">
            <div
              className={cn(
                "flex-1 min-w-0 rounded-xl bg-muted/80 px-3 py-2.5 sm:py-3",
                "flex items-center justify-center overflow-x-auto [scrollbar-width:thin]",
                "border border-border/60",
              )}
              title={email}
            >
              <span
                className={cn(
                  "text-sm sm:text-base font-semibold tracking-tight text-center",
                  "whitespace-nowrap inline-block",
                )}
              >
                {email}
              </span>
            </div>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="shrink-0 h-auto min-h-12 px-4 border-primary/30"
              onClick={copyEmail}
              aria-label="Copy email address"
            >
              {copied ? (
                <Check className="size-5 text-green-600" aria-hidden />
              ) : (
                <Copy className="size-5" aria-hidden />
              )}
              <span className="font-semibold">Copy</span>
            </Button>
          </div>

          <div className="mt-3">
            {autoDeposit ? (
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                  "bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-100",
                )}
              >
                Auto-deposit enabled
              </span>
            ) : (
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                  "bg-amber-100 text-amber-950 dark:bg-amber-950/40 dark:text-amber-100",
                )}
              >
                Password required
              </span>
            )}
          </div>

          <ol className="mt-5 space-y-3">
            <li className="flex gap-3">
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full",
                  "bg-primary text-primary-foreground text-sm font-bold",
                )}
              >
                1
              </span>
              <div className="pt-0.5">
                <p className="font-semibold leading-snug">Open your banking app</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-0.5">
                  <Smartphone className="size-3.5 shrink-0 opacity-70" aria-hidden />
                  Interac e-Transfer
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full",
                  "bg-primary text-primary-foreground text-sm font-bold",
                )}
              >
                2
              </span>
              <div className="pt-0.5">
                <p className="font-semibold leading-snug">Send e-Transfer to the motel email</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full",
                  "bg-primary text-primary-foreground text-sm font-bold",
                )}
              >
                3
              </span>
              <div className="pt-0.5">
                <p className="font-semibold leading-snug">
                  Add your name and room number in the message
                </p>
              </div>
            </li>
          </ol>

          <div
            className={cn(
              "mt-5 rounded-xl border border-dashed border-border bg-muted/40 px-3 py-3",
              "text-sm font-mono leading-relaxed",
            )}
          >
            <div>
              <span className="text-muted-foreground font-sans text-xs font-medium">
                Example
              </span>
            </div>
            <div className="mt-1">
              Name: <span className="font-semibold">John Smith</span>
            </div>
            <div>
              Room: <span className="font-semibold">204</span>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-muted/60 px-3 py-2.5 text-sm">
            {autoDeposit ? (
              <p className="font-medium text-foreground">
                No password needed — auto-deposit is on.
              </p>
            ) : (
              <>
                <p className="font-semibold text-foreground">e-Transfer password</p>
                <p className="mt-1 text-lg font-bold tracking-wide break-words">{password}</p>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
