import { atom } from "recoil";
import { IAbility, IBanner, IMerchant, ITheme } from "./api";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const merchant = atom<IMerchant>({
    key: "merchant",
    default: {
        id: 0,
        name: "",
        address: "",
        code: "",
        email: "",
        order: 0,
        parkingYn: false,
        telNumber: "",
        businessHour: "",
        businessRegistrationNumber: "",
        ceoName: "",
        businessIcon: "",
        brandInfoNotionId: "",
        usingInfoNotionId: "",
        addressInfoNotionId: "",
        useYn: false,
    },
    effects_UNSTABLE: [persistAtom],
});

export const themeList = atom<ITheme[]>({
    key: "themeList",
    default: [
        {
            id: 0,
            merchantId: 0,
            nameKo: "",
            nameEn: "",
            runningTime: "",
            mainImagePath: "",
            bgImagePath: "",
            timetable: "",
            description: "",
            minParticipantCount: 0,
            maxParticipantCount: 0,
            difficulty: 0,
            genre: "",
            point: "",
            youtubeLink: "",
            colorCode: "",
            hasXKit: false,
            isCrimeScene: false,
            useYn: "N",
            priceList: [],
            abilityList: [],
        },
    ],
    effects_UNSTABLE: [persistAtom],
});

export const reservationDetail = atom({
    key: "reservationDetail",
    default: {
        phoneNumber: "",
        reservedBy: "",
        participantCount: 0,
    },
});

export const theme = atom<ITheme>({
    key: "theme",
    default: {
        id: 0,
        merchantId: 0,
        nameKo: "",
        nameEn: "",
        runningTime: "",
        mainImagePath: "",
        bgImagePath: "",
        timetable: "",
        description: "",
        minParticipantCount: 0,
        maxParticipantCount: 0,
        difficulty: 0,
        genre: "",
        point: "",
        youtubeLink: "",
        colorCode: "",
        hasXKit: false,
        isCrimeScene: false,
        useYn: "N",
        priceList: [],
        abilityList: [],
    },
    effects_UNSTABLE: [persistAtom],
});

export const abilityList = atom<IAbility[]>({
    key: "abilityList",
    default: [
        {
            id: 0,
            key: "",
            name: "",
            type: "",
            value: 0,
            merchantId: 0,
            themeId: 0,
        },
    ],
});

export const bannerList = atom<IBanner[]>({
    key: "bannerList",
    default: [
        {
            id: 0,
            imagePath: "",
            useYn: false,
        },
    ],
});

export const merchantListCdn = atom<IMerchant[]>({
    key: "merchantListCdn",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const themeListCdn = atom<ITheme[]>({
    key: "themeListCdn",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const bannerListCdn = atom<IBanner[]>({
    key: "bannerListCdn",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const abilityListCdn = atom<IAbility[]>({
    key: "abilityListCdn",
    default: [],
    effects_UNSTABLE: [persistAtom],
});
