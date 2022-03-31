require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note range protect good knee front sponsor'; 
let testAccounts = [
"0x688d4d3385836658cd01efeeeb096e006320de60fb8dd5694acd115c4cee3d5d",
"0x4b9df6d4b82616a67a56886ac74a74ec3bfb59c1d04775b32b3c9195d553d3ec",
"0x6a1ec65e5e20cca05235166ed41e21c4dffa9f0e496972854d05b83e77d772cd",
"0xf923a7e50ac5ff2fda1b64d1d40a015c4ef8f80d5593d33fa05d0455e42e8b43",
"0xb3db87759e1f03c6d1f70616a80d63393cdfb85f36f2066344850cebc10aa931",
"0xd06defc65d901197cf169d80c17a90f88dfa5f63bdac0aed334124e35bc83123",
"0xa127179a36da3c7035e020d67aeb5dc79abfe1fd24773cd688f484e6b7fc6925",
"0xcb2a81aa015d01deef23f2279215305a44826ce9b6363dd69fe82c7613ceecdd",
"0xff2ca0f7ea3806ae1a68bc319ef5a3aed22ccf4bec60e7a39a87d08446c0059f",
"0xb57e5a17c02372000ca74883bec79ef92f4f9b4e76d253bb6327a67353113b54"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

