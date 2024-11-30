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

function MyEducation(){
return(
    <div className="p-5 m-5 border-2 border-red-500 rounded">
        <h1 className="text-xl font-bold text-amber-700">Education</h1>
        <ul className="list-disc>
            <li>information Technology , RMUTTO , 2567-Present</li>
            <li>Xxxx, xxx, 999-999</li>
            <li>Yyyy, yyy, 999-999</li>
            </ul>
        </div>
);
}

export default MyProfile();