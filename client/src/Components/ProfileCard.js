import ActiveConversations from './ActiveConversations';
import NavBar from './NavBar';
import { UNSAFE_DataRouterStateContext, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback} from 'react';
import { motion } from "framer-motion"

// Hook
// Parameter is the boolean, with default "false" value
const useToggle = (initialState = false) => {
    // Initialize the state
    const [state, setState] = useState(initialState);

    // Define and memorize toggler function in case we pass down the component,
    // This function change the boolean value to it's opposite value
    const toggle = useCallback(() => setState(state => !state), []);

    return [state, toggle]
}

const transition = {
    duration: 0.5,
    ease: 'linear',
    delay: 0.5
}


const ProfileCard = ({ user }) => {

    const [isToggle, setToggle] = useToggle(true);

    return (
        <>
            <div onClick={setToggle} className="relative rounded-md bg-black group">
                {
                    <>
                        <motion.div transition={transition} whileHover={{ translateY: '50%'}}   id='cardHidden' className={isToggle ?'absolute rounded-md min-w-full min-h-full  grid ':'hidden'}>
                            <img src="../rose-petals.svg" className="col-start-1 row-start-1 object-cover w-full h-full rounded-md" alt="Hidden Card" />
                            <div className="col-start-1 row-start-1 self-center justify-self-center text-4xl font-bold group-hover:animate-wiggle">
                                100%
                            </div>
                            <img
                                className="col-start-1 row-start-1 h-8 w-8 self-end justify-self-center mb-10 group-hover:animate-wiggle"
                                src="../logo2-B65YbTK81-transformed.png"
                                alt="Your Company"
                            />
                        </motion.div>
                        <div id='cardRevealed' className="">
                            <img className="w-full rounded-t-md" src={user} alt="user" />
                            <div className='p-2'>
                                <div className="pb-2">
                                    <p className="text-4xl font-bold text-orange-400">Jane, 28</p>
                                    <p className='text-xl font-bold text-orange-400'>Student</p>
                                    <p className='font-bold text-orange-400 pb-2'>Somewhere - 4km</p>
                                    <p className='line-clamp-5 text-justify text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus rutrum iaculis. Maecenas sodales ac ligula vitae malesuada. Cras ac placerat metus. Nulla facilisi. Nam finibus enim sed augue egestas bibendum. Maecenas sed mauris at nisi mattis rhoncus. Nam eleifend mi sit amet mollis semper. Nullam condimentum ipsum justo. Nunc sollicitudin mattis mollis.</p>
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    <span className="bg-orange-300 text-orange-900 text-sm font-medium py-0.5 rounded-md flex justify-center">food</span>
                                    <span className="bg-orange-300 text-orange-900 text-sm font-medium py-0.5 rounded-md flex justify-center">cinema</span>
                                    <span className="bg-orange-300 text-orange-900 text-sm font-medium py-0.5 rounded-md flex justify-center">test</span>
                                    <span className="bg-orange-300 text-orange-900 text-sm font-medium py-0.5 rounded-md flex justify-center">food</span>
                                    <span className="bg-orange-300 text-orange-900 text-sm font-medium py-0.5 rounded-md flex justify-center">cinema</span>
                                    <span className="bg-orange-300 text-orange-900 text-sm font-medium py-0.5 rounded-md flex justify-center">test</span>
                                </div>
                            </div>
                        </div>

                    </>
                }

            </div>
        </>
    )
}

export default ProfileCard;