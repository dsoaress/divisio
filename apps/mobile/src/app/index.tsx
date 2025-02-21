import { Text, View } from 'react-native'

export default function Index(): React.JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>Olá mundo, isso é um teste!</Text>
    </View>
  )
}
