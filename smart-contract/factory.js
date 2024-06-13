import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x60B6C80fc1fca77DDE42D5309Fe36CdB609e5819"
);

export default instance;
