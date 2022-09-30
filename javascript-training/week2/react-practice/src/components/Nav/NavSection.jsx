// ...props gathers the rest of the undestructured props into an object
export const NavSection = ({children, className, ...props}) => {
    return (
        // Take the undestructured props and add them like style={style}
        <section className={className ?? 'nav-section'} {...props}>
            {children}
        </section>
    );
}