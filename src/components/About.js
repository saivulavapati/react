import { useRouteError } from "react-router-dom";

const About = () => {
    const err = useRouteError();
    console.log(err)
    return(
        <div>
            <h1>About us</h1>
            <h1>Page</h1>
        </div>
    )
}

export default About;