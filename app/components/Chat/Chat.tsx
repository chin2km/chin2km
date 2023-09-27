import type { FunctionComponent } from "react";
import React, { useEffect, useState } from "react";
import "./chat.css"

interface Bubble {
    text: string;
    loading: boolean;
}
const buildChat = (chats: string[]): Bubble[] =>
    chats.map((chat) => ({
        text: chat,
        loading: true,
    }));

interface IProps {
    data: string[];
    className?: string;
}

const getRandomBetween = (start: number, end: number): number => Math.floor(Math.random() * end) + start;

export const Chat: FunctionComponent<IProps> = ({ data: intros }) => {
    const [chats, setChats] = useState(buildChat(intros));

    let interval: ReturnType<typeof setInterval>;
    let idx = 0;



    useEffect(() => {
        const pushChat = () => {
            if (idx < intros.length) {
                const newChats = chats.map((chat, index) => (index <= idx ? { ...chat, loading: false } : chat));
                setChats(newChats);
            } else {
                clearInterval(interval);
            }
            idx++;
            clearInterval(interval);
            interval = setInterval(pushChat, getRandomBetween(1.5, 2.5) * 1000);
        };

        interval = setInterval(pushChat, 1500);
        return () => {
            clearInterval(interval);
        };
    }, [intros]);

    return (
        <div className={"chat-wrapper"}>
            {chats.map(({ text, loading }, index) => {
                return loading ? (
                    <div key={Math.random()} className={"bubble loading"}>
                        <div className="typing">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                ) : (
                    <div className="bubble" key={index} dangerouslySetInnerHTML={{ __html: text }}></div>
                );
            })}
        </div>
    );
};

