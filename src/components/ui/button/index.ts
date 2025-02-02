import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'wsainline-flex wsaitems-center wsajustify-center wsagap-2 wsawhitespace-nowrap wsarounded-md wsatext-sm wsafont-medium wsaring-offset-background wsatransition-colors focus-visible:wsaoutline-none focus-visible:wsaring-2 focus-visible:wsaring-ring focus-visible:wsaring-offset-2 disabled:wsapointer-events-none disabled:wsaopacity-50 [&_svg]:wsapointer-events-none [&_svg]:wsasize-4 [&_svg]:wsashrink-0',
  {
    variants: {
      variant: {
        default:
          'wsabg-primary wsatext-primary-foreground wsashadow hover:wsabg-primary/90',
        destructive:
          'wsabg-destructive wsatext-destructive-foreground wsashadow-sm hover:wsabg-destructive/90',
        outline:
          'wsaborder wsaborder-input wsabg-background wsashadow-sm hover:wsabg-accent hover:wsatext-accent-foreground',
        secondary:
          'wsabg-secondary wsatext-secondary-foreground wsashadow-sm hover:wsabg-secondary/80',
        ghost: 'hover:wsabg-accent hover:wsatext-accent-foreground',
        link: 'wsatext-primary wsaunderline-offset-4 hover:wsaunderline',
      },
      size: {
        default: 'wsah-9 wsapx-4 wsapy-2',
        sm: 'wsah-8 wsarounded-md wsapx-3 wsatext-xs',
        lg: 'wsah-10 wsarounded-md wsapx-8',
        icon: 'wsah-9 wsaw-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
