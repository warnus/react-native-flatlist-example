import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class NewsListItem extends React.Component {
    render () {
        const item = this.props.item
        return (
            <View style={styles.item}>
                <Text
                    style={styles.itemTitle}
                    numberOfLines={3}
                    ellipsizeMode={'tail'}
                >
                    { item.title }
                </Text>
                <Text
                    style={styles.itemCreator}
                    numberOfLines={2}
                    ellipsizeMode={'tail'}
                >
                    { item.creator.toString() }
                </Text>
                <Text style={styles.itemDate}>{ item.pubDate.toString() }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    itemTitle: {
        fontSize: 14,
        lineHeight: 14 * 1.6,
        fontWeight: 'bold'
    },
    itemCreator: {
        marginTop: 8,
        fontSize: 13,
        lineHeight: 13 * 1.6,
        color: '#666'
    },
    itemDate: {
        marginTop: 8,
        fontSize: 13,
        color: '#c00'
    }
})
