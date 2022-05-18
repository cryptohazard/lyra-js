/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { PoolHedger, PoolHedgerInterface } from "../PoolHedger";

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
        internalType: "uint256",
        name: "lastInteraction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interactionDelta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentTime",
        type: "uint256",
      },
    ],
    name: "InteractionDelayNotExpired",
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
            name: "shortBuffer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interactionDelay",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hedgeCap",
            type: "uint256",
          },
        ],
        internalType: "struct PoolHedger.PoolHedgerParameters",
        name: "poolHedgerParams",
        type: "tuple",
      },
    ],
    name: "InvalidPoolHedgerParameters",
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
        name: "quoteReceived",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minCollateral",
        type: "uint256",
      },
    ],
    name: "NotEnoughQuoteForMinCollateral",
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
        name: "liquidityPool",
        type: "address",
      },
    ],
    name: "OnlyLiquidityPool",
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
        internalType: "address",
        name: "approvee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "QuoteApprovalFailure",
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
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shortId",
        type: "uint256",
      },
    ],
    name: "ShortAccountAlreadyOpen",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newAmount",
        type: "uint256",
      },
    ],
    name: "LongSetTo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "shortId",
        type: "uint256",
      },
    ],
    name: "OpenedShortAccount",
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
        components: [
          {
            internalType: "uint256",
            name: "shortBuffer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interactionDelay",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hedgeCap",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct PoolHedger.PoolHedgerParameters",
        name: "poolHedgerParams",
        type: "tuple",
      },
    ],
    name: "PoolHedgerParametersSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "oldNetDelta",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "currentNetDelta",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "expectedNetDelta",
        type: "int256",
      },
    ],
    name: "PositionUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountQuote",
        type: "uint256",
      },
    ],
    name: "QuoteReturnedToLP",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldShort",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newShort",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newCollateral",
        type: "uint256",
      },
    ],
    name: "ShortSetTo",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCappedExpectedHedge",
    outputs: [
      {
        internalType: "int256",
        name: "cappedExpectedHedge",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentHedgedNetDelta",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICollateralShort",
        name: "short",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "spotPrice",
        type: "uint256",
      },
    ],
    name: "getHedgingLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "pendingDeltaLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "usedDeltaLiquidity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolHedgerParams",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "shortBuffer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interactionDelay",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hedgeCap",
            type: "uint256",
          },
        ],
        internalType: "struct PoolHedger.PoolHedgerParameters",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICollateralShort",
        name: "short",
        type: "address",
      },
    ],
    name: "getShortPosition",
    outputs: [
      {
        internalType: "uint256",
        name: "shortBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateral",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hedgeDelta",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract SynthetixAdapter",
        name: "_synthetixAdapter",
        type: "address",
      },
      {
        internalType: "contract OptionMarket",
        name: "_optionMarket",
        type: "address",
      },
      {
        internalType: "contract OptionGreekCache",
        name: "_optionGreekCache",
        type: "address",
      },
      {
        internalType: "contract LiquidityPool",
        name: "_liquidityPool",
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
    inputs: [],
    name: "lastInteraction",
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
    name: "openShortAccount",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "poolHedgerParams",
    outputs: [
      {
        internalType: "uint256",
        name: "shortBuffer",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interactionDelay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "hedgeCap",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "resetInteractionDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "shortBuffer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interactionDelay",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hedgeCap",
            type: "uint256",
          },
        ],
        internalType: "struct PoolHedger.PoolHedgerParameters",
        name: "_poolHedgerParams",
        type: "tuple",
      },
    ],
    name: "setPoolHedgerParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shortId",
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
    name: "updateCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class PoolHedger__factory {
  static readonly abi = _abi;
  static createInterface(): PoolHedgerInterface {
    return new utils.Interface(_abi) as PoolHedgerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolHedger {
    return new Contract(address, _abi, signerOrProvider) as PoolHedger;
  }
}
