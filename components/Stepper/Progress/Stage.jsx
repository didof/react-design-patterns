const Stage = ({ num, stage, text }) => {
  if (num !== stage) return <div></div>

  return (
    <div>
      <h3>stage {stage}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Stage
