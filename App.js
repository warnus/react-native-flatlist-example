import React from 'react'
import NewsList from './NewsList'
import { View } from 'react-native'
import { fetchHotEntry } from './FetchRSS'

export default class App extends React.Component {
  render() {
    return (
        <View style={{marginTop: 20}}>
          <NewsList fetchEntry={fetchHotEntry} />
        </View>
    )
  }
}
