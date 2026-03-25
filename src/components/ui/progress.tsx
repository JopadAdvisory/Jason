import type { JSX } from "react";
import { useProgressStore } from "../../progressStore";
import "./progress.css";


function Progress(): JSX.Element {
    const raised = useProgressStore((state) => state.raised);
    const goal = useProgressStore((state) => state.goal);
    const percentage = useProgressStore((state) => state.getPercentage());

    return (
        <div className="progress-container">
            <div className="bar-header">
                <p className="raised">
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
            <p className="percentage">{percentage}% of goal reached</p>
        </div>
    )
}

export default Progress;