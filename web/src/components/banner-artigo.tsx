/* eslint-disable @next/next/no-img-element */

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";
import { PropsWithChildren } from "react";

export default function BannerArtigo({ children }: PropsWithChildren) {
  return (
    <Card className="border rounded-xl flex flex-col p-2 bg-slate-100">
      {/* <Image src={image} alt="arq-img" /> */}
      {children}
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/89267990?v=4" />
          <AvatarFallback>Avatar user</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-slate-900">Victor Angelo</p>
          <p className="font-light text-sm text-slate-900">Junior Developer</p>
        </div>
      </div>
    </Card>
  );
}
