import React from 'react'

export default function ConnectWeb3 ({
  isNetworkWarning,
  findMetamaskAccounts,
  networkName
}) {
  return (
    <div style={{ paddingTop: 8 }}>
      <div className='row form-group' style={{ padding: '.375rem .75rem' }}>
        <h4>
          <span style={{ color: '#13a2dc' }}>Connect</span> to Web3
        </h4>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          {isNetworkWarning
            ? (
              <div
                className='alert'
                style={{ background: '#a6ffcc' }}
                role='alert'
              >
                <p style={{ paddingTop: '15px' }}>
                  {`You are on ${networkName[0].toUpperCase()}${networkName.slice(
                    1
                  )} testnet, please switch to Mainnet.`}
                </p>
              </div>
              )
            : null}
          <div>
            <div
              className='alert'
              style={{ background: '#a6ffcc' }}
              role='alert'
            >
              <p>A pop up will open to connect to your Metamask wallet.</p>
              <p>
                If you don’t have metamask you can install it in clicking on
                this link&nbsp;
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'
                >
                  Metamask.
                </a>
              </p>
            </div>
            <button
              className='new-button'
              style={{
                width: '100%',
                marginTop: '20px',
                backgroundColor: '#a6ffcc'
              }}
              type='button'
              onClick={findMetamaskAccounts}
            >
              <strong>Connect to Web3</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
