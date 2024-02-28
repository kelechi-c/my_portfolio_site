import { FaCube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import '../styles/app.scss'

const Header: React.FC = () => {
    return ( 
        <section className="navbar flex justify-between align-middle p-4 max-h-10">
            <article className="flex">
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
        </section>
     );
}
 
export default Header;