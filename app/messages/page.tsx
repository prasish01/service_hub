"use client";

import { useState } from "react";
import { Search, MoreHorizontal, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define the type for a message
type Message = {
  id: number;
  sender: string;
  avatar: string;
  text: string;
  timestamp: string;
};

// Define the type for a conversation
type Conversation = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount?: number;
};

// Sample data for conversations
const conversations: Conversation[] = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://github.com/shadcn.png",
    lastMessage: "Hey, how are you?",
    lastMessageTime: "10:30 AM",
    unreadCount: 2,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://github.com/shadcn.png",
    lastMessage: "See you tomorrow!",
    lastMessageTime: "Yesterday",
  },
  {
    id: 3,
    name: "Alice Johnson",
    avatar: "https://github.com/shadcn.png",
    lastMessage: "Can you send me the details?",
    lastMessageTime: "2 days ago",
  },
];

// Sample data for messages
const messages: Message[] = [
  {
    id: 1,
    sender: "John Doe",
    avatar: "https://github.com/shadcn.png",
    text: "Hey, how are you?",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    sender: "You",
    avatar: "https://github.com/shadcn.png",
    text: "I'm good, thanks! How about you?",
    timestamp: "10:31 AM",
  },
  {
    id: 3,
    sender: "John Doe",
    avatar: "https://github.com/shadcn.png",
    text: "I'm doing great. Let's catch up soon!",
    timestamp: "10:32 AM",
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<
    number | null
  >(null);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-96 border-r bg-white">
        <div className="flex items-center justify-between border-b p-4">
          <h1 className="text-xl font-bold">Messages</h1>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="border-b p-4">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search messages" className="pl-10" />
          </div>
        </div>

        {/* Conversations List */}
        <div className="overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`flex cursor-pointer items-center gap-4 p-4 hover:bg-gray-50 ${
                selectedConversation === conversation.id ? "bg-gray-50" : ""
              }`}
              onClick={() => setSelectedConversation(conversation.id)}
            >
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={conversation.avatar}
                  alt={conversation.name}
                />
                <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">{conversation.name}</h2>
                  <span className="text-xs text-gray-500">
                    {conversation.lastMessageTime}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  {conversation.lastMessage}
                </p>
              </div>
              {conversation.unreadCount && (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                  {conversation.unreadCount}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex flex-1 flex-col">
        {/* Chat Header */}
        {selectedConversation && (
          <div className="flex items-center justify-between border-b bg-white p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={
                    conversations.find((c) => c.id === selectedConversation)
                      ?.avatar
                  }
                  alt={
                    conversations.find((c) => c.id === selectedConversation)
                      ?.name
                  }
                />
                <AvatarFallback>
                  {conversations
                    .find((c) => c.id === selectedConversation)
                    ?.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-semibold">
                {conversations.find((c) => c.id === selectedConversation)?.name}
              </h2>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Profile</DropdownMenuItem>
                <DropdownMenuItem>Mute Notifications</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  Delete Chat
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {selectedConversation &&
            messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex max-w-[80%] items-end gap-2 ${
                    message.sender === "You" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {message.sender !== "You" && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={message.avatar} alt={message.sender} />
                      <AvatarFallback>
                        {message.sender.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg p-3 ${
                      message.sender === "You"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    <p>{message.text}</p>
                    <span className="mt-1 block text-xs text-gray-500">
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Message Input */}
        {selectedConversation && (
          <div className="border-t bg-white p-4">
            <div className="relative">
              <Input placeholder="Type a message..." className="pr-12" />
              <Button
                size="sm"
                className="absolute top-1/2 right-2 -translate-y-1/2"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
