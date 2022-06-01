import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
  country: string,
  setCountry: any,
}

const InputForm: React.FC<Props> = ({ country, setCountry }) => {

  const handleChange = (text: string) => {
    setCountry(text)
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Country name" onChangeText={handleChange} />
      <Pressable
        style={{
          ...styles.buttonWrapper,
          backgroundColor: country === "" ? "#808080" : "#276fe3"
        }}
        onPress={() => console.log("works")}
        disabled={country === "" ? true : false}
      >
        <Text style={{ color: country === "" ? "#d3d3d3" : "#FFFFFF" }}>
          SEARCH
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3FCF9",
    alignItems: "center",
    paddingVertical: 100,
    paddingHorizontal: 50,
  },
  input: {
    padding: 5,
    marginHorizontal: 10,
    width: 180,
    borderBottomWidth: 1,
    borderColor: "#66686b",
  },
  buttonWrapper: {
    width: 100,
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 2.5,
    marginTop: 30,
  },
});

export default InputForm