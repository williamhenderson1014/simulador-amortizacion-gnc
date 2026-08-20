import Simulador from "./Simulador";
import { Escudo, Flecha, Herramienta, Marca, Reloj, Surtidor } from "./icons";
import s from "./page.module.css";

const RAZONES = [
  {
    icono: Escudo,
    titulo: "Cilindro con su prueba al día",
    texto:
      "Cada equipo sale con la oblea y la fecha del cilindro cargada en su ficha. Cuando toca la quinquenal lo avisamos nosotros, no se entera cuando ya no puede cargar.",
  },
  {
    icono: Herramienta,
    titulo: "El mismo taller que lo instaló",
    texto:
      "La revisión anual, el service y cualquier ajuste se hacen donde está el historial del equipo. Nadie tiene que adivinar qué se le puso al auto ni con qué regulación quedó.",
  },
  {
    icono: Reloj,
    titulo: "Un turno que se respeta",
    texto:
      "La conversión ocupa el box un día entero, así que tomamos pocos por jornada. Preferimos darle fecha más adelante antes que prometerle una que no podemos cumplir.",
  },
];

export default function Pagina() {
  return (
    <>
      <header className={s.cabecera}>
        <div className={s.cabeceraCaja}>
          <a className={s.marca} href="#inicio">
            <Marca className={s.marcaIcono} />
            <span>Equipo de GNC</span>
          </a>
          <nav className={s.nav}>
            <a href="#cuenta">La cuenta</a>
            <a href="#porque">Por qué acá</a>
          </nav>
          <a className={s.botonCabecera} href="#cuenta">
            <Flecha className={s.botonIcono} />
            Hacer la cuenta
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className={s.portada}>
          <div className={s.portadaTexto}>
            <p className={s.rotulo}>Conversión a gas natural</p>
            <h1 className={s.titular}>
              La pregunta no es cuánto sale. Es <em>en cuánto se paga solo</em>.
            </h1>
            <p className={s.bajada}>
              Un equipo de GNC no es un gasto, es plata adelantada que después vuelve todos los meses en lo que deja de
              cargar. Cuánto tarda en volver depende de su auto y de los kilómetros que haga, así que la cuenta la
              hacemos con sus números y no con un promedio.
            </p>
            <div className={s.acciones}>
              <a className={s.botonPrincipal} href="#cuenta">
                Hacer la cuenta con mi auto
              </a>
              <a className={s.botonSecundario} href="#porque">
                Por qué convertirlo acá
              </a>
            </div>
            <p className={s.notaPortada}>
              <Surtidor className={s.notaIcono} />
              El que hace muchos kilómetros lo recupera antes. El que hace pocos, conviene que lo sepa antes de gastar.
            </p>
          </div>

          <figure className={s.tarjetaDato}>
            <figcaption className={s.datoCabeza}>
              <span className={s.datoTitulo}>Hoy en el surtidor</span>
              <span className={s.datoSello}>Referencia</span>
            </figcaption>
            <ul className={s.datoFilas}>
              <li>
                <span className={s.datoNombre}>Nafta súper</span>
                <span className={s.datoValor}>$ 1.320</span>
                <span className={s.datoUnidad}>por litro</span>
              </li>
              <li>
                <span className={s.datoNombre}>Gas natural</span>
                <span className={s.datoValor}>$ 640</span>
                <span className={s.datoUnidad}>por metro cúbico</span>
              </li>
            </ul>
            <p className={s.datoPie}>
              Un metro cúbico rinde casi lo mismo que un litro. Ahí está toda la diferencia, y por eso la cuenta cierra
              tan rápido en los autos que trabajan.
            </p>
          </figure>
        </section>

        <section id="cuenta" className={s.seccionCuenta}>
          <div className={s.encabezado}>
            <p className={s.rotulo}>La cuenta</p>
            <h2 className={s.titulo2}>Su auto, sus kilómetros, su número</h2>
            <p className={s.entrada2}>
              Elija el vehículo, mueva los kilómetros que hace por mes y fíjese qué equipo le entra. El resto se calcula
              solo, y el presupuesto aparece al final, cuando ya sabe si le conviene.
            </p>
          </div>
          <Simulador />
        </section>

        <section id="porque" className={s.seccionRazones}>
          <div className={s.encabezado}>
            <p className={s.rotulo}>Por qué acá</p>
            <h2 className={s.titulo2}>Instalar es la parte fácil, lo que sigue es lo que importa</h2>
            <p className={s.entrada2}>
              El equipo lo pone cualquiera. La diferencia aparece a los doce meses, cuando vence la revisión, y a los
              cinco años, cuando toca la prueba del cilindro.
            </p>
          </div>
          <div className={s.tarjetas}>
            {RAZONES.map((r) => {
              const Icono = r.icono;
              return (
                <article key={r.titulo} className={s.tarjeta}>
                  <Icono className={s.tarjetaIcono} />
                  <h3 className={s.tarjetaTitulo}>{r.titulo}</h3>
                  <p className={s.tarjetaTexto}>{r.texto}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <footer className={s.pie}>
        <div className={s.pieCaja}>
          <div className={s.pieMarca}>
            <Marca className={s.marcaIcono} />
            <span>Equipo de GNC</span>
          </div>
          <div className={s.pieColumnas}>
            <div>
              <h4>Conversión</h4>
              <p>Equipos de 3ra y 5ta generación</p>
              <p>Cilindros de 60 y 80 litros</p>
            </div>
            <div>
              <h4>Después de instalar</h4>
              <p>Revisión anual obligatoria</p>
              <p>Prueba del cilindro a los cinco años</p>
            </div>
            <div>
              <h4>Turnos</h4>
              <p>Pocas conversiones por día</p>
              <p>Revisiones y service todos los días</p>
            </div>
          </div>
          <p className={s.pieNota}>
            Los vehículos, los rendimientos, los precios de equipo y los valores de combustible que aparecen en esta
            página son datos de ejemplo y no constituyen una cotización.
          </p>
          <p className={s.pieCopy}>2026 Conversión y servicio de equipos de GNC</p>
        </div>
      </footer>
    </>
  );
}
