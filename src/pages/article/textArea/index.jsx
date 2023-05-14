import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeSlug from 'rehype-slug';
import { createElement } from "react";

const headingRenderer = ({ level, children }) => {
    const text = Array.isArray(children) ? children[0] : children;
    let slug;
    if(typeof(text)==='string'){
        slug = text;
    }else{
        slug = text.props.children[0];
    }
    return createElement(`h2`, { id: slug }, text);
  };

export const TextArea = ({text}) => {
    return (
        <ReactMarkdown
            children={text}
            components={{ h2: headingRenderer }}
            rehypePlugins={[rehypeSlug]}
        />
    )
}