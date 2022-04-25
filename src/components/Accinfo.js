import React, { useEffect, useState, useCallback } from 'react';
import Web3 from "web3";
import "./Acc.css";
import detectEthereumProvider from '@metamask/detect-provider';
import { loadContract } from "./load-contract";


export const Acc = () => {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  })

  const [account, setAccount] = useState(null)
  const [balance, setBalance] = useState(null)
  const [shouldReload, reload] = useState(false)

  const reloadEffect = useCallback(() => reload(!shouldReload), [shouldReload])
  
  const setAccountListener = (provider) => {
    provider.on("accountsChanged", accounts => setAccount(accounts[0]))
  }
  useEffect(() => {
    async function loadProvider() {
      console.log("hi")
      const provider = await detectEthereumProvider()
      const contract = await loadContract("Faucet",provider)

      if (provider) {
        setAccountListener(provider)
        console.log("hi")
        setWeb3Api({
        web3: new Web3(provider),
        provider,
        contract
        })

        console.log('Ethereum successfully detected!')
      } else {

        // if the provider is not detected, detectEthereumProvider resolves to null
        console.error('Please install MetaMask!')
      }
    }
    loadProvider()
  }, [])

  useEffect(() => {
    const loadBalance = async () => {
      const { contract, web3 } = web3Api
      const balance = await web3.eth.getBalance(contract.address)
      console.log("hi") 
      setBalance(web3.utils.fromWei(balance,"ether"))
    }

    web3Api.contract && loadBalance()
  }, [web3Api,shouldReload])
  
  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0])
    }

    web3Api.web3 && getAccount()
  }, [web3Api.web3])
  
  const addFunds = useCallback(async () => {
    const { contract, web3 } = web3Api
    await contract.addFunds({
      from: account,
      value: web3.utils.toWei("1","ether")
    })
    reloadEffect()
    //window.location.reload();
  }, [web3Api, account, reloadEffect])

  const withdraw = useCallback(async () => {
    const { contract, web3 } = web3Api
    const withdrawAomount = web3.utils.toWei("0.1","ether")
    await contract.withdraw(withdrawAomount, {
      from: account
    })
    reloadEffect()
  }, [web3Api, account, reloadEffect])
    
  async function conwallet() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  console.log(web3Api.web3)
  return (
    <>
      <div className="faucet-wrapper">
        <div className="faucet">
          <div className="is-flex is-align-items-center">
            <span>
              <strong className="mr-2">Account:</strong>
            </span>
              {account ?
              <div>{account} </div> :
                <button
                  className="button is-small"
                  onClick={conwallet}
                >
                  Connect Wallet
                </button>
              }
          </div>
          <div className="balance-view is-size-2 mb-4">
            Current Balance: <strong>{balance}</strong> ETH
          </div>
        </div>
      </div>
    </>
  );
}
