"use client";

import { useMemo, useState } from "react";
import {
  AUTOS,
  EQUIPOS,
  PRECIO_GNC,
  PRECIO_NAFTA,
  ahorroMes,
  costoGncMes,
  costoNaftaMes,
  mesesRecupero,
  miles,
  pesos,
} from "@/lib/datos";
import s from "./page.module.css";

const MESES = 36;
const V = { w: 660, h: 320, l: 66, r: 16, t: 22, b: 44 };

export default function Simulador() {
  const [autoId, setAutoId] = useState("gol");
  const [km, setKm] = useState(1600);
  const [equipoId, setEquipoId] = useState("g5-60");

  const auto = AUTOS.find((a) => a.id === autoId) ?? AUTOS[0];
  const disponibles = EQUIPOS.filter((e) => auto.equipos.includes(e.id));
  const equipo = disponibles.find((e) => e.id === equipoId) ?? disponibles[0];

  const nafta = costoNaftaMes(auto, km);
  const gnc = costoGncMes(auto, km);
  const ahorro = ahorroMes(auto, km);
  const meses = mesesRecupero(auto, km, equipo);
  const mesesTexto = meses === Infinity ? "sin recupero" : String(Math.ceil(meses));

  const grafico = useMemo(() => {
    const maxY = Math.max(nafta * MESES, equipo.precio + gnc * MESES);
    const px = (m: number) => V.l + (m / MESES) * (V.w - V.l - V.r);
    const py = (v: number) => V.h - V.b - (v / maxY) * (V.h - V.b - V.t);
    const lineaNafta = `M${px(0)},${py(0)} L${px(MESES)},${py(nafta * MESES)}`;
    const lineaGnc = `M${px(0)},${py(equipo.precio)} L${px(MESES)},${py(equipo.precio + gnc * MESES)}`;
    const cruceM = Math.min(meses, MESES);
    const cruceV = nafta * cruceM;
    const area =
      meses < MESES
        ? `M${px(cruceM)},${py(cruceV)} L${px(MESES)},${py(nafta * MESES)} L${px(MESES)},${py(
            equipo.precio + gnc * MESES
          )} Z`
        : "";
    const ticks = [0, 6, 12, 18, 24, 30, 36];
    return { px, py, lineaNafta, lineaGnc, cruceM, cruceV, area, maxY, ticks };
  }, [nafta, gnc, equipo.precio, meses]);

  return (
    <div className={s.sim}>
      <div className={s.controles}>
        <div className={s.bloque}>
          <p className={s.etiqueta}>Su vehículo</p>
          <div className={s.chips}>
            {AUTOS.map((a) => (
              <button
                key={a.id}
                type="button"
                className={a.id === autoId ? s.chipActivo : s.chip}
                aria-pressed={a.id === autoId}
                onClick={() => {
                  setAutoId(a.id);
                  const primeros = EQUIPOS.filter((e) => a.equipos.includes(e.id));
                  if (!a.equipos.includes(equipoId)) setEquipoId(primeros[0].id);
                }}
              >
                <span className={s.chipMarca}>{a.marca}</span>
                <span className={s.chipModelo}>{a.modelo}</span>
              </button>
            ))}
          </div>
          <p className={s.pieBloque}>{auto.detalle}. Rinde {auto.kmPorLitro} km por litro a nafta.</p>
        </div>

        <div className={s.bloque}>
          <div className={s.etiquetaFila}>
            <p className={s.etiqueta}>Kilómetros por mes</p>
            <output className={s.valorKm}>{miles(km)} km</output>
          </div>
          <input
            className={s.rango}
            type="range"
            min={300}
            max={4000}
            step={50}
            value={km}
            aria-label="Kilómetros por mes"
            onChange={(e) => setKm(Number(e.target.value))}
          />
          <div className={s.rangoPies}>
            <span>300</span>
            <span>uso particular</span>
            <span>reparto diario</span>
            <span>4.000</span>
          </div>
        </div>

        <div className={s.bloque}>
          <p className={s.etiqueta}>Equipo que le entra</p>
          <div className={s.equipos}>
            {disponibles.map((e) => (
              <button
                key={e.id}
                type="button"
                className={e.id === equipo.id ? s.equipoActivo : s.equipo}
                aria-pressed={e.id === equipo.id}
                onClick={() => setEquipoId(e.id)}
              >
                <span className={s.equipoNombre}>{e.nombre}</span>
                <span className={s.equipoCil}>{e.cilindro}</span>
                <span className={s.equipoPrecio}>{pesos(e.precio)}</span>
              </button>
            ))}
          </div>
          <p className={s.pieBloque}>{equipo.nota}</p>
        </div>
      </div>

      <div className={s.resultado}>
        <div className={s.tapa}>
          <p className={s.tapaRotulo}>Recupera el equipo en</p>
          <p className={s.tapaNumero}>
            {mesesTexto}
            {meses !== Infinity ? <span className={s.tapaUnidad}>meses</span> : null}
          </p>
          <p className={s.tapaPie}>
            Manejando {miles(km)} km por mes con su {auto.modelo}
          </p>
        </div>

        <div className={s.cifras}>
          <div>
            <p className={s.cifraRotulo}>Hoy gasta en nafta</p>
            <p className={s.cifraValor}>{pesos(nafta)}</p>
            <p className={s.cifraNota}>por mes</p>
          </div>
          <div>
            <p className={s.cifraRotulo}>Pasaría a gastar</p>
            <p className={s.cifraValor}>{pesos(gnc)}</p>
            <p className={s.cifraNota}>por mes, cargando gas</p>
          </div>
          <div className={s.cifraFuerte}>
            <p className={s.cifraRotulo}>Se queda con</p>
            <p className={s.cifraValor}>{pesos(ahorro)}</p>
            <p className={s.cifraNota}>todos los meses</p>
          </div>
        </div>

        <figure className={s.graficoCaja}>
          <figcaption className={s.graficoTitulo}>
            Lo que lleva gastado, mes a mes, con una cosa y con la otra
          </figcaption>
          <div className={s.graficoScroll}>
            <svg viewBox={`0 0 ${V.w} ${V.h}`} className={s.grafico} role="img" aria-label={`Comparación acumulada a tres años. Siguiendo a nafta el gasto sube sin freno, y con equipo de gas arranca en el precio del equipo pero sube mucho más despacio. Las dos se cruzan a los ${mesesTexto} meses.`}>
              {grafico.ticks.map((m) => (
                <g key={m}>
                  <path d={`M${grafico.px(m)},${V.t} V${V.h - V.b}`} className={s.gGrilla} />
                  <text x={grafico.px(m)} y={V.h - V.b + 20} textAnchor="middle" className={s.gEje}>
                    {m}
                  </text>
                </g>
              ))}
              <text x={grafico.px(MESES)} y={V.h - V.b + 36} textAnchor="end" className={s.gEjeNota}>
                meses
              </text>

              {grafico.area ? <path d={grafico.area} className={s.gArea} /> : null}
              <path d={grafico.lineaNafta} className={s.gNafta} />
              <path d={grafico.lineaGnc} className={s.gGnc} />

              {meses < MESES ? (
                <g>
                  <path
                    d={`M${grafico.px(grafico.cruceM)},${grafico.py(grafico.cruceV)} V${V.h - V.b}`}
                    className={s.gCruce}
                  />
                  <circle
                    cx={grafico.px(grafico.cruceM)}
                    cy={grafico.py(grafico.cruceV)}
                    r={6}
                    className={s.gPunto}
                  />
                  <text
                    x={grafico.px(grafico.cruceM) - 14}
                    y={grafico.py(grafico.cruceV) - 16}
                    textAnchor="end"
                    className={s.gCruceTexto}
                  >
                    acá se empareja
                  </text>
                </g>
              ) : null}

              <text x={grafico.px(3)} y={grafico.py(nafta * 3) - 14} className={s.gRotuloNafta}>
                siguiendo a nafta
              </text>
              <text x={grafico.px(3)} y={grafico.py(equipo.precio + gnc * 3) - 14} className={s.gRotuloGnc}>
                con el equipo puesto
              </text>
            </svg>
          </div>
          <p className={s.graficoPie}>
            {meses < MESES
              ? `A los tres años la diferencia a favor es de ${pesos(
                  nafta * MESES - (equipo.precio + gnc * MESES)
                )}, ya descontado el equipo.`
              : "Con ese kilometraje el equipo tarda más de tres años en pagarse, así que hoy no le conviene."}
          </p>
        </figure>

        <div className={s.presupuesto}>
          <div className={s.presCabeza}>
            <span className={s.presTitulo}>Presupuesto</span>
            <span className={s.presFecha}>Valores de referencia</span>
          </div>
          <ul className={s.presFilas}>
            <li>
              <span>{equipo.nombre}, {equipo.cilindro}</span>
              <span>{pesos(equipo.precio)}</span>
            </li>
            <li>
              <span>Instalación, prueba y oblea inicial</span>
              <span>incluida</span>
            </li>
            <li>
              <span>Primera revisión anual agendada</span>
              <span>incluida</span>
            </li>
          </ul>
          <div className={s.presTotal}>
            <span>Total</span>
            <span>{pesos(equipo.precio)}</span>
          </div>
          <p className={s.presPie}>
            Se recupera en {mesesTexto} {meses !== Infinity ? "meses" : ""} con el uso que nos contó, y a partir de
            ahí el ahorro queda en su bolsillo.
          </p>
        </div>
      </div>

      <p className={s.aviso}>
        Nafta a {pesos(PRECIO_NAFTA)} el litro y gas a {pesos(PRECIO_GNC)} el metro cúbico. Los rendimientos, los
        valores de equipo y los precios de combustible son de referencia y no constituyen una cotización.
      </p>
    </div>
  );
}
