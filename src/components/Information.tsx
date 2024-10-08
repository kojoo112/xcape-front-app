import ThemeInfo from "./ThemeInfo";
import { ITheme } from "../api";
import { useRecoilValue } from "recoil";
import { themeList } from "../atom";
import SliderBanners from "./SliderBanners";
import CautionLine from "./CautionLine";
import BlockBanners from "./BlockBanners";

function Information() {
    const currentThemeList = useRecoilValue<ITheme[]>(themeList);

    const xfilerThemeList = currentThemeList.filter((theme) => !theme.isCrimeScene);
    const crimeSceneThemeList = currentThemeList.filter((theme) => theme.isCrimeScene);

    const xfilerImage = require("../assets/images/xfiler.png");
    const crimeSceneImage = require("../assets/images/crime_scene.png");

    return (
        <div>
            <CautionLine />
            <SliderBanners />
            <CautionLine />
            <BlockBanners />
            <div className="bg-[url('./assets/images/bg_iron.png')]">
                {xfilerThemeList.length > 0 && (
                    <div className="bg-black bg-opacity-50">
                        <div className="flex justify-center p-4">
                            <div className="h-28">
                                <img src={xfilerImage} alt="xfilerImage" className="object-contain h-28" />
                            </div>
                            <div className="mx-0 my-auto">
                                <div className="text-3xl text-white">엑스파일러게임</div>
                                <div className="text-xl text-[#ff7119]">사건수사 프로파일링</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 px-2">
                            {xfilerThemeList
                                .sort((prev, next) => {
                                    return next.id! - prev.id!;
                                })
                                .map((theme, index) => {
                                    return (
                                        <ThemeInfo key={theme.id} theme={theme} index={index} color={theme.colorCode} />
                                    );
                                })}
                        </div>
                    </div>
                )}
                <CautionLine />
                {crimeSceneThemeList.length > 0 && (
                    <>
                        <div className="flex justify-center p-4">
                            <div className="h-28">
                                <img src={crimeSceneImage} alt="crimeSceneImage" className="object-contain h-28" />
                            </div>
                            <div className="mx-0 my-auto">
                                <div className="text-3xl text-white">크라임씬게임</div>
                                <div className="text-xl text-[#fff200]">용의자 역할극 롤플레잉</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 px-2">
                            {crimeSceneThemeList
                                .sort((prev, next) => {
                                    return next.id! - prev.id!;
                                })
                                .map((theme, index) => {
                                    return <ThemeInfo key={theme.id} theme={theme} index={index} color="#fff200" />;
                                })}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Information;
