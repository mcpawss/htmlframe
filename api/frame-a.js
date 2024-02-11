import { getRandomImageMarkup, b, c } from "../assets/markup"
import createRouter from "../assets/router"

const randomImageMarkup = getRandomImageMarkup();

export default createRouter(randomImageMarkup);
