export default function Article({ className = "", ...props }) {
  return (
    <article
      className={`doc-article grid p-5 gap-8 bg-neutral-900 rounded-xl ${className}`}
      {...props}
    />
  );
}
