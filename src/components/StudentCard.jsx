import React from "react";
import "./StudentCard.css";

function StudentCard({ student, onIncrease, onDecrease }) {
    const disableDecrease = student.points <= 0;
    const disableIncrease = student.points >= 200;

    return (
        <div className="card">
            <h4>{student.name}</h4>

            <div className="controls">
                <button
                    onClick={() => onDecrease(student.id)}
                    disabled={disableDecrease}
                    className={disableDecrease ? "inactive" : ""}
                >
                    –
                </button>

                <span className="count">{student.points}</span>

                <button
                    onClick={() => onIncrease(student.id)}
                    disabled={disableIncrease}
                    className={disableIncrease ? "inactive" : ""}
                >+</button>
            </div>
        </div>
    );
}

export default StudentCard;
