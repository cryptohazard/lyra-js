/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ShortCollateral,
  ShortCollateralInterface,
} from "../ShortCollateral";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
    ],
    name: "AlreadyInitialised",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BaseTransferFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "positionId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikeId",
            type: "uint256",
          },
          {
            internalType: "enum OptionMarket.OptionType",
            name: "optionType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateral",
            type: "uint256",
          },
          {
            internalType: "enum OptionToken.PositionState",
            name: "state",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct OptionToken.PositionWithOwner",
        name: "position",
        type: "tuple",
      },
    ],
    name: "BoardMustBeSettled",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "nominatedOwner",
        type: "address",
      },
    ],
    name: "OnlyNominatedOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "optionMarket",
        type: "address",
      },
    ],
    name: "OnlyOptionMarket",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OnlyOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "OutOfBaseCollateralForExchangeAndTransfer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "OutOfBaseCollateralForTransfer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "OutOfQuoteCollateralForTransfer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "QuoteTransferFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountBase",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quoteReceived",
        type: "uint256",
      },
    ],
    name: "BaseExchangedAndQuoteSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BaseSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountBaseSent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountQuoteSent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpBaseInsolvency",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpQuoteInsolvency",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "LPBaseExcess",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "LPQuoteExcess",
        type: "uint256",
      },
    ],
    name: "BoardSettlementCollateralSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerNominated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "settler",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "optionOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "strikePrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "priceAtExpiry",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum OptionMarket.OptionType",
        name: "optionType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "settlementAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "insolventAmount",
        type: "uint256",
      },
    ],
    name: "PositionSettled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "QuoteSent",
    type: "event",
  },
  {
    inputs: [],
    name: "LPBaseExcess",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LPQuoteExcess",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountBase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountQuote",
        type: "uint256",
      },
    ],
    name: "boardSettlement",
    outputs: [
      {
        internalType: "uint256",
        name: "lpBaseInsolvency",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lpQuoteInsolvency",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract OptionMarket",
        name: "_optionMarket",
        type: "address",
      },
      {
        internalType: "contract LiquidityPool",
        name: "_liquidityPool",
        type: "address",
      },
      {
        internalType: "contract OptionToken",
        name: "_optionToken",
        type: "address",
      },
      {
        internalType: "contract SynthetixAdapter",
        name: "_synthetixAdapter",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_quoteAsset",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_baseAsset",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "nominateNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nominatedOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        internalType: "enum OptionMarket.OptionType",
        name: "optionType",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "returnCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lpPremiums",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lpFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidatorFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "smFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "insolventAmount",
            type: "uint256",
          },
        ],
        internalType: "struct OptionToken.LiquidationFees",
        name: "liquidationFees",
        type: "tuple",
      },
    ],
    name: "routeLiquidationFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendBaseCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendQuoteCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "positionIds",
        type: "uint256[]",
      },
    ],
    name: "settleOptions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ShortCollateral__factory {
  static readonly abi = _abi;
  static createInterface(): ShortCollateralInterface {
    return new utils.Interface(_abi) as ShortCollateralInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShortCollateral {
    return new Contract(address, _abi, signerOrProvider) as ShortCollateral;
  }
}
