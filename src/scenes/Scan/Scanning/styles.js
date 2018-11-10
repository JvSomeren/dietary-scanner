import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  flipButton: {
    flex: 0.15,
    height: 40,
    marginHorizontal: 2,
    marginTop: 20,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flipText: {
    color: 'white',
    fontSize: 15
  },
  buttonsAlignment: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  outlineOuter: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignSelf: 'stretch'
  },
  containerInner: {
    flex: 2,
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    flexDirection: 'column'
  },
  outlineInner: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  scanInner: {
    flex: 6,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  scanLine: {
    backgroundColor: 'red',
    height: 1
  }
});

export default styles;