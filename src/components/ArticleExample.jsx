import CodeBlock from "./CodeBlock";

export default function ArticleExample({ title, code, children }) {
  return (
    <div className="space-y-3">
      <h4 className="text-lg font-medium">{title}</h4>
      <div className="grid grid-cols-2 items-center justify-center gap-5">
        <CodeBlock>{code}</CodeBlock>
        {children}
      </div>
    </div>
  );
}
