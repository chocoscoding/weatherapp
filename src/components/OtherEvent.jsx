import React from 'react'

const OtherEvent = ({processStatus,}) => {
    if(processStatus.status === 'loading'){
        return (
            <div style={{textAlign: 'center', fontWeight: '900', color: '#ffffff' }}>
                Loading...
            </div>
        )

    }
    else{
        const message = processStatus.error.error.message || 'loading...';
        return (
            <div style={{textAlign: 'center', fontWeight: '900', fontSize: '2rem', color: '#5e0611' }}>
            {message}
        </div>
    )
}
}

export default OtherEvent
