import Head from 'next/head'

import Stepper from 'components/Stepper/Stepper'

import { CenterSingleChild, Column, Row } from 'styles'

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Component Design Patterns</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CenterSingleChild>
        <Stepper>
          <Stepper.Progress>
            <Stepper.Stage num={1} text={'This is not a simple component'} />
            <Stepper.Stage
              num={2}
              text={"It's made via Compound Component pattern"}
            />
            <Stepper.Stage num={3} text={"What's that? Dig into code!"} />
            <Stepper.Stage num={4} text={'Completed'} />
          </Stepper.Progress>
          <Stepper.Steps>
            <Stepper.Step num={1} />
            <Stepper.Step num={2} />
            <Stepper.Step num={3} />
            <Stepper.Step num={4} />
          </Stepper.Steps>
          <Stepper.NextBtn />
        </Stepper>
      </CenterSingleChild>
    </div>
  )
}
