interface propsHandler{
    toggle: () => void
}

function SignIn(toggleProps:propsHandler){
    
    return(
        <form>
            <h5>S'inscrire</h5>
            <div className="form-control">
                <input type="text" name="prenom" required placeholder="Votre prénom" className="input100" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
            </div>
            <div className="form-control">
                <input type="text" name="nom" required placeholder="Votre nom" className="input100" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
            </div>
            <div className="form-control">
                <input type="email" name="email" required placeholder="Votre email" className="input100" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
            </div>
            <div className="form-control">
                <input type="password" name="password" required placeholder="Votre mot de passe" className="input100" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
            </div>
            <div className="form-control two-separation">
                <p className="small">Vous avez déjà un compte? <a href="/" onClick={(e) => {
                    e.preventDefault() ;
                    toggleProps.toggle() ;
                }}><b>Se connecter</b></a></p>
                <input type="submit" name="signin" className="btn-rounded" value="Créer mon compte" />
            </div>
        </form>
    ) ;
}

export default SignIn ;