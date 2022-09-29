export const Header = ({title, author}) => {
    return (
        <header>
            <h1>{title}</h1>
            <h3>Author: {author}</h3>
        </header>
    );
}