import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

const DirectChatPage = () => {
    const [username, setUsername] = useState('')

    function createDirectChat(creds) {
        getOrCreateChat(
            creds,
            { is_direct_chat: true, usernames: [username] },
            () => setUsername('')
        )
    }

    function renderChatForm(creds) {
        return (
            <div>
                <input
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={() => createDirectChat(creds)}>
                    Create
                </button>
            </div>
        )
    }

    return (
        <ChatEngine
            height='100vh'
            projectID='2dec56db-af5f-4e84-af94-ee0da1332fbe'
            userName='Lokesh'
            userSecret='lokesh@123'
            renderNewChatForm={(creds) => renderChatForm(creds)}
        />
    )
}

export default DirectChatPage;