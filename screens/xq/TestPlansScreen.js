import { View, StyleSheet } from 'react-native';
import List from '../../components/List';
import CustomColors from '../../constants/colors';
import EntityItem from '../../components/EntityItem';
import { useSelector } from 'react-redux';

/**
 * Render handler for the test requirements list
 * @param itemData which should contain the id and description fields
 * @returns {JSX.Element}
 */
const renderTestRequirementsHandler = (itemData) => (
  <EntityItem
    index={itemData.item.id}
    data={itemData.item.description}
    onDelete={() => {}}
  />
);

export default function TestPlansScreen() {
  const requirements = useSelector((state => state.requirementsReducer.requirements));
  return (
    <View style={styles.root}>
      <List
        input={requirements}
        renderHandler={renderTestRequirementsHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  footer: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    color: CustomColors.textTitle,
    borderColor: CustomColors.borderTitle,
    borderTopWidth: 0.5,
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    fontStyle: 'normal',
  },
});
