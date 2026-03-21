"use client"

import { useRouter } from "next/navigation"

/** Hidden entry to `/q/etransfer` for staff testing — not linked in navigation. */
export function SecretEtransferAccess() {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.push("/q/etransfer")}
      className={[
        "ml-1.5 inline-flex min-h-[12px] min-w-[12px] items-center justify-center rounded-full",
        "bg-primary/20 hover:bg-primary/40 focus-visible:bg-primary/40",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "transition-colors",
      ].join(" ")}
      aria-label="Open quick payment screen"
      title="Quick payment"
    />
  )
}
