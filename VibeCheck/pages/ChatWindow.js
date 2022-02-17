import { View, VStack } from 'native-base';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const ChatWindow = (props) => {
    const [socket, setSocket] = useState(undefined);
    const [chatMessage, setChatMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        setSocket(io("http://127.0.0.1/3001"));
    }, []);

    return (
        <View>
            <VStack>
                
            </VStack>
        </View>
    );
}

export default ChatWindow;