import { useState } from "react";
import StudentCard from "./StudentCard";
import "./Students.css";

function Students() {
    const [students, setStudents] = useState([
        { id: 1, name: "Олександр", points: 3 },
        { id: 2, name: "Марія", points: 5 },
        { id: 3, name: "Іван", points: 0 },
        { id: 4, name: "Анастасія", points: 2 },
    ]);

    function handleIncrease(id) {
        setStudents(prev =>
            prev.map(s => (s.id === id && s.points < 200 ? { ...s, points: s.points + 1 } : s))
        );
    }

    function handleDecrease(id) {
        setStudents(prev =>
            prev.map(s => (s.id === id && s.points > 0 ? { ...s, points: s.points - 1 } : s))
        );
    }

    return (
        <div>
            <h2>Оцінки учнів</h2>
            <div className="list">
                {students.map(student => (
                    <StudentCard
                        key={student.id}
                        student={student}
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                    />
                ))}
            </div>
        </div>
    );
}

export default Students;
