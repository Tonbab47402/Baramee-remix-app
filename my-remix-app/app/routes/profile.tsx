 function MyProfile() {
    return(
        <>
        <div className="p-5 m-5 border-teal-500 rounded">
           <h1 className="text-xl font-bold">My Profile</h1>
        <p>
        Name:  Baramee chuchunpenklin <br/>
        Student Code: 026740491603-8
           </p>
           </div>
            <MyEducation/>
            </>

    );
}

const MyEducation = () => {
    return (
        <div>
            <strong> Educations 

            </strong>
            <ul className="list-disc">
                <li>
                    RMUTTO 2024-Present
                </li>
                <li>
                    Information Technology
                </li>
            </ul>
        </div>
    )
}

export default MyProfile

