import { FaGithub, FaXTwitter} from "react-icons/fa6";
import { FaDiscord, FaEnvelope } from "react-icons/fa";

const Links = () => {
    return ( 
        <div className="flex w-1/2 justify-evenly iconline">

            <a href="https://twitter.com/c_kelechi_" target="blank">
                <FaXTwitter/>
            </a>

            <a href="mailto:kelechichibuzo7@gmail.com">
                <FaEnvelope/>
            </a>
            
            <a href="">
                <FaDiscord/>
            </a>

            <a href="https://github.com/kelechi-c">
                <FaGithub/>
            </a>
            
        </div>
     );
}
 
export default Links;