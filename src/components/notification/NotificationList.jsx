import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../lib/axios";
import axios from "axios";
import {
  __getNotification,
  __readNotification,
  __deleteNotification,
  __deleteNotifications,
  __minusNotification,
} from "../../redux/modules/notificationSlice";
import "./style.css";

function NotificationList({}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notification = useSelector(
    (state) => state?.notification?.notifications
  );

  const [notificationData, setNotificationData] = useState([]);

  return (
    <div>
      <div>
        {notificationData.length === 0 ? (
          <div>
            <div>알림은 현재 준비 중입니다!🥺</div>
          </div>
        ) : (
          <>
            <div>
              <div>{`읽지 않은 알림 (${notificationData.length})`}</div>
              <div>
                {notification?.map((notification) => {
                  return (
                    <div key={notification.id}>
                      {!notification.status ? ( // 읽지 않은 알람
                        <div
                          className="notification_list"
                          onClick={() => {
                            // onclickReadNotification(notification.id);
                            navigate();
                          }}
                        >
                          <div className="notification_content">
                            <span>{notification?.content}</span>
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                // onclickDeleteNotification(notification.id);
                              }}
                            >
                              삭제
                            </div>
                          </div>
                        </div>
                      ) : (
                        // 읽은 알람
                        <div
                          onClick={() => {
                            navigate();
                          }}
                        >
                          <div>
                            <span>{notification.content.content}</span>
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                // onclickDeleteNotification(notification.id);
                              }}
                            >
                              삭제
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                // onclickDeleteNotifications();
              }}
            >
              <div>전체 삭제</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NotificationList;
