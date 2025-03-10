import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import { Button } from "@/components/ui/button";
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  ListIcon,
  ListOrderedIcon,
} from "lucide-react";

const useRichTextEditor = () => {
  return useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl-4",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl-4",
          },
        },
      }),
      Bold,
      Italic,
      Underline,
    ],
    content: "<p>Start typing...</p>",
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
  });
};

const RichTextEditor = () => {
  const editor = useRichTextEditor();

  if (!editor) {
    return null;
  }

  const handleButtonClick =
    (callback: () => void) => (event: React.MouseEvent) => {
      event.preventDefault(); // Prevent default form submission behavior
      callback();
    };

  return (
    <div className="mt-4 max-w-2xl rounded-xl border bg-white p-4">
      {/* Toolbar */}
      <div className="mb-2 flex flex-wrap gap-2 border-b pb-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleButtonClick(() =>
            editor.chain().focus().toggleBold().run(),
          )}
          className={editor.isActive("bold") ? "bg-gray-200" : ""}
        >
          <BoldIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleButtonClick(() =>
            editor.chain().focus().toggleItalic().run(),
          )}
          className={editor.isActive("italic") ? "bg-gray-200" : ""}
        >
          <ItalicIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleButtonClick(() =>
            editor.chain().focus().toggleUnderline().run(),
          )}
          className={editor.isActive("underline") ? "bg-gray-200" : ""}
        >
          <UnderlineIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleButtonClick(() =>
            editor.chain().focus().toggleBulletList().run(),
          )}
          className={editor.isActive("bulletList") ? "bg-gray-200" : ""}
        >
          <ListIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleButtonClick(() =>
            editor.chain().focus().toggleOrderedList().run(),
          )}
          className={editor.isActive("orderedList") ? "bg-gray-200" : ""}
        >
          <ListOrderedIcon className="h-4 w-4" />
        </Button>
      </div>

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        className="min-h-[200px] p-2 focus:outline-none"
      />
    </div>
  );
};

export default RichTextEditor;
