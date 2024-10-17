import { Button } from '../ui/button'

export function Header() {
  return (
    <header className="flex w-full items-center justify-end py-10">
      <div className="flex w-fit items-center gap-10">
        <ul className="flex items-center gap-10">
          <li>
            <a className="text-base font-semibold" href="">
              Personagens
            </a>
          </li>
          <li>
            <a className="text-base font-semibold" href="">
              Sobre o jogo
            </a>
          </li>
          <li>
            <a className="text-base font-semibold" href="">
              Sobre nós
            </a>
          </li>
        </ul>
        <Button
          disabled
          variant={'secondary'}
          className="rounded bg-[#621313] font-semibold text-foreground hover:bg-[#621313] hover:opacity-90"
        >
          Em breve
        </Button>
      </div>
    </header>
  )
}
