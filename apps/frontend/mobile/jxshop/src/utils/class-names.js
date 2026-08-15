import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
// Merge class
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
