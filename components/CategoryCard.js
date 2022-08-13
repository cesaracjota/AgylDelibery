import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="relative mr-2 rounded-lg overflow-hidden bg-indigo-900">
            <Image
                source={{
                    uri: imgUrl,
                }}
                className="w-24 h-24 opacity-30"
            />
            <Text className="absolute bottom-2 left-2 text-white font-bold">
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CategoryCard