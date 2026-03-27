"use client";

import type {
  AnchorHTMLAttributes,
  ComponentProps,
  ReactNode,
} from "react";

import type { VariantProps } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

type LinkButtonBaseProps = VariantProps<typeof buttonVariants> & {
  children: ReactNode;
  className?: string;
};

type NextLinkButtonProps = LinkButtonBaseProps &
  Omit<ComponentProps<typeof Link>, "children" | "className"> & {
    type?: "link";
  };

type AnchorLinkButtonProps = LinkButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className"> & {
    href: string;
    type: "anchor";
  };

type LinkButtonProps = NextLinkButtonProps | AnchorLinkButtonProps;

function getSafeRel(target?: string, rel?: string) {
  if (target === "_blank" && !rel) {
    return "noopener noreferrer";
  }

  return rel;
}

export default function LinkButton(props: LinkButtonProps) {
  const sharedClassName = cn(
    buttonVariants({
      variant: props.variant ?? "secondary",
      size: props.size ?? "sm",
    }),
    props.className
  );

  if (props.type === "anchor") {
    const {
      type,
      children,
      className,
      variant,
      size,
      rel,
      target,
      ...anchorProps
    } = props;

    void type;
    void className;
    void variant;
    void size;

    return (
      <a
        className={sharedClassName}
        rel={getSafeRel(target, rel)}
        target={target}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const {
    type,
    children,
    className,
    variant,
    size,
    rel,
    target,
    ...linkProps
  } = props;

  void type;
  void className;
  void variant;
  void size;

  return (
    <Link
      className={sharedClassName}
      rel={getSafeRel(target, rel)}
      target={target}
      {...linkProps}
    >
      {children}
    </Link>
  );
}
