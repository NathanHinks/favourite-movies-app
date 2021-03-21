import Button from "../Button";
import {useAuth0} from "@auth0/auth0-react";

import {signInButton} from "../Buttons.module.css";

function SignInButton() {
    const {loginWithRedirect} = useAuth0();

    return (
        <Button className={signInButton} text="sign in" onClick={loginWithRedirect}/>
    )
}

export default SignInButton