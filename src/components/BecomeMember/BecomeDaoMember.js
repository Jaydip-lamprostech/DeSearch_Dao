import React, { useState } from 'react'
import { ethers } from 'ethers';
import { tokenInstance } from '../contracts';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
import "../../styles/becomeMember/BecomeDaoMember.css"

function BecomeDaoMember() {
  const navigate = useNavigate();
  const [numOfTokens, setNumOfTokens] = useState("");

  const {address} = useAccount();

  const tokenFunc = async () => {
    try{
      const { ethereum } = window;
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          if (!provider) {
            console.log("Metamask is not installed, please install!");
          }
          const conToken = await tokenInstance();
          const tokenPrice = await conToken.tokenPrice();
          console.log("Token Price :",tokenPrice)
          const hexValue = tokenPrice._hex;
          console.log(hexValue)

          const decimalValue = parseInt(hexValue, 16);
          console.log("Decimal Value",decimalValue)

          const finalValue = decimalValue / Math.pow(10, 18);
          console.log("Final Value",decimalValue / Math.pow(10, 18));
          console.log("Connected Address",address);

          const buyToken = conToken.tokenTransfer("0x969b78b356570B301e0200F98699Edc752a1200a", numOfTokens);

          console.log("buyToken",buyToken);
        }
    }catch (error){
      console.log(error);
    }
  }

  return (
    <>
      <div className="container-fluid BDMPageBg">
        <div className="pb-4">
        <div className="text-center" style={{marginTop:"100px",paddingTop:"100px"}}>
            <div className="d-flex justify-content-center align-items-center">
              <p className="researchHead">Buy Tokens</p>
            </div>
            <p className="text-center researchSubHead ">
              You Need To Buy Tokens For Becoming A Dao Member
            </p>
          </div>

          <div className="d-lg-flex row pb-4 align-items-center BDMPage-form-content justify-content-around">
            <div className="BDMPage-box-bg mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4">
              <form className="BDMPage-form-main">
                <div className="form-group-BDMPage row mb-4">
                  <div className="col-12 col-md-6 BDMPage-LabelTitle">
                    <label for="formGroupExampleInput">No. of Tokens:</label>
                  </div>
                  <div className="col-12 col-md-6 ">
                    <input
                      type="number"
                      class="TokenAmtInput-class"
                      id="formGroupExampleInput"
                      placeholder="Enter your tokens"
                      value={numOfTokens}
                      onChange={(e) => {
                        setNumOfTokens(e.target.value);
                      }}
                    />
                  </div>
                </div>
                {/* <div className="form-group-BDMPage row mb-4">
                  <div className="col-12 col-md-6 BDMPage-LabelTitle">
                    <label for="formGroupExampleInput2">Total Amount:</label>
                  </div>
                  
                  <div className="col-12 col-md-6 ">
                    {tknAmtResult ? (
                      <input
                        type="text"
                        class="form-control-plaintext"
                        id="formGroupExampleInput2"
                        value={tknAmtResult}
                        readOnly
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div> */}

                <div className="MemberBuyTokenBtn-class">
                  <div className="MemberBuyTokenBtn row">
                    <button
                      type="button"
                      className="MemberBuyTokenBtn col-12 col-md-10"
                      onClick={tokenFunc}
                    >
                      Buy Token
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BecomeDaoMember;
