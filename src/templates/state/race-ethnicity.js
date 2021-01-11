import React, { useState } from 'react'
import { graphql } from 'gatsby'

// import TableResponsive from '~components/common/table-responsive'
import Layout from '~components/layout'
import Hero from '~components/pages/state/race-ethnicity/hero'

const RaceEthnicityHistoricalTemplate = ({ pageContext, path, data }) => {
  const state = pageContext
  // const { slug } = state.childSlug

  const [currentMetric, setCurrentMetric] = useState('Cases')

  // false: showing numbers, true: showing rates per 100k
  const [usePer100kRate, setUsePer100kRate] = useState(false)

  return (
    <Layout
      title={`${state.name}: Race & Ethnicity Historical Data`}
      returnLinks={[
        {
          link: '/race/dashboard',
          title: 'Racial Data Tracker',
        },
      ]}
      path={path}
      description={`Historical time series of race and ethnicity data in ${state.name}.`}
      showWarning
    >
      <Hero
        stateName={state.name}
        stateSlug={state.childSlug.slug}
        stateAbbreviation={state.state}
        currentMetric={currentMetric}
        setCurrentMetric={setCurrentMetric}
        usePer100kRate={usePer100kRate}
        setUsePer100kRate={setUsePer100kRate}
      />
      Showing a chart of {currentMetric}{' '}
      {usePer100kRate ? 'per 100k' : 'raw numbers'}
      <br />
      {data.allCovidRaceDataTimeseries.nodes[0].Date}
    </Layout>
  )
}

export default RaceEthnicityHistoricalTemplate

export const query = graphql`
  query($state: String!) {
    allCovidRaceDataTimeseries(
      filter: { Date: { ne: null }, State: { eq: $state } }
    ) {
      nodes {
        Cases_Asian
        Cases_AIAN
        Cases_Black
        Cases_White
        Cases_Unknown
        Cases_Total
        Cases_Other
        Cases_NHPI
        Cases_Multiracial
        Cases_LatinX
        Cases_Ethnicity_Unknown
        Cases_Ethnicity_NonHispanic
        Cases_Ethnicity_Hispanic
        Date
        Deaths_AIAN
        Deaths_Asian
        Deaths_Black
        Deaths_Ethnicity_Hispanic
        Deaths_Ethnicity_NonHispanic
        Deaths_LatinX
        Deaths_Ethnicity_Unknown
        Deaths_Multiracial
        Deaths_NHPI
        Deaths_Other
        Deaths_Total
        Deaths_Unknown
        Deaths_White
        Hosp_AIAN
        Hosp_Asian
        Hosp_Black
        Hosp_Ethnicity_Hispanic
        Hosp_Ethnicity_NonHispanic
        Hosp_Ethnicity_Unknown
        Hosp_LatinX
        Hosp_Multiracial
        Hosp_NHPI
        Hosp_Other
        Hosp_Total
        Hosp_Unknown
        Hosp_White
        Tests_AIAN
        Tests_Asian
        Tests_Black
        Tests_Ethnicity_Hispanic
        Tests_Ethnicity_NonHispanic
        Tests_Ethnicity_Unknown
        Tests_LatinX
        Tests_Multiracial
        Tests_NHPI
        Tests_Other
        Tests_Total
        Tests_Unknown
        Tests_White
      }
    }
  }
`
