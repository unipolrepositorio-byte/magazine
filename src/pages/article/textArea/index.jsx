import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeSlug from 'rehype-slug';
import { createElement } from "react";
import remarkGfm from 'remark-gfm';
import useStyles from './text.styles';





export const TextArea = ({text}) => {
    const classes = useStyles();
    const headingRenderer = ({children}) => {
        const text = Array.isArray(children) ? children[0] : children;
        let slug;
        if(typeof(text)==='string'){
            slug = text;
        }else{
            slug = text.props.children[0];
        }
        return createElement('h2', { id: slug }, text);
      };
    
    const references=[
        
    ];

    const linkRenderer = (props) => {
        const { children } = props;
        const text = children[0];
        let slug = '';
        const index = references.findIndex(item=>item.value===text);
        if(index!==-1){
            references[index].count += 1;
            slug = `r${text}-${references[index].count}`;
        }else{
            references.push({value:text, count:1});
            slug = `r${text}-1`;
        }
    
        return createElement('a', {id: slug, href:props.href}, text);
    };

    const tableRender = (props) => {
        
        const table = createElement('table', {style:{"white-space":'nowrap'}}, props.children)
        const tableWraper = <div className={classes.wrapper}>{table}</div>

        return tableWraper
    }

    return (
        <ReactMarkdown
            children={text}
            components={{ h2: headingRenderer, a: linkRenderer, table: tableRender}}
            rehypePlugins={[rehypeSlug]}
            remarkPlugins={[remarkGfm]}
        />
    )
}