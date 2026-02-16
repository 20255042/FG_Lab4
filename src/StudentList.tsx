
type StudentListProps = {
    registeredStudents: string[];
    };
    function StudentList({registeredStudents}: StudentListProps){
        return <ul><li><p>{registeredStudents}</p></li></ul>
    }
    export default StudentList;;