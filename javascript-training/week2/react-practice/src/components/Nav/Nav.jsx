export const Nav = ({children, className}) => {
    return (
        // If they don't pass in a className, use the navbar styles
        <nav className={className ?? 'navbar'}>
            {/* Doing it this way makes it more reusable across my app */}
            {children}
        </nav>
    );
}