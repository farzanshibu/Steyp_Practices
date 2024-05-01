import { faker } from "@faker-js/faker";

import { ReactComponent as PhoneCallIcon } from "../assets/icons/Property 1=phone.svg";
import { ReactComponent as VideoCallIcon } from "../assets/icons/Property 1=video-camera.svg";
import { ReactComponent as GroupIcon } from "../assets/icons/Property 1=users.svg";
import { ReactComponent as SettingIcon } from "../assets/icons/Property 1=setting (1).svg";

const Nav_Buttons = [
  {
    index: 0,
    icon: <PhoneCallIcon width={30} height={30} />,
  },
  {
    index: 1,
    icon: <VideoCallIcon width={30} height={30} />,
  },
  {
    index: 2,
    icon: <GroupIcon width={30} height={30} />,
  },
  {
    index: 3,
    icon: <SettingIcon width={30} height={30} />,
  },
];

const ChatList = [
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    online: false,
  },
  {
    id: 8,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    online: true,
  },
];

const Chat_History = [
  {
    type: "divider",
    text: "Yesterday",
  },
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
    time: "9:36",
    read: true,
    reactions: [],
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
    time: "9:36",
    read: true,
    reactions: [],
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
    time: "9:36",
    read: true,
    reactions: [],
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
    time: "9:36",
    read: true,
    reactions: [],
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.urlLoremFlickr({ category: "abstract" }),
    incoming: true,
    outgoing: false,
    time: "9:36",
    read: true,
    reactions: [],
  },
  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.urlLoremFlickr({ category: "abstract" }),
    incoming: true,
    outgoing: false,
    time: "9:36",
    read: true,
    reactions: [],
  },
  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.urlLoremFlickr({ category: "abstract" }),
    incoming: true,
    outgoing: false,
    time: "9:36",
    read: true,
    reactions: [],
  },
  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.urlLoremFlickr({ category: "abstract" }),
    incoming: true,
    outgoing: false,
    time: "9:36",
    read: true,
    reactions: [],
  },
  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.urlLoremFlickr({ category: "abstract" }),
    incoming: true,
    outgoing: false,
    time: "9:36",
    read: true,
    reactions: [],
  },
  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.urlLoremFlickr({ category: "abstract" }),
    incoming: true,
    outgoing: false,
    time: "9:36",
    read: true,
    reactions: [],
  },
  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.urlLoremFlickr({ category: "abstract" }),
    incoming: true,
    outgoing: false,
    time: "9:36",
    read: true,
    reactions: [],
  },
  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.urlLoremFlickr({ category: "abstract" }),
    incoming: true,
    outgoing: false,
    time: "9:36",
    read: true,
    reactions: [],
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
    time: "9:36",
    read: false,
    reactions: [],
  },

  {
    type: "msg",
    subtype: "doc",
    preview: faker.image.urlLoremFlickr({ category: "cats" }),
    filename: "resume.pdf",
    fileformat: "pdf",
    filesize: "10MB",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
    time: "9:36",
    read: true,
    reactions: [],
  },
  {
    type: "msg",
    subtype: "doc",
    preview: faker.image.urlLoremFlickr({ category: "cats" }),
    filename: "resume.pdf",
    fileformat: "pdf",
    filesize: "10MB",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
    time: "9:36",
    read: true,
    reactions: [],
  },
  {
    type: "msg",
    subtype: "doc",
    preview: faker.image.urlLoremFlickr({ category: "cats" }),
    filename: "resume.pdf",
    fileformat: "pdf",
    filesize: "10MB",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
    time: "9:36",
    read: true,
    reactions: [],
  },
  {
    type: "msg",
    subtype: "doc",
    preview: faker.image.urlLoremFlickr({ category: "cats" }),
    filename: "resume.pdf",
    fileformat: "pdf",
    filesize: "10MB",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
    time: "9:36",
    read: true,
    reactions: [],
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.urlLoremFlickr({ category: "cats" }),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
    time: "9:36",
    read: false,
    reactions: [
      {
        id: 0,
        icon: "👍",
        count: 10,
      },
      {
        id: 1,
        icon: "👎",
        count: 10,
      },
    ],
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
    time: "9:36",
    read: true,
    reactions: [
      {
        id: 0,
        icon: "👍",
        count: 10,
      },
      {
        id: 1,
        icon: "👎",
        count: 10,
      },
    ],
  },
];

const Message_options = [
  {
    title: "Edit Message",
  },
  {
    title: "Star Message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

export { Nav_Buttons, ChatList, Chat_History, Message_options };
