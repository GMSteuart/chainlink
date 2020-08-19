import React from 'components/nodesLogos/react'
import { Row, Col } from 'components/nodesLogos/antd'
import alphavantage from 'components/nodesLogos/assets/nodes/alphavantage.png'
import anyblock from 'components/nodesLogos/assets/nodes/anyblock.png'
import bharvest from 'components/nodesLogos/assets/nodes/bharvest.png'
import certusone from 'components/nodesLogos/assets/nodes/certusone.png'
import chainlayer from 'components/nodesLogos/assets/nodes/chainlayer.png'
import chorusone from 'components/nodesLogos/assets/nodes/chorusone.png'
import cosmostation from 'components/nodesLogos/assets/nodes/cosmostation.png'
import easy2stake from 'components/nodesLogos/assets/nodes/easy2stake.png'
import everstake from 'components/nodesLogos/assets/nodes/everstake.png'
import fiews from 'components/nodesLogos/assets/nodes/fiews.png'
import figment from 'components/nodesLogos/assets/nodes/figment.png'
import honeycomb from 'components/nodesLogos/assets/nodes/honeycomb.png'
import infinitystones from 'components/nodesLogos/assets/nodes/infinitystones.png'
import kaiko from 'components/nodesLogos/assets/nodes/kaiko.png'
import linkforest from 'components/nodesLogos/assets/nodes/linkforest.png'
import linkpool from 'components/nodesLogos/assets/nodes/linkpool.png'
import newroad from 'components/nodesLogos/assets/nodes/newroad.png'
import omniscience from 'components/nodesLogos/assets/nodes/omniscience.png'
import p2p from 'components/nodesLogos/assets/nodes/p2p.png'
import paradigmcitadel from 'components/nodesLogos/assets/nodes/paradigmcitadel.png'
import prophet from 'components/nodesLogos/assets/nodes/prophet.png'
import sdl from 'components/nodesLogos/assets/nodes/sdl.png'
import simplevc from 'components/nodesLogos/assets/nodes/simplevc.png'
import snz from 'components/nodesLogos/assets/nodes/snz.png'
import stakefish from 'components/nodesLogos/assets/nodes/stakefish.png'
import stakingfacilities from 'components/nodesLogos/assets/nodes/stakingfacilities.png'
import validationcapital from 'components/nodesLogos/assets/nodes/validationcapital.png'
import watez from 'components/nodesLogos/assets/nodes/watez.png'
import ztake from 'components/nodesLogos/assets/nodes/ztake.png'
import oneNode from 'components/nodesLogos/assets/nodes/01node.png'
import tSystems from 'components/nodesLogos/assets/nodes/tsystems.png'
import dextrac from 'components/nodesLogos/assets/nodes/dextrac.png'
import dmakers from 'components/nodesLogos/assets/nodes/dmakers.png'
import huobi from 'components/nodesLogos/assets/nodes/huobi.png'
import syncnode from 'components/nodesLogos/assets/nodes/syncnode.png'
import vulcanLink from 'components/nodesLogos/assets/nodes/vulcanLink.png'
import youbi from 'components/nodesLogos/assets/nodes/youbi.png'
import staked from 'components/nodesLogos/assets/nodes/staked.png'

interface Node {
  name: string
  url: string
  src: string
}

