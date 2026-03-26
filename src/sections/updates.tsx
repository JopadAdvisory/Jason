import {  CalendarRange, Target, TrendingUp, Users } from "lucide-react";
import { useProgressStore } from "../progressStore";
import Progress from "../components/ui/progress";
import "./updates.css";


export default function Update() {
    const raised = useProgressStore((state) => state.raised);
    const goal = useProgressStore((state) => state.goal);
    const donors = useProgressStore((state) => state.donors);
    return (
        <div className="progress-update-bg" id="update">
            <div className="progress-header">
                <h1 className="update-heading">Campaign Progress</h1>
                <p className="update-subtitle">Stay informed on Jason's journey with full transparency on every naira raised</p>
            </div>
            <div className="wr">
                <div className="progress-update-container">
                    <div className="pro-bg">
                        <div className="pro-header">
                            <div className="goal">
                                <Target className="u-icon" />
                                <p className="number">
                                    ₦
                                    {
                                    goal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " "
                                    }
                                </p>
                                <p className="text">Goal</p>
                            </div>

                            <div className="rai">
                                <TrendingUp className="u-icon" />
                                <p className="number">
                                    ₦
                                    {
                                    raised.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " "
                                    }
                                </p>
                                <p className="text">Raised</p>
                            </div>

                            <div className="donors">
                                <Users className="u-icon" />
                                <p className="number">
                                    {
                                    donors
                                    }
                                </p>
                                <p className="text">Donors</p>
                            </div>
                        </div>
                        <Progress />
                    </div>
                </div>

                <div className="updates container">
                    <div className="progress-header ol">
                        <h1 className="update-heading">Recent Updates</h1>
                        <p className="update-subtitle">Stay informed on Jason's journey</p>
                    </div>
                    <div className="diff-updates">
                        <div className="update-card">
                            <p className="date">
                                <CalendarRange className="date-icon"/>
                                March 15, 2026
                            </p>
                            <p className="update-text">
                                Jason's initial consultation with the surgical team is complete. Doctors have outlined the corrective procedure plan.
                            </p>
                        </div>
                        <div className="update-card">
                            <p className="date">
                                <CalendarRange className="date-icon"/>
                                March 8, 2026
                            </p>
                            <p className="update-text">
                                We've reached 20% of our goal! Thank you to all 94 donors who have contributed so far.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}