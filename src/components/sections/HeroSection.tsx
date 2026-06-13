export default function HeroSection() {
  return (
    <section id="hero" className="flex min-h-[calc(100vh-64px)] items-center">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Software Engineer
        </p>

        <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
          Erlangga
        </h1>

        <p className="max-w-2xl text-lg text-zinc-400">
          Building enterprise applications, business systems, and digital
          solutions using Java, Spring Boot, SQL Server, and modern web
          technologies.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-white px-6 py-3 text-black"
          >
            View Projects
          </a>

          <a
            href="/cv/cv-erlangga.pdf"
            className="rounded-lg border border-zinc-700 px-6 py-3 text-white"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
