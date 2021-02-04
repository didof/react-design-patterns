import React from 'react'

export const StepperContext = React.createContext()

const StepperProvider = ({ children }) => {
  const [stage, setStage] = React.useState(1)

  return (
    <StepperContext.Provider
      value={{
        stage,
        handleClick: () => {
          setStage(stage + 1)
        },
      }}
    >
      {children}
    </StepperContext.Provider>
  )
}

export default StepperProvider
