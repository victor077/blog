import { PropsWithChildren } from "react";

export default function LayoutArtigos({ children }: PropsWithChildren) {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className=" h-full w-1/2 flex flex-col items-center">{children}</div>
    </main>
  );
}
