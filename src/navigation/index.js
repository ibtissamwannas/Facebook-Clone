import { NavigationContainer } from "@react-navigation/native";
import FeedScreen from "../screens/FeedScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import ProfileScreen from "../screens/ProfileScreen";
import UpdateProfileScreen from "../screens/EditProfileScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Create Post" component={CreatePostScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Update Profile" component={UpdateProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;