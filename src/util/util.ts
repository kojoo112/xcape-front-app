import { CANCEL, MODIFY, REGISTER } from "./constant";

const phoneNumberRegExp = new RegExp(/^01(\d)(\d{3,4})(\d{4})$/);

export const formatNumber = (number: number) => {
    return number < 10 ? `0${number}` : number;
};

export const formatTimeString = (time: number, showMsecs: boolean) => {
    let seconds = Math.floor(time / 1000);
    let minutes = Math.floor(time / 60000);
    let hours = Math.floor(time / 3600000);
    // minutes = minutes - hours * 60;
    seconds = seconds - minutes * 60;
    if (showMsecs) {
        let msecs: string = String(time % 1000);
        if (Number(msecs) < 10) {
            msecs = `00${msecs}`;
        } else if (Number(msecs) < 100) {
            msecs = `0${msecs}`;
        }

        return `${minutes < 10 ? 0 : ""}${minutes} : ${seconds < 10 ? 0 : ""}${seconds} : ${msecs}`;
    } else {
        return `${minutes < 10 ? 0 : ""}${minutes} : ${seconds < 10 ? 0 : ""}${seconds}`;
    }
};

export const makeAbilityBooleanArray = (abilityValue: number): boolean[] => {
    const array: boolean[] = [];

    abilityValue = abilityValue > 3 ? 3 : abilityValue;

    for (let i = 0; i < abilityValue; i++) {
        array[i] = true;
    }
    for (let i = abilityValue; i < 3; i++) {
        array[i] = false;
    }
    return array;
};

export const makeDifficultyBooleanArray = (difficultyValue: number): boolean[] => {
    const array: boolean[] = [];

    difficultyValue = difficultyValue > 5 ? 5 : difficultyValue;

    for (let i = 0; i < difficultyValue; i++) {
        array[i] = true;
    }
    for (let i = difficultyValue; i < 5; i++) {
        array[i] = false;
    }
    return array;
};

export const onlyNumber = (e: HTMLInputElement) => {
    e.value = e.value.replace(/\D/g, "");
};

export const validatePhoneNumber = (phoneNumber: string) => {
    return phoneNumberRegExp.test(phoneNumber);
};

export const convertReservationType = (type: string) => {
    if (type === REGISTER) {
        return "예약";
    } else if (type === MODIFY) {
        return "수정";
    } else if (type === CANCEL) {
        return "취소";
    }
};

export const formatPrice = (x: string) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
