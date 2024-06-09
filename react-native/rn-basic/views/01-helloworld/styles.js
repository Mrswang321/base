import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  scrollView: {
    width: '100%',
    height: 200
  },

  contentView: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentText: {
    lineHeight: 400
  },

  contentImage: {
    width: 200,
    height: 200
  },

  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})

export default styles