import { useNavigate } from 'react-router';
import errorImg from '../../assets/errorPage.png'
import { BiError } from 'react-icons/bi';
import { RiArrowGoBackLine } from 'react-icons/ri';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center items-center flex-col'>
            <img src={errorImg} alt="" />
            <h2 className="text-5xl  font-bold flex justify-center items-center text-stone-700 gap-3" > <BiError /> Oops, page not found!</h2>
            <p>The page you are looking for is not available.</p>
                  <div className="flex justify-center items-center py-10">
                    <a
                      onClick={() => navigate(-1)}
                      target="_blank"
                      style={{
                        background:
                          "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
                      }}
                      className="py-1 px-2 lg:px-6 text-lg text-white font-semibold border rounded-lg flex justify-center items-center gap-2 hover:cursor-pointer hover:scale-105"
                    >
                      <RiArrowGoBackLine /> Go Back
                    </a>
                  </div>
        </div>
    );
};

export default ErrorPage;