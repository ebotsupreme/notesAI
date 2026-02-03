import { Note } from "@/app/generated/prisma/client";

type Props = {
  note: Note;
};

function SelectNoteButton({ note }: Props) {
  return <div>SelectNoteButton</div>;
}

export default SelectNoteButton;
