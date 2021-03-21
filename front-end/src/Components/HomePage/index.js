import SignInButton from "../Buttons/SignInButton";

import { heading, headingContainer, subheading } from "./HomePage.module.css";

function HomePage() {
    return (
        <div className={headingContainer}>
            <h1 className={heading}>Movie Favourites List</h1>
            <h2 className={subheading}>Please <span>log in</span> to view and edit your favourite movies list:</h2>
            <SignInButton/>
        </div>
    )
}

export default HomePage