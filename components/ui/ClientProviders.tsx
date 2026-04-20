"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";
import PageTransition from "./PageTransition";

const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <CustomCursor />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
