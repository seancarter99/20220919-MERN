export const NavItem = ({children, className}) => {
    return (
        <div className={className ?? 'nav-item'}>
            {children}
        </div>
    );
}