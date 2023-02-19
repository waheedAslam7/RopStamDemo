import {StyleSheet} from 'react-native';
import lightTheme from './Theme';
import { height,width } from './Layouts';

export const style = StyleSheet.create({
 safeArea_Container: {flex: 1, backgroundColor: lightTheme.themeColor},
 Container: {flex: 1, backgroundColor: lightTheme.themeColor,height:height,width:width},

});
