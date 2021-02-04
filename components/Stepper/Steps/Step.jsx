const Step = ({ num, stage }) => {
  if (num < stage) {
    return <div>done</div>
  }
  if (num === stage) {
    return <div>stage {stage}</div>
  } else {
    return <div>to do</div>
  }
}

export default Step
