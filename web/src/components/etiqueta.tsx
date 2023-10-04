export interface Etiqueta {
  titulo: string;
  url: string;
}

interface EtiquetaProps {
  etiquetas: Etiqueta[];
}
export default function Etiqueta({ etiquetas }: EtiquetaProps) {
  return (
    <div className="flex items-center gap-2">
      {etiquetas.map((item) => (
        <>
          <a
            className=" rounded-2xl bg-slate-800 px-3 py-1 font-normal text-gray-200 transition-colors duration-300 hover:bg-slate-700 hover:text-gray-50 text-sm"
            href={item.url}
          >
            {item.titulo}
          </a>
        </>
      ))}
    </div>
  );
}
