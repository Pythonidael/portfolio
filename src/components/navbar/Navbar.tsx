export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#hero" className="text-lg font-bold tracking-wider text-white">
          ERLANGGA
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm text-zinc-300 hover:text-white">
            About
          </a>

          <a
            href="#experience"
            className="text-sm text-zinc-300 hover:text-white"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="text-sm text-zinc-300 hover:text-white"
          >
            Projects
          </a>

          <a href="#skills" className="text-sm text-zinc-300 hover:text-white">
            Skills
          </a>

          <a href="#contact" className="text-sm text-zinc-300 hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="/cv/cv-erlangga.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-white transition hover:border-zinc-500"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}
