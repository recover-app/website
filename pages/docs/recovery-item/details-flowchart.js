import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../../components/layout'
import Nav from '../../../components/docs/nav'

export default function DetailsFlowchart () {
  return (
    <Layout>
      <Head>
        <title>Recover.ws - Lost and found simply flowchart to recovery an item</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <div className='docs__container'>
          <div className='docs__summary'>
            <Nav />
          </div>
          <div className='docs__right__container'>
            <div className='docs__content'>
              <h1>DETAILED RECOVERY FLOWCHART</h1>
              <h2>A brief flowchart of how item recovery and reward process works using Recover</h2>

              <figure className='docs__container__img'>
                <img src='/docs/item-recovery/item-recovery-flowchart.jpg' alt='Details flowchart to recover your item' />
                <figcaption>Details flowchart to recover your item</figcaption>
              </figure>

              <div className='docs__content__nav'>
                <div className='docs__content__nav__link'>
                  <Link href='/docs/recovery-item/simply-flowchart'><a>← SIMPLE RECOVERY FLOWCHART</a></Link>
                </div>
                <div className='docs__content__nav__link'>
                  <Link href='/docs/recovery-item/steps-to-recover-item'><a>ITEM RECOVERY IN FEW STEPS →</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
