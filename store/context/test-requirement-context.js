import { createContext, useState } from 'react'
import { generateDummyTestPlans } from '../../models/testplan'

export const TestRequirementContext = createContext({
  requirements: [],
})

const TestRequirementContextProvider = ({ children }) => {
  const initialRequirements = generateDummyTestPlans(10)
  const requirementContext = {
    requirements: initialRequirements,
  }
  return <TestRequirementContext.Provider value={requirementContext}>{children}</TestRequirementContext.Provider>
}

export default TestRequirementContextProvider