import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QRCOdeGenerator = () => {
    const[QRCode,setQRCode] = useState('');
    const[input,setInput] = useState('');
  return (
    <section>
        <div className="input-box">
            <input type="text" name="qr-code" id="qr-code" value={input} onChange={(e)=>{setInput(e.target.value)}} />
        </div>
        <QRCode
        id=''
        value=''
        />
    </section>
  )
}

export default QRCOdeGenerator