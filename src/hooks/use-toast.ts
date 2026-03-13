

import { toast as sonnerToast } from "sonner"

type ToastOptions = {
  title?: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
}

function toast({ title, description, action }: ToastOptions) {
  return sonnerToast(title ?? "", {
    description,
    action: action
      ? {
          label: action.label,
          onClick: action.onClick,
        }
      : undefined,
  })
}

function useToast() {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
  }
}

export { useToast, toast }