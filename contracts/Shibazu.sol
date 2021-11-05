pragma solidity >=0.7.0 <0.8.5;
//SPDX-License-Identifier: UNLICENSEDs
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Shibazu is ERC20 {

    constructor() ERC20("Shibazu", "SHIZU") {
        _mint(msg.sender, 100000 * (10 ** decimals()));
    }


}