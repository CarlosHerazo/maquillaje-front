import React from 'react';

export default function Licencia() {
  return (
    <section className="py-8 px-4 bg-trasnparent">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-rose-600 mb-2">
          <a
            href="https://maquillaje-front.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline font-medium"
          >
            BellezaGlam
          </a>{' '}
          © {new Date().getFullYear()} por{' '}
          <a
            href="https://maquillaje-front.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline font-medium"
          >
            Yailín Cuadrado
          </a>
        </p>

        <p className="text-sm text-rose-500 flex items-center justify-center gap-1 flex-wrap">
          Está licenciado bajo una{' '}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 hover:underline font-medium"
          >
            Licencia Creative Commons Atribución 4.0 Internacional
          </a>
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
            alt="CC"
            className="inline-block w-4 h-4 ml-1"
          />
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
            alt="BY"
            className="inline-block w-4 h-4"
          />
        </p>
      </div>
    </section>
  );
}
