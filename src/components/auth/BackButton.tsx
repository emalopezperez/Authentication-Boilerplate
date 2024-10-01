"use client";
import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  hrf: string;
}

export const BackButton = ({ label, hrf }: BackButtonProps) => {
  return (
    <Button variant="link" size="sm" asChild>
      <Link href={hrf}>{label} </Link>
    </Button>
  );
};
