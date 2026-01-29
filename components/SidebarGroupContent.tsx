"use client";

import { Note } from "@/app/generated/prisma/client";

type Props = {
  notes: Note[];
};

function SidebarGroupContent({ notes }: Props) {
  console.log("notes:", notes);
  return <div>Your notes here</div>;
}

export default SidebarGroupContent;
