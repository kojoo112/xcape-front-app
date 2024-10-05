import { useRecoilValue } from "recoil";
import { merchant } from "../atom";
import NotionView from "../components/NotionView";

function Contact() {
    const currentMerchant = useRecoilValue(merchant);

    return (
        <div>
            <NotionView pageId={currentMerchant.addressInfoNotionId} />
        </div>
    );
}

export default Contact;
