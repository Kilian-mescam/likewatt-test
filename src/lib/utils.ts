import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { v4 as uuidv4 } from 'uuid';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateCustomUUID(): string {
  const uuid = uuidv4(); // Generate a standard UUID
  return uuid.replace(/-/g, '').slice(0, 24); // Remove hyphens and take first 24 characters
}