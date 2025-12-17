import { SearchIcon } from 'lucide-react'
import { cn } from '../lib/utils'

type SearchBarProps = {
    value: string
    onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <search>
            <div className="relative w-full">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Введите название товара"
                    className={cn(
                        'selection:bg-primary flex h-10 w-full min-w-0 rounded-md border border-gray-200 bg-white px-3 py-1 text-base shadow-xs outline-none placeholder:text-gray-500',
                        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                        'shadow-sm transition-shadow duration-200 hover:border-gray-300 hover:shadow-lg',
                    )}
                />
                <div className="text-muted-foreground absolute top-1/2 right-3 flex -translate-y-1/2 items-center justify-center">
                    <SearchIcon className="cursor-pointer" strokeWidth={1.5} />
                </div>
            </div>
        </search>
    )
}
