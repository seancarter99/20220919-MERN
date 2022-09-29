// The first parameter to a function is its "props"
// <Article title="My Article" author="Sean Carter" />
// The props will be an object like { title: "My Article", author: "Sean Carter" }

import { Body, Header, Footer } from "./"; // import from './index.js'

export const Article = ({title="Default Title Here", author, publishDate, text, children}) => {
    return (
        <article>
            <Header title={title} author={author} />
            <Body>{children}</Body>
            <Footer publishDate={publishDate} />
        </article>
    );
};