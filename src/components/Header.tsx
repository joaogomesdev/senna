import React from "react";
import { Logo } from "./Logo";

interface Props {}

export const Header = ({}: Props) => {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  );
};
