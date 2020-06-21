import moment from 'moment-timezone'
import socket from 'utils/socket'
import api from './api'

const getUserTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone

const localizeTimeStamp = (timestamp, tz) =>
  moment(timestamp).tz(tz).format('hh:mm a DD/MM/YY')

const setChatData = (
  chatRoomName,
  chatRoomId,
  userName,
  userId,
  youTubeUrl,
  hostName,
) => {
  localStorage.setItem(
    'chatData',
    JSON.stringify({
      chatRoomName,
      chatRoomId,
      userName,
      userId,
      youTubeUrl,
      hostName,
    }),
  )
}

export { api, socket, getUserTimezone, localizeTimeStamp, setChatData }
