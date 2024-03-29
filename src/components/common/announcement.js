import React from "react";
import "./Announcement.css";

export default function AnnouncementBar(props) {
    return (
        <div className="abar text-black">
            <p className="mt-4">{props.text}</p>
        </div>
    )
}