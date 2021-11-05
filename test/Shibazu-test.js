const Shibazu = artifacts.require("Shibazu")

contract("Shibazu", (accounts) => {
    
    before(async () => {
        shibazu = await Shibazu.deployed()
    })
    

    it("gives the owner of the token 1 M tokens", async () => {
        let balance = await shibazu.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, 100000, "Balance should be 100000 for contract creator")
    })

    it("can transfer tokens between acounts", async () => {
        let amount = web3.utils.toWei('100', 'ether')
        await shibazu.transfer(accounts[1], amount, {from: accounts[0]})

        let balance = await shibazu.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '100', "Balance should be 100 tokens")
    })

})



