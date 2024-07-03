import { PluginObj } from "@babel/core";
import { transform } from "@babel/standalone";
import { Editor } from "@monaco-editor/react";
import { useRef } from "react";

const code = `import { add } from './add.ts'; console.log(add(2, 3));`;

const url = URL.createObjectURL(
  new Blob([code], { type: "application/javascript" })
);
const transformImportSourcePlugin: PluginObj = {
  visitor: {
    ImportDeclaration(path) {
      path.node.source.value = url;
    },
  },
};

function App() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function onClick() {
    if (!textareaRef.current) {
      return;
    }

    const res = transform(textareaRef.current.value, {
      presets: ["react", "typescript"],
      filename: "foo.tsx",
      plugins: [transformImportSourcePlugin],
    });
    console.log(res.code);
  }

  return (
    <div>
      <textarea
        ref={textareaRef}
        style={{ width: 600, height: 300 }}
        defaultValue={code}
      ></textarea>
      <button onClick={onClick}>编译</button>
      <Editor height={500} defaultLanguage="javascript" defaultValue={code} />
    </div>
  );
}

export default App;
