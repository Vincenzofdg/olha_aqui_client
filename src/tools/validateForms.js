export const contactForm = payload => {
    const isNameValid = payload.name.trim().length >= 3;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
    const isDescriptionValid =
        payload.description.length >= 4 && payload.description.length <= 500;

    return isNameValid && isEmailValid && isDescriptionValid;
};
