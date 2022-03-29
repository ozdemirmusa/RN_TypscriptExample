import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export type Props = {
  count?: number;
};

const Calculate: React.FC<Props> = ({count = 0}) => {
  const [countter, setCountter] = React.useState(count);

  const onIncrement = () => setCountter(countter + 1);
  const onDecrement = () => setCountter(countter > 0 ? countter - 1 : 0);

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? numChars + 1 : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{getExclamationMarks(countter)}</Text>
      <View style={{flexDirection: 'row'}}>
        <Button
          title="+"
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="blue"
        />
        <Button
          title="-"
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="red"
        />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Calculate />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 60,
    fontWeight: 'bold',
    margin: 40,
  },
});

export default App;
