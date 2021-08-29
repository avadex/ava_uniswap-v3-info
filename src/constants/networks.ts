import OPTIMISM_LOGO_URL from '../assets/svg/optimism-plain.svg'
import ARBITRUM_LOGO_URL from '../assets/images/arbitrum.svg'
import ETHEREUM_LOGO_URL from '../assets/images/ethereum-logo.png'

export enum SupportedNetwork {
  AVALANCHE,
  ETHEREUM,
  ARBITRUM,
  OPTIMISM,
}

export type NetworkInfo = {
  id: SupportedNetwork
  name: string
  imageURL: string
  bgColor: string
  primaryColor: string
  secondaryColor: string
  blurb?: string
}

export const AvalancheNetworkInfo: NetworkInfo = {
  id: SupportedNetwork.AVALANCHE,
  name: 'Avalanche',
  bgColor: '#07fca6',
  primaryColor: '#0c8e0b',
  secondaryColor: '#2172E5',
  imageURL: ETHEREUM_LOGO_URL,
}

export const EthereumNetworkInfo: NetworkInfo = {
  id: SupportedNetwork.ETHEREUM,
  name: 'Avalanche',
  bgColor: '#1f772a',
  primaryColor: '#1f772a',
  secondaryColor: '#2172E5',
  imageURL: ETHEREUM_LOGO_URL,
}

export const ArbitrumNetworkInfo: NetworkInfo = {
  id: SupportedNetwork.ARBITRUM,
  name: 'Arbitrum',
  imageURL: ARBITRUM_LOGO_URL,
  bgColor: '#0A294B',
  primaryColor: '#96BEDC',
  secondaryColor: '#96BEDC',
  blurb: 'L2 Alpha',
}

export const OptimismNetworkInfo: NetworkInfo = {
  id: SupportedNetwork.OPTIMISM,
  name: 'Optimism',
  bgColor: '#F01B36',
  primaryColor: '#F01B36',
  secondaryColor: '#FB7876',
  imageURL: OPTIMISM_LOGO_URL,
  blurb: 'L2 Alpha',
}

export const SUPPORTED_NETWORK_VERSIONS: NetworkInfo[] = [EthereumNetworkInfo, OptimismNetworkInfo]
