function MyInfo(props) {
    const info = props.info
    return (
        <div>
            <h1>Welcome to Fullstack Development - I</h1>
            <h2>ReactJS Programming Week09 Lab Exercise</h2>
            <h4>Student Id : {info.sid}</h4>
            <h4>Name : {info.name}</h4>
            <h4>{info.college.name}, {info.college.location}</h4>
        </div>
    )
}

export default MyInfo