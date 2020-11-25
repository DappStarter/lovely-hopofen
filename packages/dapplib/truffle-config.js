require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name reflect saddle assume grid clock metal gift'; 
let testAccounts = [
"0x893b4a0f97c61ceec18b4c53b3c2a6093ec01fbed1e8a5d77fb27d2d4f52f4b9",
"0x1879e06d600c709f4c357f586f8cd67ebce44c9859fc328d3ac31a867922d748",
"0x80c95074b57b2fb7f69b73a5d031a8d82a3f6df3ecc9193f4099cd7721c1b323",
"0x4c96d8fbad172c668ee0811fd4d710f179d3b62b77f6878e0c8dd8e3b2ad3586",
"0x1d3c6a8516c237f1b41f80d7218e90a699fd129cfc7c95934ea79cd2e905c42f",
"0x0e9c6cdfed26daf1e64e86a337405a1c2a95a60a1dc7c254a42140e7021967b9",
"0xe89210a6515b2436d617365e7a1098705c5845d48a84de51faa2757defe82f36",
"0xd37105b2e018ad27f803057dd8f71957c4dc3f964e7d29ae6d90af6ecab795a6",
"0x0d83772f840bb00a1b20b224e5ecee51391344b041ae1377f587db6f900feaf1",
"0x973429a6057f5681b7d9a16a60f6fc0c918b563c414b795f89bd2012809a0df8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
