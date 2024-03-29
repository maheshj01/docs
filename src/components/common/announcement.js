import React from "react";

export default function AnnouncementBar(props) {
    return (
        <div className="bg-blue-500 h-10 text-white p-3 text-center items-">
            <p>{props.text}</p>
        </div>
    )
}