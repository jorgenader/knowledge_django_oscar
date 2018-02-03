/* eslint-disable global-require */
import preloader from "spectacle/lib/utils/preloader";

const images = {
    oscar: require("../assets/oscar.png"),
};

preloader(images);

export default images;
