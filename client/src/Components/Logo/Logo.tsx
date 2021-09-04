/* eslint-disable jsx-a11y/anchor-is-valid */
import './Logo.css' ;

function Logo(params:{size:string, invert:boolean}){
    var cl = "site-logo" ;
    if(params.size.length > 0)
        cl = cl.concat(" "+params.size) ;

    if(params.invert)
        cl = cl.concat(" invert") ;

    return(
        <span className={cl}><span className="highlight">E</span>-Pandemic Link</span>
    ) ;
}

export default Logo ;