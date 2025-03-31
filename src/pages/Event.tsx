import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

const Event = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/report.md") 
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => {
        console.error("Error loading markdown:", err);
        setContent("# Error loading content\nPlease check console for details");
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-28 prose prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Event;
