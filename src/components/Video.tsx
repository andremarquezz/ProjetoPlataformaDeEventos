import { CaretRight, Envelope, FileArrowDown, LinkedinLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';

function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[68.75rem] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[68.75rem] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Aula 01 - Abertura</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação
              utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto
              no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela
              plataforma no nosso front-end utilizando Apollo Client.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-zinc-900"
                src="https://github.com/andremarquezz.png"
                alt="Imagem do Perfil Github"
              />

              <div className="leading-relaxed">
                <strong className="text-gray-200 font-bold text-2xl block">André Marquez</strong>
                <span className="text-gray-200 text-sm block">Pessoa Desenvolvedora Web</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              to="mailto:andre.marqquez@gmail.com"
              className="p-4 text-sm bg-green-500 flex-items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors "
            >
              <Envelope size={24} />
              Me mande um e-mail
            </Link>{' '}
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/andremarqquez/"
              className="p-4 text-sm border text-blue-700 border-blue-700 flex-items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-700 hover:text-stone-200 transition-colors"
            >
              <LinkedinLogo size={24} />
              Acesse meu linkedin
            </Link>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <Link
            to="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center ">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed ">
              <strong className="text-2xl">Material Complementar</strong>
              <p className="h-full p-6 flex items-center ">
                Acesse o repositorio para me ajudar no desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </Link>
          <Link
            to="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center ">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed ">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="h-full p-6 flex items-center ">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Video;
