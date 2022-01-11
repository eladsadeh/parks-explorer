import React from 'react';

function Message({content}) {
    return (
        <div className='message'>
            {content}
        </div>
    );
}

export default Message;