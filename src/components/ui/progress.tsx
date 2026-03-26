import type { JSX } from "react";
import { useProgressStore } from "../../progressStore";
import "./progress.css";

function Progress({ barHeader, percent, raise}: { barHeader?: string, percent?: string, raise?: string }): JSX.Element {
    const raised = useProgressStore((state) => state.raised);
    const goal = useProgressStore((state) => state.goal);
    const percentage = useProgressStore((state) => state.getPercentage());

    return (
        <div className="progress-container">
            <div className={`bar-header ${barHeader}`}>
                <p className={`raised ${raise}`}>
                    ₦
                    {raised.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " "}
                    raised
                </p>
                <p className="goal">
                    ₦
                    {goal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " "}
                    goal
                </p>
            </div>
            <div className="bar-container">
                <div className="bar" style={{ width: `${percentage}%`}}></div>
            </div>
            <p className={`percentage ${percent}`}>{percentage}% of goal reached</p>
        </div>
    )
}

export default Progress;