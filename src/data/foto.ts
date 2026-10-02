import type { ImageMetadata } from "astro";
import { kontakt } from "./kontakt";

// Foto wird automatisch verwendet, sobald src/assets/foto.(jpg|jpeg|png|webp) existiert
const fotos = import.meta.glob<{ default: ImageMetadata }>("../assets/foto.{jpg,jpeg,png,webp}", { eager: true });
export const foto = Object.values(fotos)[0]?.default;

// Ersatz, solange es kein Foto gibt
export const initialen = kontakt.name.split(" ").map((t) => t[0]).join("");
