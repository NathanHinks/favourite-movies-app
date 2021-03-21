import Button from "../Button";
import {useAuth0} from "@auth0/auth0-react";

import {signOutButton} from "../Buttons.module.css";

function SignOutButton() {
    const {logout} = useAuth0();

    return (
        <Button className={signOutButton} text="sign out" onClick={() => logout({returnTo: window.location.origin})}/>
    )
}

export default SignOutButton