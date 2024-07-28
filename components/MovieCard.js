import React from 'react'
import {
    SafeAreaView,
  } from 'react-native';


const MovieCard = () => {
  return (
    <SafeAreaView>
    <Card title="Eddard Stark" text="Winter is Coming.." />
   <Card title="Arif Işık" text="Evet tarafından" />
   <Card title="Serbest" text="İlhami abi sen söyle, ben başka bir ilde miyim?" />
   <Card title="Doğu" text="Neler yaa, neler " />
   <Card title="Iron Man" text="I am Iron Man" /> 
 </SafeAreaView>
  )
}

export default MovieCard