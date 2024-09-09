"use client";
import { cn } from "@/utilities/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = React.PropsWithChildren<
  LinkProps & React.HTMLProps<HTMLAnchorElement>
>;

const NavLink: React.FC<NavLinkProps> = ({
  children,
  className = "",
  href,
  ...props
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const combinedClasses = cn(
    className,
    isActive
      ? "text-blue-300 border-blue-300"
      : "text-gray-300 border-transparent",
    "border-b-2 font-semibold tracking-tighter transition duration-200 lg:text-lg",
  );

  return (
    <Link href={href} {...props} className={combinedClasses}>
      {children}
    </Link>
  );
};

export default NavLink;
