import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { getBannerListFromCdn, getMerchantListFromCdn, getThemeListFromCdn, IBanner, IMerchant, ITheme } from "./api";
import { bannerListCdn, merchantListCdn, themeListCdn } from "./atom";
import { useEffect } from "react";

function App() {
    const setMerchantListJson = useSetRecoilState<IMerchant[]>(merchantListCdn);
    const setThemeListJson = useSetRecoilState<ITheme[]>(themeListCdn);
    const setBannerListJson = useSetRecoilState<IBanner[]>(bannerListCdn);

    useEffect(() => {
        getMerchantListFromCdn()
            .then((merchantList) => {
                setMerchantListJson(merchantList);
                return getThemeListFromCdn();
            })
            .then((themeList) => {
                setThemeListJson(themeList);
                return getBannerListFromCdn();
            })
            .then((bannerList) => {
                setBannerListJson(bannerList);
            });
    }, []);

    return (
        <div className="sm:w-[414px] mx-auto">
            <Nav />
            <Outlet />
        </div>
    );
}

export default App;
