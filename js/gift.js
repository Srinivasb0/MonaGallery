import { ethers }  from "ethers";

const giftSubmit = document.getElementById('submit');
giftSubmit.addEventListener('click', sendGift)


function sendGift(){
    const amount = document.getElementById('amount').value;
    const comment = document.getElementById('comment').value;

    const accounts = window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();


    const giftabi = [
        "function sendGift(string _spaceTitle, address _artistAddress, string _artistName, uint _amount, string _comments)",
        "function gifts(address) view returns (string)"
    ]
    const contract = "0xd9145CCE52D386f254917e481eB44e9943F39138";
    const providercontract = new ethers.Contract(contract, giftabi, provider);
    const signercontract = new ethers.Contract(contract, giftabi, signer);

    const giftToartist = signercontract.sendGift("The Forest", "0xfb61eb0d2221f9ce2dafc4ba9b24b2d946af1b6c", "Fabeeo Breen", "100000000000000", "First gift");
}



// deployed in arbetrium goerli
// 

// const giftToartist = signercontract.sendGift(spaceTitle, artistAddress, artistname, amount, comments);
// const checkGifts = providercontract.gifts()





