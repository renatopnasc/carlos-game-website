import bg from '@/assets/img/bg.jpg'
import gangsterImg from '@/assets/img/gangster.png'
import steveImg from '@/assets/img/steve.webp'

import { Header } from './components/header'
import { Button } from './components/ui/button'

export function App() {
  return (
    <div
      className="min-h-screen w-full antialiased"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-14 pb-14">
        <Header />

        <main className="mt-20 flex w-full flex-col items-center">
          <h1 className="mb-20 max-w-lg text-wrap text-center font-title text-9xl font-bold text-[#621313]">
            World&apos;s Rebirth
          </h1>

          <section className="mb-40 grid h-[calc(100vh-280px)] w-full grid-cols-2 items-start">
            <section className="flex w-full flex-col gap-8">
              <h1 className="max-w-[488px] text-5xl font-bold leading-snug">
                Desbrave reinos, derrote monstros, enfrente deuses!
              </h1>
              <p className="max-w-80 text-lg font-medium text-muted-foreground">
                Tem a coragem necessária para restaurar a humanidade?
              </p>
              <div className="flex items-center gap-4">
                <Button
                  disabled
                  className="rounded bg-[#621313] font-bold text-foreground hover:bg-[#621313] hover:opacity-90"
                >
                  Em breve
                </Button>
              </div>
            </section>

            <figure>
              <img
                src={steveImg}
                alt=""
                className="rounded-full object-cover shadow-lg shadow-rose-500/30"
              />
            </figure>
          </section>

          <section className="mb-40 grid grid-cols-2 gap-10">
            <figure>
              <img
                src={gangsterImg}
                alt=""
                className="rounded-full object-cover shadow-lg shadow-rose-500/30"
              />
            </figure>
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-5xl font-bold">Sobre o jogo</h2>

              <p className="text-justify text-lg font-normal text-muted-foreground">
                Em World&apos;s Rebirth, você embarca em uma jornada épica no
                mundo devastado pela guerra dos deuses. Com a missão de derrotar
                divindades poderosas e enfrentar criaturas mitológicas, você
                deve explorar reinos sombrios e perigosos, usando habilidades
                únicas e estratégias táticas para sobreviver. Hades oferece uma
                chance de redenção, mas o preço pode ser maior do que imagina.
                Sua coragem será testada enquanto luta para restaurar a
                humanidade e desvendar os segredos que cercam o submundo.
              </p>
            </div>
          </section>

          <section className="flex flex-col items-center gap-8">
            <h2 className="text-5xl font-bold">Confira o trailer!</h2>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/LqaVY6q_lEk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>
        </main>
      </div>
    </div>
  )
}
