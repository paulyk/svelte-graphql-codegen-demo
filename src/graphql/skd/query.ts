
import { gql } from 'apollo-boost'

export const getComponents = gql  `
query getComponents {
  components {
    totalCount
    nodes {
      id
      code
      name
      createdAt
    }
  }
}`

export const getVehicleInProduction = gql  `
query getVehicleInProduction {
  vehicles(order_by:{
    plannedBuildAt: DESC }, where:{
      plannedBuildAt_not: null,
      scanLockedAt: null
    }) {
    totalCount
    nodes {
      vin
      plannedBuildAt
      scanLockedAt
      model {
        code
        name
      }
    }
  }
}


`
