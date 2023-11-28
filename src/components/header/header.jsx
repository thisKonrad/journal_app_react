import './header.css'

export default function Header(children){

    return( <>
            <header>
                <h1>Journal</h1>
            </header>
            {children}
        </>
    )

}