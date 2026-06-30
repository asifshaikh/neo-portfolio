import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="font-heading text-2xl sm:text-4xl">Mohammed Sheikh</h1>
      <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Hi, my name is Mohammed Sheikh, Software engineer based in India.</p>

        <br />

        <p>
          This is my portfolio. Check my{' '}
          <a
            target="_blank"
            className="font-heading underline"
            href="https://github.com/asifshaikh"
          >
            github repo
          </a>{' '}
          for more info.
        </p>
      </div>

      <Links />
    </div>
  )
}
