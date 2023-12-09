import * as React from "react";
import {useEffect, useState} from "react";
import axios from "../../api/axios.jsx";

export const NotificationCard = () => {
    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        const fetchNotifications = async () => {
            await axios.get("/notification/notifications", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(
                response => {
                    setNotifications(response.data.data)
                    console.log(response.data.data)
                }
            )
        }

        fetchNotifications();
    }, [notifications]);

    const handleReadNotification = async (id) => {
        let formData = new FormData();
        formData.append('notificationId', id)

        try {
            await axios.patch(`/notification/mark-as-read`, formData,{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(
                response => {
                    console.log(response.status)
                }
            )
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="bg-red-500 items-stretch bg-white flex flex-col pt-4 pb-10 px-4 rounded-xl w-fit">
            <header className="text-gray-900 text-lg font-medium whitespace-nowrap">
                Notification
            </header>

            <div className="mt-4">

                { notifications.length !== 0 ?
                    notifications.map(
                        notification => (
                            <div
                                key={notification.id}
                                onClick={() => {
                                    handleReadNotification(notification.id)
                                }}
                                className={`${notification.read ? "" : "bg-green-500"} pr-2 w-fit cursor-pointer flex items-center gap-8 mt-2 max-md:mt-10`}
                                style={{borderRadius: "5px"}}
                            >
                                <div className="items-stretch flex justify-between gap-2">
                                    <div
                                        className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
                                        aria-label="Company Logo"
                                        role="img"
                                    >
                                        <img
                                            loading="lazy"
                                            srcSet={notification.logo}
                                            alt="Company Logo"
                                        />
                                    </div>
                                    <div className="text-gray-800 flex gap-2 text-sm self-center w-fit my-auto">
                                        <span className="font-semibold">{notification.companyName}</span>
                                        <span className="text-gray-600">{notification.message}</span>
                                    </div>
                                </div>
                                <div className="text-zinc-800 text-right text-xs grow whitespace-nowrap">
                                    {notification.createTime}
                                </div>
                            </div>
                        )
                    ) :
                    <div>No notifications available</div>
                }

            </div>
        </div>
    );
}