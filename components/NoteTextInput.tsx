"use client";

type Props = {
  noteId: string;
  startingNoteText: string;
};

function NoteTextInput({ noteId, startingNoteText }: Props) {
  console.log("NoteTextInput:", { noteId, startingNoteText });
  return <div>Note Text Input</div>;
}

export default NoteTextInput;
