function Education() {
    const education = [
        {institution: "Texas A&M University -- College Station", degree: "Master of Science - Computer Science", period: "2024 - 2026"},
        {institution: "Texas A&M University -- College Station", degree: "Bachelor of Science - Computer Science, minor in Mathematics", period: "2024 - 2026"}
    ]
    
    const coursework = {
        software: [
            {department: "CSCE", number: "482", name: "Senior Capstone Design"},
            {department: "CSCE", number: "431", name: "Software Engineering"},
            {department: "CSCE", number: "331", name: "Foundations of Software Engineering"},
            {department: "CSCE", number: "314", name: "Programming Languages"},
            {department: "CSCE", number: "120", name: "Program Design and Concepts"},
        ],
        information_and_intelligent_systems: [
            {department: "CSCE", number: "491", name: "Research"},
            {department: "CSCE", number: "421", name: "Machine Learning"},
            {department: "CSCE", number: "420", name: "Artificial Intelligence"},
            {department: "CSCE", number: "310", name: "Database Systems"},
        ],
        algorithms_and_theory: [
            {department: "CSCE", number: "411", name: "Design and Analysis of Algorithms"},
            {department: "CSCE", number: "222", name: "Discrete Structures for Computing"},
            {department: "CSCE", number: "221", name: "Data Structures and Algorithms"},
        ],
        systems: [
            {department: "CSCE", number: "464", name: "Wireless and Mobile Systems"},
            {department: "CSCE", number: "313", name: "Introduction to Computer Systems"},
            {department: "CSCE", number: "312", name: "Computer Organization"},
        ],
        mathematics: [
            {department: "MATH", number: "423", name: "Linear Algebra II"},
            {department: "MATH", number: "414", name: "Fourier Series and Wavelets"},
            {department: "MATH", number: "308", name: "Differential Equations"},
            {department: "MATH", number: "304", name: "Linear Algebra I"},
            {department: "MATH", number: "251", name: "Engineering Mathematics III"},
            {department: "MATH", number: "152", name: "Engineering Mathematics II"},
            {department: "MATH", number: "151", name: "Engineering Mathematics I"},
        ],
        statistics: [
            {department: "STAT", number: "212", name: "Principles of Statistics II"},
            {department: "STAT", number: "211", name: "Principles of Statistics I"},
        ],
        electrical_engineering: [
            {department: "ECEN", number: "248", name: "Introduction to Digital Systems Design"},
            {department: "ECEN", number: "214", name: "Electrical Circuit Theory"},
        ],
    }
    return (
        <div className="flex justify-center">
            <div className="border max-w-3xl border-gray-200 rounded-lg">
                <h1 className="flex justify-center">EDUCATION</h1>
                <Program education={education}/>
                <h1 className="flex justify-center">COURSEWORKS</h1>
                <div>
                    <div className="flex justify-center">
                        <Coursework title="Software" courses={coursework.information_and_intelligent_systems} />
                        <Coursework title="Information and Intelligent Systems" courses={coursework.information_and_intelligent_systems} />
                        <Coursework title="Algorithm and Theory" courses={coursework.information_and_intelligent_systems} />
                        <Coursework title="Systems" courses={coursework.information_and_intelligent_systems} />
                    </div>
                    <div className="flex justify-center">
                        <Coursework title="Mathematics" courses={coursework.mathematics} />
                        <Coursework title="Statistics" courses={coursework.statistics} />
                        <Coursework title="Electrical Engineering" courses={coursework.electrical_engineering} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Program(props) {
    const education = props.education;
    // className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow"
    
    return (
        <div className="flex justify-center border border-gray-200 rounded-lg shadow">
            <div>
                {education.map((index) => (
                    <div key={index.id}>
                        <h2>{index.institution}</h2>
                        <h3>{index.degree}</h3>
                        <h3>{index.period}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Coursework(props) {

    // use pop up to show more description

    const title = props.title;
    const courses = props.courses;

    return (
        <div className="block">
            <h2>{title}</h2>
            {courses.map((course) => (
                <div key={course.id}>
                    <h3>{course.department}</h3>
                    <h3>{course.number}</h3>
                    <p>{course.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Education;