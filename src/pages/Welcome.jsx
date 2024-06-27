import welcomeImage from "../assets/images/welcome-image.png";

export default function Welcome () {
    return (
        <div>
            <h3>Savory & Sweet</h3>
            <img src={welcomeImage} alt="Welcome Image" />
        </div>
    );
}