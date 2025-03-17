export const contactForm = payload => {
    const isNameValid = payload.name.trim().length >= 3;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
    const isPhoneValid = /^\d{11}$/.test(payload.phone); // Validação para números brasileiros com DDD
    const isDescriptionValid =
        payload.description.length >= 4 && payload.description.length <= 500;

    return isNameValid && isEmailValid && isPhoneValid && isDescriptionValid;
};
