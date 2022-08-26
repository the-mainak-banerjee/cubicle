import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Placeholder from '@tiptap/extension-placeholder'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import MenuBar from "./MenuBar";
import {FontSize} from './FontSizeExtension'
import './editor.css'


export const Editor = () => {
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      HorizontalRule,
      TextStyle,
      FontSize,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({
        placeholder: 'Email Content Goes Here …',
      })
    ],
    content: ``,

    // onUpdate: ({ editor }) => {
    //   const html = editor.getHTML();
    //   // setDescription(html);
    //   console.log(html)
    // },
  });

  return (
    <div className="textEditor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;