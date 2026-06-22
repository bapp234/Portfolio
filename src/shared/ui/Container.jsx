export function Container({ children, classname='' }) {
    return(
    <div className={`mx-auto w-full max-w-7xl px-5 md:px-10 ${classname}`}>
            {children}
        </div>
    )
}