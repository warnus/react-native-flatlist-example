import React from 'react'
import { Text, View, FlatList } from 'react-native'
import NewsListItem from './NewsListItem'

export default class NewsList extends React.Component {
    state = {
        items: []
    }

    async componentDidMount () {
        const feed = await this.props.fetchEntry()
        const items = feed.item
        console.log(items)
        this.setState({ items })
    }

    _keyExtractor = (item, index) => item.link

    _renderItem = ({ item }) => (
        <NewsListItem item={item} />
    )

    render () {
        return (
            <FlatList
                data={this.state.items}
                extraData={this.state.items}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    }
}
