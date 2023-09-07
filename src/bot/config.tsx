import { createChatBotMessage } from "react-chatbot-kit";
import IsGotIt from "./widgets/gotcha"; // Adjust the path as needed
import SelectAge from "./widgets/selectAge"; // Adjust the path as needed
import IWidget from "react-chatbot-kit/build/src/interfaces/IWidget";
import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";
import React from "react";

const config: IConfig = {
  botName: "BOT",
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      widget: "gotIt",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  customComponents: {
    botAvatar: (_props: any) => <span>Bot</span>,
  },
  widgets: [
    {
      widgetName: "gotIt",
      widgetFunc: (props: any) => <IsGotIt {...props} />, // Use the imported isGotIt component
    },
    {
      widgetName: "ageDropdown",
      widgetFunc: (props: any) => <SelectAge {...props} />, // Use the imported SelectAge component
    },
  ] as IWidget[],
};

export default config;
