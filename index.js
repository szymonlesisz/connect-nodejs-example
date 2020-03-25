const TrezorConnect = require('trezor-connect').default;

TrezorConnect.on('UI_EVENT', ev => {
    console.log('UI_EVENT', ev);
});

TrezorConnect.init({
    debug: true,
    manifest: {
        email: 'developer@xyz.com',
        appUrl: 'http://your.application.com',
    },
}).then(() => {
    TrezorConnect.getAddress({ path: "m/84'/0'/0'/0/0" })
        .then(addr => {
            TrezorConnect.uiResponse(addr);
            console.log('Address: %s', addr);
        })
        .catch(err => console.log(err));
}).catch(error => {
        console.log('TrezorConnect init error', error);
    });
