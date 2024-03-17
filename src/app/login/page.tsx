"use client"
import { useState } from 'react'
import Heading from '~/components/Heading/Heading'

function Page() {
    const [show, setShow] = useState(true)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(email, password)
    }


    const handleShow = () => {
        setShow(!show)
    }
    return (
        <>
            <div className='min-h-screen '>
                <Heading />
                <div className='bg-white flex flex-col items-center justify-center mt-10'>
                    <div className='border-grey-400 rounded-xl border-2 w-96 flex flex-col items-start  justify-center p-8   '>
                        <div className='p-4 my-2 w-80 flex flex-col justify-center items-center '>
                            <h1 className='text-xl font-sans font-bold '>Login</h1>
                        </div>
                        <div className='w-80 flex flex-col justify-center items-center'>
                            <h2 className='text-base font-sans font-medium '>Welcome back to ECOMMERCE</h2>
                            <p className='text-sm font-sans font-light'>The next gen business marketplace</p>
                        </div>
                        <form >
                            <div className='flex flex-col w-80 my-3 pb-2'>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className=' border-gray-200 rounded-md border-2 p-2 w-full focus:outline-none' />
                            </div>
                            <div className='flex flex-col w-80 my-3'>
                                <label htmlFor="name">Password</label>
                                <div className='border-gray-200 rounded-md border-2  w-full flex flex-row items-center'>
                                    <input
                                        type={show ? "password" : "text"}
                                        id="password"
                                        name="password"
                                        placeholder="Enter"
                                        onChange={(e) => setPassword(e.target.value)}
                                        className=' w-full py-2 pl-2 focus:outline-none' />
                                    {
                                        show ?
                                            <div className='px-2' onClick={handleShow}>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
                                            </div> :
                                            <div className='px-2' onClick={handleShow}>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"></path><path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"></path></svg>
                                            </div>
                                    }
                                </div>
                            </div>
                            <button
                                className='bg-black rounded-md hover:bg-gray-800  text-white p-2 w-80 my-6'
                                onClick={handleSubmit}>Login</button>
                            <div className='w-80 h-[1px] bg-slate-500 '></div>
                            <div className='w-80 flex justify-center items-center pb-6 mt-4 '>
                                <p className='text-slate-500'>Don&rsquo;t have an Account? &nbsp;<a href="/registration" className='text-black hover:underline hover:cursor-pointer'>Sign up</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page