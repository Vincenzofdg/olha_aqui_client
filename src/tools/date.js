const shortDateHourFormat = dataToConvert => {
    const date = new Date(dataToConvert);
    let adjustedHours = date.getUTCHours() - 3;

    if (adjustedHours < 0) {
        adjustedHours += 24;
    }

    const hours = String(adjustedHours).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
};

const shortDateDayFormat = dataToConvert => {
    const date = new Date(dataToConvert);
    let adjustedHours = date.getUTCHours() - 3;

    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
};

const longDateFormat = dataToConvert => {
    const date = new Date(dataToConvert);
    let adjustedHours = date.getUTCHours() - 3;

    if (adjustedHours < 0) {
        adjustedHours += 24;
    }

    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();

    const hours = String(adjustedHours).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
};

export {shortDateHourFormat, shortDateDayFormat, longDateFormat};
