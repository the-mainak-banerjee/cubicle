import { Button, Flex, Icon, Input, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaChevronDown,
  FaItalic,
  FaLink,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaRedo,
  FaRulerHorizontal,
  FaStrikethrough,
  FaUnderline,
  FaUndo,
} from "react-icons/fa";
import PopUp from "../ui/popup/PopUp";

const MenuBar = ({ editor }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [url,setUrl] = useState('')

  if (!editor) {
    return null;
  }

  const openPopup = () => {
    onOpen()
    setUrl(editor.getAttributes('link').href)

  }



  const setLink = () => {

    onClose()

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run()

      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url })
      .run()

  }

  return (
    <div className="menuBar">
      <div>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "is_active" : ""}
            >
              <FaBold />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "is_active" : ""}
            >
              <FaItalic />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive("underline") ? "is_active" : ""}
            >
              <FaUnderline />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive("strike") ? "is_active" : ""}
            >
              <FaStrikethrough />
            </button>

            <button
              onClick={openPopup}
              className={editor.isActive("link") ? "is_active" : ""}
            >
              <FaLink />
            </button>

            <Menu>
              <MenuButton>
                <Flex align='center' gap='2'>
                  <Text fontSize='20px' fontWeight='bold'>Heading</Text>
                  <Icon as={FaChevronDown}/>
                </Flex>
              </MenuButton>
              <MenuList color='black'>
                <MenuItem as='div'>
                    <button
                        onClick={() =>
                          editor.chain().focus().toggleHeading({ level: 1 }).run()
                        }
                        className={
                          editor.isActive("heading", { level: 1 }) ? "is_active" : ""
                        }
                      >
                          <Text>Heading 1</Text>
                    </button>
                </MenuItem>

                <MenuItem as='div'>
                    <button
                        onClick={() =>
                          editor.chain().focus().toggleHeading({ level: 2 }).run()
                        }
                        className={
                          editor.isActive("heading", { level: 2 }) ? "is_active" : ""
                        }
                      >
                          <Text>Heading 2</Text>
                    </button>
                </MenuItem>

                <MenuItem as='div'>
                    <button
                        onClick={() =>
                          editor.chain().focus().toggleHeading({ level: 3 }).run()
                        }
                        className={
                          editor.isActive("heading", { level: 3 }) ? "is_active" : ""
                        }
                      >
                          <Text>Heading 3</Text>
                    </button>
                </MenuItem>

              </MenuList>
            </Menu>

            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive("bulletList") ? "is_active" : ""}
            >
              <FaListUl />
            </button>

           

            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={editor.isActive("orderedList") ? "is_active" : ""}
            >
              <FaListOl />
            </button>

            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                <FaRulerHorizontal/>
            </button>

            <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={editor.isActive("blockquote") ? "is_active" : ""}
            >
              <FaQuoteLeft />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
            >
              <FaAlignLeft/>
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
            >
              <FaAlignCenter/>
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
            >
              <FaAlignRight/>
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('justify').run()}
              className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
            >
              <FaAlignJustify/>
            </button>

        </div>
        <div>
            <button onClick={() => editor.chain().focus().undo().run()}>
              <FaUndo />
            </button>

            <button onClick={() => editor.chain().focus().redo().run()}>
              <FaRedo />
            </button>
        </div>
        <PopUp isOpen={isOpen} onClose={onClose}>
          <Input type='url' placeholder="Add the URL Here..." value={url} onChange={(e) => setUrl(e.target.value)}/>
          <Flex my='4' gap='4'>
              <Button variant='main' onClick={setLink}>Save URL</Button>
              <Button onClick={onClose}>Cancel</Button>
          </Flex>
        </PopUp>
    </div>
  );
};


export default MenuBar