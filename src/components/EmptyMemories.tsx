export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="leading-relaxe320 w-[360px] text-center">
        Você ainda nao registrou nenhuma lembrança, comece a{' '}
        <a href="/memories/new" className="underline hover:text-gray-50">
          criar agora!
        </a>
      </p>
    </div>
  )
}
