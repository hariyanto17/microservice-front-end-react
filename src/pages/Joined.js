import React, {useState, useEffect, useCallback} from 'react'
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import courses from "constants/api/courses";

import ServerError from "pages/500";
import Loading  from "parts/Loading";

const Joined = ({history, match}) => {

    const [state, setState] = useState(()=> ({
        isLoading: true,
        isError: false,
        data: []
    }))

    const joining = useCallback(
         async () => {
             try {
                const details = await courses.details(match.params.class);
                const joined = await courses.join(match.params.class);
                if (joined.data.snap_url)
                    window.location.href=joined.data.snap_url
                else
                    setState({
                        isLoading: false,
                        isError: false,
                        data: details
                    })

             } catch (error) {
                 
             }
            
        },
        [match.params.class],
    )

    useEffect(() => {
        joining()
    }, [joining])

    if(state.isLoading) return(<Loading/>)
    if(state.isError) return(<ServerError/>)

     
    return (
        <section className="h-screen flex flex-col items-center mt-24">
            <img className="w-1/2" src={`${process.env.PUBLIC_URL}/assets/images/ilustration-join.jpg`} alt="you are not supposed here, please Login"/>
            <h1 className="text-3xl text-gray-900 mt-12">Welcome to Class</h1>
            <p className="text-lg text-gray-600 mt-4 mtb-8 lg:w-4/12 xl:w-3/12 mx-auto text-center"> 
                You have succesfully joined our <strong>{state.data?.name ?? ""}</strong>
            </p>
            <Link 
                to={`/courses/${match.params.class}`}
                className="bg-orange-500 cursor-pointer hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5" 
            >
                Back to Home
            </Link>
        </section>
    )
}

export default withRouter(Joined)