const grid = { xs: 12, sm: 8, md: 6, lg: 4 }
const list: Node[] = [
  {
    name: 'T-Systems',
    url: 'https://www.t-systems.com',
    src: tSystems,
  },
  {
    name: 'LinkPool',
    url: 'https://linkpool.io',
    src: linkpool,
  },
  {
    name: 'Certus one',
    url: 'https://certus.one',
    src: certusone,
  },
  {
    name: 'Stake.fish',
    url: 'https://stake.fish/en/',
    src: stakefish,
  },
  {
    name: 'Chainlayer',
    url: 'https://www.chainlayer.io',
    src: chainlayer,
  },
  {
    name: 'Chorus One',
    url: 'https://chorus.one',
    src: chorusone,
  },
  {
    name: 'Figment Networks',
    url: 'https://figment.network',
    src: figment,
  },
  {
    name: 'Cosmostation',
    url: 'https://www.cosmostation.io',
    src: cosmostation,
  },
  {
    name: 'Validation Capital',
    url: 'https://validation.capital',
    src: validationcapital,
  },
  {
    name: 'LinkForest',
    url: 'https://www.linkforest.io',
    src: linkforest,
  },
  {
    name: 'Everstake',
    url: 'https://everstake.one',
    src: everstake,
  },
  {
    name: 'Fiews',
    url: 'https://fiews.io',
    src: fiews,
  },
  {
    name: 'Simply VC',
    url: 'https://simply-vc.com.mt',
    src: simplevc,
  },
  {
    name: 'Wetez',
    url: 'https://www.wetez.io/pc/wetez',
    src: watez,
  },
  {
    name: 'NewRoad',
    url: 'https://newroad.network',
    src: newroad,
  },
  {
    name: 'ZTake.org',
    url: 'https://ztake.org',
    src: ztake,
  },
  {
    name: 'Easy 2 Stake',
    url: 'https://www.easy2stake.com',
    src: easy2stake,
  },
  {
    name: 'Anyblock Analytics',
    url: 'https://www.anyblockanalytics.com',
    src: anyblock,
  },
  {
    name: 'P2P.org',
    url: 'https://p2p.org',
    src: p2p,
  },
  {
    name: 'AlphaVantage',
    url: 'https://www.alphavantage.co',
    src: alphavantage,
  },
  {
    name: 'SNZPool',
    url: 'https://snzholding.com',
    src: snz,
  },
  {
    name: 'SDL',
    url: 'https://www.securedatalinks.com',
    src: sdl,
  },
  {
    name: 'HoneyComb',
    url: 'https://honeycomb.market',
    src: honeycomb,
  },
  {
    name: 'Prophet',
    url: 'http://prophet.one',
    src: prophet,
  },
  {
    name: 'Omniscience',
    url: 'https://omniscience.uk',
    src: omniscience,
  },
  {
    name: 'Staking Facilities',
    url: 'https://stakingfacilities.com',
    src: stakingfacilities,
  },
  {
    name: 'Infinity Stones',
    url: 'https://infinitystones.io',
    src: infinitystones,
  },
  {
    name: 'B Harvest',
    url: 'https://bharvest.io',
    src: bharvest,
  },
  {
    name: 'Paradigm Citadel',
    url: 'https://paradigmfund.io',
    src: paradigmcitadel,
  },
  {
    name: 'Kaiko',
    url: 'https://www.kaiko.com',
    src: kaiko,
  },
  {
    name: '01Node',
    url: 'https://01node.com',
    src: oneNode,
  },
  {
    name: 'DEXTRAC',
    url: 'http://dex.trace.link',
    src: dextrac,
  },
  {
    name: 'dMakers',
    url: 'https://dmakers.org',
    src: dmakers,
  },
  {
    name: 'Huobi',
    url: 'https://www.huobi.com',
    src: huobi,
  },
  {
    name: 'SyncNode',
    url: 'https://wallet.syncnode.ro',
    src: syncnode,
  },
  {
    name: 'Vulcan Link',
    url: 'https://vulcan.link',
    src: vulcanLink,
  },
  {
    name: 'Youbi Capital',
    url: 'http://www.youbicapital.com',
    src: youbi,
  },
  {
    name: 'Staked',
    url: 'http://www.staked.us',
    src: staked,
  },
]

interface LogoProps {
  item: Node
}

const Logo: React.FC<LogoProps> = ({ item }) => (
  <a
    className="logo-item grayscale"
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      alt={item.name}
      title={item.name}
      src={item.src}
      className={item.name}
    />
  </a>
)

const NodesLogos = () => (
  <section className="logos-wrapper">
    <h3>Decentralized and Operated By</h3>
    <div className="logos">
      <Row gutter={18} type="flex" justify="space-around">
        {list.map((node: Node, i: number) => (
          <Col key={i} {...grid}>
            <Logo item={node} />
          </Col>
        ))}
      </Row>
    </div>
  </section>
)

export default NodesLogos
