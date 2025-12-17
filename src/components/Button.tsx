import { cn } from '../lib/utils'

export default function Button({
    className,
    ...props
}: React.ComponentProps<'button'> & {
    asChild?: boolean
}) {
    return (
        <button
            data-slot="button"
            className={cn(
                'inline-flex h-9 items-center justify-center gap-2 rounded-md bg-black p-2 text-sm font-medium text-white',
                className,
            )}
            {...props}
        />
    )
}
