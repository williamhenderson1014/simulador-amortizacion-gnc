export type Auto = {
  id: string;
  marca: string;
  modelo: string;
  detalle: string;
  kmPorLitro: number;
  kmPorMetro: number;
  equipos: string[];
};

export type Equipo = {
  id: string;
  nombre: string;
  cilindro: string;
  autonomia: string;
  precio: number;
  nota: string;
};

export const PRECIO_NAFTA = 2250;
export const PRECIO_GNC = 620;

export const AUTOS: Auto[] = [
  {
    id: "cronos",
    marca: "Fiat",
    modelo: "Cronos 1.3",
    detalle: "Sedán, uso urbano",
    kmPorLitro: 14.5,
    kmPorMetro: 12.8,
    equipos: ["g5-60", "g5-80"],
  },
  {
    id: "gol",
    marca: "Volkswagen",
    modelo: "Gol Trend 1.6",
    detalle: "Hatch, el más convertido del país",
    kmPorLitro: 12.5,
    kmPorMetro: 11.0,
    equipos: ["g5-60", "g3-60", "g5-80"],
  },
  {
    id: "etios",
    marca: "Toyota",
    modelo: "Etios 1.5",
    detalle: "Sedán, mucho kilometraje de aplicación",
    kmPorLitro: 13.8,
    kmPorMetro: 12.2,
    equipos: ["g5-60", "g5-80"],
  },
  {
    id: "onix",
    marca: "Chevrolet",
    modelo: "Onix 1.4",
    detalle: "Hatch, uso mixto",
    kmPorLitro: 13.2,
    kmPorMetro: 11.6,
    equipos: ["g5-60", "g3-60"],
  },
  {
    id: "kangoo",
    marca: "Renault",
    modelo: "Kangoo 1.6",
    detalle: "Utilitario, reparto diario",
    kmPorLitro: 10.5,
    kmPorMetro: 9.2,
    equipos: ["g5-80", "g5-60"],
  },
  {
    id: "partner",
    marca: "Peugeot",
    modelo: "Partner 1.6",
    detalle: "Utilitario, carga y ruta",
    kmPorLitro: 10.0,
    kmPorMetro: 8.8,
    equipos: ["g5-80", "g3-60"],
  },
];

export const EQUIPOS: Equipo[] = [
  {
    id: "g5-60",
    nombre: "5ta generación",
    cilindro: "Cilindro de 60 litros",
    autonomia: "Autonomía media",
    precio: 1600000,
    nota: "Inyección secuencial. Es la que entra en casi todo lo nafta inyectada de hoy.",
  },
  {
    id: "g3-60",
    nombre: "3ra generación",
    cilindro: "Cilindro de 60 litros",
    autonomia: "Autonomía media",
    precio: 1250000,
    nota: "Más simple y más barata. No entra en todos los motores.",
  },
  {
    id: "g5-80",
    nombre: "5ta generación",
    cilindro: "Cilindro de 80 litros",
    autonomia: "Autonomía larga",
    precio: 1850000,
    nota: "Para el que hace muchos kilómetros y no quiere cargar todos los días.",
  },
];

export function pesos(n: number): string {
  const entero = Math.round(n);
  const s = String(Math.abs(entero));
  let out = "";
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && (s.length - i) % 3 === 0) out += ".";
    out += s[i];
  }
  return (entero < 0 ? "-$ " : "$ ") + out;
}

export function costoNaftaMes(auto: Auto, kmMes: number): number {
  return (kmMes / auto.kmPorLitro) * PRECIO_NAFTA;
}

export function costoGncMes(auto: Auto, kmMes: number): number {
  return (kmMes / auto.kmPorMetro) * PRECIO_GNC;
}

export function ahorroMes(auto: Auto, kmMes: number): number {
  return costoNaftaMes(auto, kmMes) - costoGncMes(auto, kmMes);
}

export function mesesRecupero(auto: Auto, kmMes: number, equipo: Equipo): number {
  const a = ahorroMes(auto, kmMes);
  if (a <= 0) return Infinity;
  return equipo.precio / a;
}

export function miles(n: number): string {
  const s = String(Math.round(n));
  let out = "";
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && (s.length - i) % 3 === 0) out += ".";
    out += s[i];
  }
  return out;
}
