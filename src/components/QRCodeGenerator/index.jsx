import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QRCodeGenerator = () => {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    const generateQRCode = () => {
        setQrCode(input);
        setInput('');
    }
    return (
        <section>
            <h2>Generate QR Code of a TEXT</h2>
            <div className="QrCodeBox">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" name="qr-code" id="qr-code" value={input} onChange={(e) => { setInput(e.target.value) }} />
                    <div class="input-group-append">
                        <button type="button" onClick={generateQRCode} class="btn btn-primary">Genrate QR Code</button>
                    </div>
                </div>
                {qrCode ? <QRCode
                    id='qr-code-gen'
                    value={input ? qrCode : ''}
                    size={100}
                /> : null}

            </div>
        </section>
    )
}

export default QRCodeGenerator