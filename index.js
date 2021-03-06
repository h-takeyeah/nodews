const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3001 }, () => {
  console.log('WebSocket server is running on port', wss.options.port)
})

wss.on('connection', ws => {
  setInterval(() => {
    let data = getData()
    const duration = [data.length % Math.floor(Math.random() * 10), data.length % Math.floor(Math.random() * 10)].sort()
    data = data.slice(duration[0], duration[1])
    ws.send(JSON.stringify(data))
  }, 5000)
})

function getData() {
  const inRoomUsers =
  [
    {
      "user_id": 123,
      "entered_at": "2021-03-01T01:58:12.000Z"
    },
    {
      "user_id": 221,
      "entered_at": "2021-03-01T02:10:07.000Z"
    },
    {
      "user_id": 422,
      "entered_at": "2021-03-01T02:01:14.000Z"
    },
    {
      "user_id": 423,
      "entered_at": "2021-02-23T16:57:39.000Z"
    },
    {
      "user_id": 424,
      "entered_at": "2021-02-25T03:00:50.000Z"
    },
    {
      "user_id": 445,
      "entered_at": "2021-02-26T16:17:14.000Z"
    },
    {
      "user_id": 11111,
      "entered_at": "2021-03-01T13:51:58.000Z"
    },
    {
      "user_id": 104111,
      "entered_at": "2021-03-01T01:37:22.000Z"
    }
  ]
  return inRoomUsers
}
