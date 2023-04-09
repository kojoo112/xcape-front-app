import React, { useEffect, useState } from "react";
import { makeBooleanArray } from "../util/util";
import Icon from "../assets/icon";
import { getThemeDetail, ITheme } from "../api";
import {useNavigate, useParams} from "react-router-dom";

function ThemeDetail() {
    const navigate = useNavigate();
    const { merchantCode } = useParams<{ merchantCode: string }>();
    const [currentTheme, setCurrentTheme] = useState<ITheme>();
    const book = require("../assets/images/book.png");
    const { themeId } = useParams<{ themeId: string }>();

    useEffect(() => {
        getThemeDetail(Number(themeId)).then((res) => {
            setCurrentTheme(res.result);
        });
    }, [themeId]);

    return (
        <div>
            {currentTheme && (
                <>
                    <img src={currentTheme.bgImagePath} alt="bgImagePath" className="w-full" />
                    <div>
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/JlTa9cVywmA"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex flex-col items-center bg-no-repeat bg-center p-10" style={{ height: "755px", backgroundImage: `url(${book})` }}>
                        <div className="px-10 text-white" style={{ backgroundColor: currentTheme.colorCode }}>
                            {currentTheme.genre}
                        </div>
                        <div className="text-5xl mt-5" style={{ color: currentTheme.colorCode }}>
                            {currentTheme.nameKo}
                        </div>
                        <div className="text-xl text-zinc-500">{currentTheme.nameEn}</div>
                        <div className="mt-8 py-5 text-center text-zinc-800 whitespace-pre-wrap">{currentTheme.description}</div>
                        <div className="w-full flex justify-between items-center">
                            <div className="flex">
                                <div className="text-2xl" style={{ color: currentTheme.colorCode }}>
                                    난이도
                                </div>
                                {makeBooleanArray(currentTheme.difficulty).map((star) => {
                                    if (star) {
                                        return <Icon.Star style={{ color: currentTheme.colorCode }} className="h-8 w-8 xs:h-10 xs:w-10" />;
                                    }
                                    return <Icon.Star className="text-zinc-600 h-8 w-8 xs:h-10 xs:w-10" />;
                                })}
                            </div>
                            <div className="text-md lg:text-2xl text-zinc-700">
                                인원{" "}
                                <span>
                                    {currentTheme.minParticipantCount}-{currentTheme.maxParticipantCount}
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 p-3 w-full" style={{ backgroundColor: currentTheme.colorCode }}>
                            {currentTheme.abilityList.map((ability) => {
                                return (
                                    <div key={ability.id} className="text-md xs:text-md lg:text-lg lg:text-xl flex">
                                        <div className="text-white">{ability.name}</div>
                                        <div className="flex items-center justify-between w-2/3 sm:w-1/2 ml-2">
                                            {makeBooleanArray(ability.value).map((item) => {
                                                if (item) {
                                                    return <div className="h-4 w-4 sm:h-3 sm:w-3  bg-white rounded-full"></div>;
                                                }
                                                return <div className="h-4 w-4 sm:h-3 sm:w-3 bg-black rounded-full"></div>;
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div>point</div>
                        <div
                            onClick={() => {
                            navigate(`/${merchantCode}/reservation`);
                        }}>
                            <button
                                type="button"
                                className="w-full px-10 py-5 border border-zinc-600 rounded-md text-zinc-200 bg-yellow-900
                                font-xl hover:text-zinc-100 hover:border-zinc-100 hover:bg-yellow-800">
                                실시간 예약하기
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ThemeDetail;
