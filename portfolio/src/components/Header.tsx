import { FaCube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import '../styles/app.scss'

const Header: React.FC = () => {
    return ( 
        <div className="flex justify-between h-10 align-middle p-4 bg-black">
            <article className="flex headersect">
                <h2 className="pr-6">Tensor_Kelechi</h2>
                <br />
                <FaCube/>
            </article>

            <article className="">
                <div className="">
                    <a href="https://github.com/kelechi-c">
                         <FaGithub  style={{ fontSize: '1.5em' }} />
                    </a>
                </div>
            </article>
        </div>
     );
}
 
export default Header;