import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// If movie is released for at least 3 months, return true
export const formatTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursString = hours > 0 ? `${hours}h ` : "";
  const minutesString = remainingMinutes > 0 ? `${remainingMinutes}min` : "";

  return hoursString + minutesString;
};

export function checkIsNew(dateString: string) {
  const date = new Date(dateString);
  const diffInMillis = Date.now() - date.getTime();
  const months = diffInMillis / (1000 * 60 * 60 * 24 * 30);
  return months <= 3;
}

export const formatObjectData = <T extends Record<string, any>>(
  objArray: T[],
  objProp: keyof T,
): string => {
  if (!objArray || !Array.isArray(objArray)) {
    return "";
  }

  const dataStringArray = objArray.map((obj) => obj[objProp]);
  return dataStringArray.join(" | ");
};
