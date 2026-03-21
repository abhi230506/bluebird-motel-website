/**
 * e-Transfer payment screen settings.
 * Page URL (QR / direct link only, not in site navigation): /q/etransfer
 */
export const etransferConfig = {
  /** Interac e-Transfer recipient email */
  email: "bluebirdmotelinnisfail@gmail.com",
  /** When true: show “Auto-deposit enabled” and “No password needed” */
  autoDeposit: true,
  /** Shown only when autoDeposit is false */
  password: "Ask front desk",
} as const
