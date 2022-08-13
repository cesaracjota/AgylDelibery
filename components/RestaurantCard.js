import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
    onPress={() =>{
      navigation.navigate('Restaurant', {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      });
    }}
    className='bg-white mr-3 shadow-xs rounded-lg'>

      <Image
        source={{
          uri: imgUrl,
        }}
        className='h-36 w-64 rounded-lg'
      />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
          <StarIcon color='indigo' opacity={0.5} size={22} />
          <Text className='text-xs text-gray-500'>
            <Text className='text-indigo-600'>{rating}</Text> · {genre}
          </Text>
        </View>

        <View className='flex-row items-center space-x-1'>
          <LocationMarkerIcon color='gray' opacity={0.4} size={22} />
          <Text className='text-xs text-gray-500'>Arequipa · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard;